import { GoogleLogin } from "react-google-login";

const clientId = "717431495805-2egmu4fmnr7d58141qel8hduqkvjermf.apps.googleusercontent.com"

function Login(){

    const onSuccess = (res) => {
        console.log("Login success, current user: ", res.profileObj)
    }
    
    const onFailure = (res) => {
        console.log("Login failed, res: ", res)
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login