var play = false

var s = 0
var m = 0
var h = 0

function playpause(){
    if (play){
        play = false
        document.querySelector('#playpause').innerHTML = '<svg onclick= "playpause()" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>'
    }
    else{
        play = true
        document.querySelector('#playpause').innerHTML = '<svg onclick= "playpause()" viewBox="0 0 24 24"><path d="M10 24h-6v-24h6v24zm10-24h-6v24h6v-24z"/></svg>'
    }
    return play
}

function work(){
    if (play == false){
        var worktime = document.querySelector('#worktime').value

        h = worktime.split(':')[0]
        m = worktime.split(':')[1]
        s = worktime.split(':')[2]

        return h, m, s
    }
    else{
        playpause()
    }
}

function shortbreak(){
    if (play == false){
        var shortbreak = document.querySelector('#shortbreak').value

        h = shortbreak.split(':')[0]
        m = shortbreak.split(':')[1]
        s = shortbreak.split(':')[2]

        return h, m, s
    }
    else{
        playpause()
    }
}
function longbreak(){
    if (play == false){
        var longbreak = document.querySelector('#longbreak').value

        h = longbreak.split(':')[0]
        m = longbreak.split(':')[1]
        s = longbreak.split(':')[2]

        return h, m, s
    }
    else{
        playpause()
    }
}

function finish(){
    if (play == true){
        playpause()
    }
    else{
        s = 0
        m = 0
        h = 0
    }
}

function pomodoro(){
    if (play && s > 0){
        s--
        
    }
    else if(m == 0 && h>0){
        m = 59
        h--
    }
    if (s == 0 && m > 0){
        s = 59
        m--
    }

    if (s == m == h == 0){
        playpause()
    }
    document.querySelector('div#display-pomodoro').innerHTML = addZero(h) + ':' + addZero(m) + ':' + addZero(s)
    setTimeout(pomodoro, 1000)
}


function addZero(i) { // add zero in front of numbers < 10
    if (i < 10 || i!==00) {
      i = "0" + i
    }  
    return i
}