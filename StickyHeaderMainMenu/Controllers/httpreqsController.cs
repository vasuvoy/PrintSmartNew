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
    public class httpreqsController : ControllerBase
    {
        private readonly httpreqContext _context;

        public httpreqsController(httpreqContext context)
        {
            _context = context;
        }

        // GET: api/httpreqs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<httpreq>>> Gethttpreq()
        {
            return await _context.httpreq.ToListAsync();
        }

        // GET: api/httpreqs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<httpreq>> Gethttpreq(int id)
        {
            var httpreq = await _context.httpreq.FindAsync(id);

            if (httpreq == null)
            {
                return NotFound();
            }

            return httpreq;
        }

        // PUT: api/httpreqs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Puthttpreq(int id, httpreq httpreq)
        {
            if (id != httpreq.id)
            {
                return BadRequest();
            }

            _context.Entry(httpreq).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!httpreqExists(id))
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

        // POST: api/httpreqs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<httpreq>> Posthttpreq(httpreq httpreq)
        {
            _context.httpreq.Add(httpreq);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Gethttpreq", new { id = httpreq.id }, httpreq);
        }

        // DELETE: api/httpreqs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<httpreq>> Deletehttpreq(int id)
        {
            var httpreq = await _context.httpreq.FindAsync(id);
            if (httpreq == null)
            {
                return NotFound();
            }

            _context.httpreq.Remove(httpreq);
            await _context.SaveChangesAsync();

            return httpreq;
        }

        private bool httpreqExists(int id)
        {
            return _context.httpreq.Any(e => e.id == id);
        }
    }
}
