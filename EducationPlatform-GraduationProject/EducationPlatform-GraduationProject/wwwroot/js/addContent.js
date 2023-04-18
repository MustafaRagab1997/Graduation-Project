//var btnAddImage = document.getElementById("BtnAddImage");
//var images = document.getElementById("Images");
//var counterImage = 0;

//function AddImages()
//{
//    counterImage++;
//    var container = document.createElement("div");
//    var input = document.createElement("input");
//    input.setAttribute("name", `Images[${counterImage}]`);
//    input.setAttribute("placeholder", "ادخل رابط الصورة");
//    input.classList.add("form-control", "mt-2");
//    input.style.float = "right";
//    input.style.width = "90%";
//    input.style.textAlign = "right";
//    //Button
//    var btn = document.createElement("span");
//    btn.setAttribute("onclick", "return this.parentNode.remove();");
//    btn.classList.add("btn", "btn-danger");
//    btn.style.float = "left";
//    btn.style.width = "8%";
//    btn.style.marginTop = "10px";
//    btn.textContent = "-";

//    //Validation
//    var ValidSpan = document.createElement("span");
//    ValidSpan.setAttribute("asp-validation-for", "Images");
//    ValidSpan.classList.add("text-danger");



//    container.appendChild(input);
//    container.appendChild(btn);
//    container.appendChild(ValidSpan);
//    images.appendChild(container);
//}

//var btnAddVideos = document.getElementById("BtnAddVideo");
//var videos = document.getElementById("Videos");
//var counterVideo = 0;

//function AddVideo()
//{
//  counterVideo++;
//  videos.innerHTML += `<div>
//        <input name="Videos[${counterVideo}]" class="form-control mt-2" style="float: right; width: 90%; text-align: right;" placeholder="ادخل رابط الفيديو  "  />
//        <button id="imagebtn${counterImage}"  onclick="return this.parentNode.remove();" class="btn btn-danger" style="width: 8%; float: left; margin-top: 10px;" > - </button>
//        <span asp-validation-for="Videos[${counterVideo}]" class="text-danger"></span>
//        </div>`;
//}

//var btnAddPdf = document.getElementById("BtnAddPDF");
//var PDFs = document.getElementById("PDFs");
//var counterPdf = 0;

//function AddPDF()
//{
//  counterPdf++;
//  PDFs.innerHTML += `<div>
//        <input name="Pdfs[${counterPdf}]" class="form-control mt-2" style="float: right; width: 90%; text-align: right;"  placeholder="ادخل رابط الملف  " />
//        <button id="imagebtn${counterImage}"  onclick="return this.parentNode.remove();" class="btn btn-danger" style="width: 8%; float: left; margin-top: 10px;" > - </button>
//        <span asp-validation-for="Pdfs[${counterPdf}]" class="text-danger"></span>
//        </div>`;
//}

/////////////////// Hide And Display Images //////////////////
//var ImageContainer = document.getElementById("ContainerImages");

//function visibaleAndHideImages()
//{
//  if (ImageContainer.style.display != "none") {
//    ImageContainer.style.display = "none";
//  } else {
//    ImageContainer.style.display = "block";
//  }
//}

/////////////////// Hide And Display Videos //////////////////
//var VideoContainer = document.getElementById("ContainerVideos");

//function visibaleAndHideVideos() {
//  if (VideoContainer.style.display != "none") {
//    VideoContainer.style.display = "none";
//  } else {
//    VideoContainer.style.display = "block";
//  }
//}

/////////////////// Hide And Display PDFs //////////////////
//var PDFContainer = document.getElementById("ContainerPDFs");

//function visibaleAndHidePDF() {
//  if (PDFContainer.style.display != "none") {
//    PDFContainer.style.display = "none";
//  } else {
//    PDFContainer.style.display = "block";
//  }
//}


/////////////////////////////////////////

var btnAddImage = document.getElementById("BtnAddImage");
var images = document.getElementById("Images");
var counterImage = 0;

function AddImages() {
    counterImage++;
    buttonRemoveImage.disabled = false;
    var container = document.createElement("div");
    var input = document.createElement("input");
    input.setAttribute("name", `Images[${counterImage}]`);
    input.setAttribute("placeholder", "ادخل رابط الصورة");
    input.classList.add("form-control", "mt-2");
    input.style.float = "right";
    input.style.width = "100%";
    input.style.textAlign = "right";


    //Validation
    var ValidSpan = document.createElement("span");
    ValidSpan.setAttribute("asp-validation-for", "Images");
    ValidSpan.classList.add("text-danger");


    container.appendChild(input);
    container.appendChild(ValidSpan);
    images.appendChild(container);
}

var buttonRemoveImage = document.getElementById("imagebtn");

function removeImage() {
    if (counterImage > 0) {
        counterImage--;
        images.removeChild(images.lastChild);
        if (counterImage == 0) {
            buttonRemoveImage.disabled = true;
        }
    }

}




var btnAddVideos = document.getElementById("BtnAddVideo");
var videos = document.getElementById("Videos");
var counterVideo = 0;




function AddVideo() {
    counterVideo++;
    buttonRemoveVideo.disabled = false;
    var VideoContainer = document.createElement("div");
    var VideoInput = document.createElement("input");
    VideoInput.setAttribute("name", `Videos[${counterVideo}]`);
    VideoInput.setAttribute("placeholder", "ادخل رابط الفيديو");
    VideoInput.classList.add("form-control", "mt-2");
    VideoInput.style.float = "right";
    VideoInput.style.width = "100%";
    VideoInput.style.textAlign = "right";

    //Validation
    var ValidVideoSpan = document.createElement("span");
    ValidVideoSpan.setAttribute("asp-validation-for", "Videos");
    ValidVideoSpan.classList.add("text-danger");

    VideoContainer.appendChild(VideoInput);
    VideoContainer.appendChild(ValidVideoSpan);
    videos.appendChild(VideoContainer);

}


var buttonRemoveVideo = document.getElementById("videobtn");
function removeVideo() {
    if (counterVideo > 0) {
        counterVideo--;
        videos.removeChild(videos.lastChild);
        if (counterVideo == 0) {
            buttonRemoveVideo.disabled = true;
        }
    }

}





// var btnAddPdf = document.getElementById("BtnAddPDF");
var PDFs = document.getElementById("PDFs");
var counterPdf = 0;

function AddPDF() {
    counterPdf++;
    buttonRemovePDF.disabled = false;
    var PdfContainer = document.createElement("div");
    var PDFInput = document.createElement("input");
    PDFInput.setAttribute("name", `Pdfs[${counterPdf}]`);
    PDFInput.setAttribute("placeholder", "ادخل رابط الملف");
    PDFInput.classList.add("form-control", "mt-2");
    PDFInput.style.float = "right";
    PDFInput.style.width = "100%";
    PDFInput.style.textAlign = "right";

    //Validation
    var ValidPDFSpan = document.createElement("span");
    ValidPDFSpan.setAttribute("asp-validation-for", "Pdfs");
    ValidPDFSpan.classList.add("text-danger");

    PdfContainer.appendChild(PDFInput);
    PdfContainer.appendChild(ValidPDFSpan);
    PDFs.appendChild(PdfContainer);


}


var buttonRemovePDF = document.getElementById("PDFbtn");
function removePDF() {
    if (counterPdf > 0) {
        counterPdf--;
        PDFs.removeChild(PDFs.lastChild);
        if (counterPdf == 0) {
            buttonRemovePDF.disabled = true;
        }
    }

}



///////////////// Hide And Display Images //////////////////
var ImageContainer = document.getElementById("ContainerImages");

function visibaleAndHideImages() {
    if (ImageContainer.style.display != "none") {
        ImageContainer.style.display = "none";
    } else {
        ImageContainer.style.display = "block";
    }
}

///////////////// Hide And Display Images //////////////////
var VideoContainer = document.getElementById("ContainerVideos");

function visibaleAndHideVideos() {
    if (VideoContainer.style.display != "none") {
        VideoContainer.style.display = "none";
    } else {
        VideoContainer.style.display = "block";
    }
}

///////////////// Hide And Display Images //////////////////
var PDFContainer = document.getElementById("ContainerPDFs");

function visibaleAndHidePDF() {
    if (PDFContainer.style.display != "none") {
        PDFContainer.style.display = "none";
    } else {
        PDFContainer.style.display = "block";
    }
}
