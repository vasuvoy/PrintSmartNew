using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StickyHeaderMainMenu.Models;

namespace StickyHeaderMainMenu.Data
{
    public class LoginDetailsContext : DbContext
    {
        public LoginDetailsContext (DbContextOptions<LoginDetailsContext> options)
            : base(options)
        {
        }

        public DbSet<StickyHeaderMainMenu.Models.LoginDetails> LoginDetails { get; set; }
    }
}
