import React from 'react'
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom'//to apply routing
import { Suspense } from 'react'//fallback ui (like loading spinner etc....)
// import useAuth from '../store/context/AuthContext'
import { useAuth } from '../store/context/AuthContext'
import PrivateRoutes from './PrivateRoutes'// route_Gaurd
import Navbar from '../components/common/Navbar'

let Home = React.lazy(() => import("../pages/users/Home"))
let About = React.lazy(() => import("../pages/users/About"))
let Blog = React.lazy(() => import("../pages/users/Blog"))
let Contact = React.lazy(() => import("../pages/users/Contact"))
// let HomeCardScroll = React.lazy(()=>import("../pages/users/HomeCardScroll"))
// let HomeScrollba = React.lazy(()=>import("../pages/users/HomeScrollbar"))
let Profile = React.lazy(() => import("../pages/users/Profile"))
let Shop = React.lazy(() => import("../pages/users/Shop"))
let PrivacyPolicy = React.lazy(() => import("../pages/users/PrivacyPolicy"))
let TermsAndConditions = React.lazy(() => import("../pages/users/TermsAndConditions"))


let AdminLayout = React.lazy(() => import("../layouts/admin/AdminLayout"))
let VanderDashboard = React.lazy(() => import("../layouts/vendor/VanderDashboard"))
let Cart = React.lazy(() => import("../components/common/Cart"))
let Footer = React.lazy(() => import("../components/common/Footer"))
let Orders = React.lazy(() => import("../components/common/Orders"))
let PageLoader = React.lazy(() => import("../components/common/PageLoader"))
let PageNotFound = React.lazy(() => import("../components/common/PageNotFound"))
let Unauthorized = React.lazy(() => import("../components/common/Unauthorized"))
// let Login = React.lazy(()=>import("../pages/auth/Login"))
let AuthPage = React.lazy(() => import("../pages/auth/Login"))



const Approutes = () => {

  //access the context of the user like authenticated
  let { isAuthenticated, role } = useAuth()

  //uselocation hook to access the current url path
  let location = useLocation()
  //  console.log(url)

  let hideNavbar = ['/auth',"/admin"]
  let shouldHideNav = hideNavbar.includes(location.pathname)//returns the true or false values


  return (
    <>
      {!shouldHideNav && <Navbar />}
      <Suspense fallback={<div className="spinner-border"><span className="visually-hidden">Loading...</span></div>}>

        <Routes>

          {/* public Routes */}
          <Route path="/" element={<Navigate to={"/shop"} replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />


          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />





          {/* auth Routes (Roll based access) */}
          {/* after authenticated path will be like localhost:5173/admin  localhost:5174/vendor localhost:5175/public */}
    <Route path="/auth" element={
        isAuthenticated?(`/${role=="vendor"?"vendor":role=="admin"?"admin":"shop"}`)
        :(<AuthPage/>)}> 
       </Route>

          {/* Protected Routes (denied access to all user before login) */}
          <Route element={<PrivateRoutes allowedUser={["public", "admin", "vendor"]} />}>
            <Route path='/cart' element={<Cart />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<PrivateRoutes allowedUser={["admin"]} />}>
            <Route path='/admin' element={<AdminLayout />} />
          </Route>

          {/* Vender Routes */}

          <Route element={<PrivateRoutes allowedUser={["vendor"]} />}>
            <Route path='/vendor' element={<VanderDashboard />} />
          </Route>
          {/* fallback Routes */}
          <Route path="*" element={<PageNotFound />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

        </Routes>

      </Suspense>
    </>
  )
}

export default Approutes;
