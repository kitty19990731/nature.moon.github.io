document.addEventListener('DOMContentLoaded', () => {
    const lunarPhases = [
        '新月', '峨眉月', '上弦月', '盈凸月', '滿月', '虧凸月', '下弦月', '殘月'
    ];

    const moonImages = [
        'new_moon.png', 'waxing_crescent.png', 'first_quarter.png',
        'waxing_gibbous.png', 'full_moon.png', 'waning_gibbous.png',
        'last_quarter.png', 'waning_crescent.png'
    ];

    function getLunarDay(day) {
        return lunarPhases[day % lunarPhases.length];
    }

    function getMoonImage(day) {
        return `images/${moonImages[day % moonImages.length]}`;
    }

    function createCalendar(year, month) {
        const calendar = document.getElementById('calendar');
        calendar.innerHTML = '';

        const date = new Date(year, month, 1);
        const firstDay = date.getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day');
            calendar.appendChild(emptyDay);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.textContent = i;
            dayDiv.addEventListener('click', () => showLunarInfo(year, month, i));
            calendar.appendChild(dayDiv);
        }
    }

    function showLunarInfo(year, month, day) {
        const dateStr = `${year}年${month + 1}月${day}日`;
        const lunarDay = getLunarDay(day);
        const moonImage = getMoonImage(day);

        document.getElementById('selected-date').textContent = dateStr;
        document.getElementById('lunar-day').textContent = `農曆：${lunarDay}`;
        document.getElementById('moon-phase').src = moonImage;
        document.getElementById('moon-phase').alt = lunarDay;
    }

    createCalendar(2024, 0);
});
