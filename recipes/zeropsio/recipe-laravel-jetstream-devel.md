[//]: # (Your Zerops recipe {{ .Recipe.Name }} is live! What next?)

**Laravel Jetstream development environment** ([recipe source](https://github.com/zeropsio/recipe-laravel-jetstream)) was successfully deployed to Zerops. You can check the (live application here)[{{ .Services.app.SubdomainUrl }}] and see the project detail in (Zerops dashboard here)[https://app.zerops.io/project/{{ .ProjectId }}].

The app has been set up to utilize Valkey (Redis-compatible KV store) to handle sessions and cache, with filesystem of both Laravel and Jetstream specific parts set up to utilize Zerops' built in object storage. Specifically for development environment the setup includes Mailpit, which is a "fake SMTP" server for dev purposes. Built and deploy process (zerops.yml) has been set up to properly migrate database on each deploy, cleanup/cache files and implement health and readiness check. 

This recipe showcases a production-ready integration of Jetstream apps to Zerops, and only the amount of allocated resources (set to minimum) make this environemnt "development".
<br/><br/>

## Try the build & deploy pipeline with two quick steps
While Zerops supports various CI/CD workflows, let's start with the simplest path to get you familiar with the core concepts:

1. Create your own repository from our (GitHub template)[https://github.com/zeropsio/recipe-laravel-jetstream]
2. Navigate to (Pipelines & CI/CD settings)[https://app.zerops.io/service-stack/{{ .Services.app.id }}/deploy] and connect the service with your new GitHub repository, setting the trigger to **Push to Branch**

**Now test the deployment pipeline:**
- Make a small change directly in the GitHub/GitLab UI
- Commit the change and watch the magic happen in (project detail)[https://app.zerops.io/project/{{ .ProjectId }}] 

<br/>

## Want to integrate Zerops with your existing Jetstream app?
See the list of [changes made over the default installation](https://github.com/zeropsio/recipe-laravel-jetstream/blob/main/README.md#changes-made-over-the-default-installation) to replicate the steps and copy the configs to your own application.
<br/><br/>

## Need Help?
You'll find our entire dev team on [Zerops Discord server](https://discord.gg/zeropsio), join for help from both us and the community. Alternativelly email us at support@zerops.io. See **[Zerops Laravel documentation](https://docs.zerops.io/frameworks/laravel)** for general tips about running Laravel apps on Zerops.