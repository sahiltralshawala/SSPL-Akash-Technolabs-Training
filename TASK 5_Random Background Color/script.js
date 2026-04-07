function randomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";

    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

window.onload = function(){
    document.body.style.backgroundColor = randomColor();
};

document.getElementById("colorBtn").onclick = function(){
    document.body.style.backgroundColor = randomColor();
};