import TweetsNetflixHandlers from './tweets-netflix-sse';
import RootSSRHandlers from './root-ssr';
import RootPublicHandlers from './root-public';

const Routes = [...TweetsNetflixHandlers, ...RootSSRHandlers, ...RootPublicHandlers];

export default Routes;
