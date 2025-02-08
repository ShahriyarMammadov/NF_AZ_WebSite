import ROUTES from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter(ROUTES);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
