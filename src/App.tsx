// Import images and styling
import MyPlanner from './images/MyPlanner.png';
import Snake from './images/Snake.png';
import SQL from './images/SQL.png';
import './styles/index.css';

// Build HTML
function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#personal">Personal Interests</a></li>
        </ul>
      </nav>
      <div className="about" id="about">
        <h1>Kenneth Otero Jr.</h1>
        <p>Hello, my name is Kenneth Otero and I am a current student over at the University of Cincinnati, majoring in 
          Information Technology. I am 23 years old and primarily specialize in programming, so feel free to scroll and learn more
          about myself and some of the projects I've worked on over the years.
        </p>
      </div>
      <div className="education" id="education">
        <h1>Education</h1>
        <h3>University of Cincinnati</h3>
        <p>I transferred over to the University of Cincinnati to pursue a bachelor's degree in Information Technology, specializing in
          software development. I am currently on track to graduate in the spring of 2025. I've taken classes regarding web game development, 
          web server development, system administration, and information security. Thanks to these courses I've become more familiar with JavaScript, C# and the ASP.NET Core framework,
          and Linux and Windows Server.
        </p>
        <h3>Cincinnati State</h3>
        <p>I graduated from Cincinnati State with an asssociate's degree in Computer Information Systems in the spring of 2022.
          I primarily learned things related to programming, with some focus in business as well. Thanks to my time at Cincinnati State, I learned the basics of programming, such as
          object-oriented programming with Python and Java. I've also learned a lot regarding to databases, working with MS SQL Server and MySQL. In addition to this, I've also taken courses
          ranging from accounting to managerial finance. I am also a member of the Phi Theta Kappa honor society.
        </p>
      </div>
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <div className="planner">
          <h3><a href="https://github.com/KennethOtero/MyPlanner" target="_blank" rel="noreferrer">My Planner</a></h3>
          <a href="https://myplannerko.000webhostapp.com/index.php" target="_blank" rel="noreferrer">
            <img src={MyPlanner} alt="My Planner Homepage" className="screenshot"/>
          </a>
          <p>Shortly after graduating from Cincinnati State, I sought to create a web application in PHP to allow users to
            track their schoolwork. The website, My Planner, allows one to create an account and manage their schoolwork, ranging from
            different semesters, courses, coursework, and their weekly schedule. The main highlight of this project compared to my previous applications was
            the addition of interacting with our database without needing a page refresh or redirect, thanks to the use of JavaScript's XHR tools.
          </p>
        </div>
        <div className="snake">
        <h3><a href="https://it3049c-fall22-henderson.github.io/final-project-KennethOtero/" target="_blank" rel="noreferrer">Snake</a></h3>
          <a href="https://it3049c-fall22-henderson.github.io/final-project-KennethOtero/" target="_blank" rel="noreferrer">
            <img src={Snake} alt="Snake Game" className="screenshot"/>
          </a>
          <p>For my Web Game Development final project, I led a team to create a version of the game Snake. It was created
            in JavaScript using the Phaser 3 game engine. I built the initial game world, and worked on using different web APIs
            such as reverse geocoding and weather APIs to display different effects on screen.
          </p>
        </div>
        <div className="sql">
          <h3><a href="https://github.com/KennethOtero/SQL2Final" target="_blank" rel="noreferrer">MS SQL Server Final</a></h3>
          <a href="https://github.com/KennethOtero/SQL2Final" target="_blank" rel="noreferrer">
            <img src={SQL} alt="SQL Script" className="screenshot"/>  
          </a>
          <p>This MS SQL Server database was created for my final project in my second Database and Design class over at Cincinnati State. 
            I was tasked with creating a database for a hypothetical drug study. The script contains multiple different stored 
            procedures and views to add and log patients, their visits and withdrawals, and randomly associate those patients with a 
            real or placebo drug depending on their prior visits.
          </p>
        </div>
        <div className="river">
          <h3><a href="https://github.com/KennethOtero/RiverRoadAutoCare" target="_blank" rel="noreferrer">River Road Auto Care</a></h3>
          <iframe className="video" title="RiverRoadVideo" src="https://www.youtube.com/embed/X4gnrcPnLkc"></iframe>
          <p>This website served as a capstone project over at Cincinnati State and was aimed at creating a website for a local
            automotive repair shop in Cincinnati. I worked with a team to create this website, and I worked on our homepage, database, 
            reviews, and the front end for the site's various forms. It was built using PHP with a MySQL database to store customer
            information such as their vehicles or personal information.
          </p>
        </div>
        <div className="golf">
          <h3><a href="https://github.com/KennethOtero/WebApp1Final" target="_blank" rel="noreferrer">Web App Development Final</a></h3>
          <iframe className="video" title="GolfathonVideo" src="https://www.youtube.com/embed/lyTrS-Kz25A"></iframe>
          <p>I built a web based application for my Web App Development class over at Cincinnati State to serve as a homepage for
            a hypothetical golfing event at Cincinnati State. The website was built using PHP and utilizes a MySQL database to store user
            and event related information. The website provides a visitor with statistical information regarding an event, such as donor
            information, players, and more. You can also log in as an event administrator and adjust the event, ranging from its players to
            their donors, and event year.
          </p>
        </div>
      </div>
      <div className="personal" id="personal">
        <h1>Personal Interests</h1>
        <p>I like to spend a bit of my free time consuming different media ranging from books, TV shows, movies, and games.
          I hope to spend a bit more time reading and watching movies to appreciate their cinematography. Apart from entertainment, I enjoy learning more
          about component-based programming in regards to web development, with frameworks such as ASP.NET and React. Hopefully I can get some creative juices flowing
          to find topics and/or ideas to build for, as opposed to following tutorials.
        </p>
      </div>
    </div>
  );
}

// Export this component so it can be used elsewhere
export default App;