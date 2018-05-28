import TweetsSSE from './tweets-sse';
import RootSSRHandlers from './root-ssr';
import RootPublicHandlers from './root-public';

const Routes = [...TweetsSSE, ...RootSSRHandlers, ...RootPublicHandlers];

export default Routes;
