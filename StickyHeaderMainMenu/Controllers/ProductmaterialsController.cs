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
    public class ProductmaterialsController : ControllerBase
    {
        private readonly printsmartContext _context;

        public ProductmaterialsController(printsmartContext context)
        {
            _context = context;
        }

        // GET: api/Productmaterials
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Productmaterial>>> GetProductmaterial()
        {
            return await _context.Productmaterial.ToListAsync();
        }

        // GET: api/Productmaterials/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Productmaterial>>> GetProductmaterial(int id)
        {
            var productmaterial = new List<StickyHeaderMainMenu.Models.Productmaterial>();
            productmaterial = await _context.Productmaterial.Where(e=>e.ProdId==id).ToListAsync();

            if (productmaterial == null)
            {
                return NotFound();
            }

            return productmaterial;
        }

        // PUT: api/Productmaterials/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductmaterial(short id, Productmaterial productmaterial)
        {
            if (id != productmaterial.MatId)
            {
                return BadRequest();
            }

            _context.Entry(productmaterial).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductmaterialExists(id))
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

        // POST: api/Productmaterials
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Productmaterial>> PostProductmaterial(Productmaterial productmaterial)
        {
            _context.Productmaterial.Add(productmaterial);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductmaterial", new { id = productmaterial.MatId }, productmaterial);
        }

        // DELETE: api/Productmaterials/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Productmaterial>> DeleteProductmaterial(short id)
        {
            var productmaterial = await _context.Productmaterial.FindAsync(id);
            if (productmaterial == null)
            {
                return NotFound();
            }

            _context.Productmaterial.Remove(productmaterial);
            await _context.SaveChangesAsync();

            return productmaterial;
        }

        private bool ProductmaterialExists(short id)
        {
            return _context.Productmaterial.Any(e => e.MatId == id);
        }
    }
}
