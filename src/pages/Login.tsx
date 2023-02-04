import { CredentialResponse, GoogleLogin } from '@react-oauth/google'

const onSuccess = (credentialResponse: CredentialResponse) => {
  localStorage.setItem('access_token', credentialResponse.credential as string)
}

const onFailure = () => {
  console.log('login failed')
}

// TODO: idpiframe_initialization_failed 해결하기
function Login() {
  return (
    <div>
      <h3>Login Page</h3>
      <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
    </div>
  )
}

export default Login
