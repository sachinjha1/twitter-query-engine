import MoviesPage from '../components/movies/index';
import EditMovie from '../components/movies/edit-movie';
import TweetsSearchPage from '../components/tweets-search';

const routes = [
  {
    ...TweetsSearchPage,
    path:'/tweets',
    exact: true,
  },
  {
    ...MoviesPage,
    path: '/',
    exact: true,
  },
  {
    ...MoviesPage,
    path: '/movies',
  },
  {
    path: '/movie/:id',
    component: EditMovie,
  },
];

export default routes;
