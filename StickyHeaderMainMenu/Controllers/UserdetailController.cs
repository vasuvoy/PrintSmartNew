using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        [HttpGet("{id}")]
        public async Task<ActionResult<Userdetail>> GetUserdetail(int id)
        {
            var userdetail = await _context.Userdetail.FindAsync(id);

            if (userdetail == null)
            {
                return NotFound();
            }

            return userdetail;
        }

        // PUT: api/Userdetails/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserdetail(int id, Userdetail userdetail)
        {
            if (id != userdetail.UserId)
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
                if (!UserdetailExists(id))
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
        [Route("api/Userdetails")]
        public async Task<ActionResult<Userdetail>> PostUserdetail(Userdetail userdetail)
        {
            _context.Userdetail.Add(userdetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserdetail", new { id = userdetail.UserId }, userdetail);
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
