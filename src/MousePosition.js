import { useEffect, useState } from 'react';

function MousePosition() {
    const [mousePos, setMousePos] = useState({
        x: null,
        y: null
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

    return (
        <div>
            <p>{mousePos.x}</p>
            <p>{mousePos.y}</p>
        </div>
    );

}

export default MousePosition;