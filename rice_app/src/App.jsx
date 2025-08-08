import React from 'react'
import Approutes from './routes/Approutes'
import Footer from './components/common/Footer'

// import Header from './components/admin/Header'
// import Sidebar from './components/admin/Sidebar'


// import { Outlet } from 'react-router-dom'
// import StatsCard from './components/admin/cards/StatsCard'

// import Graphbar from './components/admin/cards/graphbar'
// import OrderTable from './components/admin/tables/OrdersTabe'


const App = () => {
  return (
    <>
      

      <Approutes/> 

      {/* <Header />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1 p-4 bg-light">

          <div className="mt-4">
            <StatsCard />
            <Graphbar />
            <OrderTable />

            <Outlet />
          </div>
        </main>
      </div> */}


      {/* <div>
      {/* Top Navbar */}
      {/* <Header /> */}

      {/* Page Content */}
      {/* <div className="container-fluid">
        <div className="row flex-nowrap"> */}
          {/* Sidebar */}
          {/* <div className="col-auto p-0 d-none d-lg-block">
            <Sidebar />
          </div> */}

          {/* Main Content */}
          {/* <main className="col px-3 py-4">
            <StatsCard />
            <Graphbar />
            <OrderTable/>
          </main>
        </div> */}
      {/* </div> */}
    {/* </div> */} 
      
  
    {/* <Footer/>  */}



    </>
  )
}

export default App