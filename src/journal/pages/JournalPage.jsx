import { JournalLayout } from '../layout/JournalLayout.jsx';
import { NothingSelectedView } from '../views/index.js';
import IconButton from '@mui/material/IconButton';
import { AddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
    return (
        <JournalLayout>
            <NothingSelectedView/>
            <IconButton
                size="large"
                sx={ {
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: '0.9' },
                    position: 'fixed',
                    right: 50,
                    bottom: 50,

                } }
            >
                <AddOutlined sx={ { fontSize: 30 } }/>
            </IconButton>
        </JournalLayout>

    );
};