using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace StickyHeaderMainMenu.Models
{
    [Route("api/[controller]")]
    [ApiController]
    public class OdCartsController : ControllerBase
    {
        private readonly printsmartContext _context;

        public OdCartsController(printsmartContext context)
        {
            _context = context;
        }

        // GET: api/OdCarts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OdCart>>> GetOdCart()
        {
            return await _context.OdCart.ToListAsync();
        }

        // GET: api/OdCarts/5
        [HttpGet("{id}/{cart_myorders}")]
        public async Task<ActionResult<IEnumerable<OdCart>>> GetOdCart(int id,string cart_myorders)
        {
            var odCart = new List<StickyHeaderMainMenu.Models.OdCart>();
            var odCart_status = new List<StickyHeaderMainMenu.Models.OdCart>();

            odCart = _context.Set<OdCart>().FromSqlRaw("CALL GetUserCart" + "(" + id + ")").ToList();
            if (cart_myorders == "cart")
            {
               
                odCart_status = odCart.Where(e => e.StatusCode == "C").ToList();
            }
            else
            {
                // odCart = _context.Set<OdCart>().FromSqlRaw("CALL GetUserCart" + "(" + id + ")").Where(e => e.StatusCode == "O").ToList();
                odCart_status = odCart.Where(e => e.StatusCode == "O").ToList();
            }


            if (odCart == null)
            {
                return NotFound();
            }

            return odCart_status;
        }

        // PUT: api/OdCarts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOdCart(int id, OdCart odCart)
        {
            if (id != odCart.DetailId)
            {
                return BadRequest();
            }

            _context.Entry(odCart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OdCartExists(id))
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

        // POST: api/OdCarts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<OdCart>> PostOdCart(OdCart odCart)
        {
            _context.OdCart.Add(odCart);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOdCart", new { id = odCart.DetailId }, odCart);
        }

        // DELETE: api/OdCarts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<OdCart>> DeleteOdCart(int id)
        {
            var odCart = await _context.OdCart.FindAsync(id);
            if (odCart == null)
            {
                return NotFound();
            }

            _context.OdCart.Remove(odCart);
            await _context.SaveChangesAsync();

            return odCart;
        }

        private bool OdCartExists(int id)
        {
            return _context.OdCart.Any(e => e.DetailId == id);
        }
    }
}
