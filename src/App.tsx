// App.js
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Loading from "./components/Loading";
const Home = React.lazy(() => import("./pages/Home/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const CCTVPage = React.lazy(() => import("./pages/CCTVPage"));
const Footer = React.lazy(() => import("./components/Footer"));


function App() {
  return (
    <div className="w-full grid place-items-center">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route index={false} path="/" element={<LandingPage />}>
              <Route index path="/" element={<Home />} />
              <Route path="#about" element={<AboutPage />} />
              <Route path="#contact" element={<ContactPage />} />
              <Route path="#services" element={<ServicesPage />} />
            <Route path="#cctv" element={<CCTVPage />} />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
