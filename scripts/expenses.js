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