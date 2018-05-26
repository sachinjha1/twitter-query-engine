import MoviesHandlers from './movies';
import TweetsHandlers from './tweets-sse';
import TweetsNetflixHandlers from './tweets-netflix-sse';
import RootSSRHandlers from './root-ssr';
import RootPublicHandlers from './root-public';
import Topics from './topics';

const Routes = [...TweetsHandlers, ...TweetsNetflixHandlers, ...Topics, ...MoviesHandlers, ...RootSSRHandlers, ...RootPublicHandlers];

export default Routes;
