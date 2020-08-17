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
    public class SecqmastersController : ControllerBase
    {
        private readonly printsmartContext _context;

        public SecqmastersController(printsmartContext context)
        {
            _context = context;
        }

        // GET: api/Secqmasters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Secqmaster>>> GetSecqmaster()
        {
            return await _context.Secqmaster.ToListAsync();
        }

        // GET: api/Secqmasters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Secqmaster>> GetSecqmaster(byte id)
        {
            var secqmaster = await _context.Secqmaster.FindAsync(id);

            if (secqmaster == null)
            {
                return NotFound();
            }

            return secqmaster;
        }

        // PUT: api/Secqmasters/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSecqmaster(byte id, Secqmaster secqmaster)
        {
            if (id != secqmaster.SecQid)
            {
                return BadRequest();
            }

            _context.Entry(secqmaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SecqmasterExists(id))
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

        // POST: api/Secqmasters
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Secqmaster>> PostSecqmaster(Secqmaster secqmaster)
        {
            _context.Secqmaster.Add(secqmaster);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSecqmaster", new { id = secqmaster.SecQid }, secqmaster);
        }

        // DELETE: api/Secqmasters/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Secqmaster>> DeleteSecqmaster(byte id)
        {
            var secqmaster = await _context.Secqmaster.FindAsync(id);
            if (secqmaster == null)
            {
                return NotFound();
            }

            _context.Secqmaster.Remove(secqmaster);
            await _context.SaveChangesAsync();

            return secqmaster;
        }

        private bool SecqmasterExists(byte id)
        {
            return _context.Secqmaster.Any(e => e.SecQid == id);
        }
    }
}
