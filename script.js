let judul = document.getElementById("judul")
let lirik = document.getElementById("lyrics")
let btn = document.getElementById("btn")
const audio = new Audio('/audio.mp3')

judul.textContent='Mood'
lirik.style.userSelect='none'

function play(){
  btn.style.display='none'
  judul.style.display='none'
  lirik.style.userSelect='text'
  audio.play()

  // lyrics
  lirik.textContent='you know what i need'

  setTimeout(function () {
    lirik.textContent="we play game of love"
  },3000)

  setTimeout(function () {
    lirik.textContent="to avoid the depression"
  },5000)

  setTimeout(function () {
    lirik.textContent="we,ve been here before and"
  },8000)

  setTimeout(function () {
    lirik.textContent="i won'n be your victim"
  },10000)

  setTimeout(function () {
    lirik.textContent="why you always in a mood"
  },12000)

  setTimeout(function () {
    lirik.textContent="fvckin' 'round, actin brand new"
  },13000)

  setTimeout(function () {
    lirik.textContent="i ain't tryna tell you what to do"
  },15000)
  
  setTimeout(function () {
    lirik.textContent="but try to play it cool"
  },17000)

  setTimeout(function () {
    lirik.textContent="baby, i ain't playing by your rules"
  },18000)

  setTimeout(function () {
    lirik.textContent="everything look better with a view"
  },20000)

  setTimeout(function () {
    lirik.textContent="why you always in a mood"
  },21000)

  setTimeout(function () {
    location.reload();
  },30000)

}