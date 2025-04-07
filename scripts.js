// Example of adding interactivity if needed for the project images
document.addEventListener('DOMContentLoaded', function () {
  const projectLinks = document.querySelectorAll('.btn-primary');
  
  projectLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      alert('Redirecting to project details page...');
    });
  });
});
