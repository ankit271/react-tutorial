import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Admin from "./components/admin/Admin";
import Settings from "./components/admin/Settings";
import Users from "./components/admin/Users";
import Welcome from "./components/welcome";
import Memo from "./components/Memo";

function App() {

   

    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="user/:id" element={<User />}></Route>
            <Route path="welcome" element={<Welcome />}></Route>
            <Route path="memo" element={<Memo />}></Route>
            <Route path="*" element={<NotFound />}></Route>

            <Route path="admin" element={<Admin />}>
              <Route path="settings" element={<Settings />}></Route>
              <Route path="users" element={<Users />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );

}


export default App;
