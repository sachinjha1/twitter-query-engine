import TweetsSearchPage from '../components/tweets-search';

const routes = [
  {
    ...TweetsSearchPage,
    path:'/',
    exact: true,
  },
];

export default routes;
