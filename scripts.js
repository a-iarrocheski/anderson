const btnAbout = document.querySelector(".about-btn");
const refer = document.querySelector(".content");
const about = document.createElement('div')
about.classList.add('aboutContent');
about.classList.add('hiddenAbout');
const aboutText = "<p>&nbspFrom Santa Catarina, south of Brazil. For a few years learnt code by hobby, but some time ago I made that my job.<br>&nbspStarting University Course of System Development at UNINTER, I’ve learned a lot of how to learn, how to start and how to be a Dev. Afterward, I have learned a lot of Python, a bit of R and some other languages, like C, C# and COBOL.<br>&nbspI like to read and learn, so I attended a lot of courses, and read many books about software stuff.<br>&nbspNow I’m studiyng at Trybe, a Software School, a new start-up that came to rebuild the code learning. My focus now is learn JS, React and Work as Front-end. At the end of the course, I’ll head-on the back-end. In a few months, I’ll be a Full-stack web developer, and certainly, a better person.</p>"

about.innerHTML = aboutText;
refer.appendChild(about);

btnAbout.addEventListener('click', () => {
    event.preventDefault();
    about.classList.toggle('hiddenAbout');
    about.classList.toggle('showAbout');
    window.scrollTo(0,document.body.scrollHeight);
});