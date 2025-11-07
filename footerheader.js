
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-home").innerHTML = data;
  });

fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-home").innerHTML = data;
  });
