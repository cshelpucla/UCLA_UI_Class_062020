import React from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';

const Gallery = ({services,currCategory}) => {
    
    const renderImages = () => {
        return services.packages.map((item, idx) => {
            return <GalleryItem key={idx} image={item.image} title={item.title}/>
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
    background-color: teal;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: flex-end;
    justify-content: flex-start;
`;
