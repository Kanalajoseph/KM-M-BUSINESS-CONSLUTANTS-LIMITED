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

    document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".carousel-card");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");

    let index = 0;

    // Get width dynamically (responsive)
    function getCardWidth() {
        return cards[0].getBoundingClientRect().width + 20; // width + margin
    }

    function updateCarousel() {
        const cardWidth = getCardWidth();
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    // Next button
    nextBtn.addEventListener("click", () => {
        if (index < cards.length - 1) {
            index++;
            updateCarousel();
        }
    });

    // Previous button
    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // Recalculate position on window resize
    window.addEventListener("resize", updateCarousel);
});
