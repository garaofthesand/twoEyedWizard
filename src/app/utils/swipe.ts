// Lightweight swipe/pan helper that returns a detach function
export type SwipeHandler = (direction: 'left' | 'right') => void;

export function attachSwipe(el: HTMLElement, onSwipe: SwipeHandler) {
  if (!el) return () => {};

  let startX = 0;
  let startY = 0;
  let isDown = false;

  const threshold = 50; // px needed for a swipe
  const maxYDeviation = 100; // allow some vertical movement

  function pointerDown(e: PointerEvent) {
    isDown = true;
    startX = e.clientX;
    startY = e.clientY;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }

  function pointerMove(e: PointerEvent) {
    if (!isDown) return;
    // no-op; we only need end position for swipe detection
  }

  function pointerUp(e: PointerEvent) {
    if (!isDown) return;
    isDown = false;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (Math.abs(dx) > threshold && Math.abs(dy) < maxYDeviation) {
      if (dx < 0) onSwipe('left');
      else onSwipe('right');
    }
  }

  // Touch fallback for very old browsers
  function touchStart(e: TouchEvent) {
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
  }

  function touchEnd(e: TouchEvent) {
    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    if (Math.abs(dx) > threshold && Math.abs(dy) < maxYDeviation) {
      if (dx < 0) onSwipe('left');
      else onSwipe('right');
    }
  }

  el.addEventListener('pointerdown', pointerDown, { passive: true });
  el.addEventListener('pointermove', pointerMove, { passive: true });
  el.addEventListener('pointerup', pointerUp, { passive: true });

  el.addEventListener('touchstart', touchStart, { passive: true });
  el.addEventListener('touchend', touchEnd, { passive: true });

  return function detach() {
    try {
      el.removeEventListener('pointerdown', pointerDown);
      el.removeEventListener('pointermove', pointerMove);
      el.removeEventListener('pointerup', pointerUp);
      el.removeEventListener('touchstart', touchStart);
      el.removeEventListener('touchend', touchEnd);
    } catch (err) {
      // ignore
    }
  };
}
