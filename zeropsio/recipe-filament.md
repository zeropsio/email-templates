# Hello {{ .User.FirstName }},

recipe **{{ .Recipe.Name }}** is live!

> See it live at {{ .Services.app.SubdomainUrl }}

## Services
{{ range .Services }}
- {{ .Hostname }}
    - {{ .GitSource }}
    - {{ .SubdomainUrl }}
    - environment:
    {{- range $key, $val := .Env }}
        - {{ $key }}: {{ $val }}
    {{- end }}
{{ end }}