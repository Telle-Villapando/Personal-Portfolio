let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add
                ('active')
            })
        }
        
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  // carousel card //
  const carousels = document.querySelectorAll(".carousel");
  const leftIcons = document.querySelectorAll(".wrapper i:first-child");
  const rightIcons = document.querySelectorAll(".wrapper i:last-child");
  
  carousels.forEach((carousel, index) => {
    let isDragging = false;
    let startX, scrollLeft;
  
    const dragStart = (e) => {
        e.preventDefault(); // Prevent default behavior to avoid selection
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      };
    
      const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault(); // Prevent default behavior during dragging
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; 
        carousel.scrollLeft = scrollLeft - walk;
      };
    
      const dragStop = () => {
        isDragging = false;
      };
    // Function to scroll right
    const scrollRight = () => {
      carousel.scrollLeft += carousel.offsetWidth / 2;
    };
  
    // Function to scroll left
    const scrollLeftFunc = () => {
      carousel.scrollLeft -= carousel.offsetWidth / 2;
    };
  
    // Attach event listeners
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);
  
    rightIcons[index].addEventListener("click", scrollRight);
    leftIcons[index].addEventListener("click", scrollLeftFunc);
  });
  