[//]: # (Your Zerops recipe {{ .Recipe.Name }} is live! What next?)

Example of Laravel Jetstream development environment was successfully deployed to Zerops. You can check the (live application here)[{{ .Services.app.SubdomainUrl }}] and see the project detail in (Zerops dashboard here)[https://app.zerops.io/project/{{ .ProjectId }}].

## What next?
- explore the YAML structure this project was imported from to see how easy it is to setup templates
- take a look at `zerops.yml` build & deploy definition to find 
- 




## Recipe Details
The recipe was generated based on the repository at [RECIPE_REPO_URL](RECIPE_REPO_URL). Take a look at the `zerops.yml` file - it contains all the essential configurations for this application. You might also want to check out the project definition files for both [development](RECIPE_REPO_URL/blob/main/zerops-project-import.yml) and [production](RECIPE_REPO_URL/blob/main/zerops-project-production-import.yml) environments.

## Quick Start Guide
While Zerops supports various CI/CD workflows, let's start with the simplest path to get you familiar with the core concepts:

1. Fork the (repository)[RECIPE_REPO_URL] (feel free to rename it as needed)
2. Navigate to [Pipelines & CI/CD settings](RECIPE_ZEROPS_APP_DEPLOY) in your [app](RECIPE_ZEROPS_APP) service
3. Connect your GitHub/GitLab repository and set "Trigger pipeline on" to "Push to Branch"
4. Test the deployment pipeline:
  - Make a small change directly in the GitHub/GitLab UI
  - Commit the change and watch the magic happen at [Zerops](RECIPE_ZEROPS_APP)
  - For local development, clone the repo and test the push trigger

## Next Steps
Ready to dive deeper? Consider:
- Creating a new project with your favorite framework using our GUI
- Exploring the recipe repository for implementation details. You can find more recipes at https://app.zerops.io/dashboard/recipes or in our public [GitHub repos](https://github.com/zeropsio)
- Checking out our [documentation](https://docs.zerops.io/) for advanced features

## Need Help?
We've got your back! Reach out to us on:
- Discord: [Join our community](https://discord.com/invite/WDvCZ54)
- Email: [Contact support](support@zerops.io)

Happy coding! 🚀

Best regards,
The Zerops Team



Hey there

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