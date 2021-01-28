using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Productservice
    {
        public Productservice()
        {
            Orderdetail = new HashSet<Orderdetail>();
        }

        public short ServId { get; set; }
        public short ProdId { get; set; }
        public string ServDescription { get; set; }
        public byte? IsActive { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }

        public virtual ICollection<Orderdetail> Orderdetail { get; set; }
    }
}
