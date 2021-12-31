let cs = 0
let s = 0
let m = 0
let h = 0

let play = 0
let time = 0
function playpause(){ 
    if (play == 0){
        play ++
    }
    else{
        play --
    }
    return play
}
function lap(){
    window.alert(play)
}
function finish(){
    window.alert('finish')
}


function stopwatch(){    
    if (play == 1){
        cs++
    }
    if (cs == 100){
        s++
        cs = 0
    }    
    if (s == 60){
        m++
        s = 0
    }
    if (m == 60){
        h++
        m = 0
    }
    
    document.querySelector('div#display-stopwatch').innerHTML = h + ':' + m + ':' + s + ':' + cs 
    setTimeout(stopwatch, 10)
}
