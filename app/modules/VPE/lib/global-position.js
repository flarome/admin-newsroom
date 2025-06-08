/**
 * @typedef {Object} Position
 * @property {number} x
 * @property {number} y
 */

export class GlobalPosition {
  /**
   * @param {Element} target
   * @param {Position} original
   */
  constructor(target, original) {
    /** @type {Element} */
    this.target = target;

    /** @type {Position} */
    this.original = original;

    /** @type {number} */
    this.scaleFactor = 1;

    /** @type {HTMLIFrameElement | null} */
    this.frameEl = document.querySelector("iframe#preview-frame");

    /** @type {DOMRect | null} */
    this.frameRect = null;

    if (this.frameEl) {
      this.frameRect = this.frameEl.getBoundingClientRect();
      this.scaleFactor =
        this.frameRect.width / (this.frameEl.contentWindow?.innerWidth || 1);
    }
  }

  get x() {
    return this.original.x;
  }

  get y() {
    return this.original.y;
  }

  /**
   * @returns {Position}
   */
  get global() {
    if (document !== this.target.ownerDocument && this.frameRect) {
      return {
        x: this.x * this.scaleFactor + this.frameRect.left,
        y: this.y * this.scaleFactor + this.frameRect.top,
      };
    }

    return this.original;
  }

  /**
   * @returns {Position}
   */
  get frame() {
    if (document === this.target.ownerDocument && this.frameRect) {
      return {
        x: (this.x - this.frameRect.left) / this.scaleFactor,
        y: (this.y - this.frameRect.top) / this.scaleFactor,
      };
    }

    return this.original;
  }
}