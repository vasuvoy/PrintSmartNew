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
    public class DimmastersController : ControllerBase
    {
        private readonly printsmartContext _context;

        public DimmastersController(printsmartContext context)
        {
            _context = context;
        }

        // GET: api/Dimmasters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dimmaster>>> GetDimmaster()
        {
            return await _context.Dimmaster.ToListAsync();
        }

        // GET: api/Dimmasters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Dimmaster>>> GetDimmaster(int id)
        {
            var dimmaster = await _context.Dimmaster.Where(e => e.ProdModelId == id).ToListAsync();//.FindAsync(id);

            if (dimmaster == null)
            {
                return NotFound();
            }

            return dimmaster;
        }

        // PUT: api/Dimmasters/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDimmaster(int id, Dimmaster dimmaster)
        {
            if (id != dimmaster.DimId)
            {
                return BadRequest();
            }

            _context.Entry(dimmaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DimmasterExists(id))
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

        // POST: api/Dimmasters
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Dimmaster>> PostDimmaster(Dimmaster dimmaster)
        {
            _context.Dimmaster.Add(dimmaster);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDimmaster", new { id = dimmaster.DimId }, dimmaster);
        }

        // DELETE: api/Dimmasters/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Dimmaster>> DeleteDimmaster(int id)
        {
            var dimmaster = await _context.Dimmaster.FindAsync(id);
            if (dimmaster == null)
            {
                return NotFound();
            }

            _context.Dimmaster.Remove(dimmaster);
            await _context.SaveChangesAsync();

            return dimmaster;
        }

        private bool DimmasterExists(int id)
        {
            return _context.Dimmaster.Any(e => e.DimId == id);
        }
    }
}
