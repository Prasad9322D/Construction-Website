document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
  });
  
  window.addEventListener('load', adjustHeaderSize);
window.addEventListener('resize', adjustHeaderSize);

function adjustHeaderSize() {
  const header = document.querySelector('header');
  const logo = document.querySelector('.logo h1');
  const navLinks = document.querySelectorAll('header nav ul li a');
  
  if (window.innerWidth <= 768) {
    // For mobile or tablet view
    header.style.padding = '10px';
    logo.style.fontSize = '28px';
    
    // Adjust nav links to stack vertically
    navLinks.forEach(link => {
      link.style.fontSize = '16px';
      link.style.margin = '5px 0';
    });
  } else {
    // For larger screens
    header.style.padding = '20px';
    logo.style.fontSize = '36px';
    
    // Adjust nav links to be horizontally aligned
    navLinks.forEach(link => {
      link.style.fontSize = '18px';
      link.style.margin = '0 20px';
    });
  }
}
