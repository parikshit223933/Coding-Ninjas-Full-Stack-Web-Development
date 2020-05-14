var cur = "square";

var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];

var color = ["red", "orange", "green", "maroon", "pink", "violet"];


document.getElementById("shape").onclick = function () {
    var rand = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(cur).setAttribute("id", rand);
    cur = rand;
}

document.getElementById("color").onclick = function () {
    var randColor = color[Math.floor(Math.random() * color.length)];
    document.getElementById("block").style.backgroundColor = randColor;
}
