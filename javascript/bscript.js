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

