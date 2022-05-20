using System.ComponentModel.DataAnnotations;

namespace Advanced_2_App.Models
{
    public class User
    {
        [Key]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        public string lastSeen { get; set; }
        [Required]
        public List<JsonContent> Contacts { get; set; }
    }
}
