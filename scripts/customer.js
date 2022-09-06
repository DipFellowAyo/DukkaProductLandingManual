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
    "./customervectors/add_new_customer/no1.svg",
    "./customervectors/add_new_customer/no2.svg",
    "./customervectors/add_new_customer/no3.svg",
    "./customervectors/add_new_customer/no4.svg",
    "",
]

let caption1 = [
    "Click the sidebar menu icon",
    "Select Customers",
    "Click on '+ Add new'",
    "Add Name, Phone Number, Photo (optional), Email Address and click 'Add'"
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
    if (constantVal < 3) {
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
