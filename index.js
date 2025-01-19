// console.log("Hello, World!");
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
    <!-- ======================================== 
          Header Section Start  
    ========================================  -->


    <header>
        <div class="container"> 
            <nav class="navbar">
              <Div>
                <a href="index.html" style="text-decoration: none; color: white;">
                  <h1 class="logo">MMANTC<span class="sp">Decode</span></h1><a href="index.html"></a>
              </Div>
              <ul class="nav-menu">
                <li class="nav-item">
                  <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                  <a href="about.html" class="nav-link">About Us</a>
                </li>   
                <li class="dropdown">
                  <button class="dropbtn">Semesters</button>
                  <div class="dropdown-content">
                    <a href="sem1.html">FE:Sem-1</a>
                    <a href="sem2.html">FE:Sem-2</a>
                  </div>
                </li>        
                
              </ul>
              
              <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
            </nav>
         </div>
       </header>
      
  
    <!-- ======================================== 
             Main Hero Section Start  
      ========================================  -->
  
    <div class="intro">
      <h1>SPPU - Savitribai Phule Pune University</h1>
      <p>Savitribai Phule Pune University (SPPU), formerly the University of Pune, is a public state university located in the city of Pune, India. It was established in 1949, and is spread over a 411 acres (1.66 km2) campus in the neighbourhood of Ganeshkhind.[5] The university houses 46 academic departments. It has about 307 recognized research institutes and 612 affiliated colleges offering graduate and under-graduate courses. Savitribai Phule Pune University Ranked 12th NIRF Ranking in 2022[6][7]</p>
    </div>
  
    <h1 style="margin: 0px 0px 0px 800px; font-size: 30px; color: #505050;">Latest Posts</h1>
  
    <div class="courses-container">
  
  
      <div class="card"><a href="M2.html">
         
        <h2 class="title">Engineering Mathematics Notes II | Unit 1 – 6</h2>
        <div class="description">To make the students familiarize with Mathematical Modeling of physical systems using differential equations advanced techniques of integration</div>
        <div class="info">
          <div class="price">View</div>
        </div>
      </a></div>
  
      <div class="card"><a href="bxe.html">
       
        <h2 class="title">Basic Electronic Engineering | Unit 1 – 6</h2>
        <div class="description">The principle of electronics and working principle of PN junction diode and special purpose diodes.</div>
        <div class="info">
          <div class="price">View</div>
        </div>
      </a></div>
  
      <div class="card"><a href="Mechanics.html">
       
        <h2 class="title">Engineering Mechanics | Unit 1 – 6</h2>
        <div class="description">To impart knowledge about force systems and methods to determine resultant centroid and moment of inertia </div>
        <div class="info">
          <div class="price">View</div>
        </div>
      </a></div>
  
  
      <div class="card"><a href="EG.html">
       
        <h2 class="title">Engineering Graphics | Unit 1 – 6 Notes</h2>
        <div class="description">To acquire basic knowledge about engineering drawing language, line types, dimension methods, and simple geometrical construction.</div>
        <div class="info">
          <div class="price">View</div>
        </div>
      </a></div>
  
  
      <div class="card"><a href="Chemestry.html">
       
        <h2 class="title">Engineering Chemistry | Unit 1 -6 Notes</h2>
        <div class="description">To understand technology involved in analysis and improving quality of water as commodity.</div>
        <div class="info">
          <div class="price">View</div>
        </div>
      </a></div>
  
      <div class="card"><a href="M1.html">
         
          <h2 class="title">Engineering Mathematics Notes | Unit 1 – 6</h2>
          <div class="description">Rolle’s Theorem, Mean Value Theorems, Taylor’s Series and Maclaurin’s Series.</div>
          <div class="info">
            <div class="price">View</div>
          </div>
        </a></div>
  
        <div class="card"><a href="Chemestry.html">
         
          <h2 class="title">Engineering Chemistry Notes | Unit 1 – 6</h2>
          <div class="description">To understand technology involved in analysis and improving quality of water as commodity.</div>
          <div class="info">
            <div class="price">View</div>
          </div>
        </a></div>
  
        <div class="card"><a href="BEE.html">
         
          <h2 class="title">Basic Electrical Engineering | Unit 1 – 6</h2>
          <div class="description">Batteries :Different types of batteries (Lead Acid and Lithium Ion), construction, working principle,</div>
          <div class="info">
            <div class="price">View</div>
          </div>
        </a></div>
  
  
        <div class="card"><a href="sme.html">
         
          <h2 class="title">Systems in Mechanical Engineering | Unit 1 – 6</h2>
          <div class="description">Energy sources: Thermal energy, Hydropower energy, Nuclear energy, Solar energy, Geothermal energy, </div>
          <div class="info">
            <div class="price">View</div>
          </div>
        </a></div>
  
  
        <div class="card"><a href="pps.html">
         
          <h2 class="title">Problem Solving and Programming | Unit 1 – 6 Notes</h2>
          <div class="description">Prime objective is to give students a basic introduction to programming and problem</div>
          <div class="info">
            <div class="price">View</div>
          </div>
        </a></div>
  
  
        <div class="card"><a href="phy.html">
         
          <h2 class="title">Engineering Physics | Unit 1 -6 Notes</h2>
          <div class="description">To teach students basic concepts and principles of physics, relate them to laboratory experiments</div>
          <div class="info">
            <div class="price">View</div>
          </div>
        </a></div>
  
    </div>
  
    
      
    
    <!-- ======================================== 
           Footer Section Start  
      ========================================  -->
  
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="contact.html">Contact us</a></li>
              <li><a href="#">privacy policy</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="contact.html">Contact us</a></li>
              <li><a href="#">returns</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Semesters</h4>
            <ul>
              <li><a href="Sem1.html">FE Sem 1</a></li>
              <li><a href="Sem2.html">FE Sem 2</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
       <div class="wrapper">
         <div class="button">
            <div class="icon">
               <i class="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
         </div><br>
         
         <div class="button">
            <div class="icon">
               <i class="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div><br>
         <div class="button">
            <div class="icon">
               <i class="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
         </div><br>
      </div>
          </div>
        </div>
      </div>
    </footer>
  
    
  </body>
  <script src="main.js"></script>
</body>
</html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
