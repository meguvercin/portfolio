let intro = document.querySelector('.intro')
    const dynamicText = document.querySelector("h1 span");
    const words = ["MEHMET EMİN GÜVERCİN", "Computer Engineer", "Coding is my...", "PASSION"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");
      if (!isDeleting && charIndex < currentWord.length) {
          // If condition is true, type the next character
          charIndex++;
          setTimeout(typeEffect, 30);
      } else if (isDeleting && charIndex > 0) {
          // If condition is true, remove the previous character
          charIndex--;
          setTimeout(typeEffect, 30);
      } else {
          // If word is deleted then switch to the next word
          isDeleting = !isDeleting;
          dynamicText.classList.remove("stop-blinking");
          wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
          setTimeout(typeEffect, 13200);
      }
    }
    setTimeout(() => {
      intro.style.top= '-100vh'
    },1300);
  typeEffect();

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Sayfa yüklendiğinde kaydırma pozisyonunu sıfırlayın
window.history.scrollRestoration = "manual"; // Tarayıcı kaydırma konumunu hatırlamasın

// Sayfa tamamen yüklendiğinde sayfanın en üstüne git
window.onload = function() {
    window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
};
