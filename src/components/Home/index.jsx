import { useState } from "react";

import Input from "../Form/Input";
import Button from "../Form/Button";
import Image from "../Image";

import { FaLocationDot } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";

import { HomeContainer, FormContainer, Location, Temperature, Description, Details } from './style';

const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;

export default function Home() {
    const [cityInput, setCityInput] = useState('');
    const [cityValues, setCityValues] = useState();

    function submit(e) {
        e.preventDefault();
        showWeatherData(cityInput);
    }

    function handleKeyUp(e) {
        if(e.code === 'Enter') {
            const data = e.target.value;
            showWeatherData(data);
        }
    }

    async function getWeatherData(city) {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`);
        const data = await res.json();
        return data;
    }

    const showWeatherData = async city => {
        const data = await getWeatherData(city);
        setCityValues(data);
    }

    return (
        <HomeContainer>
            <h3>Confira o clima de uma cidade:</h3>
            <FormContainer>
                <Input handleKeyUp={handleKeyUp} handleChange={e => setCityInput(e.target.value)} />
                <Button handleClick={submit} />
            </FormContainer>
            
            {cityValues && cityValues.cod === '404' && <div><p>Não foi possível encontrar o clima de uma cidade com esse nome</p></div>}
            
            {cityValues && cityValues.cod !== '404' &&
                <div className="weather-container">
                    <Location>
                        <FaLocationDot />
                        <p>{cityValues.name}</p>
                        <Image src={`https://flagsapi.com/${cityValues.sys.country}/flat/64.png`} alt='Flag of country' />
                    </Location>
                    <Temperature>
                        <p>{cityValues.main.temp}&deg;C</p>
                    </Temperature>
                    <Description>
                        <p>{cityValues.weather[0].description}</p>
                        <Image src={`http://openweathermap.org/img/wn/${cityValues.weather[0].icon}.png`} alt='weather description image' />
                    </Description>
                    <Details>
                        <div className="humidity">
                            <FaDroplet />
                            <p>{cityValues.main.humidity}%</p>
                        </div>
                        <div className="wind">
                            <FaWind />
                            <p>{cityValues.wind.speed}km/h</p>
                        </div>
                    </Details>
                </div>
            }
        </HomeContainer>
    );
}
