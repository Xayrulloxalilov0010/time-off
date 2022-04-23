const hours   = document.querySelector('.hours'),
      minutes = document.querySelector('.minutes'),
      hour    = document.querySelector('.h'),
      minute    = document.querySelector('.m'),
      second    = document.querySelector('.s')

function clock() {
    let time = new Date,
        h = time.getHours() * 30,
        m = time.getMinutes() * 6,
        s = time.getSeconds() * 6
    hour.style = `transform:rotate(${h}deg);`
    minute.style = `transform:rotate(${m}deg);`
    second.style = `transform:rotate(${s}deg);`

    hours.innerHTML = time.getHours < 10 ? '0' + time.getHours() : time.getHours()
    minute.innerHTML = time.getMinutes < 10 ? '0' + time.getMinutes() : time.getMinutes()

    setTimeout(()=>{
        clock()
    },1000)
}
clock()

const tabHead = document.querySelectorAll('.tabsItem'),
      tabBody = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < tabHead.length; i++) {
    tabHead[i].addEventListener('click', function (e) {
        e.preventDefault()
        for (let x = 0; x < tabHead.length; x++) {
            tabHead[x].classList.remove('active')
            tabBody[x].classList.remove('active')
        }
        addActive(this,tabBody[i])
    })
    
}

function addActive(el,item) {
    el.classList.add('active')
    item.classList.add('active')
}

let stopWatchBtn = document.querySelector('.stopwatch__btn'),
    stopWatchSec = document.querySelector('.stopwatch__seconds'),
    stopWatchMin = document.querySelector('.stopwatch__minutes'),
    stopWatchHour = document.querySelector('.stopwatch__hours'),
    stopWatchSpan = document.querySelector('.tabsLink__span'),
    stopWatchAudio = document.querySelector('.audio');

stopWatchBtn.addEventListener('click', function () {
    if (this.innerHTML == 'start') {
        stopWatchBtn.innerHTML = 'stop'
        stopWatchSpan.classList.add('active')

        interval = setInterval(() => {
            stopWatch()
        }, 1000);
    }else if (this.innerHTML == 'stop') {
        stopWatchBtn.innerHTML = 'clear'
        stopWatchSpan.classList.remove('active')
        stopWatchSpan.classList.add('active_clear')
        clearInterval(interval)
    }else if (this.innerHTML == 'clear') {
        stopWatchBtn.innerHTML = 'start'
        stopWatchSpan.classList.remove('active_clear')
        sanoq = 0
        stopWatchSec.innerHTML = 0
        stopWatchMin.innerHTML = 0
        stopWatchHour.innerHTML = 0
    }
})

let sanoq = 0
function stopWatch() {
    sanoq++
    if (stopWatchSec.innerHTML < 60) {
        stopWatchSec.innerHTML = sanoq
    }else if (stopWatchSec.innerHTML > 59) {
        stopWatchMin.innerHTML++
        sanoq = 0
        stopWatchSec.innerHTML = sanoq
    }
    if (stopWatchMin.innerHTML > 59) {
        stopWatchHour.innerHTML++
        stopWatchMin.innerHTML = 0
    }
    stopWatchAudio.play()
}
