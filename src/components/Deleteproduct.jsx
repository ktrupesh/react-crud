import React ,  { useState , useEffect } from 'react'
import axios from 'axios'
import { useParams , useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Header from './Header'
import Sidebar from './Sidebar'

function Deleteproduct() {

    const [data, setData] = useState([]);
    const {id}=useParams();
    const Navigate = useNavigate();

    useEffect(() => {
        axios.delete(`http://localhost:3000/Product/${id}`).then((respones) => {
            setData(respones.data)
        });

        Swal.fire({
            title : "Delete",
            text : "Your Product is Deleted",
            icon : "error"

        })
        Navigate('/allproduct');
    })
    return (
        <>
            <Header/>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 m-0">
                            <Sidebar/>
                        </div>
                        <div className="col-md-10">
                            <div className="content">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Deleteproduct