
const navbar = [
  {
    text: 'Vue',
    link: '/vue/'
  },
  {
    text: 'React',
    children: [
      {
        text: 'React1',
        children: [
          '/react/react1.md'
        ]
      },
      {
        text: 'React2',
        children: [
          '/react/react2.md'
        ]
      }
    ]
  }
]
exports.navbar = navbar