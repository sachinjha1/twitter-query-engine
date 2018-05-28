import { STREAM_STATUS_NOTSTARTED } from '../constants';
import { OPERATORS_EQUAL } from '../../shared';

export default {
  query:{
    field: 'tweet',
    operator: OPERATORS_EQUAL,
    value: '',
  },
  tweets:[],
  streamStatus: STREAM_STATUS_NOTSTARTED,
};
