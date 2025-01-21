[//]: # (Your Zerops recipe {{ .Recipe.Name }} is live! What next?)

**Laravel minimal development environment** ([recipe source](https://github.com/zeropsio/recipe-laravel-minimal)) was successfully deployed to Zerops. You can check the [live application here]({{ .Services.app.SubdomainUrl }}) and see the project detail in the [Zerops dashboard]({{ .ZeropsAppUrl }}/project/{{ .ProjectId }}).

The app has been set up to utilize PostgreSQL service. The build and deploy process ([zerops.yml](https://github.com/zeropsio/recipe-laravel-minimal/blob/main/zerops.yml)) has been set up to properly migrate the database on each deploy, cleanup/cache files, and implement health and readiness checks.

This recipe showcases a production-ready integration of basic Laravel apps to Zerops. The fact this environment is called **development** comes just from its minimal, cost-efficient resource allocation, selection of the [Lightweight](https://docs.zerops.io/features/pricing#understanding-projects) core package. If you want to try the "production" environment setup with HA services and enterprise grade reliability deploy — [production environment recipe]({{ .ZeropsAppUrl }}/recipe/laravel-minimal-prod)

If you are looking for more advanced examples, take a loot at other recipes in [Zerops Laravel docs](https://docs.zerops.io/frameworks/laravel#quick-start).
<br/><br/>

### Try the build & deploy pipeline in 30 seconds
While Zerops supports various CI/CD workflows (CLI, GitHub Actions, built-in CI/CD), let's start with the simplest path to get you familiar with the core concepts:

1. Create your own repository from our [GitHub template for Laravel minimal](https://github.com/zeropsio/recipe-laravel-minimal)
2. Navigate to [Pipelines & CI/CD settings]({{ .ZeropsAppUrl }}/service-stack/{{ .Services.app.Id }}/deploy) and connect the service with your new GitHub repository, setting the trigger to **Push to Branch**

**Now test the deployment pipeline:**

- Make a small change directly in the GitHub UI
- Commit the change and watch the magic happen in [project detail]({{ .ZeropsAppUrl }}/project/{{ .ProjectId }})

<br/>

### Want to integrate Zerops with your existing Laravel app?
See the list of [changes made over the default installation](https://github.com/zeropsio/recipe-laravel-minimal/blob/main/README.md#changes-made-over-the-default-installation) to replicate the steps and copy the configs to your own application.
<br /><br />

### Get to know Zerops core concepts in depth
If you want to try integrating Zerops from scratch on a new Laravel project, check our [step-by-step tutorial](https://docs.zerops.io/frameworks/laravel/introduction) which demonstrates how to use Zerops effectively with Laravel.
<br /><br />

### Need Help?
You'll find our entire dev team on [Zerops Discord server](https://discord.gg/zeropsio), join for help from both us and the community. Alternatively email us at support@zerops.io.