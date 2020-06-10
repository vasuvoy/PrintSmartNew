using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Userdetail
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime? Dob { get; set; }
        public byte[] Pwd { get; set; }
        public string Telephone { get; set; }
        public byte? Isactive { get; set; }
        public byte? SecQid { get; set; }
        public byte[] SecQa { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }

        public virtual Secqmaster SecQ { get; set; }
    }
}
