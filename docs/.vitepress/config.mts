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
    ],

    footer: {
      message: '邮箱：thz@thzstudent.top',
      copyright: 'Aurora Studio. 软件以GPL3.0在GitHub、Gitee、GitCode免费开源，任何人不得以任何非法行为修改或贩卖此软件的副本！'
    },
  }
})
