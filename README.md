# Compada Homepage

Marketing pages deployed via GitHub Pages. Utilizes `tailwindcss` and `alpinejs`.

## Getting Started

This service makes heavy use of docker and docker compose. Setting up docker is beyond the scope of this readme.

```shell
cp .env.sample .env
docker compose up -d
npx tailwindcss -i ./css/tailwind.index.css -o ./css/index.css --watch
```

Visit <http://localhost:8080>

## Contributing

- [GitHub Pages](https://docs.github.com/en/pages)
- [Managing a custom domain for your github pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Deployment

Pushing the `main` branch to origin will trigger a deploy.

## Reading

Learn about the various tech powering this application:

- [Pages](https://pages.github.com)
- [tailwind css](https://tailwindcss.com/)
- [tailwind ui](https://tailwindui.com/)
- [alpine js](https://alpinejs.dev/)
- [unsplash](https://unsplash.com/)
