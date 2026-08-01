fetch("/site/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
});

fetch("/site/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
});

fetch("/site/site-announce.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("announce").innerHTML = data;
});

fetch("/site/navbar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("navbar").innerHTML = data;
});