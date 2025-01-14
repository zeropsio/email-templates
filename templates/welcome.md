[//]: # (Welcome to Zerops)

Thank you for signing up to Zerops, {{ .FirstName }}!

Our entire dev team hangs out on [Zerops Discord server](https://discord.gg/zeropsio) - join us for real-time help, technical discussions, or just to chat about infrastructure, cloud and programming. We're building Zerops to be the platform we always wanted to use, bringing together the ideal mix of **developer experience**, **flexibility**, and **scalability** with a sensible **pricing model that doesn't get in the way of good development practices**, and **we'd love your input**.

### Explore Zerops through recipes (quickrun)
The fastest way to dive into Zerops is through our [one-click recipes](https://app.zerops.io/dashboard/recipes). Choose one similar to your tech stack, click deploy and within minutes you have a fully configured environment to explore.

### What makes Zerops different
- **Sophisticated Network Architecture** - Each project runs in its own isolated VXLAN network with dedicated "Zerops core" infrastructure that includes L3/L7 balancers, metrics and logs containers, making services feel like they're running right next to each other while maintaining strict isolation underneath, providing secure access from the internet and allowing for seamless observability
- **True Environment Parity** - All environments, whether it's local, dev, stage or production use the same architecture, with different resource allocation being the only difference. Create copies of production envs for your team members to utilize locally, eliminate "but it works on my machine".
- **Managed Stateful Services** - Stateful services like databases, searches, storages and queues are available in high availability, with automatic failover, backups, and optimized scaling 
- **Granular Control & Fully automatic scaling** - Scale from 0.25GB RAM and single CPU cores, pay by the minute, with resource steps that match your actual needs
- **Full System Access** - Containers built on top of [Incus](https://linuxcontainers.org/incus/) (LXD) containers with SSH access and complete Linux OS environments, giving you maximal flexibility and system debug tooling

### Technical details you'll find handy
- **[VPN Access](https://docs.zerops.io/references/vpn)** - Each project gets its own VPN for secure local development against remote services and utilization or management of stateful services
- **[Build & deploy pipeline](https://docs.zerops.io/features/pipeline)** - Flexible build & deploy pipeline running on separate build containers, configured through `zerops.yml` with build caching, env management and ability to easily modify dependencies and configure both build and runtime images
- **[SSH Access](https://docs.zerops.io/references/ssh)** - After connecting with VPN, direct root `ssh` access into any container for debugging or development available (with web terminal alternative build into GUI)

### Resources Worth Bookmarking
- **[Zerops dashboard](https://app.zerops.io/)**
- **[Documentation](https://docs.zerops.io/)**
- **[CLI Reference](https://docs.zerops.io/references/cli)**
- **[Recipes](https://app.zerops.io/dashboard/recipes)**
- **Support email** — support@zerops.io
- **CEO email** - ales@zerops.io
