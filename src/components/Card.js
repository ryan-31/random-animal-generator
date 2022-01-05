import React from 'react';
import './Card.css'

const Card = ({image_link, name, latin_name, habitat, diet, geo_range}) => {
    return (
        <div className="card">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={image_link} alt="Image of the animal"/>
            <p className="animal">{name}</p>
            <p className="latinName">Latin Name: {latin_name}</p>
            <p className="animalDiet">Diet: {diet}</p>
            <p className="animalHabitat">Habitat: {habitat}</p>
            <p className="animalRange">Range: {geo_range}</p>
        </div>
    );
};

export default Card;
