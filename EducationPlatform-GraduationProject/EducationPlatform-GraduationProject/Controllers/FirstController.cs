using EducationPlatform_GraduationProject.Data;
using EducationPlatform_GraduationProject.Models;
using EducationPlatform_GraduationProject.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace EducationPlatform_GraduationProject.Controllers
{
	[Authorize(Roles = "Admin")]
	public class FirstController : Controller
	{

		readonly private ApplicationDbContext _context;

		public FirstController(ApplicationDbContext context)
		{
			_context = context;
		}
		//Api Url
		string Baseurl = "http://localhost:5295/";
		HttpClientHandler _clienthandler = new HttpClientHandler();
		ContentWithDetails details = new ContentWithDetails();

		public async Task<IActionResult> Index()
		{
			HttpClient client = new HttpClient();
			HttpResponseMessage response = await client.GetAsync($"{Baseurl}api/Contents/ContentByClassID/1");

			if (response.IsSuccessStatusCode)
			{
				string Res = await response.Content.ReadAsStringAsync();
				List<ContentVM>? contents = JsonConvert.DeserializeObject<List<ContentVM>>(Res);
				return View(contents);

			}
			else
			{
				ViewBag.response = "Error";
			}
			return View();

		}

		public async Task<IActionResult> Details(int Id)
		{
			HttpClient client = new HttpClient();
			HttpResponseMessage response = await client.GetAsync($"{Baseurl}api/Contents/ContentByIDWithAllDetails/" + Id);
			if (response.IsSuccessStatusCode)
			{
				string Res = await response.Content.ReadAsStringAsync();
				ContentWithDetails contents = JsonConvert.DeserializeObject<ContentWithDetails>(Res);
				return View(contents);
			}
			else
			{
				return View("Error");
			}

		}

        #region 15-4-2023
        [HttpGet]
        public async Task<IActionResult> DeleteContentAsync(int id)
        {
            ContentVM content = new ContentVM();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage res = await client.GetAsync("api/Contents/ContentByItsIDWithoutDetails/" + id);
                if (res.IsSuccessStatusCode)
                {
                    var resulte = res.Content.ReadAsStringAsync().Result;
                    content = JsonConvert.DeserializeObject<ContentVM>(resulte);
                }
            }
            return View(content);
        }
        [HttpPost]
        public IActionResult DeleteContent(int id)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage res = client.DeleteAsync($"{Baseurl}api/Contents/" + id).Result;
                if (res.IsSuccessStatusCode)
                {
                    TempData["DeletedContent"] = "تم حذف المحتوى بنجاح";
                    return RedirectToAction("Index" , "First");
                }
                else
                {
                    ViewBag.msg = "some thing went wrong";
                }
                return View();
            }
        }

        public async Task<IActionResult> CreateContent()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateContent(ContentWithDetails content)
        {
            HttpClient Client = new HttpClient();
            HttpResponseMessage Response =
                await Client.PostAsJsonAsync($"{Baseurl}api/Contents/CreateNewContent", content);
            if (Response.IsSuccessStatusCode)
            {
                TempData["CreateContent"] = "تم إضافة المحتوى بنجاح";
                return RedirectToAction("Index" , "First");
            }
            else
            {
                return View();
            }
        }
       
        [HttpGet]
        public async Task<IActionResult> Edit(int id)
        {

            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync($"{Baseurl}api/Contents/ContentByIDWithAllDetails/" + id);
            if (response.IsSuccessStatusCode)
            {
                string Res = await response.Content.ReadAsStringAsync();
                ContentWithDetails? contents = JsonConvert.DeserializeObject<ContentWithDetails>(Res);
                return View(contents);
            }
            else
            {
                return View("Error");
            }
        }
        [HttpPost]
        public async Task<IActionResult> Edit(ContentWithDetails contentWithDetails)

        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage res = client.PutAsJsonAsync("http://localhost:5295/api/Contents/NewUpdateContent", contentWithDetails).Result;
                if (res.IsSuccessStatusCode)
                {
                    TempData["UpdateContent"] = "تم تعديل المحتوى بنجاح";
                    return RedirectToAction("Index", "First");
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