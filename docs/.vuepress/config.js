const { defaultTheme, viteBundler } = require('vuepress')
module.exports = {
  lang: 'zh-CN',
  title: 'hello Vuepress',
  description: 'first blogs',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '配置',
        link: '/config.md'
      }
    ]
  }),
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'center'
        }
      }
    }
  })
}