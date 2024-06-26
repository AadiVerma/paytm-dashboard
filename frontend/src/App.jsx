import Dashboard from "./Pages/Dashboard"
import Send from "./Pages/Send"
import SignIn from "./Pages/Signin"
import Signup from "./Pages/Signup"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/send" element={<Send/>} />
        </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
