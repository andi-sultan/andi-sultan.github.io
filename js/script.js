function getCurrentYear() {
  return new Date().getFullYear();
}
document.getElementById("currentYear").innerHTML = getCurrentYear();
