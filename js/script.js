let popupGreeting = document.getElementById('popup-greeting'),
  popupGreetingToggle = document.getElementById('btnGreeting'),
  popupGreetingClose = document.querySelector('.popup-greeting_close'),
  screenSaver = document.getElementById('screenSaver')

window.onload = function () {
  if (sessionStorage.getItem('userName') != '') {
    if (sessionStorage.getItem('userName') != null) {
      document.getElementById('greeting').style.display = 'none'
    }
  }
}

popupGreetingToggle.onclick = function () {
  popupGreeting.style.display = 'block'

  if (
    document.getElementById('greeting').value == '' &&
    sessionStorage.getItem('userName') == null
  ) {
    document.querySelector('.popup-greeting_text').innerHTML = 'Гость'
  } else {
    if (document.getElementById('greeting').value != '') {
      sessionStorage.setItem(
        'userName',
        document.getElementById('greeting').value
      )
    }
    document.querySelector(
      '.popup-greeting_text'
    ).innerHTML = sessionStorage.getItem('userName')
    document.getElementById('greeting').style.display = 'none'
  }
}

popupGreetingClose.onclick = function () {
  popupGreeting.style.display = 'none'
}

window.onclick = function (e) {
  if (e.target == screenSaver) {
    screenSaver.style.transform = 'translate(0px, -100%)'
    setTimeout(() => {
      screenSaver.style.display = 'none'
      screenSaver.style.transform = 'translate(0px, 100%)'
    }, 500)
  }
}
let today = new Date()
let day = today.getDate().toString()
let month = (1 + today.getMonth()).toString()
let year = today.getFullYear().toString()
today = day + '-' + month + '-' + year
document.getElementById('btnScreenSaver').onclick = function () {
  screenSaver.style.display = 'flex'
  if (sessionStorage.getItem('userName') != '') {
    if (sessionStorage.getItem('userName') != null) {
      document.getElementById('user').innerHTML = sessionStorage.getItem(
        'userName'
      )
    } else document.getElementById('user').innerHTML = 'Гость'
  }
  document.getElementById('date').innerHTML = today
  setTimeout(() => {
    screenSaver.style.transform = 'translate(0px,0px)'
  }, 10)
}

document.getElementById('btnTrSquare').onclick = function () {
  document.getElementById('trSquareError').innerHTML = ''
  document.getElementById('trSquare').innerHTML = ''
  let trBase = document.getElementById('trBase').value,
    trHeight = document.getElementById('trHeight').value,
    trSquare = document.getElementById('trSquare')

  let a = parseFloat(trBase),
    h = parseFloat(trHeight),
    s

  s = 0.5 * a * h
  if (isNaN(s)) {
    document.getElementById('trSquareError').innerHTML =
      'Ошибка! Значения должны быть числами.'
  } else if (s < 0) {
    document.getElementById('trSquareError').innerHTML =
      'Ошибка! Значения должны быть положительными.'
  } else trSquare.innerHTML = s
}

document.getElementById('btnStringCompare').onclick = function () {
  if (
    document.getElementById('String1').value.length ==
    document.getElementById('String2').value.length
  ) {
    document.getElementById('stringCompare').innerHTML =
      "<span style='color: green'>true</span>"
  } else
    document.getElementById('stringCompare').innerHTML =
      "<span style='color: red'>false</span>"
}

let arr = []

document.getElementById('btnArrAdd').onclick = function () {
  let elem = parseFloat(document.getElementById('arrElem').value)
  if (typeof elem == 'number' && isNaN(elem) === false) {
    arr.push(elem)
    document.getElementById('arrElem').value = ''
  } else document.getElementById('arrElem').value = 'Введите число!'

  if (arr.length >= 5) {
    document.getElementById('btnArrAdd').style.display = 'none'
    document.getElementById('arrText').style.display = 'none'
    document.getElementById('arrElem').style.display = 'none'

    let max = arr[0],
      min = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i]
      if (arr[i] < min) min = arr[i]
    }
    document.getElementById('arrDisplay').style.display = 'block'
    document.getElementById('arrMinElem').innerHTML = min
    document.getElementById('arrMaxElem').innerHTML = max
  }
}

var timerSignal = new Audio('sounds/timer.mp3')

document.getElementById('btnTimerStart').onclick = function () {
  document.getElementById('btnTimerPause').innerText = 'Пауза'
  let timerMin = parseInt(document.getElementById('timerMin').value),
    timerSec = parseInt(document.getElementById('timerSec').value),
    sec = 1

  if (isNaN(timerMin)) {
    timerMin = 0
  }
  if (isNaN(timerSec)) {
    timerSec = 0
  }

  sec += timerSec
  sec += timerMin * 60

  document.getElementById('timerMin').style.display = 'none'
  document.getElementById('timerSec').style.display = 'none'
  document.getElementById('btnTimerStart').style.display = 'none'
  document.getElementById('btnTimerPause').style.display = 'block'
  document.getElementById('btnTimerStop').style.display = 'block'
  document.getElementById('timerDisplaySec').style.display = 'inline'
  document.getElementById('timerDisplayMin').style.display = 'inline'
  var isPaused = false

  var idTick = setInterval(() => {
    if (!isPaused) {
      while (timerSec >= 60) {
        timerSec -= 60
        timerMin++
      }
      if (timerMin > 59) {
        timerMin = 59
      }
      if (sec > 0) {
        document.getElementById('timerDisplaySec').innerHTML = timerSec
        document.getElementById('timerDisplayMin').innerHTML = timerMin

        if (timerSec > 0) {
          timerSec -= 1
        } else {
          timerSec = 59
          if (timerMin >= 0) {
            timerMin -= 1
          }
        }
        sec -= 1
        console.log(sec)
      } else {
        timerSignal.play()
        clearInterval(idTick)
        document.getElementById('timerMin').style.display = 'inline'
        document.getElementById('timerSec').style.display = 'inline'
        document.getElementById('btnTimerStart').style.display = 'block'
        document.getElementById('btnTimerPause').style.display = 'none'
        document.getElementById('btnTimerStop').style.display = 'none'
        document.getElementById('timerDisplaySec').style.display = 'none'
        document.getElementById('timerDisplayMin').style.display = 'none'
      }
    }
  }, 1000)
  document.getElementById('btnTimerStop').onclick = function () {
    clearInterval(idTick)
    document.getElementById('timerMin').style.display = 'inline'
    document.getElementById('timerSec').style.display = 'inline'
    document.getElementById('btnTimerStart').style.display = 'block'
    document.getElementById('btnTimerPause').style.display = 'none'
    document.getElementById('btnTimerStop').style.display = 'none'
    document.getElementById('timerDisplaySec').style.display = 'none'
    document.getElementById('timerDisplayMin').style.display = 'none'
  }
  document.getElementById('btnTimerPause').onclick = function () {
    if (isPaused) {
      isPaused = false
      document.getElementById('btnTimerPause').innerText = 'Пауза'
    } else {
      isPaused = true
      document.getElementById('btnTimerPause').innerText = 'Продолжить'
    }
  }
}
var counter = 0
var testScore = 0
var arrQuestions = [
  document.getElementById('q1'),
  document.getElementById('q2'),
  document.getElementById('q3'),
  document.getElementById('q4'),
  document.getElementById('q5'),
  document.getElementById('q6'),
  document.getElementById('q7'),
  document.getElementById('q8'),
  document.getElementById('q9'),
  document.getElementById('q10'),
]

document.getElementById('btnTestStart').onclick = function () {
  testScore = 0
  counter = 0
  arrQuestions[counter].style.display = 'block'
  document.querySelector('.test_result').style.display = 'none'
  document.getElementById('btnTestNext').style.display = 'block'
  document.getElementById('btnTestStart').style.display = 'none'

  document.getElementById('btnTestNext').onclick = function () {
    if (counter < 9) {
      counter++
      arrQuestions[counter - 1].style.display = 'none'
      arrQuestions[counter].style.display = 'block'
    } else {
      document.getElementById('test_result').innerHTML = testScore
      arrQuestions[counter].style.display = 'none'
      document.getElementById('btnTestNext').style.display = 'none'
      //document.getElementById('btnTestStart').style.display = "block";
      document.querySelector('.test_result').style.display = 'block'
    }
  }
}

function wrongAnswer(e) {
  document.getElementById(e).innerHTML +=
    "<span style='color: red;'>    Неверно!</span>"

  setTimeout(() => {
    if (counter < 9) {
      counter++
      arrQuestions[counter - 1].style.display = 'none'
      arrQuestions[counter].style.display = 'block'
    } else {
      document.getElementById('test_result').innerHTML = testScore
      arrQuestions[counter].style.display = 'none'
      document.getElementById('btnTestNext').style.display = 'none'
      //document.getElementById('btnTestStart').style.display = "block";
      document.querySelector('.test_result').style.display = 'block'
    }
  }, 500)
}

function rightAnswer(e) {
  document.getElementById(e).innerHTML +=
    "<span style='color: green;'>    Верно!</span>"

  testScore++
  setTimeout(() => {
    if (counter < 9) {
      counter++
      arrQuestions[counter - 1].style.display = 'none'
      arrQuestions[counter].style.display = 'block'
    } else {
      document.getElementById('test_result').innerHTML = testScore
      arrQuestions[counter].style.display = 'none'
      document.getElementById('btnTestNext').style.display = 'none'
      //document.getElementById('btnTestStart').style.display = "block";
      document.querySelector('.test_result').style.display = 'block'
    }
  }, 500)
}
