using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Productmodel
    {
        public Productmodel()
        {
            Dimmaster = new HashSet<Dimmaster>();
            Orderdetail = new HashSet<Orderdetail>();
        }

        public short ModelId { get; set; }
        public short ProdId { get; set; }
        public string ModelCode { get; set; }
        public string ModelDesc { get; set; }
        public string ModelLink { get; set; }

        //public string RouterLink { get; set; }
        public byte? IsActive { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }

        public string ModelFolder { get; set; }
        public virtual Product Prod { get; set; }
        public virtual ICollection<Dimmaster> Dimmaster { get; set; }
        public virtual ICollection<Orderdetail> Orderdetail { get; set; }
    }
}
