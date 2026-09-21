/**
 * ==============================================================================
 * WHITEBRIDGE AI — CPA LANDING PAGE CONFIGURATION & INTERACTION SCRIPT
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. SET YOUR CPA OFFER LINK HERE (Easily change this whenever you want!)
// ------------------------------------------------------------------------------
const CPA_OFFER_URL = "https://click2daff.com/click?o=4164&p=20433";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // Automatically sync all CPA trigger links and images across the page
  const cpaElements = document.querySelectorAll(".cpa-trigger");

  cpaElements.forEach((el) => {
    // If the element is an anchor link, ensure it points to the CPA URL
    if (el.tagName === "A" && CPA_OFFER_URL) {
      el.setAttribute("href", CPA_OFFER_URL);
    }

    // Add click tracking / redirect assurance
    el.addEventListener("click", () => {
      // Optional: Custom CPA analytics / conversion tracking can go here
      console.log("CPA link clicked:", el.getAttribute("href"));
    });
  });

  // Subtle interactive hover parallax on image cards (desktop only)
  if (window.matchMedia("(min-width: 768px)").matches) {
    const imageCards = document.querySelectorAll(".image-card-link");

    imageCards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / rect.height) * 8;
        const rotateY = (x / rect.width) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
      });
    });
  }
});
