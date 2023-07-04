import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { Thankyou } from "./components/thankyou";
import ErrorPage from "./error-page";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="/"]', {
  speed: 1000,
  speedAsDuration: true,
});



const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const url = window.location.href
  console.log();

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Header data={landingPageData.Header} />,
      errorElement: <ErrorPage />,
    },

    {
      path: "/about",
      element:  <About data={landingPageData.About} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/services",
      element:  <Services data={landingPageData.Services} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/inquiry",
      element:  <Contact data={landingPageData.Contact} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/thank-you",
      element:  <Thankyou data={landingPageData.Gallery} />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div> 
      <Navigation data={landingPageData.Navigation} />
      
      <RouterProvider router={router} />
      {/* 
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default App;
