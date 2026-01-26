const path = require("path");

/**
 * ✅ Register custom remark plugin
 * IMPORTANT: .default is required because it's a TS/ESM default export
 */
const apiPlaygroundRemark = require("./src/remark/api-playground");

module.exports = {
  title: "Revenue Monster",
  tagline:
    "Empowering businesses by seamlessly integrating Mobile Payments, Loyalty Programs and Social Media",
  url: "https://revenuemonster.my",
  baseUrl: "/",
  favicon: "img/favicon.ico",

  organizationName: "revenuemonster",
  projectName: "doc-v2",

  plugins: [
    path.resolve(__dirname, "./node_modules/docusaurus-lunr-search/"),
  ],

  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content: [
          "revenue monster",
          "payment",
          "fintech",
          "documentation",
          "payment gateway",
          "wallet integration",
        ].join(","),
      },
      { name: "author", content: "Revenue Monster" },
      {
        name: "description",
        content:
          "Revenue Monster pioneers fintech solutions to help fast-track business digitalization.",
      },
    ],

    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },

    navbar: {
      logo: {
        alt: "Revenue Monster",
        src: "/img/rm-logo.svg",
        href: "https://revenuemonster.my",
      },
      items: [
        {
          to: "docs/introduction/overview",
          label: "Docs",
          position: "right",
        },
        {
          to: "/docs/quickstart/sdk",
          label: "SDK",
          position: "right",
        },
        {
          href: "https://github.com/RevenueMonster",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Revenue Monster`,
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          /**
           * ✅ THIS IS THE KEY LINE
           */
          remarkPlugins: [apiPlaygroundRemark],
            remarkPlugins: [require("./src/remark/api-playground")],


          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
