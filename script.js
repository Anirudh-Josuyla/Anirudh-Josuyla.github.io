// ============ Scroll Animation ============
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
