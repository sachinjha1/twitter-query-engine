import tweet from '../../client/api/test-data-tweets.json';
import EventSource from 'eventsource';
import { PassThrough } from 'stream';

var sse_conns = [];

const Handlers = [{
  method: 'GET',
  path: '/api/tweets',
  handler: (request, reply) => {



    const stream = new PassThrough({ objectMode: true });


    setInterval(() => {

      stream.write({ "tweet": Math.floor(Math.random() * 200)+'orange is the new black cool. #bingewatching', "user": "user-79", "retweet_count": 724, created_at: 1527250665254, verified: true, lang: "es"});
    }, 1000);

    return reply.event(stream, null, { event: 'tweetevent' });
  },
}];

export default Handlers;
