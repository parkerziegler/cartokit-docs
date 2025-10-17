import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    starlight({
      title: "cartokit Docs",
      customCss: ["./src/styles/global.css"],
      favicon: "/favicon.png",
      logo: {
        dark: "./src/assets/logo-dark.svg",
        light: "./src/assets/logo.svg",
        alt: "cartokit",
        replacesTitle: true,
      },
      social: [{
        icon: "github",
        label: "GitHub",
        href: "https://github.com/parkerziegler/cartokit",
      }],
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
  ],
  vite: { plugins: [tailwindcss()] },
});
