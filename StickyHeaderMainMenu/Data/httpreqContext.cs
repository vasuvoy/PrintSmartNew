using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace StickyHeaderMainMenu.Data
{
    public class httpreqContext : DbContext
    {
        public httpreqContext()
        {
        }
        public httpreqContext(DbContextOptions<httpreqContext> options)
          : base(options)
        {
        }

        public DbSet<StickyHeaderMainMenu.Models.httpreq> httpreq { get; set; }
    }
}
