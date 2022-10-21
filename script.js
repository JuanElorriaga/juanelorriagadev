var dataReload = document.querySelectorAll("a[data-reload]");
var hi = document.getElementById("hi");
var language = {
  eng: {
    welcome: "Welcome everyone!"
  }
};

var setLanguage = () => {

  if (window.location.hash === "#ita") {
    hi.textContent = language.ita.welcome;
  } else {
    hi.textContent = language.eng.welcome;
  }

}

for (i = 0; i < dataReload.length; i++) {
  dataReload[i].onclick = function(e) {
    window.location.hash = this.getAttribute("href");
    setLanguage();
  }
}

setLanguage()