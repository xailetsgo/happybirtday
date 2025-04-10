function goToSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }
  
  function revealWish(num) {
    const wishes = [
      "Stay healthy 🌿",
      "More birthdays to come 🎉",
      "Good fortune for this year 🍀"
    ];
    const wishElement = document.getElementById(`wish${num}`);
    wishElement.innerText = wishes[num - 1];
    wishElement.classList.add('visible');
  }
  