import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./DefaultLayout"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
        <Route path="/" element = {<h1>HomePage</h1>} />
        <Route path="/books" element = {<h1>BooksPage</h1>} />
        <Route path="/books/:id" element = {<h1>BookPage</h1>} />
        <Route path="*" element = {<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
