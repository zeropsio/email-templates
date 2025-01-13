# Zerops Email Templates

## Recipe Templates

### Usage

Zerops looks inside this repository for files like `recipes/<namespace>/<recipe-name>.md` when sending email about finished recipe deployment.
The Markdown template files should be regular Markdown that will be templated by [Go's templating engine](https://pkg.go.dev/text/template).

**Make sure to provide subject!** Default subject is `Email from Zerops`. Subject is provided via comment on the first line of the markdown template. E.g.:

```markdown
[//]: # (Everything inside these parenthesis will be sent as subject. Template variables available as usual: Hello, {{ .User.FirstName }}!)
```

### Example

To send email on https://github.com/zeropsio/recipe-laravel-jetstream deployment, create file in directory `zeropsio` named `recipe-laravel-jetstream.md`.
Example content may be:

```markdown
[//]: # (Recipe {{ .recipe.name }} is live! 🚀)

# Recipe {{ .recipe.name }} is live! 🚀

Hey there, {{ .user.firstName }},

your app {{ .services.app.name }} is running on [Zerops subdomain]({{ .services.app.subdomainUrl }}).

Included S3 bucket is **{{ .services.storage.env.bucketName }}** with capacity {{ .services.storage.env.quotaGBytes }}GB.

## All available services:

{{- range .services }}
- {{ .name }}
{{- end }}

...
```

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

## Available System Template Variables

- `welcome.md`

| Variable     | Description                | Example |
|--------------|----------------------------|---------|
| `.FirstName` | Registered user first name | `Bob`   |

- `first-payment-onboarding.md`

| Variable            | Description                  | Example |
|---------------------|------------------------------|---------|
| `.PromoCreditBonus` | Amount of promo credit bonus | `50`    |

## Go template 101

- `{{ if .Services.app.GitSource }}Has git source -> {{ .Services.app.GitSource }}!{{ else }}No git source :/{{ end }}` -> if/else, check for optional values
- `{{ range .Services }}{{ .SubdomainUrl }}{{ end }}` -> loop over all services, access via `.{serviceField}`
- `{{ index .Recipe.Tags 2 }}` -> prints second tag, if available, otherwise fails
