import { userGuide } from "./user-guide";
import { cslDevGuide } from "./csl-dev-guide";
import { pluginDevGuide } from "./plugin-dev-guide";
import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/user-guide/": userGuide,
  "/plugin-dev-guide/": "structure",
  "/csl-dev-guide/": cslDevGuide,
  "/": [
    "about",
    "contributors",
    {
      text: "贡献者指南",
      icon: "build",
      prefix: "contributing",
      collapsible: true,
      children: [
        "contributing",
        "markdown",
        "markdown-demo",
        "vscode-dev",
        "build",
      ],
    },
  ],
});
