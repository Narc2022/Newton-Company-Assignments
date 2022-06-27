import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Edit = () => {
    const [inpval, setINP] = useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        add:"",
        desc:""
      })
       const setdata = (e) =>{
           console.log(e.target.value);
           const {name,value} =e.target;
           setINP((preval)=>{
               return{
                   ...preval,
                   [name]:value
               }
           }
        )
       }
  return (
    <div className='container'>
        <NavLink to="/">Home</NavLink>
            <form className='mt-4'>
                <div className='row'>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label" >Email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" className="form-control" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Age</label>
                        <input type="number" value={inpval.age} onChange={setdata} name="age" className="form-control" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Mobile</label>
                        <input type="number" value={inpval.mobile} onChange={setdata} name='mobile' className="form-control" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Work</label>
                        <input type="text" value={inpval.work} onChange={setdata} name='work' className="form-control" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Address</label>
                        <input type="text" value={inpval.add} onChange={setdata} name='add' className="form-control" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label className="form-label">Description</label>
                        <textarea name="desc" value={inpval.desc} onChange={setdata} className='form-control' cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
    </div>
  )
}

export default Edit