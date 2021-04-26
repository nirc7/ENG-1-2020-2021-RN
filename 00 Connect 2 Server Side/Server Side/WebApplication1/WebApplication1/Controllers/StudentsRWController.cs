using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentsRWController : ApiController
    {
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(StudentsDBMOCK.students);
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Message);
                return Content(HttpStatusCode.InternalServerError, ex);
            }
        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                Student s = StudentsDBMOCK.students.SingleOrDefault(stu => stu.ID == id);
                if (s == null)
                {
                    return Content(HttpStatusCode.NotFound, $"student with id= {id} was not found:(");
                }
                return Ok(s);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        public IHttpActionResult Post([FromBody] Student value)
        {
            try
            {
                value.ID = StudentsDBMOCK.Counter++;
                StudentsDBMOCK.students.Add(value);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + value.ID), value);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + $" the post was not created successfully with id = {value.ID}");
            }
        }
        public IHttpActionResult Put(int id, [FromBody] Student value)
        {
            try
            {
                Student s = StudentsDBMOCK.students.SingleOrDefault(stu => stu.ID == id);
                if (s != null)
                {
                    s.Name = value.Name;
                    s.Grade = value.Grade;
                    return Ok(s);
                    //return Content(HttpStatusCode.OK, s);
                }
                else
                {
                    return Content(HttpStatusCode.NotFound, $"student with id = {id} was not found for update!");
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                Student s = StudentsDBMOCK.students.SingleOrDefault(stu => stu.ID == id);
                if (s != null)
                {
                    StudentsDBMOCK.students.Remove(s);
                    return Ok(s);
                }
                else
                {
                    return Content(HttpStatusCode.NotFound, $"student with id = {id} was not found for delete!");
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
