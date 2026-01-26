import apiPlaygroundRemark from "./src/remark/apiPlayground";

const path = require("path");
module.exports = {
  title: "Revenue Monster",
  tagline:
    "Empowering businesses by seamlessly integrating Mobile Payments, Loyalty Programs and Social Media",
  url: "https://revenuemonster.my",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "revenuemonster", // Usually your GitHub org/user name.
  projectName: "doc-v2", // Usually your repo name.
  plugins: [path.resolve(__dirname, "./node_modules/docusaurus-lunr-search/")],
  themeConfig: {
    metadata: [
      {
        name: "keywords", content: [
          "revenue monster",
          "apac venture",
          "alacarte",
          "terminal payment",
          "payment link",
          "payment",
          "unified payment",
          "wallet payment",
          "malaysia payment gateway",
          "payment gateway",
          "fintech",
          "digitalization",
          "payment solution",
          "documentation",
          "payment integration",
          "wallet integration",
        ].join(",")
      },
      { name: "author", content: "Revenue Monster" },
      { name: "description", content: "Revenue Monster pioneers fintech solutions to help fast-track business digitalization. We empower businesses with a fully digital ecosystem that provides a full suite of services critical to business digitalisation. We provide solutions from digital payment solutions, e-loyalty & rewards, online store, to social media management." },
      { name: "og:site_name", content: "Revenue Monster" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://doc.revenuemonster.my" },
      { name: "og:title", content: "Documentation | Revenue Monster | Experience True Unified Payment" },
      { name: "og:description", content: "Revenue Monster pioneers fintech solutions to help fast-track business digitalization. We empower businesses with a fully digital ecosystem that provides a full suite of services critical to business digitalisation. We provide solutions from digital payment solutions, e-loyalty & rewards, online store, to social media management." },
      { name: "og:image", content: "https://directus.superapp.my/assets/4bec8b80-eaaa-4a71-b2e6-3dd26c7afede.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://doc.revenuemonster.my" },
      { name: "twitter:title", content: "Documentation | Revenue Monster | Experience True Unified Payment" },
      { name: "twitter:image", content: "https://directus.superapp.my/assets/4bec8b80-eaaa-4a71-b2e6-3dd26c7afede.png" },
    ],
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },
    // disableDarkMode: true,
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "/img/rm-logo.svg",
        href: "https://revenuemonster.my",
      },
      // links
      items: [
        {
          to: "docs/introduction/overview",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          to: "/docs/quickstart/sdk",
          label: "SDK",
          position: "right",
        },
        // { to: "blog", label: "Blog", position: "right" },
        {
          to: "https://github.com/RevenueMonster",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Revenue Monster SDN BHD (Company NO.1236838-T). All rights reserved`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
            remarkPlugins: [apiPlaygroundRemark],

          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/doc-v2/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
