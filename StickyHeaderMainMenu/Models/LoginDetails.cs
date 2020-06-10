using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StickyHeaderMainMenu.Models
{
    public class LoginDetails
    {
        public int id { get; set; }
        public string emailid { get; set; }
        public string password { get; set; }
        public int active { get; set; }
    }
}
