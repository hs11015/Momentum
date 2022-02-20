const images = ["0.jfif", "1.jfif", "2.jfif", "3.jfif", "4.jfif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// images[index] 에서 index는 0~3 사이 random 값
/*
const bgImage = document.createElement("img");
// <img /> 태그 달아주기
bgImage.src = `img/${chosenImage}`;
// <img src="img/0.jfif" /> 또는 <img src="img/1.jfif" /> 또는 <img src="img/2.jfif" />
document.body.appendChild(bgImage);
// appendChild() 함수를 이용해 document 안에 있는 body 내에 byImage를 넣어줌
*/
document.body.style.background = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.width = "97vW";
document.body.style.height = "96vh";