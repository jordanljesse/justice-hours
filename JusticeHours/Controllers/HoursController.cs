using JusticeHours.Models;
using JusticeHours.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace JusticeHours.Controllers
{
    [RoutePrefix("api/hours")]
    public class HoursController : ApiController
    {
        [HttpGet]
        public List<Hours> GetAll()
        {
            HoursService hoursService = new HoursService();
            return hoursService.GetAll();
        }

        
    }
}