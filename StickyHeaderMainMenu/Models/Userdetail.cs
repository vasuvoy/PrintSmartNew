using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Userdetail
    {
        public Userdetail()
        {
            Useraddress = new HashSet<Useraddress>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime? Dob { get; set; }
        public string Pwd { get; set; }
        public string Telephone { get; set; }
        public byte? Isactive { get; set; }
        public byte? SecQid { get; set; }
        public string SecQa { get; set; }
        public DateTime? DtCreate { get; set; }
        public DateTime? DtModify { get; set; }

        public virtual Secqmaster SecQ { get; set; }
        public virtual ICollection<Useraddress> Useraddress { get; set; }
    }
}

