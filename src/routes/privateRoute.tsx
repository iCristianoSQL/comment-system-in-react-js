import { Navigate } from 'react-router';


export const PrivateRoute = ({ children }: any) => {
    const hasToken = localStorage.getItem('@userName');

        return children
    return <Navigate to="/login" />
}

