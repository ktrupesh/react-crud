import React , {useState , useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import Sidebar from '../Sidebar'


function Allproduct() {

    const [data , setData] = useState([]);
    const Navigate =useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3000/Product`).then((respons) => {
            setData(respons.data)
        })
    })
    return (
        <>
            <Header/>
            <section>
                <div className="container-fluid m-0">
                    <div className="row">
                        <div className="col-md-2 p-0">
                            <Sidebar/>
                        </div>
                        <div className="col-md-10">
                            <h2 className=' m-3 py-3'>All Product</h2>
                            <div className=' text-end my-5'>
                            <Link className=' p-3 bg-success text-white' to='/addproduct'>Add New</Link>
                            </div>
                            <div className="content mx-3">
                                <table className=' table table-responsive  table-striped p-4'>
                                    <tr>
                                        <th>Id</th>
                                        <th>FoodName</th>
                                        <th>Image</th>
                                        <th>Qty</th>
                                        <th>Oldprice</th>
                                        <th>Newprice</th>
                                        <th>Descriptions</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>

                                    {
                                        data && data.map((item , index) => {
                                            return(
                                                <>
                                                    <tr key={item.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.foodname}</td>
                                                        <td style={{width : "20%"}}><img src={item.img} alt=""  className=' img-fluid w-25 h-25'/></td>
                                                        <td>{item.qty}</td>
                                                        <td>{item.oldprice}</td>
                                                        <td>{item.newprice}</td>
                                                        <td>{item.descriptions}</td>
                                                        <td>{item.date}</td>
                                                        <td >
                                                            <button type='button' className='btn btn-sm bg-danger my-2 text-white fw-bolder btn-danger' onClick={() => Navigate(`/deleteproduct/${item.id}`)}>Delete</button>
                                                            {" "}<button type='button' className='btn btn-sm bg-primary my-2 text-white fw-bolder ' onClick={() => Navigate(`/editproduct/${item.id}`)} >Edit</button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Allproduct