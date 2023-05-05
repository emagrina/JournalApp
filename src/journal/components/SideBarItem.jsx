import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { setActiveNote } from '../../store/journal';
import { useDispatch } from 'react-redux';

export const SideBarItem = ({ title = '', body, id, date, imageURLs = [] }) => {

    const dispatch = useDispatch();
    const onClickNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageURLs }));
    };

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;

    }, [ title ]);

    const newBody = useMemo(() => {
        return body.length > 20
            ? body.substring(0, 20) + '...'
            : body;

    }, [ body ]);

    return (
        <ListItem sablep="true">
            <ListItemButton onClick={ onClickNote }>
                <ListItemIcon>
                    <TurnedInNot/>
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle }/>
                    <ListItemText secondary={ newBody }/>
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};

SideBarItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.number,
    imageURLs: PropTypes.arrayOf(PropTypes.string),
};