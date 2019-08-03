module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/task-manager/'
    : './',
  pwa: {
    themeColor: '#2f2f2f',
  },
  outputDir: 'docs',
};
