// ============ Scroll Animations ============
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeInElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 50) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Trigger animation on page load
});

// ============ Typing Effect ============
const text = "Data Engineer | Snowflake | Databricks | Apache Spark | AWS & Azure | SQL | ETL Pipelines | BI & Analytics";
let index = 0;

function typeEffect() {
    document.querySelector(".typing").textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
    }

    setTimeout(typeEffect, 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ============ Dark Mode Toggle ============
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// ============ Scroll-to-Top Button ============
const scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============ Skill Bars Animation ============
window.addEventListener("scroll", function () {
    document.querySelectorAll(".skill-fill").forEach((bar) => {
        if (bar.getBoundingClientRect().top < window.innerHeight - 50) {
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});
