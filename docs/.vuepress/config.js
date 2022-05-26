const { defaultTheme, viteBundler } = require('vuepress')
const { navbar } = require('./config/navbar');
const { sidebar } = require('./config/sidebar')
module.exports = {
  base: "/vuepress-test/",
  lang: 'zh-CN',
  title: 'hello Vuepress',
  description: 'first blogs',
  theme: defaultTheme({
    navbar,
    sidebar,
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者'
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