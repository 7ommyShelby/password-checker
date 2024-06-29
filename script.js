
let input = document.querySelector('.inp')
let strength = document.querySelector(".str")

function checkstrength() {
  let str = input.value

  let lowercount = 0;
  let uppercount = 0;
  let numbercount = 0;
  let splchr = 0;

  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

  for (let i = 0; i < str.length; i++) {

    const char = str[i];

    if (char.match(/[a-z]/)) {
      lowercount++
    } else if (char.match(/[A-Z]/)) {
      uppercount++
    } else if (char.match(/[0-9]/)) {
      numbercount++
    } else if (char.match(specialChars)) {
      splchr++
    }

  }
  console.log(lowercount, uppercount, numbercount, splchr);

  if (str.length > 8 && lowercount > 1 && uppercount > 1 && numbercount > 1 && splchr > 1) {
    strength.innerText = "STRONG"
    strength.style.color = "red"
  } else if (str.length > 8 && lowercount > 1 && uppercount > 1 && numbercount > 1 || splchr > 1) {
    strength.innerText = "MEDIUM"
    strength.style.color = "orange"
  } else {
    strength.innerText = "WEAK"
    strength.style.color = "green"
  }
}

input.addEventListener('keydown', checkstrength)