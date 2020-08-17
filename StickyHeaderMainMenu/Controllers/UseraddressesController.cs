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
    public class UseraddressesController : ControllerBase
    {
        private readonly printsmartContext _context;

        public UseraddressesController(printsmartContext context)
        {
            _context = context;
        }

        // GET: api/Useraddresses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Useraddress>>> GetUseraddress()
        {
            return await _context.Useraddress.ToListAsync();
        }

        // GET: api/Useraddresses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Useraddress>>> GetUseraddress(int id,string action)
        {
            if (action == "addr_lst")
            {
                var useraddress = _context.Useraddress.Where(e => e.UserId == id).ToList();
                if (useraddress.Count == 0)
                {
                    return NotFound();
                }
                return useraddress;
            }
            else
            {
                var useraddress_edit = _context.Useraddress.Where(e => e.AddrId == id).ToList();
                if (useraddress_edit.Count == 0)
                {
                    return NotFound();
                }
                return useraddress_edit;
            }
   
        }

        // PUT: api/Useraddresses/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUseraddress(int id, Useraddress useraddress)
        {
            if (id != useraddress.AddrId)
            {
                return BadRequest();
            }

            _context.Entry(useraddress).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UseraddressExists(id))
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

        // POST: api/Useraddresses
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Useraddress>> PostUseraddress(Useraddress useraddress)
        {
            _context.Useraddress.Add(useraddress);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUseraddress", new { id = useraddress.AddrId }, useraddress);
        }

        // DELETE: api/Useraddresses/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Useraddress>> DeleteUseraddress(int id)
        {
            var useraddress = await _context.Useraddress.FindAsync(id);
            if (useraddress == null)
            {
                return NotFound();
            }

            _context.Useraddress.Remove(useraddress);
            await _context.SaveChangesAsync();

            return useraddress;
        }

        private bool UseraddressExists(int id)
        {
            return _context.Useraddress.Any(e => e.UserId == id);
        }


    }
}
