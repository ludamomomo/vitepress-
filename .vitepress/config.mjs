import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wry-ui的组件库说明",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/' },
      { text: '组件', link: '/markdown-examples' }
    ],
    footer:{
      copyright:"wangruiyang -----wryui"
     },

    sidebar: [
      {
        text: '示例',
        items: [
          { text: '使用教程', link: '/markdown-examples' },
          { text: 'WRYButton组件', link: '/api-examples1' },
          { text: 'WRYCollapse组件', link: '/api-examples2' },
          { text: 'WRYDrawer组件', link: '/api-examples3' },
          { text: 'WRYDropdown组件', link: '/api-examples4' },
          { text: 'WRYFix组件', link: '/api-examples5' },
          { text: 'WRYForm组件', link: '/api-examples6' },
          { text: 'WRYInput组件', link: '/api-examples7' },
          { text: 'WRYMessage组件', link: '/api-examples8' },
          { text: 'WRYTabs组件', link: '/api-examples9' },
          { text: 'WRYTooltip组件', link: '/api-examples10' },
          { text: 'WRYTree组件', link: '/api-examples11' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ludamomomo/wry-ui.git' }
    ]
  }
})
