function clock() {
  const today = new Date()
  let h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()
  m = addZero(m)
  s = addZero(s)
  document.querySelector('div#clock').innerHTML =  h + ":" + m + ":" + s
  setTimeout(clock, 1000)
}

function addZero(i) { // add zero in front of numbers < 10
  if (i < 10) {
    i = "0" + i
  }  
  return i
}