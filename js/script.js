// Publications Sidebar TOC & Filtering
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubSections = document.querySelectorAll('.pub-section');
  const pubCards = document.querySelectorAll('.pub-card');
  const tocLinks = document.querySelectorAll('.toc-link');

  function applyFilter(filter) {
    filterBtns.forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-filter') === filter);
    });

    pubCards.forEach((card) => {
      const categories = (card.getAttribute('data-category') || '').split(' ');
      if (filter === 'all') {
        card.style.display = 'block';
      } else if (filter === 'lead') {
        card.style.display = card.classList.contains('is-lead') ? 'block' : 'none';
      } else {
        card.style.display = categories.includes(filter) ? 'block' : 'none';
      }
    });

    // Show/hide entire sections based on whether they have visible cards
    pubSections.forEach((section) => {
      const visibleCards = Array.from(section.querySelectorAll('.pub-card')).filter(
        (c) => c.style.display !== 'none'
      );
      section.style.display = visibleCards.length > 0 ? 'block' : 'none';
    });
  }

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        applyFilter(btn.getAttribute('data-filter'));
      });
    });
  }

  if (tocLinks.length > 0) {
    tocLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').replace('#', '');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          // If the target section is currently hidden by a filter, reset filter to 'all'
          if (targetSection.style.display === 'none') {
            applyFilter('all');
          }

          e.preventDefault();
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

          tocLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });
  }
});
