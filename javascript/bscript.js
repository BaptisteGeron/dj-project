function showMenu() {
    let checkBox = document.getElementsByClassName("checkbox")[0];
    let menu = document.getElementsByClassName("navItems")[0];
    if (checkBox.checked == true) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

//scroll behavior



//tour-schedule
let hiddenPs = document.getElementsByClassName('eventDescription');
console.log(hiddenPs);
for (i=0;i<hiddenPs.length;i++) {
  hiddenPs[i].style.display = 'none';
}

let eventArticle = document.getElementsByClassName('eventItem');
for (i=0;i<eventArticle.length;i++) {
  eventArticle[i].addEventListener('click',displayHiddenP);
}

function displayHiddenP(e) {
  let divTarget = e.target.parentNode;
  let divP = divTarget.children[2];
  console.log(divP.style.display);
  if (divP.style.display == 'block')
  divP.style.display = 'none';
  else if (divP.style.display == 'none'){
  divP.style.display = 'block';
  }

  let pseudoParent = divTarget.parentNode;
  
  let beforeParent = window.getComputedStyle(pseudoParent,'::before').getPropertyValue('display');
  console.log("hi" + beforeParent);
  window.getComputedStyle(pseudoParent,'::before').getPropertyValue('display') = 'block';
  console.log("hi" + beforeParent);
}

//timer

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 66 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);