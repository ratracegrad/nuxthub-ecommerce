# NuxtHub eCommerce Starter Template

This starter template is a NuxtHub template that demonstrates the functionality of an eCommerce store with a backend database.

## Demo Video

Watch the demo video here: (be sure to turn on volume)

https://github.com/user-attachments/assets/4992d551-1ac3-413e-9ddc-ddba5d8c66e6

## Features

- NuxtHub Database using Cloudflare R1
- NuxtUI Pro for the UI
- Light and Dark mode
- Typescript
- Eslint

## Stack

- Nuxt v4
- NuxtHub
- NuxtUI Pro

## Setup

1. Clone this repository to your local machine.
2. Install dependencies using the command `pnpm install` or your favorite package manager.
3. Run the application with the command `pnpm dev` or your favorite package manager.

> If you don't have pnpm installed, run: `corepack enable pnpm`

## Environment Variables

Copy the `.env.example` file to `.env` and fill in the values.

NUXT_HUB_PROJECT_KEY=<YOUR_KEY_HERE>

NUXT_UI_PRO_LICENSE=<YOUR_KEY_HERE>

## Development

```bash
pnpm dev
```

## Seeding the database

To get your store up and running, you need to seed the database with some products.

I have included a seed script in the `server/tasks` folder.

To run the seed task, start your dev server and open the Nuxt DevTools. Go to Tasks and you will see the `db:seed` task ready to run. This will add the seed data to your database and give you products to work with.

## Deploy

You can deploy this project on your Cloudflare account for free and with zero configuration using [NuxtHub](https://hub.nuxt.com).

```bash
npx nuxthub deploy
```

It's also possible to leverage Cloudflare Pages CI for deploying, learn more about the different options on https://hub.nuxt.com/docs/getting-started/deploy

Learn more about remote storage on https://hub.nuxt.com/docs/getting-started/remote-storage

## Contribution

Contributions are welcome! Feel free to open an issue to report a bug or submit a feature request via a pull request.
