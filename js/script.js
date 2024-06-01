let input = document.querySelector("#input-url");
const button = document.querySelector("#button-generate");
let qrCodeDiv = document.querySelector("#qr-code-div");

let qr;

button.addEventListener("click",submit);

function submit(){
    let url = input.value;
    console.log(url);

    if (qr == null) {
        qr = new QRCode("qr-code-div",url);
    } 
    else{
        qrCodeDiv.style.display = "none";
        qr.makeCode(url);
        qrCodeDiv.style.display = "block";
    }
}