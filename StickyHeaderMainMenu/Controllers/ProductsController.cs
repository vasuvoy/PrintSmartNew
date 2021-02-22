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
    public class ProductsController : ControllerBase
    {
        private readonly printsmartContext _context;

        public ProductsController(printsmartContext context)
        {
            _context = context;
          //  var results = _context.vw_getproductmodellist.ToList();

        }

       

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VwGetproductlist>>> GetProduct()
        {
           return await _context.VwGetproductlist.ToListAsync();
           // var login_record = _context.VwGetproductlist.FromSqlRaw("select * from vw_getproductlist").ToList();
          //  return login_record;
        }

        // GET: api/Products/5
        [HttpGet("{prd_level}/{prodid}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProduct(string prd_level,int prodid)
        {
            var product= new List<StickyHeaderMainMenu.Models.Product>(); 
             if (prd_level == "p1")
             {
             product= await _context.Product.ToListAsync();
            //}
            //var product = await _context.Product.FindAsync(id);

            //if (product == null)
            //{
            //    return NotFound();
            }

            if (prd_level == "p2")
            {
                 product = await _context.Product.Where(e => e.ParentId ==prodid).ToListAsync();
            }

            return product;
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(byte id, Product product)
        {
            if (id != product.ProdId)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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

        // POST: api/Products
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Product.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.ProdId }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> DeleteProduct(byte id)
        {
            var product = await _context.Product.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Product.Remove(product);
            await _context.SaveChangesAsync();

            return product;
        }

        private bool ProductExists(byte id)
        {
            return _context.Product.Any(e => e.ProdId == id);
        }
    }
}
