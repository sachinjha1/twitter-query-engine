import Topic from '../models/topic.server.model';

const create = (request, reply) => {
  const { payload } = request;
  const entry = new Topic({
    topicName: payload.topicName,
    shortDesc: payload.shortDesc,
  });

  console.log('entry created');

  let resultMsg = {
    message: 'Topic created',
  };
  entry.save((err) => {
    if (err) {
      console.log(err);
      resultMsg = { message: `Validation error occurred ${err.errors}` };
    }
  });
  return resultMsg;
};

const read = (request, reply) =>
  /* select topicName shortDesc createdOn from TOPIC where topicName in ('react', 'redux') */
  Topic.find({ topicName: ['react', 'redux'] }, 'topicName shortDesc createdOn', (err, result) => {
    if (err) {
      return err;
    }
    return result;
  });
const update = (request, reply) => {
  const updateColumn = { shortDesc: 'Its a library from facebook' };

  Topic.findByIdAndUpdate('5a2681258fa69482a214a64b', updateColumn, (err, numRowAffected, rawResponse) => {
    if (err) {
      return err;
    }
    return { message: 'Topic updated' };
  });
  return { message: 'Topic updated' };
};

const remove = (request, reply) => {
  Topic.findByIdAndRemove('5a2681258fa69482a214a64b', (err, numRowAffected, rawResponse) => {
    if (err) {
      return err;
    }
    return { message: 'Topic removed' };
  });
  return { message: 'Topic removed' };
};

export default {
  create, read, update, remove,
};
