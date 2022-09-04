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
    "./invoicevectors/gen_invoice/no1.svg",
    "./invoicevectors/gen_invoice/no2.svg",
    "./invoicevectors/gen_invoice/no3.svg",
    "./invoicevectors/gen_invoice/no4.svg",
    "./invoicevectors/gen_invoice/no5.svg",
    "./invoicevectors/gen_invoice/no6.svg",
    "./invoicevectors/gen_invoice/no7.svg",
    "./invoicevectors/gen_invoice/no8.svg",
    ""
]

let caption1 = [
    "Click the sidebar menu icon",
    "Select Invoices",
    "Click on '+ Add new'",
    "Select desired products from your inventory and click 'Next'",
    "On the invoice checkout page, select the customer the invoice is being created for. If this is a new customer, add the customer as a new customer",
    "Click '+' to increase or '-' to decrease the quantity of each product(Optional) and click 'Next'",
    "On the Invoice Detail page, fill in the company name (Optional)",
    "On the Invoice Detail page, fill in the company name (Optional)"
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
    if (constantVal < 7) {
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
