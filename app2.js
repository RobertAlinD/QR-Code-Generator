const qrText = document.querySelector('#qrText');
const imageBox = document.querySelector('#imageBox');
const qrImage = document.querySelector("#qrImage");
const buttonGenerate = document.querySelector('button');

buttonGenerate.addEventListener('click', generateCode);

function generateCode() {
    if (qrText.value.length > 0) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + qrText.value;
        imageBox.classList.add('show-img');
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }

}
