module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/task-manager/'
    : './',
  pwa: {
    name: 'Task Manager',
    themeColor: '#1e70ce',
  },
  outputDir: 'docs',
};
