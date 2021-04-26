using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [RoutePrefix("api/StudentsRWCustomDB")]
    public class StudentsRWCustomDBController : ApiController
    {
        [Route("~/sg/{grade}")]
        [Route("{id}/grade")]
        public IHttpActionResult GetGradesByID(int id)
        {
            try
            {
                Student s = StudentsDBMOCK.students.SingleOrDefault(stu => stu.ID == id);
                if (s == null)
                {
                    return Content(HttpStatusCode.NotFound, $"student with id= {id} was not found for grade:(");
                }
                return Ok(s.Grade);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [Route("~/sgbn/{name}")]
        [Route("{name}/gradebn")]
        public IHttpActionResult GetGradesByName(string name)
        {
            try
            {
                Student s = StudentsDBMOCK.students.SingleOrDefault(stu => stu.Name == name);
                if (s == null)
                {
                    return Content(HttpStatusCode.NotFound, $"student with name= {name} was not found for grade:(");
                }
                return Ok(s.Grade);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        public IHttpActionResult Get()
        {
            try
            {
                return Ok(StudentsDB.GetAllStudents());
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Message);
                return Content(HttpStatusCode.InternalServerError, ex);
            }
        }

        [Route("{id:int:min(1)}", Name="GetStudentDBByID")]
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

        [Route("{isAvi:bool}")]
        public IHttpActionResult Get(bool isAvi)
        {
            try
            {
                if (isAvi)
                {


                    Student s = StudentsDBMOCK.students.SingleOrDefault(stu => stu.Name == "avi");
                    if (s == null)
                    {
                        return Content(HttpStatusCode.NotFound, $"student with isavi= {isAvi} was not found:(");
                    }
                    return Ok(s);
                }
                else
                {
                    return Ok("this is not avi");
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpPost]
        [Route("~/login")]
        public IHttpActionResult LoginUser([FromBody] Student loginStudent) 
        {
            try
            {
                Student s =   StudentsDB.LoginUser(loginStudent.Email, loginStudent.Password);
                if (s != null)
                {
                    return Ok(s);
                }
                else
                {
                    return Content(HttpStatusCode.NotFound, $"student with email={loginStudent.Email} and pass={loginStudent.Password} was not found for login!");
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError, ex);
            }
        }

        public IHttpActionResult Post([FromBody] Student value)
        {
            try
            {
                value.ID = StudentsDBMOCK.Counter++;
                StudentsDBMOCK.students.Add(value);
                //return Created(new Uri(Request.RequestUri.AbsoluteUri + value.ID), value);
                Uri u = new Uri(Url.Link("GetStudentDBByID", new { id = value.ID }));
                return Created(u, value);

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
