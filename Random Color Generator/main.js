const getColor = () => {

    const randomColor = Math.floor(Math.random()*16777215);
    
    const randomCode = '#'+randomColor.toString(16);//16 standards for exact color code
    console.log(randomColor, randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerText = randomCode;


        navigator.clipboard.writeText(randomCode)
    }

document.getElementById('btn').addEventListener('click',getColor);