using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models1
{
    public partial class Orders
    {
        public int OrderId { get; set; }
        public int? OrderedBy { get; set; }
        public float? TotMrpamount { get; set; }
        public float? TotDiscAmount { get; set; }
        public float? TotNetAmount { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }
    }
}
