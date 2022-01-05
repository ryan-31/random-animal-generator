import React, {useState} from 'react';
import './Animals.css'
import Card from './Card'

const Animals = () => {
    const [rand1, setRand1] = useState({})
    const [rand2, setRand2] = useState({})
    const [rand3, setRand3] = useState({})

    const [picked, setPicked] = useState(false)

    const animalPicker = () => {
        fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
            .then(response => {
                return response.json();
            }).then(data => {
                setRand1(data)
        })
        fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
            .then(response => {
                    return response.json();
                }).then(data => {
                setRand2(data)
            })
            fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
                .then(response => {
                    return response.json();
                }).then(data => {
                setRand3(data)
            })

            setPicked(true);
    }

    const pickAgain = () => {
        setPicked(false)
    }
    return (
        <div>
            {picked &&
            <div className = "picked">
                <Card name={rand1.name} image_link={rand1.image_link} diet={rand1.diet} habitat={rand1.habitat} latin_name={rand1.latin_name} geo_range={rand1.geo_range}/>
                <Card name={rand2.name} image_link={rand2.image_link} diet={rand2.diet} habitat={rand2.habitat} latin_name={rand2.latin_name} geo_range={rand2.geo_range}/>
                <Card name={rand3.name} image_link={rand3.image_link} diet={rand3.diet} habitat={rand3.habitat} latin_name={rand3.latin_name} geo_range={rand1.geo_range}/>
                <button className="pickButton" onClick={pickAgain}>Generate Again!</button>
            </div>}
            {!picked && <button className='pickButton' onClick={animalPicker}>Generate Animals!</button>}
            </div>

    );
};

export default Animals;
