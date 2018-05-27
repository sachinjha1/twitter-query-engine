import TweetsSearchPage from '../components/tweets-search';

const routes = [
  {
    ...TweetsSearchPage,
    path:'/tweets',
    exact: true,
  },
];

export default routes;
