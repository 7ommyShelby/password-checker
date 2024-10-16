const input = document.querySelector('.inp');
const strength = document.querySelector('.str');


function checkStrength() {
  const str = input.value;

  const lowerRegex = /[a-z]/g;
  const upperRegex = /[A-Z]/g;
  const numberRegex = /[0-9]/g;
  const specialRegex = /[!@#$%^&*(),.?":{}|<>]/g;

  const lowerCount = (str.match(lowerRegex) || []).length;
  const upperCount = (str.match(upperRegex) || []).length;
  const numberCount = (str.match(numberRegex) || []).length;
  const specialCount = (str.match(specialRegex) || []).length;

  console.log(lowerCount, upperCount, numberCount, specialCount);

  if (str.length >= 8 && lowerCount >= 1 && upperCount >= 1 && numberCount >= 1 && specialCount >= 1) {
    strength.innerText = "STRONG";
    strength.style.color = "green"; 
  } else if (str.length >= 8 && ((lowerCount >= 1 && upperCount >= 1 && numberCount >= 1) || specialCount >= 1)) {
    strength.innerText = "MEDIUM";
    strength.style.color = "orange";
  } else {
    strength.innerText = "WEAK";
    strength.style.color = "red"; 
  }
}

// Add event listener for 'input' event (more appropriate for real-time feedback)
input.addEventListener('input', checkStrength);
