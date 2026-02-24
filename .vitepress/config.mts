import { defineConfig } from "vitepress";
import siteIndex from "../src/index.json";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "米坛知识库",
  description: "",
  srcDir: "./src",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://i02.appmifile.com/i18n/fonts/MiSansChinese/index.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn-font.hyperos.mi.com/font/css?family=MiSans:100,200,300,400,500,600:Chinese_Simplify,Latin&display=swap",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "知识库",
    logo: "/bandbbs_logo.png",
    nav: siteIndex.nav,

    // 自动生成侧边栏 - 每次添加新文件时会自动更新
    sidebar: generateSidebar({
      // 侧边栏的根目录，默认为docs
      documentRootPath: "/src",
      // 使用h1的标题作为侧边栏的标题
      useTitleFromFileHeading: true,
      // 使用文件夹的index.md
      useFolderTitleFromIndexFile: true,
      // 指向文件夹的链接
      useFolderLinkFromIndexFile: true,
      // 根据md文件的order进行排序
      sortMenusByFrontmatterOrder: true,
      // 排序之后将不是文件夹的放后面
      sortFolderTo: "top",
      // 菜单展开功能
      collapsed: false,
    }),

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/yizigezi/Bandbbs_knowledge_base",
      },
    ],
  },
});
