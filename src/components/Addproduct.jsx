import React , {useRef , useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Header from './Header'
import Sidebar from './Sidebar'


function Addproduct() {

    const foodname=useRef("");
    const img = useRef("");
    const qty = useRef("");
    const oldprice = useRef("");
    const newprice = useRef("");
    const descriptions = useRef("");
    const date = useRef("");

    const AddCategrory = (e) =>{
        e.preventDefault();
        
        var insert = {
            foodname : foodname.current.value,
            img : img.current.value,
            qty : qty.current.value,
            oldprice : oldprice.current.value,
            newprice : newprice.current.value,
            descriptions : descriptions.current.value,
            date : date.current.value,
        }

        axios.post(`http://localhost:3000/Product` , insert).then(( ) => {
            Swal.fire({
                title: "Add Product",
                text: "Thanks for added your Product",
                icon: "success"
            });
        })
        e.target.reset();
    }

    return (
        <>
            <Header/>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 p-0">
                            <Sidebar/>
                        </div>
                        <div className="col-md-10">
                            <div className="title mx-5 py-2">
                                <h4>Add Food</h4>
                            </div>
                            <div className="addform">
                                <form action="" className=' m-5' onSubmit={AddCategrory}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-group flex-column my-3">
                                            <label className=' my-2' htmlFor="name">Enter Food Menu</label>
                                            <input type="text" ref={foodname}  name="name" id="name" className='w-50 form-control rounded-0'  placeholder='name' required autoComplete='off'/>
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
                                            <input  type='number' ref={qty}  name="name" id="name" className='w-50 form-control rounded-0'  placeholder='name' required autoComplete='off'/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group flex-column my-3">
                                            <label className=' my-2' htmlFor="name">Enter Old Price</label>
                                            <input type="text" ref={oldprice}  name="name" id="name" className=' w-50 form-control rounded-0'  placeholder='name' required autoComplete='off'/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group flex-column my-3">
                                            <label className=' my-2' htmlFor="name">Enter New Price</label>
                                            <input type="text" ref={newprice}  name="name" id="name" className='w-50 form-control rounded-0'  placeholder='name' required autoComplete='off'/>
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
                                            <input type='datetime-local' name="date" ref={date} id="" required />
                                        </div>
                                    </div>
                                </div>
                                    <div className="input-btn">
                                        <button type='submit' className=' btn btn-primary p-2'>Add Foode</button>
                                        <input type="reset" value='Reset' className=' px-4 py-2 bg-danger text-white border-0 rounded-2 mx-3' />
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

export default Addproduct