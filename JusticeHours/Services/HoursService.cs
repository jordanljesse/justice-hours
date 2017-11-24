using JusticeHours.Interfaces;
using JusticeHours.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace JusticeHours.Services
{
    public class HoursService : IHoursService
    {
        public int Create(HoursCreateRequest request)
        {
            int id = 0;

            using (SqlConnection con = new SqlConnection("data source=WINDOWS-10-MBP\\SQLEXPRESS; database=JusticeHours; integrated security=SSPI"))
            {
                // open DB connection
                con.Open();

                // build DB command
                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = "hours_create";
                cmd.CommandType = CommandType.StoredProcedure;

                // map request properties to SQL parameters
                cmd.Parameters.AddWithValue("@Week", request.Week);
                cmd.Parameters.AddWithValue("@Date", request.Date);
                cmd.Parameters.AddWithValue("@TotalHoursWorked", request.TotalHoursWorked);
                cmd.Parameters.AddWithValue("@DirectClientContact", request.DirectClientContact);
                cmd.Parameters.AddWithValue("@IndirectClientHours", request.IndirectClientHours);
                cmd.Parameters.AddWithValue("@SupervisionHours", request.SupervisionHours);
                cmd.Parameters.AddWithValue("@ExplanationOfSce", request.ExplanationOfSce);

                // setup the id parameter created and returned by SQL
                SqlParameter idParam = cmd.Parameters.Add("@Id", SqlDbType.Int);
                idParam.Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                id = (int)cmd.Parameters["@Id"].Value;
            }

            return id;
        }

        public List<Hours> GetAll()
        {
            using (SqlConnection con = new SqlConnection("data source=WINDOWS-10-MBP\\SQLEXPRESS; database=JusticeHours; integrated security=SSPI"))
            {
                con.Open();

                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = "hours_getall";
                cmd.CommandType = CommandType.StoredProcedure;

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
                        // handle null entries
                        if (!reader.IsDBNull(7))
                        {
                            result.ExplanationOfSce = reader.GetString(7);
                        }

                        // add that Hours object to the list
                        results.Add(result);
                    }

                    return results;
                }
            }
        }

        public Hours GetById(int id)
        {
            using (SqlConnection con = new SqlConnection("data source=WINDOWS-10-MBP\\SQLEXPRESS; database=JusticeHours; integrated security=SSPI"))
            {
                con.Open();

                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = "hours_getbyid";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", id);

                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    Hours result = new Hours();

                    while (reader.Read())
                    {
                        result.Id = reader.GetInt32(0);
                        result.Week = reader.GetInt32(1);
                        result.Date = reader.GetString(2);
                        result.TotalHoursWorked = reader.GetInt32(3);
                        result.DirectClientContact = reader.GetInt32(4);
                        result.IndirectClientHours = reader.GetInt32(5);
                        result.SupervisionHours = reader.GetInt32(6);
                        // handle null entries
                        if (!reader.IsDBNull(7))
                        {
                            result.ExplanationOfSce = reader.GetString(7);
                        }
                    }

                    return result;
                }
            }
        }
        
        // TODO: write HoursService.Update method
        public int Update(HoursUpdateRequest request)
        {
            return 0;
        }

        // TODO: write HoursService.Delete method
        public int Delete(int id)
        {
            return id;
        }
    }
}