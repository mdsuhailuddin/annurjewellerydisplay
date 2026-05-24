const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');



if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}







const businessCard = document.getElementById("businessCard");

setInterval(() => {
  businessCard.classList.toggle("is-flipped");
}, 5000);

















const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(item => observer.observe(item));

document.querySelectorAll(".viewer-card").forEach((card) => {
    const folder = card.dataset.folder;
    const total = parseInt(card.dataset.total, 10);
    const image = card.querySelector(".viewer-image");
    const label = card.querySelector(".frame-label");
    const prevBtn = card.querySelector(".prev-btn");
    const nextBtn = card.querySelector(".next-btn");
    const stage = card.querySelector(".viewer-stage");

    let frame = 1;
    let isDragging = false;
    let startX = 0;

    function updateFrame() {
      image.src = `images/product360/${folder}/${frame}.jpg`;
      label.textContent = `Frame ${frame}`;
    }

    prevBtn.addEventListener("click", () => {
      frame = frame === 1 ? total : frame - 1;
      updateFrame();
    });

    nextBtn.addEventListener("click", () => {
      frame = frame === total ? 1 : frame + 1;
      updateFrame();
    });

    stage.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    stage.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const diff = e.clientX - startX;

      if (Math.abs(diff) > 20) {
        if (diff > 0) {
          frame = frame === 1 ? total : frame - 1;
        } else {
          frame = frame === total ? 1 : frame + 1;
        }
        updateFrame();
        startX = e.clientX;
      }
    });

    stage.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    stage.addEventListener("touchmove", (e) => {
      const diff = e.touches[0].clientX - startX;

      if (Math.abs(diff) > 20) {
        if (diff > 0) {
          frame = frame === 1 ? total : frame - 1;
        } else {
          frame = frame === total ? 1 : frame + 1;
        }
        updateFrame();
        startX = e.touches[0].clientX;
      }
    });
  });


  