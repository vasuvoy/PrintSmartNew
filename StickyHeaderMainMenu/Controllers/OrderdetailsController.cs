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
    public class OrderdetailsController : ControllerBase
    {
        private readonly printsmartContext _context;

        public OrderdetailsController(printsmartContext context)
        {
            _context = context;
        }

        // GET: api/Orderdetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orderdetail>>> GetOrderdetail()
        {
            return await _context.Orderdetail.Where(e=>e.StatusCode=="C").ToListAsync();
        }

        // GET: api/Orderdetails/5
        [HttpGet("{id}/{page}")]
        public async Task<ActionResult<IEnumerable<Orderdetail>>> GetOrderdetail(int id,string page)
        {
            var orderdetail=new List<StickyHeaderMainMenu.Models.Orderdetail>();
          //  var orderdetail1 = new List<StickyHeaderMainMenu.Models.OdCart>();
            if (page == "l3menu")
            {
                 orderdetail = await _context.Orderdetail.Where(e => e.ModelId == id).ToListAsync();
                if (orderdetail == null)
                {
                    return NotFound();
                }

                return orderdetail;
            }
            if(page== "appPage")
            {
                 orderdetail = await _context.Orderdetail.Where(e => e.OrderedBy == id).ToListAsync();

                if (orderdetail == null)
                {
                    return NotFound();
                }

                return orderdetail;
            }
            if (page == "cartpage")
            {
          

              // return orderdetail1;
            }
            return orderdetail;
        }

        // PUT: api/Orderdetails/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderdetail(int id, Orderdetail orderdetail)
        {
            if (id != orderdetail.DetailId)
            {
                return BadRequest();
            }

            _context.Entry(orderdetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException e)
            {
                if (!OrderdetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw e;
                }
            }

            return NoContent();
        }

        // POST: api/Orderdetails
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Orderdetail>> PostOrderdetail(Orderdetail orderdetail)
        {
            try
            {
                _context.Orderdetail.Add(orderdetail);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetOrderdetail", new { id = orderdetail.DetailId }, orderdetail);
            }
            catch (Exception e) { throw e; };
            }

        // DELETE: api/Orderdetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Orderdetail>> DeleteOrderdetail(int id)
        {
            var orderdetail = await _context.Orderdetail.FindAsync(id);
            if (orderdetail == null)
            {
                return NotFound();
            }

            _context.Orderdetail.Remove(orderdetail);
            await _context.SaveChangesAsync();

            return orderdetail;
        }

        private bool OrderdetailExists(int id)
        {
            return _context.Orderdetail.Any(e => e.DetailId == id);
        }
    }
}
