/////////////////////////////////////PDFS/////////////////////////////////////////////////
var btnAddPdf = document.getElementById("BtnAddPDF");
var PDFs = document.getElementById("PDFs");
var span = document.getElementById("PDFCount");


var counterPdf = span.getAttribute("data-value");
counterPdf --;

function AddPDF() {
    counterPdf++;
    PDFs.innerHTML += `<div>
        <input name="Pdfs[${counterPdf}]" class="form-control mt-2" style="float: right; width: 90%; text-align: right;"  placeholder="ادخل رابط الملف  " />        
        <span asp-validation-for="Pdfs" class="text-danger"></span>
        </div>`;
}
var button1 = document.getElementById("pdfbtn");

function removepdf()
{
    counterPdf--;
    PDFs.removeChild(PDFs.lastChild);
}

//////////////////////////////////////////Videos/////////////////////////////////////////////
var btnAddvideo = document.getElementById("BtnAddVideo");
var Videos = document.getElementById("Videos");
var spanvideo = document.getElementById("VideosCount");


var countervid = spanvideo.getAttribute("data-value");
countervid--;

function AddVideo() {
    countervid++;
    Videos.innerHTML += `<div>
        <input name="Videos[${countervid}]" class="form-control mt-2" style="float: right; width: 90%; text-align: right;"  placeholder="ادخل رابط الفيديو"/>        
        <span asp-validation-for="Videos" class="text-danger"></span>
        </div>`;
}
var button2 = document.getElementById("videobtn");

function removevideo() {
    countervid--;
    Videos.removeChild(Videos.lastChild);
}

//////////////////////////////////////////Images///////////////////////////////////////////////

var btnAddimges = document.getElementById("BtnAddImages");
var imgs = document.getElementById("Images");
var spanimgs = document.getElementById("ImgsCount");


var counterimgs = spanimgs.getAttribute("data-value");
counterimgs--;

function AddImages() {
    counterimgs++;
    imgs.innerHTML += `<div>
        <input name="Images[${counterimgs}]" class="form-control mt-2" style="float: right; width: 90%; text-align: right;"  placeholder="ادخل رابط الصورة"/>        
        <span asp-validation-for="Images" class="text-danger"></span>
        </div>`;
}
var button3 = document.getElementById("imgsbtn");

function removeimg() {
    counterimgs--;
    imgs.removeChild(imgs.lastChild);
}