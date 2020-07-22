let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let original =  document.getElementById('button6')
button1.onclick = () =>{
  document.getElementById('color1').style.background = "#40407a"
  document.getElementById('color2').style.background = "#706fd3"
  document.getElementById('color3').style.background = "#f7f1e3"
  document.getElementById('color4').style.background = "#34ace0"
  document.getElementById('color5').style.background = "#33d9b2"
  document.getElementById('color6').style.background = "#2c2c54"
  document.getElementById('color7').style.background = "#474787"
  document.getElementById('color8').style.background = "#aaa69d"
  document.getElementById('color9').style.background = "#227093"
  document.getElementById('button6').style.display = "inline"
}

button2.onclick = () =>{
  document.getElementById('color1').style.background = "#ef5777"
  document.getElementById('color2').style.background = "#575fcf"
  document.getElementById('color3').style.background = "#4bcffa"
  document.getElementById('color4').style.background = "#34e7e4"
  document.getElementById('color5').style.background = "#0be881"
  document.getElementById('color6').style.background = "#f53b57"
  document.getElementById('color7').style.background = "#3c40c6"
  document.getElementById('color8').style.background = "#0fbcf9"
  document.getElementById('color9').style.background = "#00d8d6"
  document.getElementById('button6').style.display = "inline"
}

button3.onclick = () =>{
  document.getElementById('color1').style.background = "#B33771"
  document.getElementById('color2').style.background = "#3B3B98"
  document.getElementById('color3').style.background = "#FD7272"
  document.getElementById('color4').style.background = "#9AECDB"
  document.getElementById('color5').style.background = "#D6A2E8"
  document.getElementById('color6').style.background = "#6D214F"
  document.getElementById('color7').style.background = "#182C61"
  document.getElementById('color8').style.background = "#182C61"
  document.getElementById('color9').style.background = "#FC427B"
  document.getElementById('button6').style.display = "inline"
}

original.onclick = () =>{
  document.getElementById('color1').style.background = "#e84393"
  document.getElementById('color2').style.background = "#fd79a8"
  document.getElementById('color3').style.background = "#ff7675"
  document.getElementById('color4').style.background = "#d63031"
  document.getElementById('color5').style.background = "#fab1a0"
  document.getElementById('color6').style.background = "#e17055"
  document.getElementById('color7').style.background = "#fdcb6e"
  document.getElementById('color8').style.background = "#636e72"
  document.getElementById('color9').style.background = "#2d3436"
  document.getElementById('button6').style.display = "none"
}