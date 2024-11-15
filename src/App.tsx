import { RouterProvider } from "react-router-dom";
import Router from "./navigation/Router";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={Router} />
    </>
  )
}

export default App;
