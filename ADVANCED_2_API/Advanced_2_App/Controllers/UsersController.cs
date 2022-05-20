using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Advanced_2_App.Data;
using Advanced_2_App.Models;
using Advanced_2_App.Services;

namespace Advanced_2_App.Controllers
{
    public class UsersController : Controller
    {
        private UsersService _Service;
        public UsersController()
        {
            _Service = new UsersService();
        }

        // POST: Users/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register([Bind("UserName,Password")] User user)
        {
            Console.WriteLine("len is " + _Service.Users.Count);
            if (ModelState.IsValid)
            {
                _Service.AddUser(user);
                return RedirectToAction(nameof(Index));
            }
            return View(_Service.Users);
        }
    }
}
