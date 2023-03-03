import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { now } from "moment/moment";
const RoomPage=()=>{
    const {roomId}=useParams();
    const myMetting=async(element)=>{
        try{
        const appID=1007991105;
        const serverSecret="86da691b649ef839e3bd609177292461";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,Date.now().toString(), "Kartik Reddy");
                                                                                                                                                
            console.log("This is my token",kitToken);
            console.log("This is my Metting", myMetting);
            const zc=ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container:element,
                sharedLinks:[{
                    name:"Copy Link",
                    url:`http://localhost:${process.env.PORT}/room/${roomId}`
                }],
                scenario:{
                    mode:ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton:true,
            })
        }catch(error){
            console.log(error);
        }

    }
    return(
        <>
        <div ref={myMetting}/>
        </>
    )
}
export default RoomPage;
