let cs = 0
let s = 0
let m = 0
let h = 0

let play = false

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

function lap(){
    const ol = document.querySelector("#lap")
    const li = document.createElement('li')

    li.appendChild(document.createTextNode(addZero(h) + ':' + addZero(m) + ':' + addZero(s) + ':' + addZero(cs)))
    ol.insertBefore(li, ol.childNodes[0])
}

function finish(){
    if (play){
        playpause()
    }
    else{
        cs = s = m = h = 0
        document.querySelector('#lap').innerHTML = '<ol id="lap"></ol>'
    }
}

function stopwatch(){    
    if (play){
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
    document.querySelector('div#display-stopwatch').innerHTML = addZero(h) + ':' + addZero(m) + ':' + addZero(s) + ':' + addZero(cs)
    setTimeout(stopwatch, 10)
}

function addZero(i) { // add zero in front of numbers < 10
    if (i < 10) {
      i = "0" + i
    }  
    return i
  }