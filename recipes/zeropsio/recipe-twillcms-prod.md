[//]: # (Your Zerops recipe {{ .Recipe.Name }} is live! What next?)

**Twill CMS production environment** ([recipe source](https://github.com/zeropsio/recipe-twill)) was successfully deployed to Zerops. You can check the [live application here]({{ .Services.app.SubdomainUrl }}) and see the project detail in the [Zerops dashboard](https://app.zerops.io/project/{{ .ProjectId }}).

The app has been set up to utilize Valkey (Redis-compatible KV store) to handle sessions and cache, with the filesystem of both Laravel and Twill-specific parts configured to utilize Zerops' built-in object storage. The build and deploy process ([zerops.yml](https://github.com/zeropsio/recipe-twill/blob/main/zerops.yml)) has been set up to properly migrate the database on each deploy, cleanup/cache files, and implement health and readiness checks.

This recipe showcases a production-ready integration of Twill apps to Zerops, with all services set to high availability and [Serious](https://docs.zerops.io/features/pricing#understanding-projects)  core package used for enterprise grade reliability. If you want to try more cost-efficient environment see — [development / small production environment recipe](https://app.zerops.io/recipe/twillcms-devel)

<br/><br/>

### Try the build & deploy pipeline in 30 seconds
While Zerops supports various CI/CD workflows (CLI, GitHub Actions, built-in CI/CD), let's start with the simplest path to get you familiar with the core concepts:

1. Create your own repository from our [GitHub template for Twill](https://github.com/zeropsio/recipe-twill)
2. Navigate to [Pipelines & CI/CD settings](https://app.zerops.io/service-stack/{{ .Services.app.Id }}/deploy) and connect the service with your new GitHub repository, setting the trigger to **Push to Branch**

**Now test the deployment pipeline:**
- Make a small change directly in the GitHub UI
- Commit the change and watch the magic happen in [project detail](https://app.zerops.io/project/{{ .ProjectId }})

<br/>

### Want to integrate Zerops with your existing Twill app?
See the list of [changes made over the default installation](https://github.com/zeropsio/recipe-twill/blob/main/README.md#changes-made-over-the-default-installation) to replicate the steps and copy the configs to your own application.
<br /><br />

### Understand Zerops Core Concepts
If you want to try integrating Zerops from scratch on a new Laravel project, check our [step-by-step tutorial](https://docs.zerops.io/frameworks/laravel/introduction) which demonstrates how to use Zerops effectively with Laravel.
<br /><br />

### Need Help?
You'll find our entire dev team on [Zerops Discord server](https://discord.gg/zeropsio), join for help from both us and the community. Alternatively email us at support@zerops.io.