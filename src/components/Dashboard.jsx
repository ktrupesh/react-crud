import React from 'react'

function Dashboard() {
    return (
        <>
            <section className=' m-0'>
                <div className="container my-2">
                    <h2>Welcome Addmin</h2>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="content">
                                <h4>Totle Product</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, labore.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content">
                                <h4>Totle User</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, labore.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content">
                                <h4>Totle Category</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, labore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard