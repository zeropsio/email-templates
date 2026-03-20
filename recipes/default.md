[//]: # (Your Zerops Recipe '{{ .Recipe.Name }}' is live! 🚀)

# Your recipe **{{ .Recipe.Name }}** is live! 🚀

Hey {{ .User.FirstName }},

your Zerops recipe has been successfully deployed and all services are up and running.

## Deployed services

{{- range .Services }}
- **{{ .Hostname }}** (`{{ .Type }}`){{ if .SubdomainUrl }} — [Open app]({{ .SubdomainUrl }}){{ end }}
{{- end }}

---

## What's next?

Head to the recipe detail to choose your path — whether you want to use the recipe as a starting template or integrate it with your existing app, the next steps are waiting for you there.

[**View next steps →**]({{ .ZeropsAppUrl }}/recipes/{{ .Recipe.SourceUrl }}#next-steps)

---

Happy building,
**The Zerops team**
