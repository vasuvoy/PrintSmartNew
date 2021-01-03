using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models1
{
    public partial class Orderdetail
    {
        public int DetailId { get; set; }
        public int? OrderId { get; set; }
        public short? ModelId { get; set; }
        public byte? IsCustomized { get; set; }
        public string Gender { get; set; }
        public short? DimIdsize { get; set; }
        public string CustomContent { get; set; }
        public short? Quantity { get; set; }
        public float? ItemPrice { get; set; }
        public float? DiscAmount { get; set; }
        public float? NetAmount { get; set; }
        public string StatusCode { get; set; }
        public int? OrderedBy { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }

        public virtual Dimmaster DimIdsizeNavigation { get; set; }
        public virtual Productmodel Model { get; set; }
        public virtual Statusmaster StatusCodeNavigation { get; set; }
    }
}
