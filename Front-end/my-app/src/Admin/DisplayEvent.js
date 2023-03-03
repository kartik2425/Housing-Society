import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const DisplayEvents = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const stu_table = {
    marginTop: "20px",
  };
  useEffect(() => {
    axios
      .get("http://localhost:4500/EventDisplay")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const videoCall=()=>{
    navigate("/VideoCallHomePage");
  }
  const Chatting=()=>{
    navigate("/MainForm");
  }
  return (


    <div className="container-fluid p-5  text-white text-center bg-info bg-gradient p-5 ">
  <h1 className=" text-danger ">
     Event Details 
  </h1>

{
  data.map(val =>
    
//     <div key={val._id} class="card border-secondary mb-3" style="max-width: 18rem;">
//   <div class="card-header">{val.Eventname}</div>
//   <div class="card-body text-secondary">
//     <h5 class="card-title">{val.EventDescription}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
    <div key={val._id}  className='  hover_box container-fluid border  col-sm-12 col-md-10 col-lg-5 p-2 mt-3 text-center' >
    <div className=' container-fluid bg-white'>
       
        
      <h2 className="text-danger">
        {
          val.Eventname
        }
      </h2>
      <br/>
      <h3 className="text-secondary">
      {
          val.EventDescription
        }
       
      </h3>

      <h4 className="text-danger">
        start date :  {
          val.startdate
        }
      </h4>
      <h4 className="text-danger">
        End datae : 
        {
          val.enddate
        }
      </h4>

   

    </div>
   
  
    <div>
      <button className='hover_box btn btn-outline-warning'  onClick={()=>alert("welcome to "+val.Eventname)}>
        <h6> event title</h6>

      </button>
      </div>
</div>
  )
}



    
      
       
      <hr/>
      <h1>Video Conference</h1>
      {/* <div> */}
      <button type="button" onClick={videoCall} class="btn btn-primary">
            Video Conference
          </button>
          <hr/>
          <h1>Chatting</h1>
          <button type="button" onClick={Chatting} class="btn btn-primary">
            Chatting
          </button>


</div>

  );
};
export default DisplayEvents;