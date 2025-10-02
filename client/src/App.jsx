import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/blog'
import Layout from './pages/admin/Layout'
import DashBoard from './pages/admin/DashBoard'
import AddBlog from './pages/admin/AddBlog'
import Comments from './pages/admin/Comments'
import ListBlog from './pages/admin/ListBlog'
import Login from './component/admin/Login'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'




const App = () => {

  const { token } = useAppContext();
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/admin' element={token?<Layout/>: <Login/>}>
          <Route index element={<DashBoard/>}/>
          <Route path='addBlog' element={<AddBlog/>}/>
          <Route path='listblog' element={<ListBlog/>}/>
          <Route path='comments' element={<Comments/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
