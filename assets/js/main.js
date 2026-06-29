const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

toggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", Boolean(isOpen));
  header?.classList.toggle("nav-active", Boolean(isOpen));
  toggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element) || !target.closest("a")) return;
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  header?.classList.remove("nav-active");
  toggle?.setAttribute("aria-expanded", "false");
});

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
