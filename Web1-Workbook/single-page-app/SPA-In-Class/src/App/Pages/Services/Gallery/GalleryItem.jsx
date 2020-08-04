import React from 'react';
import styled from 'styled-components';

const GalleryItem = ({key,item}) => {
    return (
        <GalleryItemStyled className='Home'>
            <div className="category">{ item.category }</div>
            <img src={item.image} alt={item.title}></img>
            <div className="title">{ item.title }</div>
        </GalleryItemStyled>
    );
};

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;
    border: solid 1px purple;
    margin: 20px;
    img  {display: block;}

    .category {
        position: absolute;
        top: 0; right: 0; left:0;
        background-color: rgb(255,255,255, 0.5);
        padding: 10px;
        font-size: 12px;

        text-align: right;
    }

    .title {
        position: absolute;
        bottom: 0; right: 0; left:0;
        background-color: rgb(255,255,255, 0.5);
        padding: 10px;
        font-size: 20px;
    }
`