// 자바스크립트 코드입니다.

// 웹페이지의 'scroll'(스크롤) 이벤트를 항상 감시합니다.
window.addEventListener('scroll', function() {
    
    // '.video-banner' 라는 클래스를 가진 HTML 요소를 찾습니다.
    var header = document.querySelector('.video-banner');
    
    // 윈도우(브라우저)가 세로로 50px "이상" 스크롤 되었는지 확인합니다.
    if (window.scrollY > 50) {
        // 50px 이상 스크롤됐다면, 헤더에 'scrolled' 라는 클래스를 "추가"합니다.
        header.classList.add('scrolled');
    } else {
        // 50px 미만(맨 위)으로 돌아왔다면, 'scrolled' 클래스를 "제거"합니다.
        header.classList.remove('scrolled');
    }

});

// DOM이 모두 로드된 후에 스크립트를 실행합니다.
document.addEventListener("DOMContentLoaded", function() {

    // 필요한 HTML 요소들을 가져옵니다.
    const modal = document.getElementById("modal-popup");
    const modalContent = document.getElementById("modal-content-body");
    const modalTitle = document.getElementById("modal-title");
    const closeModalButton = document.querySelector(".modal-close");

    // 모든 .content-card (콘텐츠 상자)를 가져옵니다.
    const contentCards = document.querySelectorAll(".content-card");

    // 1. 각 카드에 클릭 이벤트를 추가합니다.
    contentCards.forEach(function(card) {
        card.addEventListener("click", function() {
            // 클릭된 카드의 제목(h3)과 설명(p)을 가져옵니다.
            const title = card.querySelector("h3").innerHTML;
            const description = card.querySelector("p").innerHTML;
            
            // 팝업창에 가져온 내용을 채워넣습니다.
            modalTitle.innerHTML = title;
            modalContent.innerHTML = description + "<br><br><p>이곳에 더 자세한 설명을 추가할 수 있습니다.</p>";
            
            // 팝업창을 보여줍니다.
            modal.style.display = "flex";
        });
    });

    // 2. 'X' 닫기 버튼에 클릭 이벤트를 추가합니다.
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // 3. 팝업창 바깥의 회색 영역을 클릭하면 닫히도록 합니다.
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
