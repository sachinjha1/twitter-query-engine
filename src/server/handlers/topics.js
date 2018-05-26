import topicCtrl from '../../graphql/controllers/topic.server.controller';

const { create, read, update, remove } = topicCtrl;

const Handlers = [{
  method: 'POST',
  path: '/api/topics',
  handler: (request, reply) => create(request, reply),
}, {
  method: 'GET',
  path: '/api/topics',
  handler: (request, reply) => read(request, reply),
}, {
  method: 'PUT',
  path: '/api/topics',
  handler: (request, reply) => update(request, reply),
}, {
  method: 'DELETE',
  path: '/api/topics',
  handler: (request, reply) => remove(request, reply),
},
];

export default Handlers;
