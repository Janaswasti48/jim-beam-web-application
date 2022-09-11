import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";

export const publicRoutes = [
    {'path': '/', 'name': 'Home', Component : Home },
    {'path': '/about', 'name': 'About', Component : About },
    {'path': '/signin', 'name': 'Signin', Component : Signin },
    {'path': '/services', 'name': 'Services', Component : Services },
    {'path': '/contact', 'name': 'Contact', Component : Contact },
    {'path': '/signup', 'name': 'Signup', Component : Signup },

  ]