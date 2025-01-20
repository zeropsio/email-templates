[//]: # (Your Zerops recipe {{ .Recipe.Name }} is live! What next?)

**Laravel Jetstream development environment** ([recipe source](https://github.com/zeropsio/recipe-laravel-jetstream)) was successfully deployed to Zerops. You can check the [live application here]({{ .Services.app.SubdomainUrl }}) and see the project detail in the [Zerops dashboard]({{ .ZeropsAppUrl }}/project/{{ .ProjectId }}).

The app has been set up to utilize Valkey (Redis-compatible KV store) to handle sessions and cache, with the filesystem of both Laravel and Jetstream-specific parts configured to utilize Zerops' built-in object storage. For the development environment specifically, the setup includes Mailpit, which is a "fake SMTP" server for dev purposes. The build and deploy process ([zerops.yml](https://github.com/zeropsio/recipe-laravel-jetstream/blob/main/zerops.yml)) has been set up to properly migrate the database on each deploy, cleanup/cache files, and implement health and readiness checks.

This recipe showcases a production-ready integration of Jetstream apps to Zerops. The fact this environment is "development" comes just from its minimal, cost-efficient resource allocation and selection of the [Lightweight](https://docs.zerops.io/features/pricing#understanding-projects) core package. If you want to try the "production" environment setup with HA services and enterprise grade reliability see — [production environment recipe]({{ .ZeropsAppUrl }}/recipe/laravel-jetstream-prod)
<br/><br/>

### Try the build & deploy pipeline in 30 seconds
While Zerops supports various CI/CD workflows (CLI, GitHub Actions, built-in CI/CD), let's start with the simplest path to get you familiar with the core concepts:

1. Create your own repository from our [GitHub template for Laravel Jetstream](https://github.com/zeropsio/recipe-laravel-jetstream)
2. Navigate to [Pipelines & CI/CD settings]({{ .ZeropsAppUrl }}/service-stack/{{ .Services.app.Id }}/deploy) and connect the service with your new GitHub repository, setting the trigger to **Push to Branch**

**Now test the deployment pipeline:**

- Make a small change directly in the GitHub UI
- Commit the change and watch the magic happen in [project detail]({{ .ZeropsAppUrl }}/project/{{ .ProjectId }})

<br/>

### Want to integrate Zerops with your existing Jetstream app?
See the list of [changes made over the default installation](https://github.com/zeropsio/recipe-laravel-jetstream/blob/main/README.md#changes-made-over-the-default-installation) to replicate the steps and copy the configs to your own application.
<br /><br />

### Understand Zerops Core Concepts
If you want to try integrating Zerops from scratch on a new Laravel project, check our [step-by-step tutorial](https://docs.zerops.io/frameworks/laravel/introduction) which demonstrates how to use Zerops effectively with Laravel.
<br /><br />

### Need Help?
You'll find our entire dev team on [Zerops Discord server](https://discord.gg/zeropsio), join for help from both us and the community. Alternatively email us at support@zerops.io.