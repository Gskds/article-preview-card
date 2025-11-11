const socialLinks = document.querySelector(".social-links");
const share = document.querySelector(".share-button")
const shareIcon = document.querySelector(".share-icon")


share.addEventListener("click", function() {
  socialLinks.classList.toggle('active');
  
  if (socialLinks.classList.contains('active')) {
    share.style.backgroundColor = 'hsl(214, 17%, 51%)';
    shareIcon.querySelector('path').style.fill = 'white'
  } else {
    share.style.backgroundColor = 'hsl(210, 46%, 95%)';
    shareIcon.querySelector('path').style.fill = '#6E8098'
  }
});