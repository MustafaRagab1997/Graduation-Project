using EducationPlatform_GraduationProject.Data;
using EducationPlatform_GraduationProject.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace EducationPlatform_GraduationProject.Controllers
{
    public class MonthController : Controller
    {
        //Api Url
        string Baseurl = "http://localhost:5295/";
        readonly private ApplicationDbContext _context;

        public MonthController(ApplicationDbContext context)
        {
            _context = context;
        }
        #region Edit
        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {

            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync($"{Baseurl}api/Months/GetStudentMonths/" + id);
            if (response.IsSuccessStatusCode)
            {
                var classid = _context.Students.Where(s => s.StId == id).Select(x => x.ClassID).FirstOrDefault();
                ViewBag.Classid = classid;
                string Res = await response.Content.ReadAsStringAsync();
                ReceveMonth? contents = JsonConvert.DeserializeObject<ReceveMonth>(Res);
                return View(contents);

            }
            else
            {
                return NotFound("هذا الطالب لم يحجز اي شهر");
            }
        }
        [HttpPost]
        public async Task<IActionResult> Edit(ReceveMonth contentWithDetails)
        {            
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage res = client.PutAsJsonAsync("http://localhost:5295/api/Months/updatestudentMonths", contentWithDetails).Result;
                if (res.IsSuccessStatusCode)
                {
                    var classid = _context.Students.Where(s => s.StId == contentWithDetails.StID).Select(x => x.ClassID).FirstOrDefault();
                    TempData["UpdateMonthStudent"] = "تم تعديل بيانات حجز الطالب بنجاح";
                    return RedirectToAction("GetAllStudent", "Teacher" , new {id=classid} );
                }
                else
                {
                    return View();
                }
            }
        }
        #endregion
    }
}