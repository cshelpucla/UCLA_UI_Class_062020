import React, {useState} from 'react';
import styled from 'styled-components';
import Lightbox from '../../../../common/Lightbox';

const GalleryItem = ({key,item}) => {
    
    const [showLBox, showLBoxUpdate] = useState(false);
    
    const turnOn = () => {
        showLBoxUpdate(true)
    } 

    const turnOff = () => {
        showLBoxUpdate(false)
    } 

    return (
        <GalleryItemStyled className='Home'>
            <div className="category">{ item.category }</div>
            <div className="title">{ item.title }</div>
            <img src={item.image} alt={item.title} onClick={ turnOn } />
            <Lightbox show={ showLBox } hideAction={ turnOff } width={300}>
                <div className="category">{ item.category }</div>
                <img src={item.image} alt={item.title} />
                <div className="description">{ item.description }</div>
                <div className="cost">{ item.cost }</div>
            </Lightbox>            
        </GalleryItemStyled>
    );
};

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;
    border: solid 1px purple;
    margin: 20px;
    img  {display: block; max-width: 100% }

    .category {
        position: absolute;
        top: 0; right: 0; left:0;
        background-color: rgb(255,255,255, 0.5);
        padding: 10px;
        font-size: 16px;

        text-align: right;
    }

    .title {
        position: absolute;
        bottom: 0; right: 0; left:0;
        background-color: rgb(255,255,255, 0.5);
        padding: 10px;
        font-size: 20px;
    }

    .Lightbox {
        img {
            border-color: solid 20px red;
            max-width: 100%;
        }
    }
`