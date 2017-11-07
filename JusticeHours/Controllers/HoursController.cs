using JusticeHours.Interfaces;
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
        readonly IHoursService hoursService;

        public HoursController(IHoursService hoursService)
        {
            this.hoursService = hoursService;
        }

        [HttpGet]
        public List<Hours> GetAll()
        {
            return hoursService.GetAll();
        }

        [HttpPost]
        public HttpResponseMessage Create(HoursCreateRequest request)
        {
            if (request == null)
            {
                ModelState.AddModelError("", "Missing body data.");
            }

            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            int response = hoursService.Create(request);

            return Request.CreateResponse(HttpStatusCode.Created, response);
        }
    }
}