import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aurora Star Launcher",
  description: "一款Minecraft启动器",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '../img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '用户文档', link: '/user-docs/introduced' }
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '介绍', link: '/user-docs/introduced' },
          { text: '开始使用', link: '/user-docs/get-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aurora-Studio-Team/Aurora-Star-Launcher-ASL/' }
    ]
  }
})
