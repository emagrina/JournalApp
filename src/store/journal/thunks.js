import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config.js';
import {
    addNewEmptyNote,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
    deleteNoteById
} from './';
import { fileUpload, loadNotes } from '../../helpers/index.js';

export const startNewNote = () => async(dispatch, getState) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const newDoc = doc(collection(FirebaseDB, `${ uid }/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
;

export const startLoadingNotes = () => async(dispatch, getState) => {
    const { uid } = getState().auth;
    if( !uid )
        throw new Error('User UID does not exist');

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
};

export const startSaveNote = () => async(dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
    await setDoc(docRef, noteToFireStore, { merge: true });

    dispatch(updateNote(note));
};

export const startUploadingFiles = (files = [ '' ]) => async(dispatch) => {
    dispatch(setSaving());

    const photosURLs = await Promise.all([ ...files ].map(fileUpload));

    dispatch(setPhotosToActiveNote(photosURLs));
};

export const startDeletingNote = () => async(dispatch, getState) => {

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(note.id))
};