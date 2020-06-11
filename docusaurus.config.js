module.exports = {
    title: "Piracy",
    tagline: "It's illegal cuz they can't tax you!",
    url: "https://piracy.now.sh",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "maximousblk",
    projectName: "piracy",
    themeConfig: {
        image: "img/ogimage.png",
        navbar: {
            title: "Piracy",
            logo: {
                alt: "Arrr!",
                src: "img/logo.svg",
                srcDark: "img/logo.svg",
            },
            links: [
                { to: "blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/maximousblk/piracy",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            // style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} Maximous Black.`,
        },
        algolia: {
            apiKey: "5470eae5ca52eb07867cedc3fdd33424",
            indexName: "maximousblk_piracy",
        },
        prism: {
            theme: require("prism-react-renderer/themes/dracula"),
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    routeBasePath: "/",
                    homePageId: "home",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/maximousblk/piracy/edit/master/",
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: "all",
                        copyright: `Copyright © ${new Date().getFullYear()} Maximous Black`,
                    },
                    editUrl:
                        "https://github.com/maximousblk/piracy/edit/master/blog/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
