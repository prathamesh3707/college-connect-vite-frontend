import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Clubs from "./pages/Clubs";
import Profile from "./pages/Profile";
import AllResources from "./pages/resources/AllResources";
import Marketplace from "./pages/marketplace/Marketplace";
import Admin from "./components/Admin";
import Contests from "./components/Contests";
// import Sections from "./components/Sections";
import Discussions from "./components/Discussions";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {




  
  return (
    <div>
      <Navbar />
      {/* <Admin /> */}
      <Routes>
        <Route path="/" element= { <Home/>}/>
         
        <Route path="/marketplace" element= { <Marketplace />}/>

        <Route path="/allresources" element= { <AllResources />}/>
         
        <Route path="/discussions" element= { <Discussions />}/>
          
        <Route path="/profile" element= { <Profile />}/>
         
        <Route path="/contests" element= { <Contests />}/>
         
        <Route path="/clubs" element= { <Clubs />}/>
         
        <Route
          path="/placements"
          component={() => {
            window.open("https://rvce.edu.in/placement-statistics");
          }}
        />
      </Routes>

      {/* <Sections /> put in home */}
    </div>
  );
}

export default App;
