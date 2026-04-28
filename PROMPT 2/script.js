/* =========================================
   Portfolio v2 — Vanilla JS
   - Menu burger
   - Bascule clair / sombre (avec mémorisation)
   - Animations au scroll (IntersectionObserver)
   - Validation du formulaire de contact
   - Année auto dans le footer
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Menu burger ---------- */
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Ferme le menu après un clic sur un lien (mobile)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Bascule de thème ---------- */
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle?.querySelector(".theme-icon");
  const root = document.documentElement;

  // Restaure le thème mémorisé (ou détecte la préférence système)
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  applyTheme(initialTheme);

  themeToggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (themeIcon) themeIcon.textContent = "☾";
    } else {
      root.removeAttribute("data-theme");
      if (themeIcon) themeIcon.textContent = "☀";
    }
  }

  /* ---------- Animations au scroll ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback : tout afficher sans animation
    reveals.forEach((el) => el.classList.add("visible"));
  }

  /* ---------- Validation du formulaire ---------- */
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const valid = validateForm(form);
      if (valid) {
        // Ici tu pourrais envoyer les données vers un backend ou un service
        // type Formspree. Pour l'instant on simule juste le succès.
        form.reset();
        successMsg.hidden = false;
        setTimeout(() => (successMsg.hidden = true), 4000);
      }
    });

    // Validation au flou (blur) sur chaque champ
    form.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => clearError(field));
    });
  }

  function validateForm(form) {
    let allValid = true;
    form.querySelectorAll("input, textarea").forEach((field) => {
      if (!validateField(field)) allValid = false;
    });
    return allValid;
  }

  function validateField(field) {
    const row = field.closest(".form-row");
    const errorEl = row.querySelector(".error-msg");
    let message = "";

    if (field.required && !field.value.trim()) {
      message = "Ce champ est obligatoire.";
    } else if (field.type === "email" && !isValidEmail(field.value)) {
      message = "Adresse email invalide.";
    } else if (
      field.minLength > 0 &&
      field.value.trim().length < field.minLength
    ) {
      message = `Au moins ${field.minLength} caractères requis.`;
    }

    if (message) {
      row.classList.add("has-error");
      errorEl.textContent = message;
      return false;
    } else {
      row.classList.remove("has-error");
      errorEl.textContent = "";
      return true;
    }
  }

  function clearError(field) {
    const row = field.closest(".form-row");
    if (row.classList.contains("has-error")) {
      row.classList.remove("has-error");
      row.querySelector(".error-msg").textContent = "";
    }
  }

  function isValidEmail(value) {
    // Regex simple, suffisante côté client
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /* ---------- Année auto ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
