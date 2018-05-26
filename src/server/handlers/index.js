import MoviesHandlers from './movies';
import TweetsHandlers from './tweets-sse';
import RootSSRHandlers from './root-ssr';
import RootPublicHandlers from './root-public';
import Topics from './topics';

const Routes = [...TweetsHandlers, ...Topics, ...MoviesHandlers, ...RootSSRHandlers, ...RootPublicHandlers];

export default Routes;
