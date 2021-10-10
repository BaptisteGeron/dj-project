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