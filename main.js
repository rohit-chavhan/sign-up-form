const image = document.querySelector('.image-holder');

const img1 = `<img src="daleImage/esmihel-muhammad-xUcqRJQxppU-unsplash.jpg" alt="">`;
const img2 = `<img src="daleImage/pexels-iriser-1707215.jpg" alt="">`;
const img3 = `<img src="daleImage/pexels-todd-trapani-488382-1535162.jpg" alt="">`;

image.innerHTML = img3;

const ray = [img1, img2, img3];

let value = 0;

const imageChange = function(){    
    image.innerHTML = ray[value];
    value += 1;
    if(value === ray.length){
        value = 0;
    }
}

setInterval(imageChange, 3000);

const div = document.querySelector('#password');
const pwdCheckerDiv = document.querySelector(".psdcheck");
const numLength = document.querySelector('.lengthOfNum');
const numCapital = document.querySelector('.capitalNum');
const inputNum = document.querySelector('.num');
const inputLower = document.querySelector('.lower');

const confirmPsword = document.querySelector('.confirmPwd');
const confirmPassDiffer = document.querySelector('.bothCheck');
const checkBoxClass = document.querySelector('.checkBox');

div.addEventListener('input', () => {
    let value = 0;
    pwdCheckerDiv.style.display = 'block';
    if(div.value.length > 7) {
        numLength.classList.remove("red-text-color");
        numLength.classList.add("green-text-color");
        value += 1;
    }

    if(div.value.match(/[A-Z]/g)){
        numCapital.classList.remove("red-text-color");
        numCapital.classList.add("green-text-color");
        value += 1;
    }

    if(div.value.match(/[0-9]/g)) {
        inputNum.classList.remove("red-text-color");
        inputNum.classList.add("green-text-color");
        value += 1;
    }

    if(div.value.match(/[a-z]/g)) {
        inputLower.classList.remove("red-text-color");
        inputLower.classList.add('green-text-color');
        value += 1;
    }

    if(value === 4) {
        pwdCheckerDiv.style.display = 'none';
    }
})

function showPwd() {
    if(div.type == 'password') {
        div.type = 'text';
        confirmPsword.type = 'text';
    }
    else {
        div.type = 'password';
        confirmPsword.type = 'password';
    }
    console.log(checkBoxClass.value);
}

confirmPsword.addEventListener('input', () => {
    console.log(confirmPsword.value, div.value);
    if(confirmPsword.value != div.value) {
        confirmPassDiffer.style.display = 'block';
    }
    else {
        confirmPassDiffer.style.display = 'none';
    }
})