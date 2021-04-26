using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Student
    {
        //Fields:
        private int id;
        public int ID
        {
            get
            {
                //return id * 2;
                return id;
            }
            set
            {
                if (0 <= value && value <= 10000)
                {
                    id = value;
                }
                else
                {
                    id = -7;
                    throw new ArgumentOutOfRangeException("go to school!!!");
                }
            }
        }
        public string Name { get; set; }
        public int Grade { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public override string ToString()
        {
            return $"ID={ID}, Name={Name}, Grade={Grade}";
        }
    }
}