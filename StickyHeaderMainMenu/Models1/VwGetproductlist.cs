using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models1
{
    public partial class VwGetproductlist
    {
        public short L1parentId { get; set; }
        public string L1prodDesc { get; set; }
        public short? L2parentId { get; set; }
        public short? L2prodId { get; set; }
        public string L2prodDesc { get; set; }
        public byte? L2isHeader { get; set; }
        public short? L3prodId { get; set; }
        public short? L3parentId { get; set; }
        public string L3prodDesc { get; set; }
        public string RouterLink { get; set; }
    }
}
