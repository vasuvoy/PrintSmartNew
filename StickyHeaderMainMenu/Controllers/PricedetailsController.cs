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
    public class PricedetailsController : ControllerBase
    {
        private readonly printsmartContext _context;

        public PricedetailsController(printsmartContext context)
        {
            _context = context;
        }

        // GET: api/Pricedetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pricedetail>>> GetPricedetail()
        {
            return await _context.Pricedetail.ToListAsync();
        }

        // GET: api/Pricedetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Pricedetail>>> GetPricedetail(int id)
        {
            var pricedetail = await _context.Pricedetail.Where(e=>e.ModelId==id).ToListAsync();

            if (pricedetail == null)
            {
                return NotFound();
            }

            return pricedetail;
        }

        // PUT: api/Pricedetails/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPricedetail(int id, Pricedetail pricedetail)
        {
            if (id != pricedetail.PriceDetId)
            {
                return BadRequest();
            }

            _context.Entry(pricedetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PricedetailExists(id))
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

        // POST: api/Pricedetails
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Pricedetail>> PostPricedetail(Pricedetail pricedetail)
        {
            _context.Pricedetail.Add(pricedetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPricedetail", new { id = pricedetail.PriceDetId }, pricedetail);
        }

        // DELETE: api/Pricedetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Pricedetail>> DeletePricedetail(int id)
        {
            var pricedetail = await _context.Pricedetail.FindAsync(id);
            if (pricedetail == null)
            {
                return NotFound();
            }

            _context.Pricedetail.Remove(pricedetail);
            await _context.SaveChangesAsync();

            return pricedetail;
        }

        private bool PricedetailExists(int id)
        {
            return _context.Pricedetail.Any(e => e.PriceDetId == id);
        }
    }
}
