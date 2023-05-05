import { JournalLayout } from '../layout/JournalLayout.jsx';
import { NoteView, NothingSelectedView } from '../views/index.js';
import IconButton from '@mui/material/IconButton';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal/index.js';
import { useDispatch, useSelector } from 'react-redux';

export const JournalPage = () => {

    const dispatch = useDispatch();
    const { isSaving, active } = useSelector(state => state.journal);
    const onClickNowNote = () => {
        dispatch(startNewNote());
    };

    return (
        <JournalLayout>

            {
                (!!active)
                    ? <NoteView/>
                    : <NothingSelectedView/>
            }
            <IconButton
                onClick={ onClickNowNote }
                disabled={ isSaving }
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