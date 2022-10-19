/* Aqui vão as variáveis XD*/
var stuff = false;
var h1 = document.getElementsByClassName("h1a");
var h1a = false;

/*Blz, e aqui os códigos*/
/*Aqui as condições e funções*/
function homePage(){
  window.open("index.html");
}
function OnStart() {
document.getElementById("ap").play();
document.getElementById("smp").style.display = "none";
var aprilFools = {
  month: 3,
  date: 1
}

function isItAprilFoolDay() {
  var now = new Date();
  return (now.getMonth() == aprilFools.month && now.getDate() == aprilFools.date);
}

if(isItAprilFoolDay()){
  // fuck with people
  document.body.style.backgroundImage = 'url("https://64.media.tumblr.com/47f18df2310b5eb3bfff318b4374bc54/65b5d3028796dc7f-e7/s500x750/b9884cb13a2695169a796a6135e51e5ffd5c01b7.gifv")';
  alert("april fools!")
}
}
function aprilFools() {
  document.body.style.backgroundImage = 'url("https://64.media.tumblr.com/47f18df2310b5eb3bfff318b4374bc54/65b5d3028796dc7f-e7/s500x750/b9884cb13a2695169a796a6135e51e5ffd5c01b7.gifv")';
  alert("april fools!")
}
function adm() {
  document.getElementById("smp").style.display = "block";
}
function pauseSong() {
document.getElementById("ap").pause();
}
function replayM() {
  document.getElementById("ap").play();
}
function spm(){
}
function caAdd() {
  let customAdd = window.prompt("Enter the URL of your image", "Enter your custom ad here!");
 var url = customAdd
// kekkekekekekekekkeke
if (url == "Blz" || url == "Enter your custom ad here!") {
  alert("This is not a valid image url")
  
  url = "https://i.kym-cdn.com/photos/images/newsfeed/002/212/844/780";
  document.getElementById('cad').src = url;
}
else {
  document.getElementById('cad').src = url;
  
}
}
function stuffPage(){
  window.open("stuff/stuff.html");
}
if (h1a == true) {
  h1.innerText = 'Working!';
}
/*Area de eventos xisde*/

/*E aqui a area de notas *joinha*/

// Se lembre de colocar o Sus print, em
function OpenPopup() {
  document.getElementById("popup-1").classList.toggle("active");
}