module.exports = {
  host: '0.0.0.0',
  port: process.env.PORT || 8080,
  nodeEnv: 'development',
  title: 'Twitter Stream Query Engine',
  tweetStreamUrl:'https://tweet-service.herokuapp.com/stream',
};
