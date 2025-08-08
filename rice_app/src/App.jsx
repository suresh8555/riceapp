import React from 'react'
import Approutes from './routes/Approutes'
import Footer from './components/common/Footer'

// import Header from './components/admin/Header'
// import Sidebar from './components/admin/Sidebar'


// import { Outlet } from 'react-router-dom'
// import StatsCard from './components/admin/cards/StatsCard'

// import Graphbar from './components/admin/cards/graphbar'
// import OrdersTable from './components/admin/tables/OrdersTable'


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
            <OrdersTable />

            <Outlet />
          </div>
        </main>
      </div>  */}


     
      
  
    <Footer/> 



    </>
  )
}

export default App