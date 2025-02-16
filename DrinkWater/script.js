const smallCups = document.querySelectorAll('.cup-small');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');
const liters = document.getElementById('liters');

const totalWater = 2000; // Total en ml (2L)
const cupSize = 250; // Cada vaso representa 250ml

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index));
});

function highlightCups(index) {
    if (smallCups[index].classList.contains('full') && 
        !smallCups[index].nextElementSibling?.classList.contains('full')) {
        index--; // Permite deseleccionar un vaso
    }

    smallCups.forEach((cup, i) => {
        if (i <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.height = '0';
        percentage.innerText = '';
    } else {
        percentage.style.height = `${(fullCups / totalCups) * 100}%`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.height = '0';
        liters.innerText = '';
    } else {
        remained.style.height = `${100 - (fullCups / totalCups) * 100}%`;
        liters.innerText = `${(totalWater - (fullCups * cupSize)) / 1000}L`;
    }
}
