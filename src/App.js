import Home from "./Screens/Home"
import Programs from "./Screens/Programs2"
import Podcast from "./Screens/Podcast"
import Contacts from "./Screens/Contacts"
import Navbar from "./components/Navbar"
import styles from "./App.module.css"
import Comment from './components/SistemComment/Comment'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/Podcast" exact Component={Podcast}/>
          <Route path="/Programas" exact Component={Programs}/>
        </Routes>
        <Comment/>
        <Contacts />
      </Router>
    </div>
  );
}
export default App;
