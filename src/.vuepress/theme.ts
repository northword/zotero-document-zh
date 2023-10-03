import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar";
import { zhSidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://zotero-chinese.com",

  author: {
    name: "Zotero Chinese",
    url: "https://github.com/zotero-chinese",
  },

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "zotero-chinese/wiki",

  docsDir: "src",

  hotReload: true,
  sidebarSorter: ["readme", "order", "filename", "title"],

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer:
        "Zotero 中文小组 | <a href='/contributing/'>贡献指南</a> | <a href='https://github.com/orgs/zotero-chinese/discussions'>参与讨论</a> | <a href='/'>加入 QQ 群组</a>",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  plugins: {
    comment: {
      provider: "Giscus",
      repo: "zotero-chinese/.github",
      repoId: "R_kgDOHv4ukA",
      category: "文档评论区",
      categoryId: "DIC_kwDOHv4ukM4CZz7S",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      checkLinks: {
        // 仅在开发模式下检查链接
        status: "always",
        ignore: [
          // 忽略以 `/api/` 开头的链接
          /^\/api\//,
          // 忽略 `/playground.html`
          "/playground.html",
        ],
      },
      codetabs: true,
      // demo: true,
      // echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // presentation: {
      //     plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      // vPre: true,
      // vuePlayground: true,
    },

    // autoCatalog: {
    //   orderGetter: (page) => {return page.routeMeta}
    // },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
