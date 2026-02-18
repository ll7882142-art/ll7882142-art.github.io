// Mobile menu toggle (simple)
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.right = "4%";
  nav.style.top = "64px";
  nav.style.padding = "12px";
  nav.style.background = "rgba(15,17,23,.95)";
  nav.style.border = "1px solid rgba(255,255,255,.10)";
  nav.style.borderRadius = "16px";
  nav.style.width = "min(260px, 92vw)";
});

// Filter inventory
const pills = document.querySelectorAll(".pill");
const cards = document.querySelectorAll(".card");

pills.forEach(p => {
  p.addEventListener("click", () => {
    pills.forEach(x => x.classList.remove("is-active"));
    p.classList.add("is-active");

    const filter = p.dataset.filter;
    cards.forEach(card => {
      const type = card.dataset.type;
      const show = filter === "all" || type === filter;
      card.style.display = show ? "block" : "none";
    });
  });
});

// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

const details = {
  "Aurum GT": {
    text: "Engine: V8 • Power: 610 hp • 0-100: 3.4s • Features: Carbon pack, premium sound, track mode."
  },
  "Velvet X7": {
    text: "Twin Turbo • 7 seats • Luxury cabin • Features: Adaptive cruise, panoramic roof, premium leather."
  },
  "Silk E-One": {
    text: "Range: 530 km • AWD • Fast charge • Features: Driver assist suite, ultra-quiet cabin, smart cockpit."
  },
  "Onyx S-Class": {
    text: "Luxury sedan • Adaptive suspension • Features: Massage seats, ambient lighting, executive rear seats."
  }
};

document.querySelectorAll('[data-open="modal"]').forEach(btn => {
  btn.addEventListener("click", () => {
    const car = btn.dataset.car || "Car Details";
    modalTitle.textContent = car;
    modalBody.textContent = details[car]?.text || "Premium vehicle details will be provided on request.";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });
});

document.querySelectorAll('[data-close="modal"]').forEach(el => {
  el.addEventListener("click", () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
});

// Contact form (demo)
const leadForm = document.getElementById("leadForm");
const formMsg = document.getElementById("formMsg");

leadForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "✅ Request sent (demo). Connect this form to your backend to receive leads.";
  leadForm.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
