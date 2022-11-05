import React,{useState, useEffect} from "react";
import { ScrollPanel } from "primereact/scrollpanel";
import { Button } from 'primereact/button';
import "./styles.css";
function Logs() {
    const [lastTen, setLasTen] = useState([]); 
    const [now, setNow] = useState("Esperando datos");
    const [count, setCount] = useState(0);

    const clear = () => {
        setLasTen([]);
        setNow("Esperando datos");
        setCount(0);
    }

    useEffect(() => {
        /*const socket = new WebSocket("ws://localhost:8080");
        socket.onopen = () => {
            console.log("Conectado al servidor");
        };
        socket.onmessage = (event) => {
            console.log("Mensaje recibido del servidor", event.data);
            setNow(event.data);
            setLasTen((lastTen) => [...lastTen, event.data]);
        };
        socket.onclose = () => {
            console.log("Desconectado del servidor");
        };
        return () => {
            socket.close();
        };*/
        setLasTen(ten);
        setNow(nowdata);
    }, []);
    return (
        <div className="scrollpanel-demo">
            <div className="card">
                <div className="grid">
                    <div className="col-12 md:col-6">
                        <h3> Ultimos 10 Registros ingresados:</h3>
                        <ScrollPanel style={{ width: "100%", height: "250px" }}>
                            <div style={{ padding: "1em", lineHeight: "1.5" }}>
                                {lastTen.map((item, index) => (
                                    
                                        <p key={index}>  {JSON.stringify(item)}</p>
                                ))}
                            </div>
                        </ScrollPanel>
                    </div>
                    <div className="col-12 md:col-6">
                        <h3>En Proceso: </h3>
                        <ScrollPanel
                            style={{ width: "100%", height: "250px" }}
                            className="custombar1"
                        >
                            <div style={{ padding: "1em", lineHeight: "1.5" }}>
                                {JSON.stringify(now) }
                            </div>
                        </ScrollPanel>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="grid">
                    <div className="col-2">
                        
                    </div>

                    <div className="col-12 md:col-4">
                        <h3>Total registros:</h3>
                        <h4> {count} </h4>
                    </div>

                    <div className="col-12 md:col-4">
                    <Button label="Limpiar registros" icon="pi pi-check" onClick={clear} />
                        
                    </div>


                    <div className="col-2">
                        
                    </div>

                </div>
            </div>
        </div>
    );
}


const ten = [{
    "team1": "Canada",
    "team2": "Mali",
    "score": "0-9",
    "phase": 1
  }, {
    "team1": "China",
    "team2": "Indonesia",
    "score": "6-3",
    "phase": 1
  }, {
    "team1": "Mexico",
    "team2": "Belarus",
    "score": "0-2",
    "phase": 2
  }, {
    "team1": "Albania",
    "team2": "Indonesia",
    "score": "1-4",
    "phase": 4
  }, {
    "team1": "United Kingdom",
    "team2": "France",
    "score": "2-3",
    "phase": 2
  }, {
    "team1": "North Korea",
    "team2": "Myanmar",
    "score": "7-3",
    "phase": 1
  }, {
    "team1": "China",
    "team2": "Lithuania",
    "score": "8-0",
    "phase": 2
  }, {
    "team1": "Brazil",
    "team2": "Hungary",
    "score": "7-8",
    "phase": 2
  }, {
    "team1": "China",
    "team2": "Finland",
    "score": "2-7",
    "phase": 3
  }, {
    "team1": "Philippines",
    "team2": "Colombia",
    "score": "0-6",
    "phase": 3
  }]

const nowdata = {
    "team1": "Canada",
    "team2": "Mali",
    "score": "0-9",
    "phase": 1
    }
export default Logs;
