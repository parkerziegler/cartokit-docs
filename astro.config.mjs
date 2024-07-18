import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    starlight({
      title: "cartokit Docs",
      customCss: ["./src/tailwind.css"],
      logo: {
        dark: "./src/assets/logo-dark.svg",
        light: "./src/assets/logo.svg",
        alt: "cartokit",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/parkerziegler/cartokit",
        "x.com": "https://x.com/parker_ziegler",
      },
      sidebar: [
        {
          label: "Get Started",
          autogenerate: {
            directory: "get-started",
          },
        },
        {
          label: "Guides",
          autogenerate: {
            directory: "guides",
          },
        },
      ],
      components: {
        Hero: "./src/components/Hero.astro",
        Pagination: "./src/components/Pagination.astro",
      },
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
