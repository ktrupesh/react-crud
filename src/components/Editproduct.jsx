import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Swal from 'sweetalert2'

function Editproduct() {

    const [data, setData] = useState([]);
    const Navigate = useNavigate();
    const { id } = useParams();

    const foodname=useRef("");
    const img = useRef("");
    const qty = useRef("");
    const oldprice = useRef("");
    const newprice = useRef("");
    const descriptions = useRef("");
    const date = useRef("");

    useEffect(() => {
        axios.get(`http://localhost:3000/Product/${id}`).then((response) => {
            setData(response.data);
            foodname.current.value = response.data.foodname;
            img.current.value = response.data.img;
            qty.current.value = response.data.qty;
            oldprice.current.value = response.data.oldprice;
            newprice.current.value = response.data.newprice;
            descriptions.current.value = response.data.descriptions;
            date.current.value = response.data.date;
        })
    }, [id])


    const UpdateProduct = () => {
        var update = {
            foodname: foodname.current.value,
            img: img.current.value,
            qty: qty.current.value,
            oldprice: oldprice.current.value,
            newprice: newprice.current.value,
            descriptions: descriptions.current.value,
            date: date.current.value,
        }

        axios.put(`http://localhost:3000/Product/${id}`, update).then(() => {
            Swal.fire({
                title: "Product is Update",
                text: "Thanks for Updated your category",
                icon: "success"
            });
            Navigate(`/allproduct`);
        })
    }

    return (
        <>
            <Header />
            <section>
                <div className="container-fluid m-0">
                    <div className="row">
                        <div className="col-md-2 p-0">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="content">
                                <form action="" className=' m-5'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-group flex-column my-3">
                                                <label className=' my-2' htmlFor="name">Enter Food Menu</label>
                                                <input type="text" ref={foodname} name="name" id="name" className='w-50 form-control rounded-0' placeholder='name' required autoComplete='off' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group flex-column my-3">
                                                <label className=' my-2' htmlFor="date">Enter Food image Url</label>
                                                <input type="text" ref={img} name="img" id="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group flex-column my-3">
                                                <label className=' my-2' htmlFor="name">Select Qty</label>
                                                <input type='number' ref={qty} name="name" id="name" className='w-50 form-control rounded-0' placeholder='name' required autoComplete='off' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group flex-column my-3">
                                                <label className=' my-2' htmlFor="name">Enter Old Price</label>
                                                <input type="text" ref={oldprice} name="name" id="name" className=' w-50 form-control rounded-0' placeholder='name' required autoComplete='off' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group flex-column my-3">
                                                <label className=' my-2' htmlFor="name">Enter New Price</label>
                                                <input type="text" ref={newprice} name="name" id="name" className='w-50 form-control rounded-0' placeholder='name' required autoComplete='off' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group flex-column my-3">
                                                <label className=' my-2' htmlFor="name">Descriptions</label>
                                                <textarea name="" ref={descriptions} className=' p-4 border-0 border-bottom  border-black' placeholder='messgess' ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="input-group flex-column my-3">
                                                <label className=' my-2' htmlFor="name">Add Date</label>
                                                <input type="date" name="date" ref={date} id="" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-btn">
                                        <button type='submit' onClick={UpdateProduct} className=' btn btn-primary p-2'>Update Categrory</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Editproduct