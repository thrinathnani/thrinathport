
import './App.css'
import About from './cmponensts/content/About'
import Nanii from './cmponensts/main/Nanii'
import Navbar from './cmponensts/Thri/Navbar'
import Skills from './cmponensts/skills/skills'
import Achievments from './cmponensts/Achievments/Achievments'
import Project from './cmponensts/Projects/Project'
import Contact from './cmponensts/Contact/Contact'



function App() {
  return (
    <>
      <div>
        <Navbar />
        <Nanii />
        <About />
        <Skills />
        <Achievments />
        <Project/>
        <Contact />
         </div>
    </>
  )
}
export default App
