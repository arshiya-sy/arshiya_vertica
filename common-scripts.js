class ImageZoom {
    constructor(selector, scale = 5) {
      this.containers = document.querySelectorAll(selector);
      this.scale = scale; 
  
      this.init();
    }
  
    init() {
      this.containers.forEach((container) => {
        const image = container.querySelector('img');
  
        container.addEventListener('mousemove', (e) => {
          this.handleMouseMove(e, container, image);
        });
  
        container.addEventListener('mouseleave', () => {
          this.resetZoom(image);
        });
      });
    }
  
    handleMouseMove(e, container, image) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;  
  
      const xPercent = (x / rect.width) * 100; 
      const yPercent = (y / rect.height) * 100;
  
      image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      image.style.transform = `scale(${this.scale})`; 
    }
  
    resetZoom(image) {
      image.style.transform = 'scale(1)';
      image.style.transformOrigin = 'center center'; 
    }
}
  
  document.addEventListener('DOMContentLoaded', () => {
    new ImageZoom('.floor-image', 5);
  });
  