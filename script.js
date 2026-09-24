// Particles.js 背景
document.addEventListener('DOMContentLoaded', function () {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 1000 } },
        color: { value: ['#7c9cff', '#58dcc8'] },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#7c9cff',
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: 'none',
          out_mode: 'out',
        },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.4 } },
          push: { particles_nb: 3 },
        },
      },
    });
  }

  // Typed.js 打字效果
  if (typeof Typed !== 'undefined') {
    new Typed('#typed', {
      strings: [
        '开发者',
        '学习者',
        '生活记录者',
        '创造有趣的东西',
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });
  }
});

// 本地时间显示
function updateClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    hour12: false,
  });
}

updateClock();
setInterval(updateClock, 1000);
