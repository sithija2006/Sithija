// Data
const projects = [
  {
    title: "AI Solutions Platform",
    description: "Built an enterprise-grade AI platform using TensorFlow and React, enabling automated data analysis and prediction models.",
    tags: ["AI/ML", "React", "Python", "TensorFlow"],
    link: "#"
  },
  {
    title: "E-commerce Dashboard",
    description: "Developed a real-time analytics dashboard processing millions of transactions daily using React and Node.js.",
    tags: ["React", "Node.js", "MongoDB", "Redis"],
    link: "#"
  },
  {
    title: "Blockchain Wallet",
    description: "Created a secure cryptocurrency wallet supporting multiple chains with advanced transaction features.",
    tags: ["Web3.js", "React", "Solidity", "TypeScript"],
    link: "#"
  }
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "Java", "PostgreSQL"] },
  { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD"] }
];

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const root = document.getElementById('root');
let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  root.classList.toggle('dark');
  darkModeToggle.innerHTML = isDarkMode ?
    '<i data-feather="sun"></i>' :
    '<i data-feather="moon"></i>';
  feather.replace();
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let isMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle('hidden');
  mobileMenuBtn.innerHTML = isMenuOpen ?
    '<i data-feather="x"></i>' :
    '<i data-feather="menu"></i>';
  feather.replace();
});

// Render Projects
const projectsContainer = document.getElementById('projectsContainer');

projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';
  projectCard.innerHTML = `
      <h3 class="text-xl font-bold mb-3">${project.title}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
          ${project.tags.map(tag => `
              <span class="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                  ${tag}
              </span>
          `).join('')}
      </div>
      <a href="${project.link}" class="inline-flex items-center text-blue-500 hover:text-blue-600">
          View Project <i data-feather="external-link" class="ml-1 h-4 w-4"></i>
      </a>
  `;
  projectsContainer.appendChild(projectCard);
});

// Render Skills
const skillsContainer = document.getElementById('skillsContainer');

skills.forEach(skillGroup => {
  const skillCard = document.createElement('div');
  skillCard.className = 'bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg';
  skillCard.innerHTML = `
      <h3 class="text-xl font-bold mb-4">${skillGroup.category}</h3>
      <ul class="space-y-2">
          ${skillGroup.items.map(skill => `
              <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  ${skill}
              </li>
          `).join('')}
      </ul>
  `;
  skillsContainer.appendChild(skillCard);
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here
  alert('Form submitted! (Demo only)');
});

// Initialize Feather Icons
feather.replace();