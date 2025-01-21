[//]: # (Your Zerops recipe {{ .Recipe.Name }} is live! What next?)

**Filament local environment** ([recipe source](https://github.com/zeropsio/recipe-filament)) was successfully deployed to Zerops. You can check the [live application here]({{ .Services.app.SubdomainUrl }}) and see the project detail in the [Zerops dashboard]({{ .ZeropsAppUrl }}/project/{{ .ProjectId }}).

The app has been set up to utilize Valkey (Redis-compatible KV store) to handle sessions and cache, with the filesystem of both Laravel and Filament-specific parts configured to utilize Zerops' built-in object storage. For the development environment specifically, the setup includes Mailpit, which is a "fake SMTP" server for dev purposes. The build and deploy process ([zerops.yml](https://github.com/zeropsio/recipe-filament/blob/main/zerops.yml)) has been set up to properly migrate the database on each deploy, cleanup/cache files, and implement health and readiness checks.

This recipe showcases a production-ready integration of Filament with Zerops. The fact this environment is for **local development** comes just from its minimal, cost-efficient resource allocation, selection of the [Lightweight](https://docs.zerops.io/features/pricing#understanding-projects) core package and the fact you'd only start the services when you are actively working on the project. If you want to try the "production" environment setup with HA services and enterprise grade reliability deploy — [production environment recipe]({{ .ZeropsAppUrl }}/recipe/filament-prod)

<br/><br/>

### Test how VPN built into Zerops CLI can help you with local development
1. Create your own repository from our [GitHub template](https://github.com/zeropsio/recipe-filament) and clone it locally
2. Install [zcli](https://docs.zerops.io/references/cli#get-started), create a new [personal access token]({{ .ZeropsAppUrl }}/settings/token-management)
3. Enter `zcli vpn up {{ .ProjectId }}` to your terminal (this will require [Wireguard installed](https://docs.zerops.io/references/vpn) on your machine)
4. Create `.env` from `.env.example` and fill in database access details from [`db` service detail]({{ .ZeropsAppUrl }}/service-stack/{{ .Services.db.id }}/access-details)
5. Run `composer install && php artisan key:generate && npm install && npm run dev`
6. Start the development server with `php artisan serve`, or use your preferred setup (Valet, Herd, Sail) - your application will utilize database, redis and storage from Zerops
<br/><br/>

### Try the build & deploy pipeline
Since you are already logged into zcli you can simply enter `zcli push` to your terminal in the root of the freshly cloned project.

To setup the built-in automatic CI/CD, navigate to [Pipelines & CI/CD settings]({{ .ZeropsAppUrl }}/service-stack/{{ .Services.app.Id }}/deploy) and connect the service with your new GitHub repository, setting the trigger to **Push to Branch**

**Now test the deployment pipeline:**

- Make a small change directly in the GitHub UI
- Commit the change and watch the magic happen in [project detail]({{ .ZeropsAppUrl }}/project/{{ .ProjectId }})

<br/>

### Want to integrate Zerops with your existing Jetstream app?
See the list of [changes made over the default installation](https://github.com/zeropsio/recipe-filament/blob/main/README.md#changes-made-over-the-default-installation) to replicate the steps and copy the configs to your own application.
<br /><br />

### Get to know Zerops core concepts in depth
If you want to try integrating Zerops from scratch on a new Laravel project, check our [step-by-step tutorial](https://docs.zerops.io/frameworks/laravel/introduction) which demonstrates how to use Zerops effectively with Laravel.
<br /><br />

### Need Help?
You'll find our entire dev team on [Zerops Discord server](https://discord.gg/zeropsio), join for help from both us and the community. Alternatively email us at support@zerops.io.