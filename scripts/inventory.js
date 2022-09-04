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
    "./inventoryvectors/how_to_add_inventory/no1.svg",
    "./inventoryvectors/how_to_add_inventory/no2.svg",
    "./inventoryvectors/how_to_add_inventory/no3.svg",
    "./inventoryvectors/how_to_add_inventory/no4.svg",
    "./inventoryvectors/how_to_add_inventory/no5.svg",
    ""
]

let caption1 = [
    "Click the sidebar menu icon",
    "Click on the Inventory option on the sidebar menu",
    "Click on '+ Add new'",
    "Select Manual Entry to populate the inventory",
    "Fill all necessary fields with the appropriate information"
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
    if (constantVal < 4) {
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
    "./inventoryvectors/how_to_add_items_using_barcode_scanner/no1.svg",
    "./inventoryvectors/how_to_add_items_using_barcode_scanner/no2.svg",
    "./inventoryvectors/how_to_add_items_using_barcode_scanner/no3.svg",
    "./inventoryvectors/how_to_add_items_using_barcode_scanner/no4.svg",
    "./inventoryvectors/how_to_add_items_using_barcode_scanner/no5.svg",
    "./inventoryvectors/how_to_add_items_using_barcode_scanner/no6.svg",
    ""
]

let caption2 = [
    "Click the sidebar menu icon",
    "Click on the Inventory option on the sidebar menu",
    "Click on '+ Add new'",
    "Click scan barcode to populate the inventory",
    "Click scan barcode to populate the inventory",
    "Fill all necessary fields with the appropriate information"
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
    if (constantVal < 5) {
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
    "./inventoryvectors/how_to_edit_an_item/no1.svg",
    "./inventoryvectors/how_to_edit_an_item/no2.svg",
    "./inventoryvectors/how_to_edit_an_item/no3.svg",
    "./inventoryvectors/how_to_edit_an_item/no4.svg",
    "./inventoryvectors/how_to_edit_an_item/no5.svg",
    ""
]

let caption3 = [
    "Click the sidebar menu icon",
    "Click on the Inventory option on the sidebar menu",
    "Click on the edit icon to edit details about an item",
    "You can update the Name, Quantity and Amount of the product",
    "Click save"
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
    if (constantVal < 4) {
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

let images4 = [
    "",
    "./inventoryvectors/how_to_delete_an_inventory/no1.svg",
    "./inventoryvectors/how_to_delete_an_inventory/no2.svg",
    "./inventoryvectors/how_to_delete_an_inventory/no3.svg",
    "./inventoryvectors/how_to_delete_an_inventory/no4.svg",
    "./inventoryvectors/how_to_delete_an_inventory/no5.svg",
    ""
]

let caption4 = [
    "Click the sidebar menu icon",
    "Click on the Inventory option on the sidebar menu",
    "Search for the item which you want to delete",
    "Click on the bin icon",
    "Click on Delete to delete the item or Cancel to cancel the delete action"
]

function loadGallery4() {
    for (let i = 0; i < 3; i++) {
        var img = document.getElementById("img4" + i);
        img.src = images4[constantVal + i];
        let src = document.getElementById("mainView4" + i);
        src.appendChild(img)
    }

    var text = document.getElementById("caption4");
    text.innerText = caption4[constantVal + 0]
}

function scrollRight4() {
    if (constantVal < 4) {
        constantVal ++;
    }
    loadGallery4();
}

function scrollLeft4() {
    if (constantVal > 0) {
        constantVal --;
    } 
    loadGallery4();
}

document.getElementById("navLeft4").addEventListener("click", scrollLeft4);
document.getElementById("navRight4").addEventListener("click", scrollRight4);

loadGallery4();


