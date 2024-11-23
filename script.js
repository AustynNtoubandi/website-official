// Smooth Scrolling
document.querySelectorAll('.scroll-to').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Portfolio Popup
const portfolioProjects = {
    project1: {
        title: "Logo Design for Company X",
        image: "project1.jpg",
        description: "A modern logo designed for Company X, focusing on simplicity and recognizability."
    },
    project2: {
        title: "Website Redesign for Brand Y",
        image: "project2.jpg",
        description: "A responsive and modern website designed for Brand Y, with improved user experience."
    },
    project3: {
        title: "Branding for Start-up Z",
        image: "project3.jpg",
        description: "A complete branding solution including logo, business cards, and website for Start-up Z."
    }
};

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        const projectId = project.dataset.project;
        const projectData = portfolioProjects[projectId];

        document.getElementById('popup-title').textContent = projectData.title;
        document.getElementById('popup-image').src = projectData.image;
        document.getElementById('popup-description').textContent = projectData.description;

        document.getElementById('portfolio-popup').classList.remove('hidden');
    });
});

// Close Popup
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('portfolio-popup').classList.add('hidden');
});

// Form Submission Feedback
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page reload
    document.getElementById('form-success').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('form-success').classList.add('hidden');
        document.getElementById('contact-form').reset();
    }, 3000);
});