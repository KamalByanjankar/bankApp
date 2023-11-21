import { Navigate } from 'react-router-dom'
import { useLocalStorage } from '../Util/useLocalStorage';

function PrivateRoute({ children }) {
    const [authenticated] = useLocalStorage("", "authenticated");

    return authenticated ? children : <Navigate to="/" />
}

export default PrivateRoute