let header = document.getElementsByClassName("section_header");

let footer = document.getElementsByClassName("section_footer");

for (let i = 0; i < header.length; i++) {
    header[i].addEventListener("click", function() {
        if (parseInt(footer[i].style.height) != footer[i].scrollHeight) {
            footer[i].style.height = footer[i].scrollHeight + "px";
            header[i].classList.toggle("active");
        }
        else{
            footer[i].style.height= "0";
            header[i].classList.remove("active");
        }
        for (let j = 0; j < footer.length; j++) {
            if (j !== i) {
                footer[j].style.height= "0";
                header[j].classList.remove("active");
            }
        }
    });
}


let images1 = [
    "",
    "./paymentoptionsvectors/bank_transfer/no1.svg",
    "./paymentoptionsvectors/bank_transfer/no2.svg",
    "./paymentoptionsvectors/bank_transfer/no3.svg",
    "./paymentoptionsvectors/bank_transfer/no4.svg",
    "./paymentoptionsvectors/bank_transfer/no5.svg",
    "./paymentoptionsvectors/bank_transfer/no6.svg",
    "./paymentoptionsvectors/bank_transfer/no7.svg",
    "./paymentoptionsvectors/bank_transfer/no8.svg",
    "./paymentoptionsvectors/bank_transfer/no9.svg",
    "./paymentoptionsvectors/bank_transfer/no10.svg",
    "./paymentoptionsvectors/bank_transfer/no11.svg",
    "./paymentoptionsvectors/bank_transfer/no12.svg",
    ""
]

let caption1 = [
    "Click the sidebar menu icon",
    "Click 'Home'",
    "Select the item(s) the customer is buying",
    "Click 'Next'",
    "Select + to increase the quantity of product (optional)",
    "To link this sale to a customer, click the photo icon to select the customer",
    "Select customer from the list",
    "Under mode of payment, select the Bank option. Click Next",
    "Click Confirm to confirm the order. Once you have received the payment confirmation via bank transfer",
    "Click on the Menu tab icon",
    "Click on 'Orders'",
    "Click 'Confirm' to confirm the order"
]

let constantVal = 0;

function loadGallery1() {
    for (let i = 0; i < 3; i++) {
        var img = document.getElementById("img" + i);
        img.src = images1[constantVal + i];
        let src = document.getElementById("mainView" + i);
        src.appendChild(img)
    }

    var text = document.getElementById("caption");
    text.innerText = caption1[constantVal + 0]
}

function scrollRight() {
    if (constantVal < 11) {
        constantVal ++;
    }
    loadGallery1();
}

function scrollLeft() {
    if (constantVal > 0) {
        constantVal --;
    } 
    loadGallery1();
}

document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("navRight").addEventListener("click", scrollRight);

loadGallery1();


let images2 = [
    "",
    "./paymentoptionsvectors/cash/no1.svg",
    "./paymentoptionsvectors/cash/no2.svg",
    "./paymentoptionsvectors/cash/no3.svg",
    "./paymentoptionsvectors/cash/no4.svg",
    "./paymentoptionsvectors/cash/no5.svg",
    "./paymentoptionsvectors/cash/no6.svg",
    "./paymentoptionsvectors/cash/no7.svg",
    "./paymentoptionsvectors/cash/no8.svg",
    "./paymentoptionsvectors/cash/no9.svg",
    ""
]

let caption2 = [
    "Click the sidebar menu icon",
    "Click 'Home'",
    "Select the item(s) the customer is buying",
    "Click 'Next'",
    "Select + to increase the quantity of product (optional)",
    "To link this sale to a customer, click the photo icon to select the customer",
    "Select customer from the list",
    "Under mode of payment, select Cash and click 'Next'",
    "Click 'Confirm' to confirm the order",
]

function loadGallery2() {
    for (let i = 0; i < 3; i++) {
        var img = document.getElementById("img2" + i);
        img.src = images2[constantVal + i];
        let src = document.getElementById("mainView2" + i);
        src.appendChild(img)
    }

    var text = document.getElementById("caption2");
    text.innerText = caption2[constantVal + 0]
}

function scrollRight2() {
    if (constantVal < 8) {
        constantVal ++;
    }
    loadGallery2();
}

function scrollLeft2() {
    if (constantVal > 0) {
        constantVal --;
    } 
    loadGallery2();
}

document.getElementById("navLeft2").addEventListener("click", scrollLeft2);
document.getElementById("navRight2").addEventListener("click", scrollRight2);

loadGallery2();

let images3 = [
    "",
    "./paymentoptionsvectors/credit/no1.svg",
    "./paymentoptionsvectors/credit/no2.svg",
    "./paymentoptionsvectors/credit/no3.svg",
    "./paymentoptionsvectors/credit/no4.svg",
    "./paymentoptionsvectors/credit/no5.svg",
    "./paymentoptionsvectors/credit/no6.svg",
    "./paymentoptionsvectors/credit/no7.svg",
    "./paymentoptionsvectors/credit/no8.svg",
    "./paymentoptionsvectors/credit/no9.svg",
    "./paymentoptionsvectors/credit/no10.svg",
    "./paymentoptionsvectors/credit/no11.svg",
    "./paymentoptionsvectors/credit/no12.svg",
    ""
]

let caption3 = [
    "Click the sidebar menu icon",
    "Click 'Home'",
    "Select the item(s) the customer is buying",
    "Click 'Next'",
    "Select + to increase the quantity of product (optional)",
    "To link this sale to a customer, click the photo icon to select the customer",
    "Select customer from the list",
    "Select credit option under the mode of payment. Click continue",
    "Click 'Enter a reminder date'",
    "Choose your applicable reminder date. Click Ok",
    "Click 'Next'",
    "Click 'Confirm' to confirm the order"
]

function loadGallery3() {
    for (let i = 0; i < 3; i++) {
        var img = document.getElementById("img3" + i);
        img.src = images3[constantVal + i];
        let src = document.getElementById("mainView3" + i);
        src.appendChild(img)
    }

    var text = document.getElementById("caption3");
    text.innerText = caption3[constantVal + 0]
}

function scrollRight3() {
    if (constantVal < 11) {
        constantVal ++;
    }
    loadGallery3();
}

function scrollLeft3() {
    if (constantVal > 0) {
        constantVal --;
    } 
    loadGallery3();
}

document.getElementById("navLeft3").addEventListener("click", scrollLeft3);
document.getElementById("navRight3").addEventListener("click", scrollRight3);

loadGallery3();