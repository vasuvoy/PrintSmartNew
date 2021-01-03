using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models1
{
    public partial class Product
    {
        public Product()
        {
            Dimmaster = new HashSet<Dimmaster>();
            Productmodel = new HashSet<Productmodel>();
        }

        public short ProdId { get; set; }
        public string ProdDesc { get; set; }
        public short? ParentId { get; set; }
        public byte? IsHeader { get; set; }
        public byte? IsActive { get; set; }
        public short? SequenceId { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }
        public string RouterLink { get; set; }
        public string ModelFolder { get; set; }

        public virtual ICollection<Dimmaster> Dimmaster { get; set; }
        public virtual ICollection<Productmodel> Productmodel { get; set; }
    }
}
