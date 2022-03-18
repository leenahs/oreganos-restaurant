window.addEventListener('scroll', function fadeAnimation() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("p1").className = "fadeIn"; //appear

  }
});

window.addEventListener('scroll', function fadeAnimation2() {
  if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
    document.getElementById("p2").className = "fadeIn"; //appear
    document.getElementById("p3").className = "fadeIn"; 
    document.getElementById("img1").className = "dark"; //appear
  }
});

window.addEventListener('scroll', function fadeAnimation3() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("img2").className = "dark"; //appear
    document.getElementById("img3").className = "dark"; //appear
  }
});


