import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contact } from "./pages/contact"
import { Home } from "./pages/home"
import { Initial } from "./pages/initial"
import { Login } from "./pages/login"
import { Profile } from "./pages/profile"
import { Signup } from "./pages/signup"
import './miragejs';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
