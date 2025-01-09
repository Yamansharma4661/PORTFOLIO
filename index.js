emailjs.init("I4zIbLgKM6eSrMRuM");

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("user_name").value;
    const email = document.getElementById("user_email").value;
    const phone = document.getElementById("user_phone").value;
    const message = document.getElementById("message").value;

    const responseMessage = document.getElementById("response-message");
    responseMessage.style.display = "block";
    responseMessage.style.color = "#555";
    responseMessage.textContent = "Sending...";

    emailjs.send("service_3ipj4xm", "template_osvpkkl", {
        from_name: name,
        email_id: email,
        phone_number: phone,
        message: message,
    })
    .then(() => {
        responseMessage.style.color = "#5a0000";
        responseMessage.textContent = "Message sent successfully!";
        document.getElementById("contact-form").reset();
    })
    .catch((error) => {
        responseMessage.style.color = "#d9534f";
        responseMessage.textContent = "Failed to send the message. Please try again.";
        console.error("Error:", error);
    });
});

window.addEventListener("load", function() {
    document.body.classList.add("loaded");
    initThreeJS();
    // Apply dark theme on load
    document.body.classList.add("night-mode");
});

document.getElementById("mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("night-mode");
    const icon = this.querySelector('i');
    if (document.body.classList.contains("night-mode")) {
        icon.classList.replace('bx-sun', 'bx-moon');
    } else {
        icon.classList.replace('bx-moon', 'bx-sun');
    }
});

function initThreeJS() {
    const container = document.getElementById('three-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const texture = new THREE.TextureLoader().load('IMGGG.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}
document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.btn');
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This project link is currently under development.');
        });
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
            card.style.transition = 'transform 1s ease-out';
            card.style.transform = 'translateX(0)';
        }, index * 600); // Increase delay to 600ms
        card.style.transform = 'translateX(-100%)';
    });

    // Add transition effect to project items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200); // Adjust the delay as needed
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach((card) => {
        observer.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.certifications-carousel');
  
    let isDragging = false;
    let startX;
    let scrollLeft;
  
    carousel.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
  
    carousel.addEventListener('mouseleave', () => {
      isDragging = false;
    });
  
    carousel.addEventListener('mouseup', () => {
      isDragging = false;
    });
  
    carousel.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      carousel.scrollLeft = scrollLeft - walk;
    });
  });