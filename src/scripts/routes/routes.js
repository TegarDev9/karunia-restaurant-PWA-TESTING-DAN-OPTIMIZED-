import Restaurant from '../views/pages/restaurant-pages';
import Detail from '../views/pages/detail-pages';
import Favorite from '../views/pages/favorite-pages';

const routes = {
  '/': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};
export default routes;
