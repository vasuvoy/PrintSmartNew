using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
using StickyHeaderMainMenu.Models;

namespace StickyHeaderMainMenu.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserdetailController : ControllerBase
    {
        private readonly printsmartContext _context;

        public UserdetailController(printsmartContext context)
        {
            _context = context;
        }

        // GET: api/Userdetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Userdetail>>> GetUserdetail()
        {
            return await _context.Userdetail.ToListAsync();
        }

        // GET: api/Userdetails/5
        [HttpGet("{login_email}")]
        public async Task<ActionResult<IEnumerable<Userdetail>>> GetUserdetail(string login_email)
        {
            try
            {
                var email = login_email;

                //var userdetail = await _context.Userdetail.FindAsync(id);
                var loginDetails = _context.Userdetail.Where(e=>e.Email==email).ToList();//FromSqlRaw("CALL GetUser" + "('" + login_email + "')").ToList();//.Where(e => e.Email== login_email).ToList();//
                //if (loginDetails == null)
                //{
                //    return NotFound();
                //}
                return loginDetails;
            }
            catch (Exception e) {
                throw e;
            }
            
        }

        // PUT: api/Userdetails/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{email}")]
        public async Task<IActionResult> PutUserdetail(string email,[FromBody] Userdetail userdetail)
        {
            if (email != userdetail.Email)
            {
                return BadRequest();
            }

            _context.Entry(userdetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                //throw e;
                if (!UserdetailExists(userdetail.UserId))
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

        // POST: api/Userdetails
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]

        public async Task<ActionResult<IEnumerable<Userdetail>>> PostUserdetail(Userdetail userdetail)
        {
            try
            {
                //DateTime? datetime = userdetail.Dob;
                //var date = datetime.ToString();//.Replace("00:00:00", "");
                //var date_format = DateTime.ParseExact(date, "dd-MM-yyyy hh:mm:ss",
                //                   CultureInfo.InvariantCulture);
                //var exact_date =date_format.ToString("yyyy-MM-dd");
                var email_exists = _context.Userdetail.FirstOrDefault(em => em.Email.ToLower() == userdetail.Email);
                if (email_exists == null)
                {
                    //var RegisterUserDetails = _context.Userdetail.FromSqlRaw
                    //    ("CALL RegisterUser" + "(" +"'"+ userdetail.FirstName+"'"+","+ "'" + userdetail.LastName + "'" + ","+
                    //     "'" + userdetail.Email + "'" + "," + "'" + exact_date + "'" + "," + "'" + userdetail.Pwd + "'" + ","+
                    //      "'" + userdetail.Telephone + "'" + "," + "'" + userdetail.SecQid + "'" + "," + "'" + userdetail.SecQa + "'"+ ")").ToList();
                    _context.Userdetail.Add(userdetail);
                     await _context.SaveChangesAsync();

                    return CreatedAtAction("GetUserdetail", new { id = userdetail.UserId }, userdetail);
                    //return RegisterUserDetails;
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception e)
            { throw e; }
        }

        // DELETE: api/Userdetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Userdetail>> DeleteUserdetail(int id)
        {
            var userdetail = await _context.Userdetail.FindAsync(id);
            if (userdetail == null)
            {
                return NotFound();
            }

            _context.Userdetail.Remove(userdetail);
            await _context.SaveChangesAsync();

            return userdetail;
        }

        private bool UserdetailExists(int id)
        {
            return _context.Userdetail.Any(e => e.UserId == id);
        }
    }
}
