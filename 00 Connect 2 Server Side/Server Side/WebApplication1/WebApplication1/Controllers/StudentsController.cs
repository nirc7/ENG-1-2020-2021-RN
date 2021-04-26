using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentsController : ApiController
    {
        //GET studnets
        public IEnumerable<Student> Get()
        {
            return StudentsDBMOCK.students;
        }

        //GET studnets/id
        public Student Get(int id)
        {
            //IEnumerable<Student> is2 = StudentsDBMOCK.students.Where(stu => stu.Name.Contains("avi"));
            return StudentsDBMOCK.students.SingleOrDefault(stu => stu.ID == id);
        }

        //POST students -- INSERT CREATE
        /*
            {
                "ID": 555,
                "name": "sivan",
                "Grade": 105
            }
        */
        public int Post([FromBody]Student newStudent)
        {
            newStudent.ID = StudentsDBMOCK.Counter++;
            StudentsDBMOCK.students.Add(newStudent);
            return newStudent.ID;
        }

        //PUT students/id -- UPDATE
        /*
            {
                "ID": 555,
                "name": "sivan",
                "Grade": 105
            }
         */
        public string Put(int id, [FromBody] Student valueToUpdate)
        {
            Student s = StudentsDBMOCK.students.SingleOrDefault(stu => stu.ID == id  );
            s.Name = valueToUpdate.Name;
            s.Grade = valueToUpdate.Grade;
            return "done:)";
        }

        public IHttpActionResult Delete(int id) 
        {
            Student s2Remove = StudentsDBMOCK.students.SingleOrDefault(stu => stu.ID == id);
            StudentsDBMOCK.students.Remove(s2Remove);
            var v = new { Result  = "Deleted Successfully!" };
            var j = Json(v);
            return j;
        }
    }
}
