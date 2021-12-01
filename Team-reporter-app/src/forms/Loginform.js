import React, {useState} from "react";

const Loginform = ()=>{
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");


    return(
        <div class="form">
        <form action="">
        <h1>Login form</h1>
        <div>
            <label for="email">Email:</label>
            <input type="email"name="email" id="email" autoComplete="off" 
            value={email}      

    />
        </div> 

        <div>
            <label for="password">Password:</label>
            <input type="password"name="password" id="password" autoComplete="off" 
            value={password}
            />
        </div>

        <button type="submit">Login</button>
        </form>

        </div>
    )
}

export default Loginform;