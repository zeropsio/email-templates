# Zerops Email Templates

Templates fetched at runtime by Zerops when sending users emails about their account or recipe deployments. The `main` branch is live — merging publishes.

## Template Formats

Two formats are supported. The file extension decides how the template is processed:

| Extension | Processing                                                                                                            | Use for                                                                                |
|-----------|-----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| `.html`   | [Go template](https://pkg.go.dev/text/template) only — the rendered output is sent verbatim as the email body         | Full HTML emails with `<!doctype html>`, `<head>`, `<style>`, custom layouts           |
| `.md`     | [Go template](https://pkg.go.dev/text/template), then Markdown → HTML via [gomarkdown](https://github.com/gomarkdown/markdown) | Simple text-leaning emails where you want Markdown ergonomics                  |

In both cases Go template variables like `{{ .User.FirstName }}` are expanded first; the format only affects what happens to the result afterwards.

For `.html` files, **what you put in the file is exactly what arrives in the recipient's inbox** — no wrapping, no Markdown processing, no sanitization. You own the whole document.

## Subject Line

Default subject is `Email from Zerops`. To set a custom one, put a marker on the **first line** of the template. Template variables work inside the marker.

For `.md` files, use the Markdown link-reference comment hack (renders to nothing):

```markdown
[//]: # (Your recipe {{ .Recipe.Name }} is live!)
```

For `.html` files, use a regular HTML comment (also invisible when rendered):

```html
<!-- Your recipe {{ .Recipe.Name }} is live! -->
```

Only the first line is scanned. If neither marker is on the first line, the default subject is used.

## Recipe Templates

### Usage

Zerops looks inside this repository for files at `recipes/<namespace>/<recipe-name>.<ext>` when sending the "recipe deployed" email. Resolution order — the first file that exists wins:

1. `recipes/<namespace>/<recipe-name>.html`
2. `recipes/<namespace>/<recipe-name>.md`
3. `recipes/default.html`
4. `recipes/default.md`

So if you ship both `.html` and `.md` for the same recipe, the **`.html` wins**. Delete the `.md` once you're happy with the HTML version, otherwise it just sits unused.

### Markdown Example

`recipes/zeropsio/recipe-laravel-jetstream.md`:

```markdown
[//]: # (Recipe {{ .Recipe.Name }} is live! 🚀)

# Recipe {{ .Recipe.Name }} is live! 🚀

Hey {{ .User.FirstName }},

your app {{ .Services.app.Hostname }} is running on [Zerops subdomain]({{ .Services.app.SubdomainUrl }}).

Included S3 bucket is **{{ .Services.storage.Env.bucketName }}** with capacity {{ .Services.storage.Env.quotaGBytes }}GB.

## All available services:

{{- range .Services }}
- {{ .Hostname }}
{{- end }}
```

### HTML Example

`recipes/zeropsio/recipe-laravel-jetstream.html`:

```html
<!-- Recipe {{ .Recipe.Name }} is live! 🚀 -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <title>{{ .Recipe.Name }} is live</title>
  <style>
    @media only screen and (max-width: 480px) {
      .container { width: 100% !important; padding: 20px !important; }
    }
  </style>
</head>
<body style="margin:0;background-color:#eeeeee;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <table class="container" align="center" cellpadding="0" cellspacing="0" border="0"
         style="max-width:580px;margin:0 auto;padding:40px 20px;">
    <tr>
      <td>
        <h1 style="color:#164742;">
          Recipe <span style="color:#00c7b7;">{{ .Recipe.Name }}</span> is live! 🚀
        </h1>
        <p>Hey {{ .User.FirstName }}, your services are running.</p>
        <ul>
        {{- range .Services }}
          <li>
            <strong>{{ .Hostname }}</strong> ({{ .Type }})
            {{- if .SubdomainUrl }} — <a href="{{ .SubdomainUrl }}">open</a>{{ end }}
          </li>
        {{- end }}
        </ul>
      </td>
    </tr>
  </table>
</body>
</html>
```

### HTML Email Caveats

- The body is sent with `Content-Type: text/html`. The SMTP layer does **not** wrap it — your document is the message.
- `<head>` content (incl. `<style>`, `<meta>`) is honored by clients that parse the full document — Apple Mail, Thunderbird, most native clients.
- **Gmail** strips `<head>`, hoists `<style>` blocks into the body with rewritten/prefixed class names, and sometimes drops them entirely on mobile. Don't rely on classes alone — use inline `style="..."` for anything visual you actually care about.
- **Outlook desktop** (Word renderer) ignores most modern CSS regardless of placement. Use table-based layouts, inline styles, and avoid `flex`/`grid`/`border-radius` on critical elements.
- `<style>` is still worth having for things that **cannot** be inlined — `@media` queries (responsive layout), `:hover` rules, `@font-face` — treat it as progressive enhancement.

### Available Recipe Template Variables

| Variable                        | Description                                                                                                                                     | Example                               |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| `.ZeropsAppUrl`                 | Base URL of the Zerops application                                                                                                              | `https://app.zerops.io`               |
| `.ProjectId`                    | Project UUID (useful for building URLs)                                                                                                         | `nLDPSPipR42pJVkL3K2a9g`              |
| `.Account.Id`                   | Account's UUID (useful for building URLs)                                                                                                       | `nLDPSPipR42pJVkL3K2a9g`              |
| `.Account.Name`                 | Account's display name                                                                                                                          | `Acme Corp`                           |
| `.User.Id`                      | Emailed user's UUID (useful for building URLs)                                                                                                  | `nLDPSPipR42pJVkL3K2a9g`              |
| `.User.FirstName`               | Emailed user's first name                                                                                                                       | `Bob`                                 |
| `.User.Email`                   | Emailed user's email address                                                                                                                    | `bob@example.com`                     |
| `.Recipe.Source`                | Source location of the recipe                                                                                                                   | `zerops-templates/nodejs`             |
| `.Recipe.Name`                  | Name of the recipe being used                                                                                                                   | `nodejs-devel`                        |
| `.Recipe.Tags`                  | Array of tags associated with the recipe                                                                                                        | `["nodejs", "express", "production"]` |
| `.Services.<name>.Id`           | Service UUID (useful for building URLs)                                                                                                         | `nLDPSPipR42pJVkL3K2a9g`              |
| `.Services.<name>.Hostname`     | Hostname of the service                                                                                                                         | `app`                                 |
| `.Services.<name>.Type`         | Service type                                                                                                                                    | `nodejs@18`                           |
| `.Services.<name>.Env.<key>`    | Service's environment variable value, secret and internal environment variables are omitted, access as following `.Services.app.Env.bucketName` | `4g5it-storage`                       |
| `.Services.<name>.PipelineId`   | Optional pipeline (appVersion) UUID (useful for building URLs)                                                                                  | `nLDPSPipR42pJVkL3K2a9g`              |
| `.Services.<name>.GitSource`    | Optional git repository build source URL                                                                                                        | `https://github.com/org/repo`         |
| `.Services.<name>.SubdomainUrl` | Optional public subdomain URL                                                                                                                   | `https://myapp.zerops.io`             |

## System Templates

System templates live in `templates/` and are referenced by exact filename from the Zerops code. Each has its own variables. To switch a system template from Markdown to HTML, the file extension in the consumer call site must be updated to match — there is no fallback for system templates.

- `templates/welcome.md`

  | Variable     | Description                | Example |
  |--------------|----------------------------|---------|
  | `.FirstName` | Registered user first name | `Bob`   |

- `templates/first-payment-onboarding.md`

  | Variable            | Description                  | Example |
  |---------------------|------------------------------|---------|
  | `.PromoCreditBonus` | Amount of promo credit bonus | `50`    |

- `templates/zcp-online.html`

  Sent on successful service create when the service's `recipeSource` is `zeropsio/zcp`. One email per active account member.

  | Variable               | Description                                                                  | Example                                  |
  |------------------------|------------------------------------------------------------------------------|------------------------------------------|
  | `.ZeropsAppUrl`        | Base URL of the Zerops application                                           | `https://app.zerops.io`                  |
  | `.Account.Id`          | Account's UUID (useful for building URLs)                                    | `nLDPSPipR42pJVkL3K2a9g`                 |
  | `.Account.Name`        | Account's display name                                                       | `Acme Corp`                              |
  | `.User.Id`             | Emailed user's UUID                                                          | `nLDPSPipR42pJVkL3K2a9g`                 |
  | `.User.FirstName`      | Emailed user's first name                                                    | `Bob`                                    |
  | `.User.Email`          | Emailed user's email address                                                 | `bob@example.com`                        |
  | `.Project.Id`          | Project UUID (useful for building URLs)                                      | `nLDPSPipR42pJVkL3K2a9g`                 |
  | `.Project.Name`        | Project's display name                                                       | `my-project`                             |
  | `.Service.Id`          | ZCP service UUID (useful for building URLs)                                  | `nLDPSPipR42pJVkL3K2a9g`                 |
  | `.Service.Hostname`    | ZCP service hostname                                                         | `zcp`                                    |
  | `.Service.Type`        | Service type                                                                 | `zcp@1`                                  |
  | `.Service.SubdomainUrl`| Optional public subdomain URL of the ZCP service (browser IDE entry point)   | `https://zcp-7-8080.app-tatami.zerops.dev` |

## Go Template 101

- `{{ if .Services.app.GitSource }}Has git source -> {{ .Services.app.GitSource }}!{{ else }}No git source :/{{ end }}` -> if/else, check for optional values
- `{{ range .Services }}{{ .SubdomainUrl }}{{ end }}` -> loop over all services, access via `.{serviceField}`
- `{{ index .Recipe.Tags 2 }}` -> prints second tag, if available, otherwise fails
