using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JusticeHours.Models
{
    public class Hours
    {
        public int Week { get; set; }
        public DateTime Date { get; set; }
        public int Direct { get; set; }
        public int Indirect { get; set; }
        public int Supervision { get; set; }
        public int Total { get; set; }
    }
}