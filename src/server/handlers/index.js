import TweetsHandlers from './tweets-dummy-sse';
import TweetsNetflixHandlers from './tweets-netflix-sse';
import RootSSRHandlers from './root-ssr';
import RootPublicHandlers from './root-public';

const Routes = [...TweetsHandlers, ...TweetsNetflixHandlers, ...RootSSRHandlers, ...RootPublicHandlers];

export default Routes;
