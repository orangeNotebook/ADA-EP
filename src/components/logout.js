import { GoogleLogout } from "react-google-login";

const clientId = "717431495805-2egmu4fmnr7d58141qel8hduqkvjermf.apps.googleusercontent.com"

function Logout() {

    const onSuccess = () => {
        console.log("Logout succesfull.")
    }

    return(
        <div id="signOutbutton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout