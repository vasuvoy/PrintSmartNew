using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Orderdetail
    {
        public int DetailId { get; set; }
        public int? OrderId { get; set; }
        public short? ModelId { get; set; }
        public byte? IsCustomized { get; set; }
        public string Gender { get; set; }
        public short? DimId { get; set; }
        public string CustomContent { get; set; }
        public short? MatId { get; set; }
        public short? ServId { get; set; }
        public short? Quantity { get; set; }
        public float? ItemPrice { get; set; }
        public float? DiscAmount { get; set; }
        public float? NetAmount { get; set; }
        public string StatusCode { get; set; }
        public int? OrderedBy { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }

        public virtual Dimmaster Dim { get; set; }
        public virtual Productmodel Model { get; set; }
        public virtual Statusmaster StatusCodeNavigation { get; set; }

        public virtual Productservice Serv { get; set; }
    }
}
