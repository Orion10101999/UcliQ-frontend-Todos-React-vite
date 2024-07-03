import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import ShowTodos from "./pages/ShowTodos";
import DeleteTodo from "./pages/DeleteTodo";
import UpdateTodo from "./pages/UpdateTodo";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/showtodos" element={<ShowTodos/>}/>
      <Route path="/delete/:id" element={<DeleteTodo />} />
        <Route path="/update/:id" element={<UpdateTodo />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}