module.exports = {
    title: "Introduction to Puppeteer",
    tagline: "Puppeteer made it easy",
    url: "https://tasneemkoushar.github.io",
    baseUrl: "/test6/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    organizationName: "tasneemkoushar",
    projectName: "test6",
    themeConfig: {
        hideableSidebar: true,
        navbar: {
            style:"primary",
            title: "Puppeteer",
            logo: {
                alt: "Realtime Apps Logo",
                src: "img/pptr.png",
            },
            hideOnScroll: true,
            items: [{
                to: "docs/puppeteer.puppeteer",
                // activeBasePath: "docs",
                label: "API",
                position: "left",
            },
            {
              to: "docs/contributing",
              // activeBasePath: "docs",
              label: "Contribute",
              position: "left",
          },
            {
              type: 'docsVersionDropdown',
            },



            {
                label: "Github",
                href: "https://github.com/puppeteer/puppeteer",
                position: "right",
            },
            {
              label: "Stack",
              href: "https://stackoverflow.com/questions/tagged/puppeteer",
              position: "right"
            },
            {
              label: "Version 1.0",
              href: "https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md",
              position: "right"
            }
          ],
        },
        footer: {
          links: [
            {
              // Label of the section of these links
              title: 'Docs',
              items: [
                {
                  // Label of the link
                  label: 'Style Guide',
                  // Client-side routing, used for navigating within the website.
                  // The baseUrl will be automatically prepended to this value.
                  to: 'docs/',
                },
                // {
                //   label: 'Second Doc',
                //   to: 'docs/doc2/',
                // },
              ],
            },
            {
              title: 'Community',
              items: [
                // {
                //   label: 'Stack Overflow',
                //   // A full-page navigation, used for navigating outside of the website.
                //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                // },
                // {
                //   label: 'Discord',
                //   href: 'https://discordapp.com/invite/docusaurus',
                // },
                // {
                //   label: 'Twitter',
                //   href: 'https://twitter.com/docusaurus',
                // },
                // {
                //   //Renders the html pass-through instead of a simple link
                //   html: `
                //       <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                //         <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                //       </a>
                //     `,
                // },
              ],
            },
          ],
        },
        gtag: {
            trackingID: "G-WT3D2HSL72",
            anonymizeIP: false, // Should IPs be anonymized?
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // routeBasePath: '/',
                    // Please change this to your repo.
                    //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
                    //editUrl: null, // set as null to hide edit option
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     //editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
                //     //editUrl: null, // set as null to hide edit option
                // },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    stylesheets: [
        "https://fonts.googleapis.com/icon?family=Material+Icons",
    ],
};
