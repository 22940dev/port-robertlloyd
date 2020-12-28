module.exports = ({
  plugins: [
    require('postcss-easy-import'),
    require('postcss-logical')({
      dir: 'ltr'
    }),
    require('postcss-custom-media'),
    require('postcss-custom-selectors'),
    require('postcss-extend-rule'),
    require('postcss-media-minmax'),
    require('cssnano')({
      preset: ['default', {
        calc: false // Prevent postcss-calc from duplicating rules
      }]
    })
  ]
});
