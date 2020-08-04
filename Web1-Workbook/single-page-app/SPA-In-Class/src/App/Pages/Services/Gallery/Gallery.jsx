import React from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';

const Gallery = ({services,currCategory}) => {
    
    const renderImages = () => {
        return services.packages.filter((item,idx) => {
            return (item.category === currCategory)            
        }).map((item, idx) => {
            return <GalleryItem key={idx} item={item} />
        });
    }
    
    return (
        <GalleryStyled className='Gallery'>
            {renderImages()}
        </GalleryStyled>
    );
};

export default Gallery;

const GalleryStyled  = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
