import './App.css';
import Home from './Pages/Home/Home';
import PopulationWiseMap from './Pages/PopulationWiseMap/PopulationWiseMap';
import DisabilityDistribution from './Pages/DisabilityDistribution/DisabilityDistribution';

import {  createBrowserRouter,  RouterProvider} from "react-router-dom";
import DisabilityMap from './Pages/DisabilityMap/DisabilityMap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/PopulationWiseMap",
    element: <PopulationWiseMap />,
  },
  {
    path: "/DisabilityDistribution",
    element: <DisabilityDistribution />,
  },
  {
    path: "/DisabilityMap",
    element: <DisabilityMap />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
