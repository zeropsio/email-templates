[//]: # (Your Zerops recipe {{ .Recipe.Name }} is live! What next?)

**Laravel Jetstream development environment** was successfully deployed to Zerops. You can check the (live application here)[{{ .Services.app.SubdomainUrl }}] and see the project detail in (Zerops dashboard here)[https://app.zerops.io/project/{{ .ProjectId }}].

The app has been set up to utilize Valkey (Redis-compatible KV store) to handle sessions and cache, with filesystem of both Laravel and Jetstream specific parts set up to utilize Zerops' built in object storage. Specifically for development environment the setup includes Mailpit, which is a "fake SMTP" server for dev purposes. Built and deploy process (zerops.yml) has been set up to properly migrate database on each deploy, cleanup/cache files and implement health and readiness check. 

This recipe showcases a production-ready integration of Jetstream apps to Zerops, and only the amount of allocated resources (set to minimum) make this environemnt "development".

## Try the build & deploy pipeline in two steps
While Zerops supports various CI/CD workflows, let's start with the simplest path to get you familiar with the core concepts:

1. Create your own repository from our (GitHub template)[https://github.com/zeropsio/recipe-laravel-jetstream]
2. Navigate to (Pipelines & CI/CD settings)[https://app.zerops.io/service-stack/{{ .Services.app.id }}/deploy] and connect the service with your new GitHub repository, setting the trigger to **Push to Branch**
4. Test the deployment pipeline:
  - Make a small change directly in the GitHub/GitLab UI
  - Commit the change and watch the magic happen at [Zerops](RECIPE_ZEROPS_APP)

## What next?
- explore the YAML structure this project was imported from to see how easy it is to setup templates / starters
- take a look at `zerops.yml` build & deploy definition to find 
- install zcli and try 




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