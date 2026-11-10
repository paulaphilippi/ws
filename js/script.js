// Optional client-side interactivity
// If an element with ID 'my-work-link' is added to the navigation, clicking it smoothly scrolls to the projects section.
const myWorkLink = document.getElementById('my-work-link');
const myWorkSection = document.getElementById('my-work-section');

if (myWorkLink && myWorkSection) {
  myWorkLink.addEventListener('click', (event) => {
    event.preventDefault();
    myWorkSection.scrollIntoView({ behavior: 'smooth' });
  });
}
