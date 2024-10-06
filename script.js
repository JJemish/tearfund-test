
function getDetails(mainheading, headingdetail, color) {
    const divBottom = document.getElementById('div-bottom');
    divBottom.innerHTML = `<h4>${mainheading}</h4><p>${headingdetail}</p>`;
    divBottom.style.backgroundColor = color;
}

window.onload = function() {
    getDetails('78p funds life-changing projects', 'That includes ensuring earthquake survivors like Saleh in Syria have food and shelter and empowering the Lihukwa villagers in Zambia.', '#6F3F87');
};