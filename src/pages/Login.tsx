import GoogleLogin from 'react-google-login'

const onSuccess = (response: any) => {
  console.log('success', response)
}

const onFailure = (response: any) => {
  console.log('failed', response)
}

// TODO: idpiframe_initialization_failed 해결하기
function Login() {
  return (
    <div>
      <h3>Login Page</h3>
      <GoogleLogin
        clientId="1077406843971-2mqs7abscmn45n25m009d84bjefq0aq1.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  )
}

export default Login
