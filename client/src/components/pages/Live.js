import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import BarChart from "../chart/BarChart";
import {Urlserver} from "../../services/services";
import axios from "axios";
function Live() {
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [selectedPlay, setSelectedPlay] = useState(null);
    const [listPlay, setListPlay] = useState(null);

    const onCityChange = (e) => {
        console.log("seleccionando instancia", e.value);
        setSelectedCity1(e.value);
        filterInstance(e.value.code);
    };

    const onSelectedPlay = (e) => {
        console.log("seleccionando partido", e.value);
        setSelectedPlay(e.value);
    };

    const filterInstance = (value) => {
        var resultadossearch = playsdata.filter((elemento) => {
            if (elemento.phase === value) {
                return elemento;
            }
        });
        //console.log(resultadossearch);
        setListPlay(resultadossearch);
    };

    const handleGet = async() => {
        try{
            //  obtener equipos 
            //const res = await axios.get(`${Urlserver}api/instance`);
            //console.log(res.data);

        }catch{

        }
    
    }
    useEffect (() => {
       
    }, []);


    return (
        <div className="card">
            <div className="grid">
                <div className="col-2"></div>
                <div className="field col">
                    <h1>Partido</h1>
                    <Dropdown
                        value={selectedCity1}
                        options={cities}
                        onChange={onCityChange}
                        optionLabel="name"
                        placeholder="Instancia"
                        className="w-full"
                    />
                </div>

                <div className="field col">
                    <h1>Partido</h1>
                    <Dropdown
                        value={selectedPlay}
                        options={listPlay}
                        onChange={onSelectedPlay}
                        optionLabel={(name) => name.team1 + " vs " + name.team2}
                        placeholder="Partido"
                        className=" w-full"
                        disabled={selectedCity1 ? false : true}
                    />
                </div>
                <div className="col-2"></div>
            </div>

            <div className="grid">
                <div className="col-2"></div>
                <div className="field col">
                   <BarChart />
                </div>                
                <div className="col-2"></div>
            </div>
        </div>
    );
}

const cities = [
    { name: "1/16 finals", code: 1 },
    { name: "1/8 finals", code: 2 },
    { name: "1/4 finals", code: 3 },
    { name: "1/2 finals", code: 4 },
];

const plays = [
    {
        team1: "Portugal",
        team2: "Indonesia",
        score: "8-9",
        phase: 4,
    },
    {
        team1: "Poland",
        team2: "Indonesia",
        score: "6-9",
        phase: 1,
    },
    {
        team1: "Poland",
        team2: "Russia",
        score: "5-5",
        phase: 3,
    },
    {
        team1: "China",
        team2: "Colombia",
        score: "0-4",
        phase: 3,
    },
    {
        team1: "Uzbekistan",
        team2: "Greece",
        score: "7-6",
        phase: 4,
    },
    {
        team1: "China",
        team2: "Sweden",
        score: "3-5",
        phase: 2,
    },
    {
        team1: "China",
        team2: "Philippines",
        score: "0-5",
        phase: 4,
    },
    {
        team1: "China",
        team2: "Jordan",
        score: "5-4",
        phase: 4,
    },
    {
        team1: "Japan",
        team2: "Russia",
        score: "8-2",
        phase: 1,
    },
    {
        team1: "South Korea",
        team2: "Micronesia",
        score: "3-2",
        phase: 4,
    },
];

const playsdata = [
    {
        team1: "Portugal",
        team2: "Indonesia",
        score: "8-9",
        phase: 4,
    },
    {
        team1: "Poland",
        team2: "Indonesia",
        score: "6-9",
        phase: 1,
    },
    {
        team1: "Poland",
        team2: "Russia",
        score: "5-5",
        phase: 3,
    },
    {
        team1: "China",
        team2: "Colombia",
        score: "0-4",
        phase: 3,
    },
    {
        team1: "Uzbekistan",
        team2: "Greece",
        score: "7-6",
        phase: 4,
    },
    {
        team1: "China",
        team2: "Sweden",
        score: "3-5",
        phase: 2,
    },
    {
        team1: "China",
        team2: "Philippines",
        score: "0-5",
        phase: 4,
    },
    {
        team1: "China",
        team2: "Jordan",
        score: "5-4",
        phase: 4,
    },
    {
        team1: "Japan",
        team2: "Russia",
        score: "8-2",
        phase: 1,
    },
    {
        team1: "South Korea",
        team2: "Micronesia",
        score: "3-2",
        phase: 4,
    },
];
export default Live;
