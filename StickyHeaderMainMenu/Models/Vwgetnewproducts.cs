using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class VwGetnewproducts
    {
        public short ModelId { get; set; }
        public short ProdId { get; set; }
        public string ModelCode { get; set; }
        public string ModelDesc { get; set; }
        public string ModelLink { get; set; }
        public byte? IsActive { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }
    }
}
