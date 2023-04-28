import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes.jsx';
import { JournalRoutes } from '../journal/routes/JournalRoutes.jsx';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hook/index.js';

export const AppRouter = () => {

    const status = useCheckAuth();

    if( status === 'checking' ) {
        return <CheckingAuth/>;
    }

    return (
        <Routes>
            {
                (status === 'authenticated')
                    ? <Route path="/*" element={ <JournalRoutes/> }/>
                    : <Route path="/auth/*" element={ <AuthRoutes/> }/>
            }

            <Route path="/*" element={ <Navigate to={ '/auth/login' }/> }/>

        </Routes>
    );
};