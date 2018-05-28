# Twitter Stream Query Engine

Application URL
###https://twitter-query-engine.herokuapp.com

This UI allows you to query against a real-time stream of tweets produced by an external Tweet Streaming Service.
The results of the query is streamed to client in near real-time. 

User can setup only 1 query condition for now. 

Twitter firehose is handled by NodeJS middleware to filter based on query passed by client(browser).

Client( Browser) <----stream--- NodeJS (Middleware/filter) <----stream----- TwitterStream

Key implementation pending:

1. Throttling streaming speed at middleware by using database
2. Support multiple query feature in UI
3. UX changes based on customer's need

