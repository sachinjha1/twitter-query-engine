import EventSource from 'eventsource';
import { PassThrough } from 'stream';

let source;

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
      let data = JSON.parse(message.data);
      let {field, operator, value} = request.query;

      if(operator==='equals'){
        let fieldStr = data[field].toString();
        if((fieldStr.length===value.length) && fieldStr.search(new RegExp(value, "i"))===0) {
          stream.write({...data, id: message.lastEventId});
        }
      }else if(operator==='contains' || operator==='regex'){
        //Todo: If user enters regex like input for conatains operator then it will still be treated like regex.
        //Need to fix it.
        let fieldStr = data[field].toString();
        if(fieldStr.search(new RegExp(value, "i"))>=0) {
          stream.write({...data, id: message.lastEventId});
        }
      }


    });

    return reply.event(stream, null, { event: 'tweetevent' });
  },
}];

export default Handlers;
