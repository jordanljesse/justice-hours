using JusticeHours.Interfaces;
using JusticeHours.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace JusticeHours.Services
{
    public class HoursService : IHoursService
    {
        public int Create(HoursCreateRequest request)
        {

        }

        public List<Hours> GetAll()
        {
            using (SqlConnection con = new SqlConnection("data source=WINDOWS-10-MBP\\SQLEXPRESS; database=hours; integrated security=SSPI"))
            {
                con.Open();

                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = "hours_getall";

                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    List<Hours> results = new List<Hours>();

                    while (reader.Read())
                    {
                        // create new Hours object
                        Hours result = new Hours();
                        result.Id = reader.GetInt32(0);
                        result.Week = reader.GetInt32(1);
                        result.Date = reader.GetString(2);
                        result.TotalHoursWorked = reader.GetInt32(3);
                        result.DirectClientContact = reader.GetInt32(4);
                        result.IndirectClientHours = reader.GetInt32(5);
                        result.SupervisionHours = reader.GetInt32(6);
                        result.ExplanationOfSce = reader.GetString(7);

                        // add that Hours object to the list
                        results.Add(result);
                    }

                    return results;
                }
            }
        }

        public Hours GetById(int id)
        {

        }

        public int Update(HoursUpdateRequest request)
        {

        }

        public int Delete(int id)
        {

        }
    }
}