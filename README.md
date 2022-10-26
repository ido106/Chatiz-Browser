# Chatiz - Chat Application
<p align="center">
  <img 
    width="500"
    height="393"
    src="https://user-images.githubusercontent.com/92651125/197267879-3c5e0b83-5f6a-4a4c-a414-80e77f2bb319.png"
  >
</p>

 ## Description
### ***For screenshots - skip to the bottom of the page.***  


Chatiz is a chat application that allows you to communicate with people from all over the world.  
From a more professional point of view, **Chatiz is a chat application for web browsers and Android devices, connected to a back-end RESTful server with a DB connection**: React.JS usage for the web application, Server side in ASP.NET core (C#) with a MariaDB connection (local database), and Android side in Java.  
This application was created as part of the course "Advanced Programming 2" and inspired by the application "Whatsapp Web". In the code we can find various techniques like ORM, MVC, Entity framework, web services and more.  

## Part 1: Browser   
The project is divided into 3 parts:

 1. **Browser Side** in React.JS. [link](https://github.com/ido106/Chatiz_Browser)
 2. Server Side in ASP.NET core (C#) with a MariaDB connection. [link](https://github.com/ido106/Chatiz_Server)
 3. Android side in Java. [link](https://github.com/ido106/Chatiz_Android)  

As marked, in this part I will show the **browser** side in **React.JS** under the [VS Code](https://code.visualstudio.com/) workspace.  
The browser side is the first task, and it is **not** connected to the database (which is connected in the second and third task). All users and messages are saved inside the code (hard coded) and are not saved in the DB, which means that after you exit the app, you will lose all **new** messages you sent.  
This part was designed, combined with personal design, with [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/). This part includes a **login screen**, **registration screen**, **verifications**, **contacts and chats screen**, use of **Hooks**, **Router** and more.  

For simplicity, to test the application **I recommend using this part of the project**, because the operation of this part is simpler.  

## Instruction Manual
We work only on the main branch that on GitHub.  

### Pre installations
 1. Download and install [Node.JS](https://nodejs.org/en/download/) .
 2. Open a new folder.
 3. Right click on the folder, then "Open Terminal".
 4. Download npm: enter `npm install -g npm` in the terminal.
 
### Using ***Chatiz*** on the browser
 1. In the same folder that you opened, enter `git clone https://github.com/ido106/Chatiz_Browser.git` in the terminal.
 2. Enter the folder "web_app".
 3. Open the terminal, and enter `npm install react-scripts`.
 4. Enter `npm start`.
 5. Enjoy !

**I recommend logging in under the main user:**  
Username: Messi  
Password: THE_GOAT  
The list of all users appears in Advanced2 / Advanced2 / web_app / src / components / sign_in / users, under an array called "users".

## Screenshots
**Turn on the volume in the videos :loud_sound:**  

### Login
<p align="center">
  <img 
    width="900"
    src="https://user-images.githubusercontent.com/92651125/197364065-b0fb09b1-a02b-4f88-aedc-e196d1aedbdb.gif"
  >
</p>


### Chat
<p align="center">
  <img 
    width="900"
    src="https://user-images.githubusercontent.com/92651125/197363596-2afea7c6-4a79-4486-a9ca-6bffff220f57.png"
  >
</p>

### SignUp
<p align="center">
  <img 
    width="900"
    src="https://user-images.githubusercontent.com/92651125/197363605-1acbe7bc-d669-4596-b793-6e8221a7a3fe.png"
  >
</p>


### Chat review  

https://user-images.githubusercontent.com/92651125/197273374-0f219628-83fd-4cf8-89ac-15b8ddf27f08.mp4

### Full review  

https://user-images.githubusercontent.com/92651125/197266911-3e094208-990a-4f83-931e-961234c1d1a4.mp4

## **Enjoy	:smile:**
