import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import node from "@astrojs/node";

export default defineConfig({
	adapter: node({ mode: "standalone" }),
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
		routing: {
			prefixDefaultLocale: true,
			// redirectToDefaultLocale: false,
			strategy: "pathname",
		},
	},
	integrations: [react(), markdoc(), keystatic()],
	output: "hybrid",
	server: { port: 3000 },
});
