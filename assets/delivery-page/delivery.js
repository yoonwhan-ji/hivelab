// "!" 아이콘 클릭 시 안내 박스 토글
const infoIcon = document.getElementById("info-icon");
const infoPopup = document.getElementById("info-popup");

infoIcon.addEventListener("click", () => {
    if (
        infoPopup.style.display === "none" ||
        infoPopup.style.display === ""
    ) {
        infoPopup.style.display = "block";
    } else {
        infoPopup.style.display = "none";
    }
});

// "접기 / 열기" 버튼 클릭 시 상태 토글
const toggleBtn = document.getElementById("toggle-btn");
const toggleBox = document.getElementById("toggle-box");

toggleBtn.addEventListener("click", () => {
    if (
        toggleBox.style.display === "none" ||
        toggleBox.style.display === ""
    ) {
        toggleBox.style.display = "block";
        toggleBtn.textContent = "접기";
    } else {
        toggleBox.style.display = "none";
        toggleBtn.textContent = "열기";
    }
});

// 초기 상태 설정
infoPopup.style.display = "none";
toggleBox.style.display = "none";
