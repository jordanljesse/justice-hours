using JusticeHours.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JusticeHours.Interfaces
{
    public interface IHoursService
    {
        int Create(HoursCreateRequest request);
        List<Hours> GetAll();
        Hours GetById(int id);
        int Update(HoursUpdateRequest request); // TODO: implement this
        int Delete(int id); // TODO: implement this
    }
}