using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StickyHeaderMainMenu.Models
{
    public class EditPriceDetail
    {
        public int PriceDetId { get; set; }
        public short? ModelId { get; set; }
        public float? MaxRetailPrice { get; set; }
        public float? PercentDisc { get; set; }
        public float? SellingPrice { get; set; }
        public DateTime? DtEffectStart { get; set; }
        public DateTime? DtEffectEnd { get; set; }
        public DateTime? DtModify { get; set; }

        public short ProdId { get; set; }

        public string ModelLink { get; set; }

        public string ModelDesc { get; set; }


    }
}
