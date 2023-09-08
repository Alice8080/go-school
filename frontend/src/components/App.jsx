import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Spinner from "./spinner/Spinner";
import Home from '../pages/Home';
const helmetContext = {};

export const App = () => {
  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <div className="wrapper">
          <Header />
          <main className="main">
              <div className="content">
                <Suspense fallback={<Spinner />}>
                  <Routes>
                      <Route path='/' element={<Home/>} />
                  </Routes>
                </Suspense>
              </div>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};