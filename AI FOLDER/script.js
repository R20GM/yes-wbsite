// Expand the App module with Projects, Terminal Engine, and Counter Logic
const App = (() => {
    const projectData = [
        {
            id: 1,
            title: 'Neural Flow Engine',
            category: 'ai',
            tag: 'Artificial Intelligence',
            desc: 'Low-latency orchestration pipeline for multi-modal LLMs with real-time vector streaming.',
            stack: ['Python', 'PyTorch', 'FastAPI', 'Redis']
        },
        {
            id: 2,
            title: 'Nexus Edge Gateway',
            category: 'systems',
            tag: 'Infrastructure',
            desc: 'High-throughput microservices proxy handling 100k+ requests per second with custom rate limiting.',
            stack: ['Go', 'gRPC', 'Docker', 'Kubernetes']
        },
        {
            id: 3,
            title: 'Quantum Console UI',
            category: 'web',
            tag: 'Frontend System',
            desc: 'Real-time telemetry dashboard rendering 60FPS graphical analytics using WebGL and Canvas API.',
            stack: ['TypeScript', 'WebGL', 'Tailwind', 'WebSockets']
        },
        {
            id: 4,
            title: 'Autonome AI Agent Framework',
            category: 'ai',
            tag: 'Autonomous Systems',
            desc: 'Self-correcting agent workflow capable of executing complex code generation and task execution.',
            stack: ['Python', 'LangChain', 'Qdrant', 'OpenAI']
        }
    ];

    const DOM = {
        html: document.documentElement,
        themeToggle: document.getElementById('themeToggle'),
        themeIcon: document.getElementById('themeIcon'),
        themeText: document.getElementById('themeText'),
        nodeCards: document.querySelectorAll('.node-card'),
        roadmapProgress: document.getElementById('roadmapProgress'),
        projectsGrid: document.getElementById('projectsGrid'),
        projectFilters: document.getElementById('projectFilters'),
        typingTarget: document.getElementById('typingTarget'),
        statNumbers: document.querySelectorAll('.stat-number')
    };

    // Render Filterable Projects
    const renderProjects = (category = 'all') => {
        if (!DOM.projectsGrid) return;

        const filtered = category === 'all' 
            ? projectData 
            : projectData.filter(p => p.category === category);

        DOM.projectsGrid.innerHTML = filtered.map(p => `
            <div class="project-card">
                <div>
                    <div class="project-header">
                        <span class="project-tag">${p.tag}</span>
                    </div>
                    <h3 class="project-title">${p.title}</h3>
                    <p class="project-desc">${p.desc}</p>
                </div>
                <div class="tech-stack">
                    ${p.stack.map(s => `<span class="tech-badge">${s}</span>`).join('')}
                </div>
            </div>
        `).join('');
    };

    // Terminal Typewriter Effect
    const initTypewriter = () => {
        if (!DOM.typingTarget) return;
        const text = "echo 'Ready to engineer the future.'";
        let index = 0;

        const type = () => {
            if (index < text.length) {
                DOM.typingTarget.textContent += text.charAt(index);
                index++;
                setTimeout(type, 80);
            }
        };
        setTimeout(type, 1000);
    };

    // Animated Stats Counter
    const initCounters = () => {
        DOM.statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-count');
            let count = 0;
            const speed = target / 30;

            const updateCount = () => {
                count += speed;
                if (count < target) {
                    stat.textContent = Math.ceil(count) + (target > 90 ? '%' : '+');
                    setTimeout(updateCount, 40);
                } else {
                    stat.textContent = target + (target > 90 ? '%' : '+');
                }
            };
            updateCount();
        });
    };

    // Existing Theme & Timeline Functions
    const toggleTheme = () => {
        const currentTheme = DOM.html.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        DOM.html.setAttribute('data-theme', nextTheme);
        DOM.themeIcon.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
        DOM.themeText.textContent = nextTheme === 'dark' ? 'Light' : 'Dark';
        localStorage.setItem('kevin-portfolio-theme', nextTheme);
    };

    const initTheme = () => {
        const savedTheme = localStorage.getItem('kevin-portfolio-theme') || 'dark';
        DOM.html.setAttribute('data-theme', savedTheme);
        DOM.themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
        DOM.themeText.textContent = savedTheme === 'dark' ? 'Light' : 'Dark';
    };

    const handleTimelineClick = (card) => {
        DOM.nodeCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        DOM.roadmapProgress.style.width = card.getAttribute('data-progress');
    };

    return {
        init: () => {
            initTheme();
            renderProjects();
            initTypewriter();
            initCounters();

            DOM.themeToggle.addEventListener('click', toggleTheme);

            DOM.nodeCards.forEach(card => {
                card.addEventListener('click', () => handleTimelineClick(card));
            });

            if (DOM.projectFilters) {
                DOM.projectFilters.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('filter-chip')) return;
                    DOM.projectFilters.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    renderProjects(e.target.dataset.filter);
                });
            }

            const initialActive = document.querySelector('.node-card.active');
            if (initialActive) {
                DOM.roadmapProgress.style.width = initialActive.getAttribute('data-progress');
            }
        }
    };
})();

document.addEventListener('DOMContentLoaded', App.init);