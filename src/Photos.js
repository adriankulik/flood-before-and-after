import { useEffect, useState } from 'react';
import photo from './data/db';

function DisplayPhotos(props) {

    // First, let's track the cursor's location
    const [mousePos, setMousePos] = useState({
        x: 0, // Starting from 0, so there's always data to begin with
        y: 0
    });

    useEffect(() => {
        function handleMousePosition(e) {
            setMousePos({
                x: e.clientX,
                y: e.clientY
            });
        }
        document.addEventListener("mousemove", handleMousePosition);
        return() => document.removeEventListener("mousemove", handleMousePosition);
    })


    // Now, let's use the data in our return
    return (
        <div className="photos">
            {photo.map((props) => (
                <div className="photos__container" key={props.id}>
                    <p>{mousePos.x}</p>
                    <p>{mousePos.y}</p>
                    <h2 className="photos__h2"> {props.title} </h2>
                    <img className="photos__floodImg" alt={props.alt} src={props.relativePath_floodStage}></img>
                </div>
            ))}
        </div>
    );

}

export default DisplayPhotos;