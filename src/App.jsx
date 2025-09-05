import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";  
import Courses from "./pages/Courses"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact";  
import CourseCard from "./components/CourseCard";
import SkillsSection from "./components/SkillsSection";
import SubjectsSection from "./components/SubjectsSection";
import OutcomesSection from "./components/OutcomesSection";
import ExpertsSection from "./components/ExpertsSection";


//here import course date 
import courseData from "./data/courseData.js";

function App() {  
  return ( 
    <Router> 
      <Header />  
      
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/courses" element={<Courses />} />  
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />  
      </Routes> 
       <CourseCard courses={courseData} />
      <SkillsSection />
      <SubjectsSection />
      <OutcomesSection />
      <ExpertsSection />
      <Footer /> 
      
    </Router> 
    
  ); 
}

export default App;
