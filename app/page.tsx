import Projectmanage from "./components/projectmanage";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Worktogether from "./components/worktogether";
import Extension from "./components/Extension";
import Customization from "./components/Customize";
import Apportunity from "./components/Apportunity";
import Sponsers from "./components/sponsers";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Projectmanage/>
    <Worktogether/>
    <Extension/>
    <Customization/>
    <Apportunity/>
    <Sponsers/>
    <Footer/>
    
   </div>
  );
}