const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33FF', '#33FFFF']; // 색깔 배열
const numberDisplay = document.getElementById("numberDisplay");
let intervalId;

function startSequence() {
    const interval = document.getElementById('interval').value * 1000; // 간격 (밀리초 단위)
    const times = document.getElementById('times').value; // 반복 횟수
    let count = 0;

    // 시작 버튼 클릭 시 기존 간격 반복 정지를 위한 초기화
    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
        if (count >= times) {
            clearInterval(intervalId); // 반복 횟수만큼 진행 후 정지
            return;
        }

        // 무작위 색상과 숫자 생성
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        // 색상 적용
        document.getElementById('colorBox').style.backgroundColor = randomColor;
        numberDisplay.textContent = randomNumber;

        count++;
    }, interval);
}
