import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GivingForm from "./components/Giving Form/GivingForm";
import Contact from "./components/Contact/Contact";
import DataCollection from "./components/DataCollection/DataCollection";
import "./App.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/giving",
      element: (
        <>
          <Header />
          <GivingForm />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Header />
          <Contact/>
        </>
      ),
    },
    {
      path: "/dataCollection",
      element: (
        <>
          <Header />
          <DataCollection/>
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
