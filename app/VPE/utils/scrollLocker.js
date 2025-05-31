// src/utils/scrollLocker.js

function Vj(e) {
  return e.scrollHeight > e.clientHeight;
}

const pb = typeof window > "u" || typeof document > "u";

const lx = "data-lock-scrolling",
  ux = "data-lock-scrolling-hidden",
  cx = "data-lock-scrolling-wrapper";

class ScrollLocker {
  constructor(bodyRef, appRef) {
    this.scrollLocks = 0;
    this.locked = false;
    this.bodyRef = bodyRef; // DOM node direct (PAS .current !)
    this.appRef = appRef; // DOM node direct
  }

  registerScrollLock() {
    this.scrollLocks += 1;

    this.handleScrollLocking();
  }

  unregisterScrollLock() {
    this.scrollLocks -= 1;
    if (this.scrollLocks < 0) {
      this.scrollLocks = 0;
    }

    this.handleScrollLocking();
  }

  handleScrollLocking() {
    if (pb || !this.bodyRef || !this.appRef) {
      return;
    }

    const scrollLocks = this.scrollLocks;
    const body = this.bodyRef;
    const appRoot = this.appRef;

    if (scrollLocks === 0) {
      body.removeAttribute(lx);
      body.removeAttribute(ux);
      appRoot.removeAttribute(cx);
      window?.scroll(0, ScrollLocker.lastScrollY || 0);
      this.locked = false;
    } else if (scrollLocks > 0 && !this.locked) {
      ScrollLocker.lastScrollY = window?.pageYOffset;
      body.setAttribute(lx, "");

      Vj(body) || body.setAttribute(ux, "");

      appRoot.setAttribute(cx, "");
      appRoot.scrollTop = ScrollLocker.lastScrollY;
      this.locked = true;
    } else if (scrollLocks > 0 && this.locked) {
    }
  }

  resetScrollPosition() {
    ScrollLocker.lastScrollY = 0;
  }

}

ScrollLocker.lastScrollY = 0;

export default ScrollLocker;
