export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Turborepo 中文文档',
    description: 'Turborepo 中文文档，Turborepo 是一个用于构建和缓存 JavaScript 和 TypeScript 项目的工具，它可以帮助你在开发过程中快速、可靠地构建和测试你的项目。',
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/xiaoLangtou/turborepo-zh-docs',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'label': '英文文档',
      'to': 'https://turborepo.com/docs',
      'target': '_blank',
      'aria-label': '英文文档'
    }]
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://go.nuxt.com/discord',
      'target': '_blank',
      'aria-label': 'Nuxt on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://go.nuxt.com/x',
      'target': '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nuxt/ui',
      'target': '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/xiaoLangtou/turborepo-zh-docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/xiaoLangtou/turborepo-zh-docs',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Turborepo 官网',
        to: 'https://turborepo.com',
        target: '_blank'
      }]
    }
  }
})
