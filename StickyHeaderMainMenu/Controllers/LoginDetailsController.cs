using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StickyHeaderMainMenu.Data;
using StickyHeaderMainMenu.Models;


namespace StickyHeaderMainMenu.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginDetailsController : ControllerBase
    {
        private readonly LoginDetailsContext _context;

        public LoginDetailsController(LoginDetailsContext context)
        {
            _context = context;
        }

        //GET: api/LoginDetails
       //[HttpGet]
        //public async Task<ActionResult<IEnumerable<LoginDetails>>> GetLoginDetails()
        //{
  
        //    var login_record = _context.LoginDetails.FromSqlRaw("login_details").ToList();
        //    return login_record;
            
        //}

        // GET: api/LoginDetails/5
        [HttpGet("{login_email}")]
        public async Task<ActionResult<IEnumerable<LoginDetails>>> GetLoginDetails(string login_email)
        {
          
            var loginDetails = _context.LoginDetails.FromSqlRaw("login_details {0}", login_email).ToList();

            //if (loginDetails == null)
            //{
            //    return NotFound();
            //}

            return loginDetails;
        }

        // PUT: api/LoginDetails/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLoginDetails(int id, LoginDetails loginDetails)
        {
            if (id != loginDetails.id)
            {
                return BadRequest();
            }

            _context.Entry(loginDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoginDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/LoginDetails
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<LoginDetails>> PostLoginDetails(LoginDetails loginDetails)
        {
            _context.LoginDetails.Add(loginDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLoginDetails", new { id = loginDetails.id }, loginDetails);
        }

        // DELETE: api/LoginDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LoginDetails>> DeleteLoginDetails(int id)
        {
            var loginDetails = await _context.LoginDetails.FindAsync(id);
            if (loginDetails == null)
            {
                return NotFound();
            }

            _context.LoginDetails.Remove(loginDetails);
            await _context.SaveChangesAsync();

            return loginDetails;
        }

        private bool LoginDetailsExists(int id)
        {
            return _context.LoginDetails.Any(e => e.id == id);
        }
    }
}
