// @flow

import React from 'react';
import styled from 'styled-components';
// react-router also has naviation state:
//  save a search results onto the link, so you can share
import { Link } from 'react-router-dom';

// Link allows to click on show widgets
// includes the proptype any (which isn't going to check any particular type)
const Wrapper = styled((Link: any))`
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overflow: hidden;
    color: black;
    text-decoration: none;
`;

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px;
`;

const ShowCard = (props: Show) => (
    <Wrapper to={`./details/${props.imdbID}`}>
        <Image
            alt={`${props.title} Show Poster`}
            src={`/public/img/posters/${props.poster}`}
        />
        <div>
            <h3>{props.title}</h3>
            <h4>({props.year})</h4>
            <p>{props.description}</p>
            <p>Something different</p>
        </div>
    </Wrapper>
);

export default ShowCard;
