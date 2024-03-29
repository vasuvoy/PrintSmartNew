﻿using System;
using System.Collections.Generic;

namespace StickyHeaderMainMenu.Models
{
    public partial class Useraddress
    {
        public int AddrId { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string AddressLine4 { get; set; }
        public string AddressLine5 { get; set; }
        public int? PinCode { get; set; }
        public string ContactNo { get; set; }
        public bool IsDefault { get; set; }
        public byte? AddressType { get; set; }

        public virtual Userdetail User { get; set; }
    }
}
