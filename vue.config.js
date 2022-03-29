module.exports = {
  publicPath: process.env.NODE_ENV === 'productions'
    ? '/business-lines__initial/'
    : '/',
};
