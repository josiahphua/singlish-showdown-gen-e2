/**
 * Utility to focus the first focusable element in a container.
 */
export function focusFirstElement(container: HTMLElement | null) {
  if (!container) return;
  const focusable = container.querySelector<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  focusable?.focus();
}

/**
 * Utility to trap focus within a container (for modals, etc).
 */
export function trapFocus(container: HTMLElement | null, event: KeyboardEvent) {
  if (!container || event.key !== 'Tab') return;
  const focusableEls = Array.from(
    container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  );
  if (focusableEls.length === 0) return;
  const first = focusableEls[0];
  const last = focusableEls[focusableEls.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}
