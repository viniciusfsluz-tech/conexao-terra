/* CONEXÃO TERRA — interações leves e acessíveis */
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  // Esc fecha o menu e devolve o foco ao botão (acessibilidade por teclado)
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && navigation.classList.contains("open")) {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
      menuButton.textContent = "☰";
      menuButton.focus();
    }
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
      menuButton.textContent = "☰";
    });
  });
}

// Revela blocos conforme entram na tela; mantém tudo visível se o recurso não existir.
// Seções marcadas com data-no-reveal (ex.: lista de trabalhos, que muda por filtro) ficam sempre visíveis.
const revealTargets = [...document.querySelectorAll(
  ".intro, .contrast-card, .featured, .topic-card, .field-note, .callout, .content-section, .method-grid article, .future-grid article, .info-list"
)].filter(el => !el.closest("[data-no-reveal]") && !el.hasAttribute("data-no-reveal"));
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach(el => el.classList.add("reveal-ready"));
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => revealObserver.observe(el));
}

// Barra de leitura discreta no topo.
const progress = document.querySelector(".reading-progress");
if (progress) {
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(100, percent)}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}
