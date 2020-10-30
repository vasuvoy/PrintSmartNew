using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Product
    {
        public Product()
        {
            Dimmaster = new HashSet<Dimmaster>();
            Orderdetail = new HashSet<Orderdetail>();
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

        public string ModelFolder { get; set; }
        public virtual ICollection<Dimmaster> Dimmaster { get; set; }
        public virtual ICollection<Orderdetail> Orderdetail { get; set; }
        public virtual ICollection<Productmodel> Productmodel { get; set; }
    }
}
