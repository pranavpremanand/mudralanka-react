import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SpinnerContextProvider from "./components/SpinnerContext";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import { LoadingSpinner } from "./components/LoadingSpinner";
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange";
import StickerPrinting from "./pages/StickerPrinting/StickerPrinting";
import PvcIdCard from "./pages/PvcIdCard/PvcIdCard";
import MobileCase from "./pages/MobileCase/MobileCase";
import VisitingCard from "./pages/VisitingCard/VisitingCard";
import { Toaster } from "react-hot-toast";
const Home = lazy(() => import("./pages/Home/Home"));

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <SpinnerContextProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <Router>
          <ScrollToTopButton />
          <ScrollToTopOnPageChange />
          <Toaster position="top-center" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* Service details pages */}
            <Route path="/sticker-printing" element={<StickerPrinting />} />
            <Route path="/pvcidcard" element={<PvcIdCard />} />
            <Route path="/mobilecase" element={<MobileCase />} />
            <Route path="/visitingcard" element={<VisitingCard />} />
          </Routes>
        </Router>
      </Suspense>
    </SpinnerContextProvider>
  );
}

export default App;
