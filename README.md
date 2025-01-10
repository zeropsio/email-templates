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

Included S3 bucket is **{{ .services.storage.env.bucketName }}** with capacity {{ .services.storage.env.quotaGBytes }}GB.

## All available services:

{{- range .services }}
- {{ .name }} 
{{- end }}

...
```

### Available Template Variables

| Key                       | Description | Example     |
|---------------------------|-------------|-------------|
| .user.firstName           |             | Adam        | 
| .services.<hostname>.name |             | adminer     |
| .account.name             |             | Company 123 |

[comment]: <> (TODO: Fill this table.)
