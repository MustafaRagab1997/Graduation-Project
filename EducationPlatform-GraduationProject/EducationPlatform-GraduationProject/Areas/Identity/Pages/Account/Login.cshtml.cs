﻿// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
#nullable disable

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using EducationPlatform_GraduationProject.Data;
using EducationPlatform_GraduationProject.Models;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;

namespace EducationPlatform_GraduationProject.Areas.Identity.Pages.Account
{
	public class LoginModel : PageModel
	{
		private readonly SignInManager<ApplicationUser> _signInManager;
		//private readonly ILogger<LoginModel> _logger;
		private readonly ApplicationDbContext _context;
		public LoginModel(SignInManager<ApplicationUser> signInManager, ApplicationDbContext context)
		{
			_signInManager = signInManager;
			_context = context;
			//_logger = logger;
		}

		/// <summary>
		///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
		///     directly from your code. This API may change or be removed in future releases.
		/// </summary>
		[BindProperty]
		public InputModel Input { get; set; }

		/// <summary>
		///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
		///     directly from your code. This API may change or be removed in future releases.
		/// </summary>
		public IList<AuthenticationScheme> ExternalLogins { get; set; }

		/// <summary>
		///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
		///     directly from your code. This API may change or be removed in future releases.
		/// </summary>
		public string ReturnUrl { get; set; }

		/// <summary>
		///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
		///     directly from your code. This API may change or be removed in future releases.
		/// </summary>
		[TempData]
		public string ErrorMessage { get; set; }

		/// <summary>
		///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
		///     directly from your code. This API may change or be removed in future releases.
		/// </summary>
		public class InputModel
		{
			/// <summary>
			///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
			///     directly from your code. This API may change or be removed in future releases.
			/// </summary>
			[Required]
			//    [EmailAddress]
			[Display(Name = "UserName")]
			public string Email { get; set; }

			/// <summary>
			///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
			///     directly from your code. This API may change or be removed in future releases.
			/// </summary>
			[Required]
			[DataType(DataType.Password)]
			public string Password { get; set; }

			/// <summary>
			///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
			///     directly from your code. This API may change or be removed in future releases.
			/// </summary>
			[Display(Name = "Remember me?")]
			public bool RememberMe { get; set; }
		}

		public async Task OnGetAsync(string returnUrl = null)
		{
			if (!string.IsNullOrEmpty(ErrorMessage))
			{
				ModelState.AddModelError(string.Empty, ErrorMessage);
			}

			returnUrl ??= Url.Content("~/");

			// Clear the existing external cookie to ensure a clean login process
			await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

			ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();

			ReturnUrl = returnUrl;
		}

		public async Task<IActionResult> OnPostAsync(string returnUrl = null)
		{
			returnUrl ??= Url.Content("~/");

			ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();

			var checkalogged = await _context.OneDeviceLogin.Where(m => m.userName == Input.Email).FirstOrDefaultAsync();
			
			if (ModelState.IsValid)
			{
                if (checkalogged != null)                
                {
                    ModelState.AddModelError(string.Empty, "لا يمكن تسجيل الدخول من جهازين في نفس الوقت");
                    Input.Email = null;
                    Input.Password = null;
                    return Page();
                }

                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager.PasswordSignInAsync(Input.Email, Input.Password, Input.RememberMe, lockoutOnFailure: false);
               
                if (result.Succeeded)
				{
                    var xlogging = new OneDeviceLogin
                    {
                        userName = Input.Email
                    };
                    await _context.OneDeviceLogin.AddAsync(xlogging);
                    await _context.SaveChangesAsync();
                    //var student = _context.Students.Select(s => s.UserIdentity.UserName);
                    var loggedUser = Input.Email;
					var userId = await _context.Students.Where(m => m.IdentityUser.Email == loggedUser).Select(g => g.IdentityUserId).FirstOrDefaultAsync();
					var roleName = await _context.UserRoles.Where(r => r.UserId == userId).Select(r => r.RoleId).FirstOrDefaultAsync();

					if (roleName == "Admin")
					{
						return RedirectToAction("Index", "Home");
					}
					else
					{
						return RedirectToAction("Index", "Student");

					}

					//_logger.LogInformation("User logged in.");
					//               return LocalRedirect(returnUrl);
				}
				//if (result.RequiresTwoFactor)
				//{
				//    return RedirectToPage("./LoginWith2fa", new { ReturnUrl = returnUrl, RememberMe = Input.RememberMe });
				//}
				//if (result.IsLockedOut)
				//{
				//    //_logger.LogWarning("User account locked out.");
				//    return RedirectToPage("./Lockout");
				//}
				else
				{
                    ModelState.AddModelError(string.Empty, "خطأ في اسم المستخدم أو كلمة المرور");
                    return Page();
                }
			}
			// If we got this far, something failed, redisplay form
			return Page();
		}
	}
}
