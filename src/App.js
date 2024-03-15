import { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

// Components
import "./styles/components/header.css";
import logo from "./assets/images/pslogoweb.png";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

import {
  HomePage,
  AboutPage,
  ContactPage,
  ProjectsPage,
  ServicePage,
  Afrijeune,
  Pscreative,
  Psdigital,
  Psgzik,
} from "./navigation";
import { ScrollToTop, NotFoundPage } from "./components";

import psservices from "./utils/services";
import Projecta from "./navigation/Projecta";
import { projects } from "./utils/projects";
import MissAfrijeune from "./navigation/MissAfrijeune";

function App() {
  const projeta = projects[0];

  // remettre la valeur à true lorsqu'on vas gérer le loading

  const [loading, setLoading] = useState(false);

  const [mobileMenuView, setMobileMenuView] = useState(false);

  const showSidebar = () => {
    setMobileMenuView(true);
  };

  const hideSidebar = () => {
    setMobileMenuView(false);
  };

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const menuServices = (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="menu-services"
    >
      <ul>
        {psservices.map((service, index) => (
          <li key={index}>
            <Link to={service.link}>{service.headerName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const mobileSideBar = (
    <div onClick={hideSidebar} className="mobile-menu-container">
      <div className="sidebar-container">
        <div className="top-sidebar-icon-container">
          <TfiClose />
        </div>
        <div className="sideBarMenu">
          <li>
            <Link className="nav-link-black sidebarItem" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="nav-link-black sidebarItem" to="/about">
              A Propos de nous
            </Link>
          </li>
          <li>
            <Link className="nav-link-black sidebarItem" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="nav-link-black sidebarItem" to="/projects">
              Projets
            </Link>
          </li>
          <li>
            <Link className="nav-link-black sidebarItem" to="/missafrijeune">
              Miss Afrijeune
            </Link>
          </li>
          <li>
          <Link className="nav-link-black sidebarItem" to="/contact">
            Contactez-nous
          </Link>
          </li>
        </div>
      </div>
    </div>
  );
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <div>
          {/* {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : ( */}
          <Router>
            <motion.div
              initial={{ opacity: 0, y: -180 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.6,
                type: "tween",
              }}
              className="header"
            >
              <div className="header-inner">
                <Link to="/" className="logo">
                  <img src={logo} alt="pslogo" />
                </Link>
                <nav className="nav">
                  <li>
                    <Link className="nav-link-black" to="/">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link-black" to="/about">
                      A Propos de nous
                    </Link>
                  </li>
                  <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link className="nav-link-black" to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link-black" to="/projects">
                      Projets
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link-black" to="/missafrijeune">
                      Miss Afrijeune
                    </Link>
                  </li>
                </nav>
                <div className="contact">
                  <Link to="/contact">Contactez-nous</Link>
                </div>
                {!mobileMenuView && (
                  <div onClick={showSidebar} className="hamburger-menu">
                    <RiMenu3Fill />
                  </div>
                )}
                {isHovered && menuServices}
                {/* mobile nav */}
                {mobileMenuView && mobileSideBar}
              </div>
            </motion.div>

            <Switch>
              <Route exact path="/about">
                <AboutPage />
              </Route>
              <Route path="/projects/brandidentity">
                <Projecta projecta={projeta} />
              </Route>
              <Route path="/services/pscreative">
                <Pscreative />
              </Route>
              <Route path="/services/psdigital">
                <Psdigital />
              </Route>
              <Route path="/services/psgzik">
                <Psgzik />
              </Route>
              <Route path="/services/afrijeunetv">
                <Afrijeune />
              </Route>
              <Route exact path="/services">
                <ServicePage />
              </Route>
              <Route path="/projects">
                <ProjectsPage />
              </Route>
              <Route path="/missafrijeune">
                <MissAfrijeune />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
              <Route exact path="/">
                <HomePage loading={loading} />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
            <ScrollToTop />
            <Footer />
          </Router>
          {/* )} */}
        </div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
