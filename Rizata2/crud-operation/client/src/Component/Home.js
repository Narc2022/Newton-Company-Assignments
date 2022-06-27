import React, { useState, useEffect } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';


const Home = () => {
    const [getUserdata, setUserdata] = useState([]);
    


    const getdata = async () => {

        const res = await fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {

            console.log("error");
        } else {
            setUserdata(data);
            console.log("get data")
        }
    }
    useEffect(() => {
        getdata();
    }, [])

    return (
        <div className='mt-5' >
            <div className='container'>
                <div className='add_btn mt-2 mb-2'>
                    <NavLink to="/register" className='btn btn-primary'>+ Add data</NavLink>
                </div>
                <table className="table">
                    <thead>
                        <tr className='table-voilet'>
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getUserdata.map((element, id) => {
                                return (
                                    < >
                                        <tr >
                                            <th scope="row">{id+1}</th>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>{element.work}</td>
                                            <td>{element.mobile}</td>
                                            <td className='d-flex justify-content-between'>
                                              <NavLink to={`view/${element._id}`}><button className='btn btn-success'><RemoveRedEyeIcon /></button></NavLink>  
                                              <NavLink to={`edit/${element._id}`}><button className='btn btn-primary'><EditIcon /></button></NavLink>  
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home