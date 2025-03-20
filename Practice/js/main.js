const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("daytime", thisYear)
year.textContent = thisYear