using Advanced_2_App.Models;

namespace Advanced_2_App.Services
{
    public class UsersService
    {
        public List<User> Users { get; set; }
        public UsersService()
        {
            Users = new List<User>();
        }


        public void AddUser(User user)
        {
            Users.Add(user);
        }

        public bool IsUserExists(User user)
        {
            return Users.Contains(user);
        }  


    }
}
