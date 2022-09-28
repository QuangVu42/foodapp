import React,{lazy} from 'react'

//modules
const SignIn = lazy(()=>import("../../layouts/components/SignIn/SignIn"))

function Login(){
    return(
        <React.Fragment>
            <SignIn
                SignIn
                title="Login"
                btnContent="Login"
                // Signup
                // title="Sign Up"
                // btnContent="Res"
            />
        </React.Fragment>
    )
}

export default Login