// import { style } from "@mui/system";
import { useContext} from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";


export const Login=()=>{
const {handleAuth}=useContext(AuthContext);
const navigate=useNavigate();



return (
    <div style={{margin:"auto", marginTop:"180px", width:"60%"}}>
<form onSubmit={()=>{
    handleAuth(true);
    navigate("/cart" , {replace:true});
   
   
}} >

<input style={{height:"30px",margin:"10px",width:"300px" }} type="text" required placeholder="First Name..."/>
<br/>
<input style={{height:"30px",margin:"10px",width:"300px" }} type="text" required placeholder="Last Name..."/>
<br/>
<input style={{height:"30px",margin:"10px",width:"300px" }} type="email" required placeholder="Email..."/>
<br/>
<input style={{height:"30px",margin:"10px",width:"300px" }} type="password" required placeholder="Password..."/>
<br/>
<input style={{height:"30px",margin:"10px",backgroundColor:"#4b5666",color:"white",width:"300px" }} type="submit" value="Login"/>

</form>
    </div>
)

}
