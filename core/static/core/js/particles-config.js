// Initialize particles.js background
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00bcd4"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3,
      random: true
    },
    size: {
      value: 4,
      random: true
    },
    move: {
      enable: true,
      speed: 1.5
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      repulse: {
        distance: 100
      }
    }
  },
  retina_detect: true
});
