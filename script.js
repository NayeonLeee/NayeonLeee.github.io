/* 스크롤 시 본문 레이어 이동 및 팝업 기능 JavaScript */

document.addEventListener("DOMContentLoaded", function() {

    const mainContent = document.querySelector('main'); // main 태그 가져오기
    const modal = document.getElementById("modal-popup");
    const modalContent = document.getElementById("modal-content-body");
    const modalTitle = document.getElementById("modal-title");
    const closeModalButton = document.querySelector(".modal-close");
    const contentCards = document.querySelectorAll(".content-card");

    // [핵심 변경] 스크롤 이벤트 리스너 추가 (main 콘텐츠를 스크롤에 따라 이동)
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY; // 현재 스크롤 위치
        const bannerHeight = window.innerHeight; // 배너 높이 (viewport height)

        // 스크롤 위치에 따라 main 콘텐츠를 위로 당겨 올림
        // (원하는 만큼 조절 가능)
        if (scrollY < bannerHeight) { // 배너 높이 내에서는
            mainContent.style.transform = `translateY(-${scrollY * 0.7}px)`; // 0.7배 속도로 올라오도록
        } else { // 배너 높이를 넘어서면 고정
            mainContent.style.transform = `translateY(-${bannerHeight * 0.7}px)`; 
        }
    });

    // 1. 각 카드에 클릭 이벤트 추가
    contentCards.forEach(function(card) {
        card.addEventListener("click", function() {
            const title = card.querySelector("h3").innerHTML;
            const description = card.querySelector("p").innerHTML;
            
            modalTitle.innerHTML = title;
            modalContent.innerHTML = description + "<br><br><p>이곳에 더 자세한 설명을 추가할 수 있습니다.</p>";
            
            modal.style.display = "flex";
        });
    });

    // 2. 'X' 닫기 버튼
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // 3. 바깥 영역 클릭 시 닫기
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
