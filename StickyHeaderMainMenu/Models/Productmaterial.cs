using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Productmaterial
    {
        public short MatId { get; set; }
        public short ProdId { get; set; }
        public string MatDescription { get; set; }
        public byte? IsActive { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }

        public virtual Product Prod { get; set; }
    }
}
