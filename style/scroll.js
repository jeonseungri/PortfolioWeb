let lastScrollTop = 0;
const navbar = document.getElementById('header');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // 스크롤 다운 -> 상단바 숨기기
    navbar.style.top = '-80px'; // 상단바 높이만큼 숨기기
  } else {
    // 스크롤 업 -> 상단바 보이기
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop;
});
