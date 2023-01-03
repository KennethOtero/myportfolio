// Import images and styling
import Snake from './images/Snake.png';
import SQL from './images/SQL.png';
import RiverRoad from './images/RiverRoad.png';
import WebApp from './images/WebApp.png';
import CSM from './images/CSM.jpg';
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
          about myself and some of the projects I've worked on over the years in my academic career.
        </p>
      </div>
      <div className="projects" id="projects">
        <div className="planner">
          <img src="" alt="" />
          <p>Shortly after graduating from Cincinnati State, I sought to create a web application in PHP to allow users to
            track their schoolwork. The website, My Planner, allows one to create an account and manage their schoolwork, ranging from
            different semesters, courses, coursework, and their weekly schedule. You can find the website here: 
            <a href="https://myplannerko.000webhostapp.com/index.php" target="_blank" rel="noreferrer">My Planner</a>.
          </p>
        </div>
        <div className="snake">
          <img src={Snake} alt="Snake Game" />
          <p>For my Web Game Development final project, I led a team to create a version of the game Snake. It was created
            in JavaScript using the Phaser 3 game engine. I built the initial game world, and worked on using different web APIs
            such as reverse geocoding and weather APIs to display different effects on screen.
          </p>
        </div>
        <div className="sql">
          <img src={SQL} alt="SQL Script" />
          <p>This MS SQL Server database was created for my final project in my second Database and Design class over at Cincinnati State. 
            I was tasked with creating a database for a hypothetical drug study. The script contains multiple different stored 
            procedures and views to add and log patients, their visits and withdrawals, and randomly associate those patients with a 
            real or placebo drug depending on their prior visits.
          </p>
        </div>
        <div className="river">
          <img src={RiverRoad} alt="River Road Auto Care Homepage" />
          <p>This website served as a capstone project over at Cincinnati State and was aimed at creating a website for a local
            automotive repair shop in Cincinnati. I worked with a team to create this website, and I worked on our homepage, database, 
            reviews, and the front end for the site's various forms. It was built using PHP with a MySQL database to store customer
            information such as their vehicles or personal information.
          </p>
        </div>
        <div className="golf">
          <img src={WebApp} alt="Golfathon Homepage" />
          <p>I built a web based application for my Web App Development class over at Cincinnati State to serve as a homepage for
            a hypothetical golfing event at Cincinnati State. The website was built using PHP and utilizes a MySQL database to store user
            and event related information. The website provides a visitor with statistical information regarding an event, such as donor
            information, players, and more. You can also log in as an event administrator and adjust the event, ranging from its players to
            their donors, and event year.
          </p>
        </div>
      </div>
      <div className="education" id="education">
        <h3>University of Cincinnati</h3>
        <p>I transferred over to the University of Cincinnati to pursue a bachelor's degree in Information Technology, specializing in
          software development. I am currently on track to graduate in the spring of 2025.
        </p>
        <h3>Cincinnati State</h3>
        <p>I graduated from Cincinnati State with an asssociate's degree in Computer Information Systems in the spring of 2022.
          I primarily learned things related to programming, with some focus in business as well, ranging from accounting to managerial
          finance. 
        </p>
      </div>
      <div className="personal" id="personal">
        <img src={CSM} alt="Chainsaw Man - Power" />
        <p>I like to spend a bit of my free time consuming different media ranging from books, anime, to movies, and games.
          Recently, I've been enjoying a show called Chainsaw Man, written by Tatsuki Fujimoto. I always enjoy delving into the 
          different fictitious worlds that writers create, and seeing how they approach different things such as world building,
          character development, power structure, and more. As far as reading goes, I've recently just finished The Expanse series,
          and am now looking for something new to satiate my love for science fiction. Aside from that, I also like to play video games, such as the 
          Call of Duty series. I really enjoy working on my own mechanical skill when it comes to these games, or viewing others'
          gameplay.
        </p>
      </div>
    </div>
  );
}

// Export this component so it can be used elsewhere
export default App;