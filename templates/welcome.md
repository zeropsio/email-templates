[//]: # (Welcome to Zerops)

Thank you for signing up to Zerops, {{ .FirstName }}!

Our entire dev team hangs out on [Zerops Discord server](https://discord.gg/zeropsio) - join real-time help, technical discussions, or just to chat about infrastructure and programming in general. We're building Zerops to be the platform we always wanted to use, bringing together the ideal mix of **developer experience**, **flexibility**, and **scalability** with a sensible **pricing model that doesn't get in the way of good development practices**, and we'd love your input.

## Explore Zerops Through Our Recipes 🚀
The fastest way to dive into Zerops is through our [one-click recipes](https://app.zerops.io/dashboard/recipes). We have basic example for most popular runtime technology, as well as more complex examples for the most popular frameworks. Each recipe deploys in minutes and gives you a fully configured environment to explore. Choose one that matches your tech stack, click deploy, and watch how Zerops builds and runs your infrastructure.

## What Makes Zerops Different
- **Sophisticated Network Architecture** - Each project runs in its own isolated VXLAN network with dedicated L3/L7 balancers, making services feel like they're running right next to each other while maintaining strict isolation underneath
- **True Environment Parity** - All environments, whether it's local, dev or stage matches production exactly, with different resource allocation being the only difference. No more "but it works on my machine"
- **Managed Stateful Services** - Stateful services like databases, searches, storages and queues can run in high availability, with automatic failover, backups, and optimized scaling 
- **Granular Control & Fully automatic scaling** - Scale from 0.25GB RAM and single CPU cores, pay by the minute, with resource steps that match your actual needs
- **Full System Access** - Built on Incus (LXC) containers with SSH access and complete Linux OS environments, giving you transparency without complexity

## Technical Details You'll Want to Know
- **[VPN Access](https://docs.zerops.io/references/vpn)** - Each project gets its own VPN for secure local development against remote services
- **[Build Pipeline](https://docs.zerops.io/features/pipeline)** - Flexible build configurations through `zerops.yml` with build caching and artifact management
- **[Resource Steps](https://docs.zerops.io/features/scaling-ha)** - Scale in increments as small as 1 CPU core and 250MB RAM
- **[Database HA](https://docs.zerops.io/features/scaling-ha#auto-scaling-configuration-for-databases)** - Automated primary-replica setup with intelligent failover for supported databases
- **[SSH Access](https://docs.zerops.io/references/ssh)** - Direct `ssh` into any container for debugging or development

## Resources Worth Bookmarking
- **[Zerops dashboard](https://app.zerops.io/)**
- **[Documentation](https://docs.zerops.io/)**
- **[CLI Reference](https://docs.zerops.io/references/cli)**
- **[Recipes](https://app.zerops.io/dashboard/recipes)**
- **Support email** — support@zerops.io
- **CEO email** - ales@zerops.io
