const menuBtn = document.querySelector('.menu-btn');
const drawerMenu = document.querySelector('.drawer-menu');
const closeBtn = document.querySelector('.close-btn');
const drawerLinks = document.querySelectorAll('.drawer-menu a');

if (menuBtn && drawerMenu && closeBtn) {
  menuBtn.addEventListener('click', () => {
    drawerMenu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    drawerMenu.classList.remove('active');
  });

  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawerMenu.classList.remove('active');
    });
  });
}


window.addEventListener("load", () => {
  const target = document.getElementById("typing");

  if (target) {
    const isSp = window.matchMedia("(max-width: 767px)").matches;

    const text = isSp
      ? [
        "WEB制作を通して、\n空気感や温度まで伝わる\nデザインを目指しています。"
      ]
      : [
        "Web制作を通して、",
        "空気感や温度まで伝わる",
        "デザインを目指しています。",
      ];

    let line = 0;
    let char = 0;

    function typeWriter() {
      if (line < text.length) {
        if (char < text[line].length) {
          target.innerHTML += text[line].charAt(char);
          char++;
          setTimeout(typeWriter, 45);
        } else {
          target.innerHTML += "<br>";
          line++;
          char = 0;
          setTimeout(typeWriter, 220);
        }
      }
    }

    target.innerHTML = "";
    typeWriter();
  }

  const fadeItems = document.querySelectorAll(".js-fade");

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
      }
    });
  }, {
    threshold: 0.2
  });

  fadeItems.forEach((item) => {
    fadeObserver.observe(item);
  });
});

const worksLink = document.querySelector('.works-link');
const worksPanel = document.querySelector('.works-detail-panel');
const worksCloseBtn = document.querySelector('.works-close-btn');

if (worksLink && worksPanel && worksCloseBtn) {
  worksLink.addEventListener('click', () => {
    worksPanel.classList.add('active');
  });

  worksCloseBtn.addEventListener('click', () => {
    worksPanel.classList.remove('active');
  });
}