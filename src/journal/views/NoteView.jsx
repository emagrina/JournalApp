import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { DeleteOutlined, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import { ImageGallery } from '../components';
import { useForm } from '../../hook/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote, startSaveNote, startUploadingFiles, startDeletingNote } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import IconButton from '@mui/material/IconButton';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    }, [ date ]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [ formState ]);

    useEffect(() => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-left',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
        });

        if( messageSaved.length > 0 ) {
            Toast.fire({
                icon: 'success',
                title: messageSaved,
            });

        }
    }, [ messageSaved ]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    };

    const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return;

        dispatch(startUploadingFiles(target.files));
    };

    const onDelete = () => {
        dispatch(startDeletingNote());
    };

    return (
        <Grid
            className="animate__animated animate__fadeIn animated__faster"
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={ { mb: 1 } }
        >
            <Grid item>
                <Typography fontSize={ 39 } fontWeight="ligth">
                    { dateString }
                </Typography>
            </Grid>
            <Grid item>

                <IconButton
                    sx={ { color: 'text.fixedDark' } }
                    disabled={ isSaving }
                    component="label"
                >
                    <input
                        type="file"
                        multiple
                        hidden
                        ref={ fileInputRef }
                        onChange={ onFileInputChange }
                    />
                    <UploadOutlined/>
                </IconButton>
                <Button
                    onClick={ onSaveNote }
                    disabled={ isSaving }
                    sx={ { color: 'text.fixedDark', padding: 2 } }
                >
                    <SaveOutlined sx={ { fontSize: 30, mr: 1 } }/>
                    SAVE
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Enter a title"
                    label="Title"
                    sx={ { border: 'none', mb: 1, color: 'text.fixedDark' } }
                    name="title"
                    value={ title }
                    onChange={ onInputChange }

                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    sx={ { border: 'none', mb: 1, color: 'text.fixedDark' } }
                    minRows={ 5 }
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />

                <Grid
                    container
                    justifyContent="end"
                >
                    <Button
                        onClick={ onDelete }
                        sx={ { mt: 2 } }
                        color="error"
                    >
                        <DeleteOutlined/>
                        DELETE
                    </Button>
                </Grid>

                <ImageGallery images={ note.imageURLs }/>

            </Grid>
        </Grid>
    );
};