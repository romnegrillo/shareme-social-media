import { React } from "react"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {
    const googleResponse = (credentialResponse) => {
        console.log(credentialResponse)
    }

    return (
        <div>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
                <GoogleLogin
                    onSuccess={googleResponse}
                    onError={googleResponse}
                />;
            </GoogleOAuthProvider>
        </div>
    )
}

export default Login;