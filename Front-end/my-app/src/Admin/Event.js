import { useState } from "react";
import axios from "axios";
import logo from '../imgs/Drum.jpg'
const Event = () => {

  const [Eventname,SetEventname] = useState('')
  const [EventDescription,SetEventDescription] = useState('')
  const [startdate,Setstartdate] = useState(new Date().getDate())
  const [enddate,Setenddate] = useState(new Date())
  const [url,seturl] = useState('')
  const [remove,setremover] = useState('')
  const handleUpload = async e =>{
    e.preventDefault()
  
    try {
        const file = e.target.files[0]     
        if(!file) return alert("File not exist.")
        if(file.size > 1024 * 1024) // 1mb
            return alert("Size too large!")
        if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
            return alert("File format is incorrect.")
        let formData = new FormData()
        formData.append('file', file)
 //       setLoading(true)
        const res = await axios.post('http://localhost:4500/photo', formData);
      //  setLoading(false)
      console.log(res.data)
      setremover(res.data.public_id)
      seturl(res.data.url)
      //  setImages(res.data)

    } catch (err) {
        alert(err.response.data.msg)
    }
}

const handleDestroy = async () => {
    try {
   //     setLoading(true)
        await axios.post('http://localhost:4500/destory', {"public_id":remove}, {
        })
        seturl('')
  //      setLoading(false)
  //      setImages(false)
    } catch (err) {
        alert(err.response.data.msg)
    }
}
  const AddEvent = () => {
    const responseData = axios.post("http://localhost:4500/EventDetails", {enddate,startdate,Eventname,EventDescription})
      window.location.href = "/"


  };
  return (


    
    <div className="container-fluid p-5  text-white text-center bg-info bg-gradient p-5">
                <img className='rounded-circle' src={logo}  height={250}   alt="hi" />
                <div> 
                <form className='row text-center align-center' >  
              


                <div className="col-md-3"/>
                        <div className='col-sm-12 col-md-6 mb-3 mt-3 mb-3 mt-3 '>
                            <h1 className="bg-primary border border-dark"> Add Event</h1>
                        </div>
                    
                        <div className="col-md-3"/>           
                       <div className="col-md-3"/>
                        <div className='col-sm-12 col-md-6 mb-3 mt-3 mb-3 mt-3 '>
                             <input  placeholder='enter event name' type="text" className='form-control' value={Eventname} onChange={(e)=>{SetEventname(e.target.value)}} />
                        </div>
                    
                        <div className="col-md-3"/>
                       


                              <div className="col-md-3"/>

                        <div className='col-sm-12 col-md-6 mb-3 mt-3'>
                            <textarea  placeholder='Enter event description' rows={4}  type="textarea"   className='form-control' value={EventDescription} onChange={(e)=>{SetEventDescription(e.target.value)}} />
                        </div>
                        <div className="col-md-3"/>
                        
                       
                        <div className="col-md-3"/>
                        <div className='col-sm-12 col-md-3 mb-3 mt-3 mb-3 mt-3 '>
                             <input  placeholder='ENTER eVENT name' type="date" className='form-control' value={startdate} onChange={(e)=>{Setstartdate(e.target.value)}} />
                        </div>
                    
                        <div className='col-sm-12 col-md-3 mb-3 mt-3 mb-3 mt-3 '>
                             <input  placeholder='ENTER eVENT name' type="date" className='form-control' value={enddate} onChange={(e)=>{Setenddate(e.target.value)}} />
                        </div>
                    
                        <div className="col-md-3"/>
                        
                        <div className="col-md-3"/>

<div className='col-sm-12 col-md-6 mb-3 mt-3'>
<button id="sub_btn" type="button" value="Register" className='form-control bg-success text-black'  onClick={AddEvent}>save</button>
</div>
<div className="col-md-2"/>
                    </form>
                </div>
            </div>    
  );
};
export default Event;