import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import InnerContact from './components/InnerContact.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import User from './components/User.jsx'
import Github, { gitApi } from './components/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         element:<Contact/>,
//         children:[{
//           path:"contact ",
//           element:<Contact/>,
//         },
//       {
//         path:"/innercontact",
//             element:<InnerContact/>

//       }]
       
     
        
          
        
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route
      loader={gitApi}
      path='github' element={<Github/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
