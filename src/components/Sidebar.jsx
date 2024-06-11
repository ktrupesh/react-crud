import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {

  const Sidebar = {
    height: "100vh",
    background : "#000"
  }

  return (
    <>
      <section className='adminsidebar' style={Sidebar}>
        <div className="container-fluid m-0">
          <ul className=' m-0 p-0 pt-5'>
            <li className=' my-2'><Link className=' text-white fw-bolder' to='/'>Nandani Dashboard</Link></li>
            <li className=' my-2 dropdown'>
              <Link className=' dropdown-toggle text-white fw-bolder' data-bs-toggle='dropdown'>
                <span>Product</span>
              </Link>
              <ul className=' p-0 m-0 dropdown-menu bg-white p-2 text-white'>
                <li>
                  <Link className=' text-black fw-bolder' to='/allproduct'>Manage Customers</Link>
                </li>
                <li>
                  <Link className=' text-black fw-bolder' to='/addproduct'>Add New</Link>
                </li>
              </ul>
            </li>
            <li className=' my-2'><Link className=' text-white fw-bolder' to='/mansitem'>Add Event</Link></li>
            <li className=' my-2'><Link className=' text-white fw-bolder' to='/Womanesitem'>Add Chefs</Link></li>
            <li className=' my-2'><Link className=' text-white fw-bolder' to='/kidsitem'>Manage Contact</Link></li>
            <li className=' my-2'><Link className=' text-white fw-bolder' to='/addproduct'>Add Food</Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Sidebar