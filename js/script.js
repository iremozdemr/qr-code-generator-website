let inputUrl = document.querySelector("#input-url");
let inputColor = document.querySelector("select");
const button = document.querySelector("#button-generate");
let qrCodeDiv = document.querySelector("#qr-code-div");
let qrCodeImage = document.querySelectorAll("#qr-code-div img");

let qr;

button.addEventListener("click",submit);

function submit(){
    let url = inputUrl.value;
    let color = inputColor.value;

    if(qr == null || url == ""){
        //qr = new QRCode("qr-code-div",url);
        qr = new QRCode(qrCodeDiv,
            {
                text: url,
                width: 128,
                height: 128,
	            colorDark : color,
	            colorLight : "#ffffff",
	            correctLevel : QRCode.CorrectLevel.H
            }
        );
    } 
    else{
        qrCodeDiv.innerHTML = "";
        qr = new QRCode(qrCodeDiv,
            {
                text: url,
                width: 128,
                height: 128,
	            colorDark : color,
	            colorLight : "#ffffff",
	            correctLevel : QRCode.CorrectLevel.H
            }
        );
    }
}