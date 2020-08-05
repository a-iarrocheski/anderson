const btnAbout = document.querySelector(".about-btn");
const refer = document.querySelector(".content");
const about = document.createElement('div')
about.classList.add('aboutContent');
about.classList.add('hiddenAbout');
const aboutText = "<p>&nbspFrom Santa Catarina, south of Brazil. For few years learn code by hobby, and some time ago, doing from that, my job. Start with University Course of System Development at UNINTER. I've learned a lot of how to learn, how to start and how to be a Dev. <br>&nbspSince this, have larned a lot of Python, a bit of R and some other languages, like C, C# and COBOL. I like to read and learn, so I have a lot of courses done, and many books read of any kind of software stuff.<br>&nbsp Now I'm studiyng at Trybe, an Software School, a new start-up that came to redo the code learning.<br>&nbsp My focus now are learn JS, React and Work as <i>Front-end</i>. When the course head to finish, I'll head-on the <i>back-end</i>. In few months, I'll be a <i>Full-stack</i> web developer, and certainly, a better person.</p>"

about.innerHTML = aboutText;
refer.appendChild(about);

btnAbout.addEventListener('click', () => {
    event.preventDefault();
    about.classList.toggle('hiddenAbout');
    about.classList.toggle('showAbout');
});