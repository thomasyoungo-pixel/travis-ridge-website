/* Travis Ridge, LLC — front-end interactions
   Progressive enhancement only: the site is fully functional without JS. */
(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile navigation ---------- */
  var nav = document.querySelector(".nav");
  var toggle = nav && nav.querySelector(".nav__toggle");
  var menu = document.getElementById("nav-menu");

  function setNav(open) {
    if (!nav || !toggle) return;
    nav.setAttribute("data-open", open ? "true" : "false");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setNav(nav.getAttribute("data-open") !== "true");
    });
  }

  /* Close the menu after tapping a link, or on Escape */
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setNav(false);
  });

  /* Reset state when crossing the desktop breakpoint */
  var mq = window.matchMedia("(min-width: 900px)");
  (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(
    function () { setNav(false); }
  );

  /* ---------- Scroll reveal ---------- */
  var revealTargets = document.querySelectorAll(
    ".section__head, .card, .step, .serve__item, .facts, .hero__copy, .strip__inner, .contact__copy, .contact__form"
  );
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduce && "IntersectionObserver" in window) {
    revealTargets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var data = {
        name: form.name.value.trim(),
        firm: form.firm.value.trim(),
        role: form.role.value,
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };
      // No backend is wired yet — hand off to the mail client so the
      // form is genuinely usable today. Replace with a POST endpoint later.
      var subject = encodeURIComponent("Website inquiry — " + (data.name || "New contact"));
      var body = encodeURIComponent(
        "Name: " + data.name + "\n" +
        "Firm: " + data.firm + "\n" +
        "Role: " + data.role + "\n" +
        "Email: " + data.email + "\n\n" +
        data.message
      );
      window.location.href =
        "mailto:partners@travisridge.com?subject=" + subject + "&body=" + body;

      if (status) {
        status.textContent = "Opening your email client to send this to the partners…";
        status.setAttribute("data-state", "ok");
      }
    });
  }
})();
