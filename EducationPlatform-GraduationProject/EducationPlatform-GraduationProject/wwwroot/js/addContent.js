var btnAddImage = document.getElementById("BtnAddImage");
var images = document.getElementById("Images");
var counterImage = 0;

function AddImages()
{
    counterImage++;
    var container = document.createElement("div");
    var input = document.createElement("input");
    input.setAttribute("name", `Images[${counterImage}]`);
    input.setAttribute("placeholder", "ادخل رابط الصورة");
    input.classList.add("form-control", "mt-2");
    input.style.float = "right";
    input.style.width = "90%";
    input.style.textAlign = "right";
    //Button
    var btn = document.createElement("span");
    btn.setAttribute("onclick", "return this.parentNode.remove();");
    btn.classList.add("btn", "btn-danger");
    btn.style.float = "left";
    btn.style.width = "8%";
    btn.style.marginTop = "10px";
    btn.textContent = "-";

    //Validation
    var ValidSpan = document.createElement("span");
    ValidSpan.setAttribute("asp-validation-for", "Images");
    ValidSpan.classList.add("text-danger");



    container.appendChild(input);
    container.appendChild(btn);
    container.appendChild(ValidSpan);
    images.appendChild(container);
} 

var btnAddVideos = document.getElementById("BtnAddVideo");
var videos = document.getElementById("Videos");
var counterVideo = 0;

function AddVideo()
{
  counterVideo++;
  videos.innerHTML += `<div>
        <input name="Videos[${counterVideo}]" class="form-control mt-2" style="float: right; width: 90%; text-align: right;" placeholder="ادخل رابط الفيديو  "  />
        <button id="imagebtn${counterImage}"  onclick="return this.parentNode.remove();" class="btn btn-danger" style="width: 8%; float: left; margin-top: 10px;" > - </button>
        <span asp-validation-for="Videos[${counterVideo}]" class="text-danger"></span>
        </div>`;
}

var btnAddPdf = document.getElementById("BtnAddPDF");
var PDFs = document.getElementById("PDFs");
var counterPdf = 0;

function AddPDF()
{
  counterPdf++;
  PDFs.innerHTML += `<div>
        <input name="Pdfs[${counterPdf}]" class="form-control mt-2" style="float: right; width: 90%; text-align: right;"  placeholder="ادخل رابط الملف  " />
        <button id="imagebtn${counterImage}"  onclick="return this.parentNode.remove();" class="btn btn-danger" style="width: 8%; float: left; margin-top: 10px;" > - </button>
        <span asp-validation-for="Pdfs[${counterPdf}]" class="text-danger"></span>
        </div>`;
}

///////////////// Hide And Display Images //////////////////
var ImageContainer = document.getElementById("ContainerImages");

function visibaleAndHideImages()
{
  if (ImageContainer.style.display != "none") {
    ImageContainer.style.display = "none";
  } else {
    ImageContainer.style.display = "block";
  }
}

///////////////// Hide And Display Videos //////////////////
var VideoContainer = document.getElementById("ContainerVideos");

function visibaleAndHideVideos() {
  if (VideoContainer.style.display != "none") {
    VideoContainer.style.display = "none";
  } else {
    VideoContainer.style.display = "block";
  }
}

///////////////// Hide And Display PDFs //////////////////
var PDFContainer = document.getElementById("ContainerPDFs");

function visibaleAndHidePDF() {
  if (PDFContainer.style.display != "none") {
    PDFContainer.style.display = "none";
  } else {
    PDFContainer.style.display = "block";
  }
}