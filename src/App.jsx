import './App.css'
import ErrorPage from './Errorpage';
import { Favorites } from './Favorites';
import Rootlayout from './Rootlayout/Rootlayout';
import { MovieList } from './movies'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Rootlayout />,children: [
        { index: true, element: <MovieList /> },
        { path: "favorites", element: <Favorites /> },
        { path: "*", element: <ErrorPage /> },],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App
