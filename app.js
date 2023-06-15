const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November", 
    "December"

]
const weekdays= [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
const giveAway =document.querySelector(".giveaway")
const deadLine =document.querySelectorAll(".deadline-format")

let futureDate = new Date (2023,6,23,11,30,0)
const year = futureDate.getFullYear()
const month = months[futureDate.getMonth()]
const date =futureDate.getDate()
const day =weekdays[futureDate.getDay()]
const hour =futureDate.getHours()
const minute =futureDate.getMinutes()
giveAway.textContent = `Giveaway Ends On ${day}, ${date} ${month} ${year},${hour}:${minute} am`
let futureTime = futureDate.getTime()
let today = new Date().getTime()
 let t = futureTime-today
 console.log(t)