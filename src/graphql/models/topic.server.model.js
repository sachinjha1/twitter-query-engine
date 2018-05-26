import mongoose from 'mongoose';
import stringSizeValidator from '../validators/string-size-validator';

const { Schema } = mongoose;

/* Topics like react, redux, hapi etc... For each topic short desc, video links,
 study links, twitter handlers */
const topicSchema = new Schema({
  topicName: { type: String, required: true, validate: stringSizeValidator },
  shortDesc: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});

/* Schema -> Model -> Document(s) */
export default mongoose.model('Topic', topicSchema);
