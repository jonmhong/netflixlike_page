// @flow

import React, { Component } from 'react';
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

class ShowCard extends Component {
    // calls your method and ask if it should render or not
    // don't use this until you absolutely need it
    shouldComponentUpdate(nextProps) {
        return false;
    }

    props: Show;

    render() {
        return(
            <Wrapper to={`./details/${this.props.imdbID}`}>
                <Image
                    alt={`${this.props.title} Show Poster`}
                    src={`/public/img/posters/${this.props.poster}`}
                />
                <div>
                    <h3>{this.props.title}</h3>
                    <h4>({this.props.year})</h4>
                    <p>{this.props.description}</p>
                    <p>Something different</p>
                </div>
            </Wrapper>
        )
    }
}

export default ShowCard;
