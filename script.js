const projects = [
    {
        title: "Day 1: Invalid Input Shake",
        description: "Create an input validation with shake animation effect when invalid input is detected.",
        link: "Day 1 Invalid Input Shake/index.html",
        image: "images/Project-1.png"
    },
    {
        title: "Day 2: Box Shadow Generator",
        description: "Build a tool to generate and preview CSS box shadows with custom controls.",
        link: "Day 2 Box Shadow Generator/index.html",
        image: "images/Project-2.png"
    },
    {
        title: "Day 3: Notes Application",
        description: "Create a notes app with local storage to save and manage your notes.",
        link: "Day 3 Notes Application/index.html",
        image: "images/Project-3.png"
    },
    {
        title: "Day 4: FD Calculator",
        description: "Build a Fixed Deposit calculator to calculate interest and maturity amount.",
        link: "Day 4 FD Calculator/index.html",
        image: "images/Project-4.png"
    },
    {
        title: "Day 5: Gradient Generator",
        description: "Create a tool to generate and preview CSS gradients with color picker.",
        link: "Day 5 Gradient Generator/index.html",
        image: "images/Project-5.png"
    },
    {
        title: "Day 6: BMI Calculator",
        description: "Build a Body Mass Index calculator with category classification.",
        link: "Day 6 BMI Calculato/index.html",
        image: "images/Project-6.png"
    },
    {
        title: "Day 7: Tip Calculator",
        description: "Create a tip calculator to split bills and calculate tips easily.",
        link: "Day 7 Tip Calculator/index.html",
        image: "images/Project-7.png"
    },
    {
        title: "Day 8: Blob Maker",
        description: "Create a tool to generate and customize blob shapes for web design.",
        link: "Day 8 Blob Maker/index.html",
        image: "images/Project-8.png"
    },
    {
        title: "Day 9: Basic Image Editor",
        description: "Build a simple image editor with basic filters and adjustments.",
        link: "Day 9 Basic Image Editor/index.html",
        image: "images/Project-9.png"
    },
    {
        title: "Day 10: Input Character Counter",
        description: "Create a character counter with word limit and validation.",
        link: "Day 10 Input Character Counter/index.html",
        image: "images/Project-10.png"
    },
    {
        title: "Day 11: Image Slider",
        description: "Build an image slider with smooth transitions and controls.",
        link: "Day 11 Image Slider/index.html",
        image: "images/Project-11.png"
    },
    {
        title: "Day 12: Day of the Week",
        description: "Create a tool to determine the day of the week for any given date.",
        link: "Day 12 Day of the Week/index.html",
        image: "images/Project-12.png"
    },
    {
        title: "Day 13: Live Word Counter",
        description: "Create a real-time word and character counter with statistics.",
        link: "Day 13 Live Word Counter/index.html",
        image: "images/Project-13.png"
    },
    {
        title: "Day 14: Video Slider",
        description: "Build a video slider with preview thumbnails and controls.",
        link: "Day 14 Video Slider/index.html",
        image: "images/Project-14.png"
    },
    {
        title: "Day 15: Get Unicode Value",
        description: "Create a tool to get Unicode values of characters and symbols.",
        link: "Day 15 Get Unicode Value/index.html",
        image: "images/Project-15.png"
    },
    {
        title: "Day 16: Dictionary Application",
        description: "Build a dictionary app with word definitions and examples.",
        link: "Day 16 Dictionary Application/index.html",
        image: "images/Project-16.png"
    },
    {
        title: "Day 17: Paragraph Generator",
        description: "Create a tool to generate random paragraphs with customizable options.",
        link: "Day 17 Paragraph Generator/index.html",
        image: "images/Project-17.png"
    },
    {
        title: "Day 18: CSS Changer Application",
        description: "Build a tool to preview and apply CSS styles in real-time.",
        link: "Day 18 CSS Changer Application/index.html",
        image: "images/Project-18.png"
    },
    {
        title: "Day 19: Robot Joke Generator",
        description: "Create a fun application that generates random robot-themed jokes.",
        link: "Day 19 Robot Joke Generator Application/index.html",
        image: "images/Project-19.png"
    },
    {
        title: "Day 20: Star Rating Project",
        description: "Build an interactive star rating system with hover effects.",
        link: "Day 20 Star Rating Project/index.html",
        image: "images/Project-20.png"
    },
    {
        title: "Day 21: Random Password Generator",
        description: "Create a secure password generator with customization options.",
        link: "Day 21 Generate Random Password/index.html",
        image: "images/Project-21.png"
    },
    {
        title: "Day 22: Random Number Generator",
        description: "Build a tool to generate random numbers within specified ranges.",
        link: "Day 22 Random Number Generator/index.html",
        image: "images/Project-22.png"
    },
    {
        title: "Day 23: Prime Number Checker",
        description: "Create a tool to check if numbers are prime or non-prime.",
        link: "Day 23 Prime and Non-Prime Number/index.html",
        image: "images/Project-23.png"
    },
    {
        title: "Day 24: Counter Application",
        description: "Build a counter with increment, decrement, and reset functionality.",
        link: "Day 24 Counter Application/index.html",
        image: "images/Project-24.png"
    },
    {
        title: "Day 25: Age Calculator",
        description: "Create a tool to calculate age based on birth date.",
        link: "Day 25 Age Calculator/index.html",
        image: "images/Project-25.png"
    },
    {
        title: "Day 26: Date and Time Widget",
        description: "Build a widget displaying current date and time with formatting options.",
        link: "Day 26 Date and Time Widget/index.html",
        image: "images/Project-26.png"
    },
    {
        title: "Day 27: Advanced Image Carousel",
        description: "Create an advanced image carousel with animations and controls.",
        link: "Day 27 Advanced Image Carousel Application/index.html",
        image: "images/Project-27.png"
    },
    {
        title: "Day 28: Code Editor",
        description: "Build a simple code editor with syntax highlighting.",
        link: "Day 28 Code Editor/index.html",
        image: "images/Project-28.png"
    },
    {
        title: "Day 29: Poll System",
        description: "Create an interactive poll system with results visualization.",
        link: "Day 29 Poll System/index.html",
        image: "images/Project-29.png"
    },
    {
        title: "Day 30: Cash Calculator",
        description: "Build a cash calculator for managing expenses and income.",
        link: "Day 30 Cash Calculator/index.html",
        image: "images/Project-30.png"
    }
];

// Function to create project cards
function createProjectCards() {
    const projectsGrid = document.querySelector('.grid');
    projectsGrid.innerHTML = ''; // Clear the template card

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1';
        card.innerHTML = `
            <div class="relative">
                <img src="${project.image}" 
                     alt="${project.title}" 
                     class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Day ${index + 1}</span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">${project.title}</h3>
                <p class="text-gray-600 mb-4 line-clamp-2">${project.description}</p>
                <div class="flex items-center justify-between">
                    <a href="${project.link}" target="_blank" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 group-hover:shadow-md">
                        View Project
                        <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                    </a>
                    <div class="flex space-x-2">
                        <button class="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300" onclick="window.open('${project.link}', '_blank')">
                            <i class="fas fa-code"></i>
                        </button>
                        <button class="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300" onclick="window.open('${project.link}', '_blank')">
                            <i class="fas fa-external-link-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// Initialize the project cards and certificate section when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    createCertificateSection();
});

function createCertificateSection() {
    const certificateSection = document.getElementById('certificate-section');
    certificateSection.innerHTML = `
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Course Completion Certificate</h2>
            <div class="bg-white rounded-lg shadow-xl p-6 mb-8">
                <img src="images/UC-d5f1d44b-e0df-4966-aeb7-92f43f17688b.jpg" 
                     alt="Course Completion Certificate" 
                     class="w-full h-auto rounded-lg shadow-lg mb-6">
                <p class="text-gray-600 mb-4">Congratulations on completing all 30 projects! This certificate represents your dedication to mastering JavaScript, HTML, and CSS.</p>
                <a href="images/UC-d5f1d44b-e0df-4966-aeb7-92f43f17688b.jpg" 
                   download="JavaScript_HTML_CSS_Certificate.jpg"
                   class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Download Certificate
                </a>
            </div>
        </div>
    `;
} 