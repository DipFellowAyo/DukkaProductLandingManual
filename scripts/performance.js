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
    "./performancevectors/sales_performance/no1.svg",
    "./performancevectors/sales_performance/no2.svg",
    "./performancevectors/sales_performance/no3.svg",
    "./performancevectors/sales_performance/no4.svg",
    ""
]

let caption1 = [
    "Click the sidebar menu icon",
    "Click 'Performance'",
    "Select 'Sale' on the bottom left",
    "Toggle Daily, Weekly, Monthly or Yearly to view performance respectively"
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


let images2 = [
    "",
    "./performancevectors/customer_performance/no1.svg",
    "./performancevectors/customer_performance/no2.svg",
    "./performancevectors/customer_performance/no3.svg",
    "./performancevectors/customer_performance/no4.svg",
    ""
]

let caption2 = [
    "Click the sidebar menu icon",
    "Click 'Performance'",
    "Select 'Customer' from the listed icons on the bottom tab",
    "Toggle Daily, Weekly, Monthly or Yearly to view performance respectively"
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
    if (constantVal < 3) {
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
    "./performancevectors/inventory_performance/no1.svg",
    "./performancevectors/inventory_performance/no2.svg",
    "./performancevectors/inventory_performance/no3.svg",
    "./performancevectors/inventory_performance/no4.svg",
    ""
]

let caption3 = [
    "Click the sidebar menu icon",
    "Click 'Performance'",
    "Select Inventory from the listed icons on the bottom tab",
    "Toggle Daily, Weekly, Monthly or Yearly to view performance respectively"
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
    if (constantVal < 3) {
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