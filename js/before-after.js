/**
 * FOURLINE INTERIORS - Interactive Before/After Image Comparison Slider
 */

class BeforeAfterSlider {
  constructor(containerElement) {
    this.container = containerElement;
    if (!this.container) return;
    this.sliderHandle = this.container.querySelector('.ba-handle');
    this.afterImageWrapper = this.container.querySelector('.ba-after-wrapper');
    this.isDragging = false;

    this.init();
  }

  init() {
    if (!this.sliderHandle || !this.afterImageWrapper) return;

    // Set initial position to 50%
    this.setPosition(50);

    // Mouse Events
    this.sliderHandle.addEventListener('mousedown', (e) => this.startDragging(e));
    window.addEventListener('mouseup', () => this.stopDragging());
    window.addEventListener('mousemove', (e) => this.onMove(e));

    // Touch Events (Mobile)
    this.sliderHandle.addEventListener('touchstart', (e) => this.startDragging(e), { passive: true });
    window.addEventListener('touchend', () => this.stopDragging());
    window.addEventListener('touchmove', (e) => this.onMove(e), { passive: true });

    // Container click to jump
    this.container.addEventListener('click', (e) => {
      if (e.target.closest('.ba-handle')) return;
      this.updatePositionFromEvent(e);
    });
  }

  startDragging(e) {
    this.isDragging = true;
    this.container.classList.add('is-dragging');
  }

  stopDragging() {
    if (this.isDragging) {
      this.isDragging = false;
      this.container.classList.remove('is-dragging');
    }
  }

  onMove(e) {
    if (!this.isDragging) return;
    this.updatePositionFromEvent(e);
  }

  updatePositionFromEvent(e) {
    const rect = this.container.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const xPos = clientX - rect.left;
    let percentage = (xPos / rect.width) * 100;

    // Clamp between 0% and 100%
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;

    this.setPosition(percentage);
  }

  setPosition(percentage) {
    if (this.sliderHandle) {
      this.sliderHandle.style.left = `${percentage}%`;
    }
    if (this.afterImageWrapper) {
      this.afterImageWrapper.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
      // Support older clip-path
      this.afterImageWrapper.style.webkitClipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
    }
  }
}

// Global initialization function
function initBeforeAfterSliders() {
  document.querySelectorAll('.before-after-container').forEach(container => {
    new BeforeAfterSlider(container);
  });
}
