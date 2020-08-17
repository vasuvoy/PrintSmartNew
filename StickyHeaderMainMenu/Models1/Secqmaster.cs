using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models1
{
    public partial class Secqmaster
    {
        public Secqmaster()
        {
            Userdetail = new HashSet<Userdetail>();
        }

        public byte SecQid { get; set; }
        public string SecQ { get; set; }

        public virtual ICollection<Userdetail> Userdetail { get; set; }
    }
}
