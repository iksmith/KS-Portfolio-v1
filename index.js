// Dark Mode Toggle Function


// const removeMode = $(`.darkMode`).empty();
// const addDark = $(`.darkMode`).append(`<i class="fa-regular fa-sun fa-lg" style="color: #000000;"></i>`);
// const addLight = $(`.darkMode`).append(`<i id="modeToggler" class="fa-solid fa-moon fa-lg" style="color: #000000;"></i>`);

function toggleMode() {
    $(`.darkMode`).click(function(e) {
        e.preventDefault();
        $(`body`).css("background-color", "#212121");
        $(`body`).css("color", "#ffffff");
        $(`.badge`).css("color", "#212121");
    });

} 

toggleMode();



// Active Menu Btn & Default Functionality


function homeDefault() {
    $(document).ready(function(e) {
        $(`#homeBtn`).click();
    });
}

homeDefault();




// Home Button Default Functionality
const homeSection = `
<div class="homeSection">

    <div id="topLine">
        <span id="topHero">What's Up World.</span><br>
    </div>

    <div id="middleLine">
        <span id="heroHeadlineOne" >I'm Kaleb.</span><br> 
    </div>
    

    
    <div class="typing-container">
        <span id="featureText" class="heroHeadlineTwo"></span>
        <span class="input-cursor"></span>
    </div>
    
</div>
`;

function createHome() {
    $(`#homeBtn`).on(`click`, function(e) {
        e.preventDefault();

        $(`.content`).empty();
        $(`.content`).append(homeSection);
        
    });
}

createHome();

// Profile Button functionality 
const profileSection = `
<!-- Profile Components -->

<div id="profileContainer">
    <div class="aboutSection">
        <div class="sectionTitle">
            <p style="font-size: 1.5rem; font-weight: 600;">My Journey 🚀</p>
        </div>
        <div class="aboutContent">
            <p style="font-size: .8rem;">
                <span style="font-size: .8rem; font-weight: 600;">From builder to builder... </span><br> 
                My journey began as a Project Manager for luxury multi-million dollar home builders. As a PM, I've mastered the art of transforming visionary concepts into functioning realities. 
                While the world of construction was full of endless challenges, opportunities, and acheivements, my entrepreneurial spirit, & creativity drove me into the vibrant world of tech. 
                Now, aiming to combine my PM instinct & creativity with <span class="devType" style="color: #9146ff;">full-stack development</span>. My ambition is to not just enter the tech world, but to innovate with it, leveraging my unique experiences and passions to contribute to the startup ecosystem. <br>
                I want to help shape the future.
            </p>
        </div>
    </div>


    <div class="techStack">
    <div class="stackTitle">Tech Stack</div>

    <div class="stackImg">

        <div class="tooltip tooltipContainer">
            <div class="tooltipText">HTML5</div>
            <div class="html">
                <i class="fa-brands fa-html5 fa-xs" style="color: #000000;"></i>
            </div>
        </div>

        <div class="tooltip tooltipContainer">
            <div class="tooltipText">CSS3</div>
            <div class="css">
                <i class="fa-brands fa-css3-alt fa-xs" style="color: #000000;"></i>
            </div>
        </div>

        <div class="tooltip tooltipContainer">
            <div class="tooltipText">Javascript</div>
            <div class="js">
                <i class="fa-brands fa-js fa-xs" style="color: #000000;"></i>
            </div>
        </div>

        <div class="tooltip tooltipContainer">
            <div class="tooltipText">React</div>
            <div class="react">
                <i class="fa-brands fa-react fa-xs" style="color: #000000;"></i>
            </div>
        </div>

        <div class="tooltip tooltipContainer">
            <div class="tooltipText">Node.js</div>
            <div class="node">
                <i class="fa-brands fa-node fa-xs" style="color: #000000;"></i>
            </div>
        </div>

    </div>
</div>

    <div class="experience">
        <div class="experienceTitle">
            <p style="font-size: .9rem; font-weight: 600;">Work Experience</p>
        </div>

        <!-- Card 1 -->
        <div class="cardContainer">
            <div class="leftCard">
                <div class="timeline">
                    <p style="font-size: .7rem;">2016 - Current</p>
                </div>
            </div>
            <div class="rightCard">
                <div class="jobName">
                    <p style="font-size: 1.1rem; font-weight: 500;">Project Manager & Estimator (Construction)</p>
                </div>
                <div class="jobSummary">
                    <p style="font-size: .8rem;">
                        Experienced leader with a proven track record of leading dynamic, cross-functional teams and third-party collaborators through the development lifecycle of large-scale projects valued between $4-6M. 
                        Known for exceptional interpersonal skills, I excel at building trust and fostering collaboration with clients to accurately assess their needs and deliver high-quality, tailored solutions. 
                        My strategic approach to project management has effectively cut project timelines by 10%, enhancing stakeholder satisfaction and increasing our company's reputation & value. I am also committed to empathetic leadership, providing comprehensive onboarding, mentoring, and support to new team members, contractors, and clients, ensuring a cohesive and productive work environment.
                    </p>
                </div>
                <div class="cardBadge">
                    <div class="badges">
                        <div class="badgeContainer">
                            <p class="badge" style="font-size: smaller;">Communication</p>
                        </div>
                    </div>
                    <div class="badges">
                        <div class="badgeContainer">
                            <p class="badge" style="font-size: smaller;">Leadership</p>
                        </div>
                    </div>
                    <div class="badges">
                        <div class="badgeContainer">
                            <p class="badge" style="font-size: smaller;">Organization</p>
                        </div>
                    </div>
                    <div class="badges">
                        <div class="badgeContainer">
                            <p class="badge" style="font-size: smaller;">Collaborative</p>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="cardContainer">
                    <div class="leftCard">
                        <div class="timeline">
                            <p style="font-size: .7rem;">2020 - 2022</p>
                        </div>
                    </div>
                    <div class="rightCard">
                        <div class="jobName">
                            <p style="font-size: 1.1rem; font-weight: 500;">Perflick (Startup), Founder</p>
                        </div>
                        <div class="jobSummary">
                            <p style="font-size: .8rem;">
                                As the founder of a SaaS startup aimed at empowering the creator economy, I spearheaded the design and execution of product roadmaps and prototypes, driven by comprehensive market research, user interviews, and A/B testing to ensure alignment with our vision. 
                                My expertise in executing targeted marketing campaigns, leveraging SEO and keywords, allowed us to reach over 2000 users in less than 24 hours, demonstrating our ability to quickly capture market interest. 
                                I've effectively managed a team of developers, emphasizing clear communication of documentation and deliverables while adhering to agile principles, to streamline our operations and accelerate product development.
                            </p>
                        </div>
                        <div class="cardBadge">
                            <div class="badges">
                                <div class="badgeContainer">
                                    <p class="badge" style="font-size: smaller;">Cross-Functional Communication</p>
                                </div>
                            </div>
                            <div class="badges">
                                <div class="badgeContainer">
                                    <p class="badge" style="font-size: smaller;">Leadership</p>
                                </div>
                            </div>
                            <div class="badges">
                                <div class="badgeContainer">
                                    <p class="badge" style="font-size: smaller;">Product Management</p>
                                </div>
                            </div>
                            <div class="badges">
                                <div class="badgeContainer">
                                    <p class="badge" style="font-size: smaller;">UX/UI Design</p>
                                </div>
                            </div>
                            <div class="badges">
                                <div class="badgeContainer">
                                    <p class="badge" style="font-size: smaller;">Figma</p>
                                </div>
                            </div>
                        </div>

                        <!-- Resume Btn -->
                <div class="resume">
                    <div class="resumeBtn">
                        <a href="https://docs.google.com/document/d/1P4mO81ChqrszlxNxtvttEtAYuiKQzF0_7pR2bBw6whE/edit?usp=sharing" target="_blank"><button id="resumeBtn" style="font-size: small;">View Full Résumé</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;


// Typing Effect Functionality

const carouselText = [
    {text: "Full-Stack Engineer.", color: "#212121"},
    {text: "Creative Developer.", color: "#00c0ff"},
    {text: "Builder.", color: "#FF0000"},
    {text: "Creator.", color: "#9146ff"},
    {text: "Gamer.", color: "#32CD32"},
    {text: "Watcher of Anime.", color: "#F47521"}
  ]
  
  $( document ).ready(async function() {
    carousel(carouselText, "#featureText")
  });

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }

  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }

  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }



function createProfile() {
    $(`#profileBtn`).on(`click`, function(e) {
        e.preventDefault();

        $(`.content`).empty();
        $(`.content`).append(profileSection);
    })
}

createProfile();

// Projects Button Functionality

const projectSection = `
    <div class="projectSection">
        <div class="sectionTitle">
            <p>Projects</p>
        </div>

        <!-- Card Container -->
        <div class="projectsContainer">
            <div class="innerProjects">
                <div class="leftProject">
                    <div class="thumbnail">
                        <img style="font-size: 1rem;" src="" alt="My Portfolio">
                    </div>
                </div>
                <div class="rightProject">
                    <div class="projectName">
                        <p id="projectName" style="font-size: .8rem;">Personal Portfolio V1</p>
                    </div>
                    <div class="projectDescription">
                        <p id="projectDescription" style="font-size: .8rem;">My first web dev portfolio, designed by me. The portfolio demonstrates a minimalistic design, as well as an understanding of HTML, CSS, and 🍦 Javascript.</p>
                    </div>
                    <div class="badges">
                        <div class="badgeContainer">
                            <p id="badge" style="font-size: smaller">HTML & CSS</p>
                        </div>
                        <div class="badgeContainer">
                            <p id="badge" style="font-size: smaller;">Javascript</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

function createProjects() {
    $(`#projectsBtn`).on(`click`, function(e) {
        e.preventDefault();

        $(`.content`).empty();
        $(`.content`).append(projectSection);
    })
}

createProjects();




  