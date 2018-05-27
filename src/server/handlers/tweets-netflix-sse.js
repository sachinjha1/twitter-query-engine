import tweet from '../../client/api/test-data-tweets.json';
import EventSource from 'eventsource';
import { PassThrough } from 'stream';

var source;

const Handlers = [{
  method: 'GET',
  path: '/api/netflix/tweets',
  handler: (request, reply) => {
    console.log(request.query);
    const stream = new PassThrough({ objectMode: true });

    if(!source){
      source = new EventSource("https://tweet-service.herokuapp.com/stream");

      source.addEventListener('open', function (message) {
        console.log('Firehose connection is open!');
      });

      source.addEventListener('end', function (message) {
        console.log('Stream connection is closed!');
        this.close();
      });
    }

    source.addEventListener('message', function (message) {
      var data = JSON.parse(message.data);
      if(data.tweet.includes(request.query.value)) {
        stream.write({...data, id: message.lastEventId});
      }
    });

    return reply.event(stream, null, { event: 'tweetevent' });
  },
}];

export default Handlers;
