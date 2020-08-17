using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Dimmaster
    {
        public Dimmaster()
        {
            Orderdetail = new HashSet<Orderdetail>();
        }

        public short DimId { get; set; }
        public short ProdId { get; set; }
        public short ProdModelId { get; set; }
        public string Gender { get; set; }
        public string DimDescription { get; set; }
        public byte? IsActive { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }

        public virtual Product Prod { get; set; }
        public virtual Productmodel ProdModel { get; set; }
        public virtual ICollection<Orderdetail> Orderdetail { get; set; }
    }
}
