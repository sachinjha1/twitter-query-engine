export const OPTIONS_FIELDS = [
  {
    value: 'tweet',
    label: 'Tweet',
  },
  {
    value: 'user',
    label: 'User',
  },
  {
    value: 'retweet_count',
    label: 'Retweet Count',
  },
  {
    value: 'created_at',
    label: 'Created At',
  },
  {
    value: 'verified',
    label: 'Verified',
  },
  {
    value: 'lang',
    label: 'Language',
  },
];

export const OPTIONS_OPERATORS = [
  {
    value: 'equals',
    label: 'Equals',
  },
  {
    value: 'contains',
    label: 'Contains (case insensitive)',
  },
  {
    value: 'regex',
    label: 'Regex',
  },
];

export const DUMMY_AVATAR_IDS = ['AB','BC','CD','DE','EF','GH','IJ','JK'];

export const STREAM_STATUS_NOTSTARTED='NotStarted';
export const STREAM_STATUS_STARTED='Started';
export const STREAM_STATUS_STOPPED='Stopped';
export const MAX_TWEETS_TO_LOAD=20;
export const TWEET_SPEED_THRESHOLD=2;