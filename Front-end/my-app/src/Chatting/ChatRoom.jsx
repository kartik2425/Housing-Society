import { useRef } from "react";
import { useEffect, useState } from "react";
import Moment from 'react-moment';
import { useLocation } from "react-router-dom";
import {io} from "socket.io-client"
const ChatRoom = () => {
  const location = useLocation();
  const msgBoxRef=useRef();


  const [data, setData] = useState();
  const [msg, setMsg] = useState();
  const [socket,setSocket]=useState();
  const [allMessages, setMessages] = useState([]);

    useEffect(()=>{
        const socket =io("http://localhost:4500/Chatting");
        setSocket(socket);
        socket.on("connect",()=>{
            // console.log(socket.id); 
            socket.emit("joinRoom",location.state.room)
        });
    },[])
    
  useEffect(() => {
    setData(location.state);
    console.log(data);
  }, [location]);

  useEffect(()=>{
    if(socket){
      socket.on("getLatestMessage",newMessage=>{
        // console.log(newMessage);
        setMessages([...allMessages, newMessage]);
        msgBoxRef.current.scrollIntoView({behaviour:"smooth"})
        setMsg("");
      })
    }
  },[socket,allMessages])


  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const handleEnter=e=>e.keyCode ===13 ? onSubmit() : ""

  const onSubmit = () => {
    if(msg){
      const newMessage = { time: new Date(), msg, name: data.name };
      socket.emit("newMessage",{newMessage,room:data.room});
    }
    // setMessages([...allMessages, newMessage]);
  };

  return (
    <div className="py-4 m-5 w-50 shadow bg-white  text-dark border rounded container">
      <div className="text-center px-3 mb-4 text-capitalize">
        <h1 className="text-warning mb-4">Chat Room</h1>
      </div>
      <div
        className="bg-light border rounded p-3 mb-4 "
        style={{ height: "450px", overflowY: "scroll" }}
      >
        {allMessages.map((msg) => {
          return data.name === msg.name ? (
            <div className="row justify-content-end pl-5">
              <div className="d-flex flex-column align-items-end m-2 shadow p-2  bg-info border rounded w-auto">
                <div>
                  <strong className="m-1">{msg.name}</strong>
                  <small className="text-muted"><Moment fromNow>{msg.time}</Moment></small>
                </div>
                <h4 className="m-1">{msg.msg}</h4>
              </div>
            </div>
          ) : (
            <div className="row justify-content-start">
              <div className="d-flex flex-column m-2 p-2 shadow bg-white border rounded w-auto ">
                <div>
                  <strong className="m-1">{msg.name}</strong>
                  <small className="text-muted m-1"><Moment fromNow>{msg.time}</Moment></small>
                </div>
                <h4 className="m-1">{msg.msg}</h4>
              </div>
            </div>
          );
        })}
      </div>

        <div ref={msgBoxRef}></div>


      <div className="form-group d-flex">
        <input
          type="text"
          className="form-control bg-light"
          name="message"
          value={msg}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder="Type your Message"
        />
        <button
          type="button "
          className="btn btn-warning mx-2"
          onClick={onSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
