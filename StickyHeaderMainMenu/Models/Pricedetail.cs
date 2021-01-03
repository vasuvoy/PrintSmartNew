using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Pricedetail
    {
        public int PriceDetId { get; set; }
        public short? ModelId { get; set; }
        public float? MaxRetailPrice { get; set; }
        public float? PercentDisc { get; set; }
        public float? SellingPrice { get; set; }
        public DateTime? DtEffectStart { get; set; }
        public DateTime? DtEffectEnd { get; set; }
        public DateTime? DtModify { get; set; }
    }
}
