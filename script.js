// by.D工作室&duck
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target.getAttribute("href");
            const targetPage = target.split("/").pop();

            if (targetPage !== currentPage) {
                const container = document.querySelector('.container');
                container.classList.remove('page-enter-right', 'page-enter-left', 'page-exit-left');
                container.classList.add('page-exit-left');

                setTimeout(() => {
                    window.location.href = target;
                }, 500); // 动画持续时间
            }
        });
    });

    const dynamicText = document.getElementById('dynamicText');
    if (dynamicText) {
        const text = "您好，欢迎来到D工作室";
        let index = 0;

        function typeText() {
            if (index < text.length) {
                dynamicText.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 200); // 调整打字速度
            }
        }

        typeText();
    }

    const menuIcon = document.getElementById("menuIcon");
    const sideMenu = document.getElementById("sideMenu");

    menuIcon.addEventListener("click", () => {
        sideMenu.classList.toggle("open");
    });

    // 关闭侧边菜单栏时点击页面其他部分
    document.addEventListener("click", (e) => {
        if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            sideMenu.classList.remove("open");
        }
    });
});