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
    public class ProductmodelsController : ControllerBase
    {
        private readonly printsmartContext _context;

        public ProductmodelsController(printsmartContext context)
        {
            _context = context;
        }

        // GET: api/Productmodels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Productmodel>>> GetProductmodel()
        {
            return await _context.Productmodel.ToListAsync();
        }

        // GET: api/Productmodels/5
        [HttpGet("{id}/{cartpage}")]
        public async Task<ActionResult<IEnumerable<Productmodel>>> GetProductmodel(int id,string cartpage)
        {
            var productmodel = new List<StickyHeaderMainMenu.Models.Productmodel>();
            if (cartpage == "cart")
            {
                productmodel = _context.Productmodel.Where(e => e.ModelId == id).ToList();
            }
            else
            {
       
                    productmodel = _context.Productmodel.Where(e => e.ProdId == id).ToList();

                }
                if (productmodel == null)
                {
                    return NotFound();
                }
            
            return productmodel;
        }

        // PUT: api/Productmodels/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductmodel(byte id, Productmodel productmodel)
        {
            if (id != productmodel.ModelId)
            {
                return BadRequest();
            }

            _context.Entry(productmodel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductmodelExists(id))
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

        // POST: api/Productmodels
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Productmodel>> PostProductmodel(Productmodel productmodel)
        {
            _context.Productmodel.Add(productmodel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductmodel", new { id = productmodel.ModelId }, productmodel);
        }

        // DELETE: api/Productmodels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Productmodel>> DeleteProductmodel(byte id)
        {
            var productmodel = await _context.Productmodel.FindAsync(id);
            if (productmodel == null)
            {
                return NotFound();
            }

            _context.Productmodel.Remove(productmodel);
            await _context.SaveChangesAsync();

            return productmodel;
        }

        private bool ProductmodelExists(byte id)
        {
            return _context.Productmodel.Any(e => e.ModelId == id);
        }
    }
}
