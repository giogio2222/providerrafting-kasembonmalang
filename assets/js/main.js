document.addEventListener("DOMContentLoaded", function () {
    // 1. Automatic TOC generation
    const content = document.querySelector(".article-content");
    const tocContainer = document.getElementById("toc-list");
    const tocWrapper = document.getElementById("toc-wrapper");
    
    if (content && tocContainer && tocWrapper) {
        const headings = content.querySelectorAll("h2, h3");
        if (headings.length > 0) {
            headings.forEach((heading, index) => {
                const id = "heading-" + index;
                heading.id = id;
                const li = document.createElement("li");
                li.className = heading.tagName.toLowerCase() === "h2" ? "toc-h2" : "toc-h3";
                
                const a = document.createElement("a");
                a.href = "#" + id;
                a.textContent = heading.textContent;
                a.className = "text-decoration-none text-dark";
                a.style.display = "block";
                a.style.padding = "5px 0";
                
                li.appendChild(a);
                tocContainer.appendChild(li);
            });
        } else {
            tocWrapper.style.display = 'none';
        }
    }

    // TOC Toggle
    const tocBtn = document.getElementById("toc-toggle");
    const tocBody = document.getElementById("toc-body");
    if (tocBtn && tocBody) {
        tocBtn.addEventListener("click", () => {
            if (tocBody.style.display === "none" || tocBody.style.display === "") {
                tocBody.style.display = "block";
                tocBtn.innerHTML = "Tutup [-]";
            } else {
                tocBody.style.display = "none";
                tocBtn.innerHTML = "Buka [+]";
            }
        });
    }

    // 2. Scroll to Top Button
    const btnUp = document.getElementById("btn-up");
    if (btnUp) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                btnUp.classList.add("show");
            } else {
                btnUp.classList.remove("show");
            }
        });
        
        btnUp.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 3. Social Share WA Button format
    const shareWaBtns = document.querySelectorAll(".share-wa");
    shareWaBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const message = encodeURIComponent("Cek artikel menarik ini: " + document.title + " " + window.location.href);
            window.open("https://wa.me/?text=" + message, "_blank");
        });
    });
});
