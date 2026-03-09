[//]: # (Your Zerops Recipe '{{ .Recipe.Name }}' is ready! 🚀)

# Your recipe **{{ .Recipe.Name }}** is live! 🚀

Hey {{ .User.FirstName }},

your Zerops recipe has been successfully deployed and all services are up and running. Here's what was set up for you.

## Deployed services

{{- range .Services }}
- **{{ .Hostname }}** (`{{ .Type }}`){{ if .SubdomainUrl }} — [Open app]({{ .SubdomainUrl }}){{ end }}
{{- end }}

---

## What's next?

Your project is ready — choose the path that fits you best:

### 🔧 Connect your own code

Push your app to the recipe's services and make it truly yours.

1. Review the [build & deploy pipeline]({{ .ZeropsAppUrl }}/project/{{ .ProjectId }}/service-stacks) in your project
2. Connect a Git repository or use [Zerops CLI (`zsc`)](https://docs.zerops.io/references/cli) to deploy manually
3. Set any custom [environment variables]({{ .ZeropsAppUrl }}/project/{{ .ProjectId }}/env-variables) your app needs

[Go to project dashboard →]({{ .ZeropsAppUrl }}/project/{{ .ProjectId }})

### 📖 Explore & learn

Not ready to connect your code yet? Poke around the running recipe first.

{{ if .Services.app.SubdomainUrl -}}
- [Open the running app]({{ .Services.app.SubdomainUrl }}) and see what the recipe does out of the box
{{ end -}}
- Read the [recipe source](https://github.com/{{ .Recipe.Source }}) to understand the stack
- Check the [Zerops documentation](https://docs.zerops.io) for guides on scaling, logging, and more

---

## Need help?

- [Zerops documentation](https://docs.zerops.io)
- [Discord community](https://discord.gg/zerops)
- [GitHub Discussions](https://github.com/zeropsio/zerops/discussions)

Happy building,
**The Zerops team**
