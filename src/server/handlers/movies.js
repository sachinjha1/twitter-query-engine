import { data } from '../../client/api/test-data.json';

const Handlers = [{
  method: 'GET',
  path: '/api/movies',
  handler: (request, reply) => {
    console.log("Movies api server side");
    return data.movies;
    },
}];

export default Handlers;
