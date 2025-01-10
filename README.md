# Zerops Recipe Email Templates

## Usage

Zerops looks inside this repository for files like `<namespace>/<recipe-name>.md` when sending email about finished
recipe deployment.
The Markdown template files should be regular Markdown that will be templated
by [Go's templating engine](https://pkg.go.dev/text/template).

### Example

To send email on https://github.com/zeropsio/recipe-laravel-jetstream deployment, create file in directory `zeropsio`
named `recipe-laravel-jetstream.md`.
Example content may be:

```markdown
# Recipe {{ .recipe.name }} is live! 🚀

Hey there, {{ .user.firstName }},

your app {{ .services.app.name }} is running on [Zerops subdomain]({{ .services.app.subdomainUrl }}).

Included S3 bucket is **{{ .services.storage.env.bucketName }}** with capacity {{ .services.storage.env.quotaGBytes
}}GB.

## All available services:

{{- range .services }}

- {{ .name }}
  {{- end }}

...
```

### Available Template Variables

## Base Variables

| Variable        | Description                             | Example                  |
|-----------------|-----------------------------------------|--------------------------|
| `.zeropsAppUrl` | Base URL of the Zerops application      | `https://app.zerops.io`  |
| `.projectId`    | Project UUID (useful for building URLs) | `nLDPSPipR42pJVkL3K2a9g` |

## Account Information

| Variable        | Description                                    | Example                  |
|-----------------|------------------------------------------------|--------------------------|
| `.account.id`   | Organization's UUID (useful for building URLs) | `nLDPSPipR42pJVkL3K2a9g` |
| `.account.name` | Organization's display name                    | `Acme Corp`              |

## User Information

| Variable          | Description                                    | Example                  |
|-------------------|------------------------------------------------|--------------------------|
| `.user.id`        | Emailed user's UUID (useful for building URLs) | `nLDPSPipR42pJVkL3K2a9g` |
| `.user.firstName` | Emailed user's first name                      | `Bob`                    |
| `.user.email`     | Emailed user's email address                   | `bob@example.com`        |

## Recipe Information

| Variable         | Description                              | Example                               |
|------------------|------------------------------------------|---------------------------------------|
| `.recipe.source` | Source location of the recipe            | `github/zerops-templates/nodejs`      |
| `.recipe.name`   | Name of the recipe being used            | `Node.js Basic Setup`                 |
| `.recipe.tags`   | Array of tags associated with the recipe | `["nodejs", "express", "production"]` |

## Service Information

| Variable                        | Description                                                                                 | Example                                             |
|---------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------|
| `.services.{name}.id`           | Service UUID (useful for building URLs)                                                     | `nLDPSPipR42pJVkL3K2a9g`                            |
| `.services.{name}.pipelineId`   | Optional pipeline (appVersion) UUID (useful for building URLs)                              | `nLDPSPipR42pJVkL3K2a9g`                            |
| `.services.{name}.hostname`     | Hostname of the service                                                                     | `app`                                               |
| `.services.{name}.type`         | Service type                                                                                | `nodejs@18`                                         |
| `.services.{name}.env.{key}`    | Service's environment variable value, secret and internal environment variables are omitted | For `.services.app.env.bucketName`: `4g5it-storage` |
| `.services.{name}.gitSource`    | Optional git repository build source URL                                                    | `https://github.com/org/repo`                       |
| `.services.{name}.subdomainUrl` | Optional public subdomain URL                                                               | `https://myapp.zerops.io`                           |

## Go template 101

- `{{ if .services.app.gitSource }}Has git source!{{ else }}No git source :/{{ end }}` -> if, else
- `{{ range .services }}{{ .subdomainUrl }}{{ end }}` -> loop over all services, access via `.{serviceField}`
- `{{ index .recipe.tags 2 }}` -> prints second tag, if available, otherwise fails
