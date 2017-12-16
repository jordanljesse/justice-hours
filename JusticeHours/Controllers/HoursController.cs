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
    [AllowAnonymous] // does not require a valid cookie
    public class HoursController : ApiController
    {

        readonly IHoursService hoursService;

        public HoursController()
        {
            this.hoursService = new HoursService();
        }


        [HttpPost]
        public HttpResponseMessage Create(HoursCreateRequest request)
        {
            // check to see if the request is valid
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

        [HttpGet]
        public List<Hours> GetAll()
        {
            return hoursService.GetAll();
        }

        [HttpPut, Route("{id:int}")]
        public HttpResponseMessage Update(HoursUpdateRequest request)
        {
            int response = hoursService.Update(request);
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpDelete, Route("{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
            int response = hoursService.Delete(id);
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }
    }
}
