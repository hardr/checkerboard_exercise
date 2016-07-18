// Your JS goes here
for (var i = 0; i < 81; i++) {
  if (i % 2 !== 0) {
    var boxBlack = document.createElement('div');
    document.body.appendChild(boxBlack);
    boxBlack.style.cssFloat = 'left';
    boxBlack.style.width = "11.1%";
    boxBlack.style.paddingBottom = "11.1%";
    boxBlack.style.backgroundColor = "black";
  } else {
    var boxRed = document.createElement('div');
    document.body.appendChild(boxRed);
    boxRed.style.cssFloat = 'left';
    boxRed.style.width = "11.1%";
    boxRed.style.paddingBottom = "11.1%";
    boxRed.style.backgroundColor = "red";
  }
}
