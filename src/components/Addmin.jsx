import React from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import Sidebar from './Sidebar'
// import Footer from './Footer'

function Addmin() {
    return (
        <>
            {/* header  */}
            <Header/>
            <section className=''>
                <div className="container m-0">
                    <div className="row">
                        <div className="col-md-2 m-0 p-0">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10">
                        <Dashboard/>
                    </div>
                    </div>
                </div>
            </section>
            {/* <Footer/> */}
        </>
    )
}

export default Addmin