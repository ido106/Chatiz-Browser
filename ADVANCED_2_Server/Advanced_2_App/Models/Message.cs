using System;
using System.Globalization;

namespace Advanced_2_App.Models
{
    public class Message
    {
        [Key]
        public string Id { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public DateTime Created { get; set; }

        [Required]
        public bool Sent { get; set; }
    }
}