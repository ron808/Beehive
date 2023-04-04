module.exports = {
    entry: 'index.js',
    webpack: {
        configure: {
          experiments: {
              topLevelAwait: true
          }
        }
      }
}