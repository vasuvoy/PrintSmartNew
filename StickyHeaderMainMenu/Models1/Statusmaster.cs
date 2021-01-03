using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models1
{
    public partial class Statusmaster
    {
        public Statusmaster()
        {
            Orderdetail = new HashSet<Orderdetail>();
        }

        public string StatusCode { get; set; }
        public string StatusDescription { get; set; }
        public byte? IsActive { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }

        public virtual ICollection<Orderdetail> Orderdetail { get; set; }
    }
}
