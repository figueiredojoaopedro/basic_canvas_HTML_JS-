let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

function clickHere(canvas, context) {
    //text canvas:
    context.font = "10pt Arial";
    context.fillStyle = 'black'
    context.fillText("Canvas", 125, 50);
    // rectangles gonna be drawed right here:
    context.fillStyle = "rgb(0, 0, 255)";
    context.fillRect(0, 0, 50, 50);
    context.fillStyle = "rgb(255, 0, 0)";
    context.fillRect(250, 0, 50, 50);
    //cyan rects:
    context.fillStyle = "cyan";
    context.fillRect(0, 125, 25, 25);
    context.fillStyle = "cyan";
    context.fillRect(0, 150, 25, 25);
    //the other one
    context.fillStyle = "cyan";
    context.fillRect(275, 138, 25, 25);
    //the yellow rects
    context.fillStyle = "yellow";
    context.fillRect(0, 275, 50, 25);
    context.fillStyle = "yellow";
    context.fillRect(0, 250, 25, 25);
    //the black rects
    context.fillStyle = "black";
    context.fillRect(250, 275, 50, 25);
    context.fillStyle = "black";
    context.fillRect(275, 250, 25, 25);
    //the red rect
    context.fillStyle = "red";
    context.fillRect(110, 150, 40, 40);

    //blue line:
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(150, 150);
    context.strokeStyle = "blue";
    context.stroke();
    //red line:
    context.beginPath();
    context.moveTo(300, 0);
    context.lineTo(150, 150);
    context.strokeStyle = "red";
    context.stroke();
    //green line in the middle of nowhere
    context.beginPath();
    context.moveTo(0, 150);
    context.lineTo(300, 150);
    context.strokeStyle = "green";
    context.stroke();
    //black line going straight end in the middle
    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(150, 260);
    context.strokeStyle = "black";
    context.stroke();
    //creating the central half circle
    context.beginPath();
    context.arc(150, 150, 75, 0, 1 * Math.PI, true);
    context.stroke();
    //45 degree arc
    context.beginPath();
    context.arc(150, 150, 100, (7 / 4) * Math.PI, (8 / 4) * Math.PI, false);
    context.strokeStyle = "green";
    context.stroke();
    // the other one
    context.beginPath();
    context.arc(150, 150, 90, 1 * Math.PI, (5 / 4) * Math.PI, false);
    context.strokeStyle = "green";
    context.stroke();
    // the cian circle in the middle of the main arc
    context.beginPath();
    context.arc(150, 105, 20, 0, 2 * Math.PI);
    context.strokeStyle = "blue";
    context.stroke();
    context.fillStyle = "cyan";
    context.fill();
    // the cian arc in the bottom
    context.beginPath();
    context.arc(150, 300, 40, 0, 1 * Math.PI, true);
    context.strokeStyle = "blue";
    context.stroke();
    context.fillStyle = "cyan";
    context.fill();
    // the green arc in the bottom
    context.beginPath();
    context.arc(150, 300, 75, 0, (3 / 2) * Math.PI, true);
    context.strokeStyle = "green";
    context.stroke();
    // the bigger green arc in the bottom
    context.beginPath();
    context.arc(150, 300, 90, 0, (3 / 2) * Math.PI, false);
    context.strokeStyle = "green";
    context.stroke();
    // the cian circle in the middle of the main arc
    context.beginPath();
    context.arc(225, 200, 20, 0, 2 * Math.PI);
    context.strokeStyle = "green";
    context.stroke();
    context.fillStyle = "yellow";
    context.fill();
    // the cian circle in the middle of the main arc
    context.beginPath();
    context.arc(75, 200, 20, 0, 2 * Math.PI);
    context.strokeStyle = "green";
    context.stroke();
    context.fillStyle = "yellow";
    context.fill();
}
