const socialLinks = document.querySelector(".social-links");
const share = document.querySelector(".share")
const shareIcon = document.querySelector(".share-icon")


share.addEventListener("click", function 
() {
  socialLinks.classList.toggle('active');
  share.style.backgroundColor = 'hsl(214, 17%, 51%)';
  shareIcon.querySelector('path').style.fill = 'white'
});
