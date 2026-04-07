function showTime(){

    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    var time = hours + ":" + minutes + ":" + seconds;

    var date = now.toDateString();

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}

setInterval(showTime,1000);