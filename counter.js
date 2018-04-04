var button = document.getElementById("ac"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Talies: " + count;
};
