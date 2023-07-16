import prj from './assets/prj1.png'
import prjo from './assets/discord.png'
import prjoj from './assets/prj3.png'
import prje from './assets/prj4.png'
import prji from './assets/cloud.png'
import sta from './assets/comeng.png'

const reviews = [
  {
    id: 1,
    job: "Top Course Review",
    image: prj,
    text: "The above project utilizes the key feature of filtering the data received from an API and displaying it according to the selected filter. It also holds the liked data using useState and stores it in an array. Alternatively, this functionality can also be achieved using Redux.",
    github:"https://github.com/mokshith-moksh/TopCourses",
    web:"https://top-course-moksh.netlify.app/"
  },
  {
    id: 2,
    job: "React Basic",
    image: prjoj,
    text: "The above project showcases the key feature of designing a basic React component where data is fetched from an array object and involves the implementation of additional logic",
    github:"https://github.com/mokshith-moksh/react-one-portfolio/tree/main/vite-project",
    web:"https://moksh-portfolio.netlify.app/"
  },
  {
    id: 3,
    job: "Discord Website Clone",
    image: prjo,
    text: "The above project showcases the mastery of Tailwind CSS and the ability to clone an industry-level website!!",
    github:"https://github.com/mokshith-moksh/discordClone",
    web:"https://moksh-discord-clone.netlify.app"
  },
  {
    id: 4,
    job: "Shoping App",
    image: prje,
    text: "The above project demonstrates knowledge of state management using Redux, along with the implementation of functions such as adding and deleting items from a cart",
    github:"https://github.com/mokshith-moksh/shopingApp",
    web:"https://shopingappmoksh.netlify.app"
  },
  {
    id: 5,
    job: "File Uploader",
    image: prji,
    text: 
    "The above project demonstrates knowledge of Express.js, MongoDB, Node.js, and Cloudinary. It includes functionalities such as file upload and video upload to Cloudinary, storing the uploaded file links in the database using appropriate routes, and sending emails to specified email addresses. Middleware is also utilized in the project to handle certain aspects of the application's functionality.",
    github: "https://github.com/mokshith-moksh/FileUpload",
    web:"https://github.com/mokshith-moksh/FileUpload"
  },
  {
    id: 6,
    job: "Mega EDtech project",
    image: sta ,
    text: "This extraordinary project, built on the MERN stack with razorpay integration, boasts a fully interactive UI, video uploading for creators, video viewing for students, and seamless payment integration for course purchases",
  },
];

export default reviews;
