using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Orders
    {
        public int OrderId { get; set; }
        public int? OrderedBy { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }
    }
}
