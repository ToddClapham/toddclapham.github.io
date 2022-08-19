const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/construction.png') {
    myImage.setAttribute('src','images/excited-todd.png');
  } else {
    myImage.setAttribute('src','images/construction.png');
  }
}
// The above function is a function with no name otherwise known as an "anonymous" function
