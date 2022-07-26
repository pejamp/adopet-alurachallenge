import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Initial } from "./pages/initial"
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
