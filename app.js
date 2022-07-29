const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const countdownContainer = document.querySelector(".countdown-container")


const currentDate = new Date()

let nxtYear = currentDate.getFullYear() + 1

const newYears = `1 Jan ${nxtYear}`

const countDown = () => {
    const currentDate = new Date()

    const newYearsDate = new Date(newYears)

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)

    if (totalSeconds < 0) {
        clearInterval(countDown)
        countdownContainer.innerHTML = `<h1 style="font-weight:bolder">Happy New Year</h1>`
    }

}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
}

// initial call
countDown()

setInterval(() => {
    countDown()
}, 1000);