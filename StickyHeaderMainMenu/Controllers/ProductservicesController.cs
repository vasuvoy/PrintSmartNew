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
    public class ProductservicesController : ControllerBase
    {
        private readonly printsmartContext _context;

        public ProductservicesController(printsmartContext context)
        {
            _context = context;
        }

        // GET: api/Productservices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Productservice>>> GetProductservice()
        {
            return await _context.Productservice.ToListAsync();
        }

        // GET: api/Productservices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Productservice>>> GetProductservice(short id)
        {
            var productservice = await _context.Productservice.Where(e=>e.ProdId == id).ToListAsync();

            if (productservice == null)
            {
                return NotFound();
            }

            return productservice;
        }

        // PUT: api/Productservices/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductservice(short id, Productservice productservice)
        {
            if (id != productservice.ServId)
            {
                return BadRequest();
            }

            _context.Entry(productservice).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductserviceExists(id))
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

        // POST: api/Productservices
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Productservice>> PostProductservice(Productservice productservice)
        {
            _context.Productservice.Add(productservice);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductservice", new { id = productservice.ServId }, productservice);
        }

        // DELETE: api/Productservices/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Productservice>> DeleteProductservice(short id)
        {
            var productservice = await _context.Productservice.FindAsync(id);
            if (productservice == null)
            {
                return NotFound();
            }

            _context.Productservice.Remove(productservice);
            await _context.SaveChangesAsync();

            return productservice;
        }

        private bool ProductserviceExists(short id)
        {
            return _context.Productservice.Any(e => e.ServId == id);
        }
    }
}
