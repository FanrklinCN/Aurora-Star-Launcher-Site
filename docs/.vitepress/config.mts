import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aurora Star Launcher",
  description: "一款Minecraft启动器",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config、
    logo: '/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '用户文档', link: '/user-docs/introduced' },
      { text: '下载', link: '/download/download' }
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '介绍', link: '/user-docs/introduced' },
          { text: '开始使用', link: '/user-docs/get-started' 
            [
              { text: "启动", link: "/user-docs/get-started#启动" },
              { text: "下载", link: "/user-docs/get-started#下载" },
              { text: "联机", link: "/user-docs/get-started#联机" },
              { text: "设置", link: "/user-docs/get-started#设置" }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aurora-Studio-Team/Aurora-Star-Launcher-ASL/' }
    ],

    footer: {
      message: '邮箱：thz@thzstudent.top',
      copyright: 'Copyright © Aurora Studio. 软件以GPL3.0在GitHub、Gitee、GitCode免费开源，任何人不得以任何非法行为修改或贩卖此软件的副本！'
    },
  }
})
