import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import AdminLayout from "./layout/AdminLayout"

//import data
import menu from "./data/menu"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import MoviePage from "./pages/MoviePage"
import Dashboard from "./pages/Admin/Dashboard"
import MovieCreate from "./pages/Admin/MovieCreate"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout menu = {menu}/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/movies" element={<MoviesPage/>} />
            <Route path="/movies/:id" element={<MoviePage/>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
          <Route element={<AdminLayout menu = {menu}/>}>
            <Route path="/admin" element={<Dashboard/>} />
            <Route path="/admin/movies/create" element={<MovieCreate/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
