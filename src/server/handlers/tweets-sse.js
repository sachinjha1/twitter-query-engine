import EventSource from 'eventsource';
import { PassThrough } from 'stream';
import { tweetStreamUrl } from '../../../config';
import { OPERATORS_EQUAL, OPERATORS_CONTAINS, OPERATORS_REGEX, MIDDLEWARE_SSE_EVENT_NAME } from '../../shared';

//Event source for calling twitter-service firehose
let source;

const Handlers = [{
  method: 'GET',
  path: '/api/tweet/stream',
  handler: (request, reply) => {
    const stream = new PassThrough({ objectMode: true });
    //avoid multiple creation of EventSource
    if(!source){
      source = new EventSource(tweetStreamUrl);

      source.addEventListener('open', function (message) {
        console.log('Firehose connection is open!');
      });

      source.addEventListener('end', function (message) {
        console.log('Stream connection is closed!');
        this.close();
      });
    }

    source.addEventListener('message', function (message) {
      let data = JSON.parse(message.data);
      let {field, operator, value} = request.query;

      if(operator===OPERATORS_EQUAL){
        let fieldStr = data[field].toString();
        if((fieldStr.length===value.length) && fieldStr.search(new RegExp(value, "i"))===0) {
          stream.write({...data, id: message.lastEventId});
        }
      }else if(operator===OPERATORS_CONTAINS || operator===OPERATORS_REGEX){
        //Todo: If user enters regex like input for conatains operator then it will still be treated like regex.
        //Need to fix it.
        let fieldStr = data[field].toString();
        if(fieldStr.search(new RegExp(value, "i"))>=0) {
          stream.write({...data, id: message.lastEventId});
        }
      }


    });

    return reply.event(stream, null, { event: MIDDLEWARE_SSE_EVENT_NAME });
  },
}];

export default Handlers;
