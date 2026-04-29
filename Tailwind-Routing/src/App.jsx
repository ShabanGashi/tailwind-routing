import About from "./pages/About"
import Contact from "./pages/Contact"
import Notfound from "./pages/Notfound"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Courses from "./pages/Courses"

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
