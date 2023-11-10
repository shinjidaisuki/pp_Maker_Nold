const downloadBtn = document.querySelector(".download");

$(document).ready(function () {
    downloadBtn.addEventListener("click", function () {
        domtoimage
            .toBlob(document.getElementById("box"))
            .then(function (blob) {
                window.saveAs(blob, "palestine_pp.png");
            });
    });
});

let input = document.querySelector("#inputf");
const image = document.querySelector("img");

input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0]);
});

// downloadBtn.addEventListener("click", function () {
//     let div = document.querySelector(".box");
//     domtoimage
//         .toPng(div)
//         .then(function (dataUrl) {
//             var img = new Image();
//             img.src = dataUrl;
//             document.body.appendChild(img);
//         })
//         .catch(function (error) {
//             console.log("error found", error);
//         });
// });

const btn1 = document.querySelector(".btntext");
input2 = document.querySelector(".Gtext");
h2t = document.querySelector(".h2t");
btn1.addEventListener("click", function () {
    h2t.innerHTML = input2.value;
});

const btn2 = document.querySelector(".btntext2");
input3 = document.querySelector(".Gtext2");
h4t = document.querySelector(".h4t");
btn2.addEventListener("click", function () {
    h4t.innerHTML = input3.value;
});
let boxImage = document.querySelector(".box-image");
let boxI = document.querySelector(".box-image2");
const btn3 = document.querySelector(".btntext3");
const btn4 = document.querySelector(".btntext4");
const btn5 = document.querySelector(".btntext5");
btn3.addEventListener("click", function () {
    boxI.classList.toggle("off");
});
btn4.addEventListener("click", function () {
    location.reload();
});
btn5.addEventListener("click", function () {
    boxI.classList.toggle("border");
});
