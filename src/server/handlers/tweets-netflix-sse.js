import tweet from '../../client/api/test-data-tweets.json';
import EventSource from 'eventsource';
import { PassThrough } from 'stream';

const Handlers = [{
  method: 'GET',
  path: '/api/netflix/tweets',
  handler: (request, reply) => {

    const stream = new PassThrough({ objectMode: true });

    var source = new EventSource("https://tweet-service.herokuapp.com/stream");

    source.addEventListener('message', function (message) {
      console.log('Stream connection getting data!');
      var data = JSON.parse(message.data);
      stream.write({...data, id:message.lastEventId});
    });

    source.addEventListener('open', function (message) {
      console.log('Stream connection is open!');
    });

    source.addEventListener('end', function (message) {
      console.log('Stream connection is closed!');
      this.close();
    });

    return reply.event(stream, null, { event: 'tweetevent' });
  },
}];

export default Handlers;
