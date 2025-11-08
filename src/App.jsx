import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./DefaultLayout"

//import data
import menu from "./data/menu"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout menu = {menu}/>}>
            <Route path="/" element={<h1>HomePage</h1>} />
            <Route path="/movies" element={<h1>MoviesPage</h1>} />
            <Route path="/movies/:id" element={<h1>MoviePage</h1>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
