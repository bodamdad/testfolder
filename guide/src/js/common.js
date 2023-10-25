
const btnCopy01 = document.querySelector('.btnCopy01');
const copy01 = document.querySelector('.copy01');
const copyPop = document.querySelector('.copyPop');

if (btnCopy01 && copy01 && copyPop) {
    btnCopy01.addEventListener('click', function() {

    // 텍스트를 복사합니다
    const textToCopy = document.querySelector('.copy01').innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // .copyPop에 .active 클래스를 추가합니다
        const copyPop = document.querySelector('.copyPop');
        copyPop.classList.add('active');
        
        // 1초 후에 .copyPop에서 .active 클래스를 제거합니다
        setTimeout(() => {
          copyPop.classList.remove('active');
        }, 1000);
      })
      .catch(error => console.error('복사 실패!', error));
    });
} else {
  console.error('필요한 요소를 찾지 못했습니다!');
}

  