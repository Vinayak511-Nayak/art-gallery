import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import Card from "./component/Card";
import Card_data from "./helper/Carddata";
import Culture from "./component/Culture";
import Classification from "./component/Classification";
import Period from "./component/Period";
import Place from "./component/Place";
import Century from "./component/Century";
import Object from "./component/Object";
import { FaChevronDown } from "react-icons/fa";
import { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Redirect,
  Link,
  useNavigate,
  Router,
} from "react-router-dom";
// Inside App component
function App() {
  const combinedData = Card_data();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      // If the clicked dropdown is already open, close it
      setOpenDropdown(null);
    } else {
      // Otherwise, open the clicked dropdown
      setOpenDropdown(dropdownName);
    }
  };
  // Event listener for scroll events
  return (
    <div className="homepage">
      <BrowserRouter>
        <div className="navbar-container">
          <nav className="navbar">
            <img className="logo" src="/art-gallery-logo.jpg" alt="logo" />
            <div className="dropdown">
              <button
                className={`dropbttn ${
                  openDropdown === "Culture" ? "open" : ""
                }`}
                onClick={() => toggleDropdown("Culture")}
              >
                Culture <FaChevronDown />
              </button>
              <div
                className={`dropdown-content ${
                  openDropdown === "Culture" ? "open" : ""
                }`}
              >
                <a>
                  <Link to="/culture/Swedish" className="nav-button">
                    Swedish
                  </Link>
                </a>
                <a>
                  <Link to="/culture/Assyrian" className="nav-button">
                    Assyrian
                  </Link>
                </a>
                <a>
                  <Link to="/culture/Spanish Colonial" className="nav-button">
                    Spanish Colonial
                  </Link>
                </a>
                <a>
                  <Link to="/culture/Armenian" className="nav-button">
                    Armenian
                  </Link>
                </a>
                <a>
                  <Link to="/culture/Indonesian" className="nav-button">
                    East Asian
                  </Link>
                </a>
                <a>
                  <Link to="/culture/Pre-Columbian" className="nav-button">
                    Colombian
                  </Link>
                </a>
                <a>
                  <Link to="/culture/Crusader" className="nav-button">
                    Crusader
                  </Link>
                </a>
                <a>
                  <Link to="/culture/Norman" className="nav-button">
                    Norman
                  </Link>
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className={`dropbttn ${
                  openDropdown === "Century" ? "open" : ""
                }`}
                onClick={() => toggleDropdown("Century")}
              >
                Century <FaChevronDown />
              </button>
              <div
                className={`dropdown-content ${
                  openDropdown === "Century" ? "open" : ""
                }`}
                onClick={() => toggleDropdown("Century")}
              >
                <a>
                  <Link to="/century/16th century BCE" className="nav-button">
                    16th century BCE
                  </Link>
                </a>
                <a>
                  <Link to="/century/15th century BCE" className="nav-button">
                    15th century BCE
                  </Link>
                </a>
                <a>
                  {" "}
                  <Link to="/century/13th century BCE" className="nav-button">
                    13th century BCE
                  </Link>
                </a>
                <a>
                  {" "}
                  <Link to="/century/12th century BCE" className="nav-button">
                    12th century BCE
                  </Link>
                </a>
                <a>
                  {" "}
                  <Link to="/century/11th century BCE" className="nav-button">
                    11th century BCE
                  </Link>
                </a>
                <a>
                  {" "}
                  <Link to="/century/10th century BCE" className="nav-button">
                    10th century BCE
                  </Link>
                </a>
                <a>
                  {" "}
                  <Link to="/century/9th century BCE" className="nav-button">
                    9th century BCE
                  </Link>
                </a>
                <a>
                  {" "}
                  <Link to="/century/8th century BCE" className="nav-button">
                    8th century BCE
                  </Link>
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className={`dropbttn ${
                  openDropdown === "Classification" ? "open" : ""
                }`}
                onClick={() => toggleDropdown("Classification")}
              >
                Classification <FaChevronDown />
              </button>
              <div
                className={`dropdown-content ${
                  openDropdown === "Classification" ? "open" : ""
                }`}
                onClick={() => toggleDropdown("Classification")}
              >
                <a>
                  <Link to="/classification/Albums" className="nav-button">
                    Albums
                  </Link>
                </a>
                <a>
                  <Link to="/classification/Amulets" className="nav-button">
                    Amulets
                  </Link>
                </a>
                <a>
                  <Link to="/classification/Sculpture" className="nav-button">
                    Sculpture
                  </Link>
                </a>
                <a>
                  <Link to="/classification/Drawings" className="nav-button">
                    Drawings
                  </Link>
                </a>
                <a>
                  <Link to="/classification/Furniture" className="nav-button">
                    Furniture
                  </Link>
                </a>
                <a>
                  <Link to="/classification/Gems" className="nav-button">
                    Gems
                  </Link>
                </a>
                <a>
                  <Link to="/classification/Prints" className="nav-button">
                    Prints
                  </Link>
                </a>
                <a>
                  <Link to="/classification/Paintings" className="nav-button">
                    Paintings
                  </Link>
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className={`dropbttn ${
                  openDropdown === "Period" ? "open" : ""
                }`}
                onClick={() => toggleDropdown("Period")}
              >
                Period <FaChevronDown />
              </button>
              <div
                className={`dropdown-content ${
                  openDropdown === "Period" ? "open" : ""
                }`}
              >
                <a>
                  <Link to="/period/1304" className="nav-button">
                    Jōmon period
                  </Link>
                </a>
                <a>
                  <Link to="/period/Iron Age" className="nav-button">
                    Iron Age
                  </Link>
                </a>
                <a>
                  <Link to="/period/3765" className="nav-button">
                    Zangid period
                  </Link>
                </a>
                <a>
                  <Link to="/period/Middle Ages" className="nav-button">
                    Middle Ages
                  </Link>
                </a>
                <a>
                  <Link to="/period/Modern" className="nav-button">
                    Modern
                  </Link>
                </a>
                <a>
                  <Link to="/period/New Kingdom" className="nav-button">
                    New Kingdom
                  </Link>
                </a>
                <a>
                  <Link to="/period/2702" className="nav-button">
                    Shaybanid period
                  </Link>
                </a>
                <a>
                  <Link to="/period/1442" className="nav-button">
                    Song dynasty
                  </Link>
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className={`dropbttn ${openDropdown === "Place" ? "open" : ""}`}
                onClick={() => toggleDropdown("Place")}
              >
                Place <FaChevronDown />
              </button>
              <div
                className={`dropdown-content ${
                  openDropdown === "Place" ? "open" : ""
                }`}
              >
                <a>
                  <Link to="/place/Mauritius" className="nav-button">
                    Mauritius
                  </Link>
                </a>
                <a>
                  <Link to="/place/2036270" className="nav-button">
                    Itanosi
                  </Link>
                </a>
                <a>
                  <Link to="/place/South Africa" className="nav-button">
                    South Africa
                  </Link>
                </a>
                <a>
                  <Link to="/place/2035580" className="nav-button">
                    Rhegion
                  </Link>
                </a>
                <a>
                  <Link to="/place/2036824" className="nav-button">
                    Rhaukosi
                  </Link>
                </a>
                <a>
                  <Link to="/place/West Africa" className="nav-button">
                    West Africa
                  </Link>
                </a>
                <a>
                  <Link to="/place/2035699" className="nav-button">
                    Philippi
                  </Link>
                </a>
                <a>
                  <Link to="/place/2036142" className="nav-button">
                    Neapolis
                  </Link>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Card combinedData={combinedData} />} />
          <Route path="/culture/:cultureName" element={<Culture />} />
          <Route path="/century/:centuryName" element={<Century />} />
          <Route
            path="/classification/:classificationName"
            element={<Classification />}
          />
          <Route path="/object/:objectid" element={<Object />} />
          <Route path="/period/:periodName" element={<Period />} />
          <Route path="/place/:placeName" element={<Place />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
