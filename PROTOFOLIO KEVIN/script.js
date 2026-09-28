// Function to handle switching between tabs
function showSection(sectionId) {
    // 1. Hide all tab contents
    const allSections = document.querySelectorAll('.tab-content');
    allSections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Remove 'active' state from all navigation links
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 4. Highlight current navigation link
    const activeLink = Array.from(allNavLinks).find(link => 
        link.getAttribute('onclick').includes(sectionId)
    );
    if (activeLink) {
        activeLink.classList.add('active');
    }
}