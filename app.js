const months = [
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
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const giveAway = document.querySelector(".giveaway")
const deadLine = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

let futureDate = new Date(2023, 5, 23, 11, 30, 0)

const year = futureDate.getFullYear()
const month = months[futureDate.getMonth()]
const date = futureDate.getDate()
const day = weekdays[futureDate.getDay()]
const hour = futureDate.getHours()
const minute = futureDate.getMinutes()
giveAway.textContent = `Giveaway Ends On ${day}, ${date} ${month} ${year},${hour}:${minute} am`

function getRemainingTime() {
    let futureTime = futureDate.getTime();
    let today = new Date().getTime();
    let t = futureTime - today;
// milliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
;   let seconds = Math.floor((t % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) {
            return (item = `0${item}`)
        }
        return item
    }
    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    })
    if (t < 0) {
        clearInterval(contdown);
        deadLine.innerHTML = `<h4 class="expired"> Sorry, this giveaway has expired </h4>`
    }
}
let contdown = setInterval(getRemainingTime, 1000)
getRemainingTime()