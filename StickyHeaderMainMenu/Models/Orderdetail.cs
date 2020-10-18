using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Orderdetail
    {
        public int DetailId { get; set; }
        public int? OrderId { get; set; }
        public short? ProdId { get; set; }
        public short? ProdModelId { get; set; }
        public byte? IsCustomized { get; set; }
        public string Gender { get; set; }
        public short? DimIdSize { get; set; }
        public string CustomContent { get; set; }
        public short? Quantity { get; set; }
        public string StatusCode { get; set; }
        public int? OrderedBy { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }


        public virtual Dimmaster DimIdSizeNavigation { get; set; }
        public virtual Product Prod { get; set; }
        public virtual Productmodel ProdModel { get; set; }
        public virtual Statusmaster StatusCodeNavigation { get; set; }
    }
}
