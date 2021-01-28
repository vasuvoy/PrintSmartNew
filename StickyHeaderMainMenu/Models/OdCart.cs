using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StickyHeaderMainMenu.Models
{
    public class OdCart
    {
        public int DetailId { get; set; }
        public int? OrderId { get; set; }
        public short? ModelId { get; set; }
        public byte? IsCustomized { get; set; }
        public string Gender { get; set; }
        public short? DimId { get; set; }
        public short? MatId { get; set; }
        public short? ServId { get; set; }
        public string CustomContent { get; set; }
        public short? Quantity { get; set; }
        public float? ItemPrice { get; set; }
        public float? DiscAmount { get; set; }
        public float? NetAmount { get; set; }
        public string StatusCode { get; set; }
        public int? OrderedBy { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }

        //public string ModelLink { get; set; }

        //public virtual Dimmaster DimIdSizeNavigation { get; set; }
        //public virtual Product Prod { get; set; }
        //public virtual Productmodel ProdModel { get; set; }
        //public virtual Statusmaster StatusCodeNavigation { get; set; }
    }
}
