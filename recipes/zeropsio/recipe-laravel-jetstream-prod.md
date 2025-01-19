[//]: # (Your Zerops recipe {{ .Recipe.Name }} is live! What next?)

**Laravel Jetstream production environment** ([recipe source](https://github.com/zeropsio/recipe-laravel-jetstream)) was successfully deployed to Zerops. You can check the [live application here]({{ .Services.app.SubdomainUrl }}) and see the project detail in the [Zerops dashboard](https://app.zerops.io/project/{{ .ProjectId }}).

The app has been set up to utilize Valkey (Redis-compatible KV store) to handle sessions and cache, with the filesystem of both Laravel and Jetstream-specific parts configured to utilize Zerops' built-in object storage. The build and deploy process ([zerops.yml](https://github.com/zeropsio/recipe-laravel-jetstream/blob/main/zerops.yml)) has been set up to properly migrate the database on each deploy, cleanup/cache files, and implement health and readiness checks.

This recipe showcases a production-ready integration of Jetstream apps to Zerops. The fact this environment is "development" comes just from its minimal, cost-efficient resource allocation and [Lightweight](https://docs.zerops.io/features/pricing#understanding-projects) project core package used.
<br/><br/>

### Try the build & deploy pipeline with two quick steps
While Zerops supports various CI/CD workflows, let's start with the simplest path to get you familiar with the core concepts:

1. Create your own repository from our [GitHub template](https://github.com/zeropsio/recipe-laravel-jetstream)
2. Navigate to [Pipelines & CI/CD settings](https://app.zerops.io/service-stack/{{ .Services.app.id }}/deploy) and connect the service with your new GitHub repository, setting the trigger to **Push to Branch**

**Now test the deployment pipeline:**
- Make a small change directly in the GitHub UI
- Commit the change and watch the magic happen in [project detail](https://app.zerops.io/project/{{ .ProjectId }})

<br/>

### Want to integrate Zerops with your existing Jetstream app?
See the list of [changes made over the default installation](https://github.com/zeropsio/recipe-laravel-jetstream/blob/main/README.md#changes-made-over-the-default-installation) to replicate the steps and copy the configs to your own application.
<br /><br />
### Understand Zerops Core Concepts
For a complete step-by-step guide demonstrating how to use Zerops effectively with Laravel, check out our [detailed Laravel tutorial](https://docs.zerops.io/frameworks/laravel/introduction).
<br /><br />
### Explore Development Setup
Check out our [Development setup](https://app.zerops.io/recipe/laravel-jetstream-devel) - it shows how the same application can be deployed with lower resource requirements by running all services in Non-HA mode, plus includes Mail service for email testing. This Non-HA version is perfectly suitable for development, testing, or less demanding websites and applications.
<br /><br />
### Need Help?
You'll find our entire dev team on [Zerops Discord server](https://discord.gg/zeropsio), join for help from both us and the community. Alternatively email us at support@zerops.io.