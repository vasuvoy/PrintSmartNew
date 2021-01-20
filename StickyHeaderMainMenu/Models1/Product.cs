using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models1
{
    public partial class Product
    {
        public Product()
        {
            Productmaterial = new HashSet<Productmaterial>();
        }

        public short ProdId { get; set; }
        public string ProdDesc { get; set; }
        public short? ParentId { get; set; }
        public byte? IsHeader { get; set; }
        public byte? IsActive { get; set; }
        public string RouterLink { get; set; }
        public short? SequenceId { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }

        public virtual ICollection<Productmaterial> Productmaterial { get; set; }
    }
}
