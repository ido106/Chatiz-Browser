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
using Microsoft.AspNetCore.Authorization;

namespace Advanced_2_App.Controllers
{
    [ApiController]
    [Route("api")]
    public class UsersController : Controller
    {
        private readonly UsersService _service;
        public UsersController()
        {
            _service = new UsersService();
        }

        [HttpGet("{username}")]
        public async Task<IActionResult> GetUser(string username)
        {
            // maybe has to check if the user is null and return a default user or flag user.
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            return Json(_service.GetUser(username));
        }

        [HttpPost("login")]
        public async Task<bool> Login([Bind("username", "password")] User user)
        {
            if(!_service.IsUserExists(user))
            {
                return false;
            }
            HttpContext.Session.SetString("username", user.UserName);
            return true;
        }


        [HttpGet("contacts")]
        [Authorize]
        public async Task<IActionResult> Contacts()
        {
            String? username = HttpContext.Session.GetString("username");

            if(username == null)
            {
                return NotFound();
            }
            return Json(_service.getContacts(_service.GetUser(username)));
        }

        [HttpPost("contacts")]
        public async Task<IActionResult> Contacts([Bind("username")] String user)
        {
            String? username = HttpContext.Session.GetString("username");

            if (username == null)
            {
                return NotFound();
            }

            bool added = _service.addContact(user, user);

            if(!added)
            {
                return BadRequest();
            }
            return Ok();
        }
        
        [HttpGet("contacts/{id}")]
        public async Task<IActionResult> Contacts(string id)
        {
            String? username = HttpContext.Session.GetString("username");
            if (username == null || _service.GetUser(username) == null)
            {
                return BadRequest();
            }

            User contactId = _service.getContacts(_service.GetUser(username)).FirstOrDefault((x) => x.Id == id);

            if (contactId == null)
            {
                return BadRequest();
            }

            return Json(contactId);
        }

        [HttpPut("contacts/{id}")]
        public async Task<IActionResult> Contacts([Bind("name")] string name, [Bind("server")] string server)
        {
            String? username = HttpContext.Session.GetString("username");
            if (username == null || _service.GetUser(username) == null)
            {
                return BadRequest();
            }

            if(_service.GetUser(name) == null)
            {
                return BadRequest();;
            }

            Contact contact =  _service.getContact(_service.GetUser(username), name);
            contact.Username = name;
            contact.Server = server;
            return Ok();
        }




        [HttpGet("contacts/{id}/{messages}")]
        public async Task<IActionResult> GetMessages(int id)
        {
            String? username = HttpContext.Session.GetString("username");
            if (username == null || _service.GetUser(username) == null)
            {
                return BadRequest();
            }

            User user = _service.GetUser(username);
            if (user.Contacts.FirstOrDefault(x => x.Id == id) == null) { return BadRequest(); }
            foreach(Contact c in user.Contacts)
            {
                if (c.id == id)
                {
                    return Json(c.Messages);
                }
            }
            return BadRequest();
        }








    }
}
