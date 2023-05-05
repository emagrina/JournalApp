import { ImageList, ImageListItem } from '@mui/material';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
    return (
        <ImageList sx={ { width: '100%', height: 500 } } cols={ 4 } rowHeight={ 200 }>
            { images && images.map((image, index) => (
                <ImageListItem key={ image }>
                    <img
                        key={ index }
                        src={ `${ image }?w=164&h=164&fit=crop&auto=format` }
                        srcSet={ `${ image }?w=164&h=164&fit=crop&auto=format&dpr=2 2x` }
                        alt="Note Images"
                        loading="lazy"
                    />
                </ImageListItem>
            )) }
        </ImageList>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
};
