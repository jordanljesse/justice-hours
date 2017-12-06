using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace JusticeHours.Models
{
    public class HoursCreateRequest
    {
        [Required]
        [Range(1, 52)]
        public int Week { get; set; }

        [Required]
        [MinLength(1), MaxLength(50)]
        public string Date { get; set; }

        [Required]
        [Range(1, 112)] // 8 hours of sleep a night
        public int TotalHoursWorked { get; set; }

        public int DirectClientContact { get; set; }

        public int IndirectClientHours { get; set; }

        [Required]
        public int SupervisionHours { get; set; }

        [MinLength(1), MaxLength(1024)]
        public string ExplanationOfSce { get; set; }
    }
}