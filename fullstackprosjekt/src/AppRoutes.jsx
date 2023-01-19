import { Home } from "./components/Home";
import { SendInn } from "./components/SendInn";
import { Rediger } from "./components/Rediger";
import { Fullsak } from "./components/Fullsak";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/innsending',
      element: <SendInn />
  },
  {
    path: '/RedigerArtikkel/:id',
    element: <Rediger />
  },
  {
    path: '/FullArtikkel/:id',
    element: <Fullsak />
  }

];

export default AppRoutes;
