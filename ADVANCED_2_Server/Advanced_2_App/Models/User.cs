using System.ComponentModel.DataAnnotations;

namespace Advanced_2_App.Models
{
    public class User
    {
        [Key]
        public string Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        public string LastSeen { get; set; }

        [Required]
        public string Server { get; set; }

        [Required]
        public List<Contact> Contacts { get; set; }
    }

    public int forPush { get; set; }
}
