function mudarCor(){
    const textRed = document.getElementById('idRed')
    const textGreen = document.getElementById('idGreen')
    const textBlue = document.getElementById('idBlue')

    const red = document.getElementById('inputRed').value;
    const green = document.getElementById('inputGreen').value;
    const blue = document.getElementById('inputBlue').value;

    let cor = `rgb(${red},${green},${blue})`;

    const rgb = document.getElementById('rgb')
    rgb.style.color = cor;

    document.getElementById('container').style.backgroundColor = cor;

    textRed.value = red;
    textGreen.value = green;
    textBlue.value = red;
}

document.getElementById('inputRed').addEventListener('input', mudarCor)
document.getElementById('inputGreen').addEventListener('input', mudarCor)
document.getElementById('inputBlue').addEventListener('input', mudarCor)

window.onload = mudarCor;