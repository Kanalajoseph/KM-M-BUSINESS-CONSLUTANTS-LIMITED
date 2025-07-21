function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
} 
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}
document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const section = document.getElementById(targetId);
            if (section) {
                e.preventDefault();
                section.scrollIntoView({ behavior: 'smooth' });
                // Hide sidebar if open (for mobile)
                if (typeof hideSidebar === 'function') hideSidebar();
            }
        });
    });