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