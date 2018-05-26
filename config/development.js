module.exports = {
  host: '0.0.0.0',
  port: process.env.PORT || 8080,
  nodeEnv: 'development',
  title: 'Twitter Query Engine',
  mongodbUri: 'mongodb://tweets:tweets@ds135540.mlab.com:35540/tweets',
  mongodbOption: { useMongoClient: true },
};
