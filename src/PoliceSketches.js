import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import './App.css';
import './generalStyling.css';
import './police-sketch.css';

function PoliceSketches() {


    let navigate = useNavigate();

    useEffect(() => {
        var bridge = document.getElementById("bridge"),
            bridgeCanvas = bridge.getContext('2d'),
            brushRadius = (bridge.width / 100) * 5

        if (brushRadius < 50) { brushRadius = 50 }

        bridgeCanvas.rect(0, 0, bridge.width, bridge.height);
        bridgeCanvas.fillStyle = 'white';
        bridgeCanvas.fill();

        function getBrushPos(xRef, yRef) {
            var bridgeRect = bridge.getBoundingClientRect();
            return {
                x: Math.floor((xRef - bridgeRect.left) / (bridgeRect.right - bridgeRect.left) * bridge.width),
                y: Math.floor((yRef - bridgeRect.top) / (bridgeRect.bottom - bridgeRect.top) * bridge.height)
            };
        }

        function drawDot(mouseX, mouseY) {
            bridgeCanvas.beginPath();
            bridgeCanvas.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true);
            bridgeCanvas.fillStyle = '#000';
            bridgeCanvas.globalCompositeOperation = "destination-out";
            bridgeCanvas.fill();
        }

        bridge.addEventListener("mousemove", function (e) {
            var brushPos = getBrushPos(e.clientX, e.clientY);
            drawDot(brushPos.x, brushPos.y);
        }, false);
    }, []);

    return (
        <div style={{ width: '100%' }} className={"police-sketch-page"}>

            <p className={"sketch-text"}>Draw to reveal the suspects</p>

            <figure id="bridgeContainer">
                <canvas id="bridge" width="700" height="300"></canvas>
            </figure>

            <button className='styledButton buttonCenter sketchButton' onClick={() => navigate("/map")}>
                Explore the museum
            </button>

        </div>

    )
}

export default PoliceSketches;