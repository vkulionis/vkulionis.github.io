import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	url: "https://vkulionis.github.io/useeio-analysis/",
	title: "USEEIO Analysis",
	author: "Viktoras Kulionis",
	description: "Notes, visualizations, and network analysis built around USEEIO data.",
	lang: "en-GB",
	ogLocale: "en_GB",
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const menuLinks: { path: string; title: string }[] = [
	{ path: `${basePath}/`, title: "Home" },
	{ path: `${basePath}/about/`, title: "About" },
	{ path: `${basePath}/posts/`, title: "Posts" },
	{ path: `${basePath}/network_full.html`, title: "Network" },
	{ path: `${basePath}/linkages.html`, title: "Linkages" },
	{ path: `${basePath}/flow_analysis.html`, title: "Flows" },
];

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: { frameBoxShadowCssValue: "none" },
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
