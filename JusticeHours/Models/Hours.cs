using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JusticeHours.Models
{
    public class Hours
    {
        public int Id { get; set; }
        public int Week { get; set; }
        public string Date { get; set; }
        public int TotalHoursWorked { get; set; }
        public int DirectClientContact { get; set; }
        public int IndirectClientHours { get; set; }
        public int SupervisionHours { get; set; }
        public string ExplanationOfSce { get; set; }
    }
}