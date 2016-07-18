// Your JS goes here
for (var i = 0; i < 81; i++) {
  if (i % 2 !== 0) {
    var boxBlack = document.createElement('div');
    document.body.appendChild(boxBlack);
    boxBlack.style.cssFloat = 'left';
    boxBlack.style.width = "11.1%";
    boxBlack.style.paddingBottom = "11.1%";
    boxBlack.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#000000), to(#FF0000))";
  } else {
    var boxRed = document.createElement('div');
    document.body.appendChild(boxRed);
    boxRed.style.cssFloat = 'left';
    boxRed.style.width = "11.1%";
    boxRed.style.paddingBottom = "11.1%";
    boxRed.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#FFFFFF), to(#FF0000))";
  }
}

function gradientColor() {

}
