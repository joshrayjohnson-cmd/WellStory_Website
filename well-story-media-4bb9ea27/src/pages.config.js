import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ContentProduction from './pages/ContentProduction';
import LiveProduction from './pages/LiveProduction';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Contact": Contact,
    "ContentProduction": ContentProduction,
    "LiveProduction": LiveProduction,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};