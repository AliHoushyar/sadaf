function myFunction() {
  var x = document.getElementById("language-dropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function scrolltoabout(){
  const aboutElm = document.getElementById('About');
  aboutElm.scrollIntoView({behavior: 'smooth'});
}

function scrolltoOpp(){
  const aboutElm = document.getElementById('Options');
  aboutElm.scrollIntoView({behavior: 'smooth'});
}

function scrolltoRes(){
  const aboutElm = document.getElementById('Res');
  aboutElm.scrollIntoView({behavior: 'smooth'});
}