[//]: # (Your Zerops recipe {{ .Recipe.Name }} is live! What next?)

**Laravel Jetstream local environment** ([recipe source](https://github.com/zeropsio/recipe-laravel-jetstream)) was successfully deployed to Zerops. You can check the [live application here]({{ .Services.app.SubdomainUrl }}) and see the project detail in the [Zerops dashboard](https://app.zerops.io/project/{{ .ProjectId }}).

The app has been set up to utilize Valkey (Redis-compatible KV store) to handle sessions and cache, with the filesystem of both Laravel and Jetstream-specific parts configured to utilize Zerops' built-in object storage. For the development environment specifically, the setup includes Mailpit, which is a "fake SMTP" server for dev purposes. The build and deploy process ([zerops.yml](https://github.com/zeropsio/recipe-laravel-jetstream/blob/main/zerops.yml)) has been set up to properly migrate the database on each deploy, cleanup/cache files, and implement health and readiness checks.

This recipe showcases a production-ready integration of Jetstream apps to Zerops. The fact this environment is "local" comes just from its minimal, cost-efficient resource allocation and [Lightweight](https://docs.zerops.io/features/pricing#understanding-projects) project core package used. 

You would use the same setup for development environment or a small production environment, what makes this environment "local" is the fact that you'd only turn on the services that you'd utilize for your local development and have them running only when you are actively working. 
<br/><br/>

### Test how VPN built into Zerops CLI can help you with local development
1. Create your own repository from our [GitHub template](https://github.com/zeropsio/recipe-laravel-jetstream) and clone it locally
2. Install [zcli](https://docs.zerops.io/references/cli#get-started), create a new [personal access token](https://app.zerops.io/settings/token-management)
3. Enter `zcli vpn up {{ .ProjectId }}` to your terminal (this will require [Wireguard installed](https://docs.zerops.io/references/vpn) on your machine)
4. Create `.env` from `.env.example` and fill in database access details from [`db` service detail](https://app.zerops.io/service-stack/{{ .Services.db.id }}/access-details)
5. Start the development server with `php artisan serve`, or use your preferred setup (Valet, Herd, Sail) - your application will utilize database, redis and storage from Zerops
<br/><br/>

### Try the build & deploy pipeline
Since you are already logged into zcli you can simply enter `zcli push` to your terminal in the root of the freshly cloned project.

To setup automatic CI/CD, navigate to [Pipelines & CI/CD settings](https://app.zerops.io/service-stack/{{ .Services.app.id }}/deploy) and connect the service with your new GitHub repository, setting the trigger to **Push to Branch**

**Now test the deployment pipeline:**
- Make a small change directly in the GitHub UI
- Commit the change and watch the magic happen in [project detail](https://app.zerops.io/project/{{ .ProjectId }})

<br/>

### Want to integrate Zerops with your existing Jetstream app?
See the list of [changes made over the default installation](https://github.com/zeropsio/recipe-laravel-jetstream/blob/main/README.md#changes-made-over-the-default-installation) to replicate the steps and copy the configs to your own application.
<br/><br/>

### Want to Dive Deeper?
For a complete step-by-step guide starting from a fresh Laravel installation to production deployment, check out our [detailed Laravel tutorial](https://docs.zerops.io/frameworks/laravel/introduction).

### Explore More Setups
Visit [laravel.zerops.io](https://laravel.zerops.io) to explore and instantly deploy other pre-configured Laravel environments - from Local to Development and Large-scale Production setups.

### Need Help?
You'll find our entire dev team on [Zerops Discord server](https://discord.gg/zeropsio), join for help from both us and the community. Alternatively email us at support@zerops.io. See **[Zerops Laravel documentation](https://docs.zerops.io/frameworks/laravel)** for general tips about running Laravel apps on Zerops.