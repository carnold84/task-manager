module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/task-manager/'
    : './',
  pwa: {
    assetsVersion: '0.1',
    name: 'Task Manager',
    themeColor: '#1e70ce',
  },
  outputDir: 'docs',
};
