import React from 'react';
import styled from 'styled-components';

const GalleryItem = ({key,image,title}) => {
    return (
        <GalleryItemStyled className='Home'>
            <img src={image} alt={title}></img>
        </GalleryItemStyled>
    );
};

export default GalleryItem;

const GalleryItemStyled = styled.div`
`