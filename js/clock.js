const clock = document.querySelector("h2#clock");
const today = document.querySelector("h3#today")

function getClock() {
    const date = new Date();
    const weekString = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    ];
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const dayy = date.getDate();
	const week = date.getDay();
    clock.innerText = `${hours}:${minutes}:${seconds}`
    today.innerText = `${year}년 ${month}월 ${dayy}일 ${weekString[week]}`
}

getClock();
setInterval(getClock, 1000);