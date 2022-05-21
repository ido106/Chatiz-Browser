using System.ComponentModel.DataAnnotations;

namespace Advanced_2_App.Models
{
    public class User
    {
        [Key]
        public string Id { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        public string lastSeen { get; set; }

        [Required]
        public string server { get; set; }
        [Required]
        public List<User> Contacts { get; set; }
    }
}
