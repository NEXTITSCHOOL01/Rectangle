let rectangle = {
    topX: 20,
    topY: 5,
    botX: 50,
    botY: 30
}

function Render(rectangle) {
    let box = document.getElementById('box');
    box.style.width = (rectangle.botX - rectangle.topX) + 'px';
    box.style.height = (rectangle.botY - rectangle.topY) + 'px';
    box.style.top = rectangle.topX + 'px';
    box.style.left = rectangle.topY + 'px';
}
Render(rectangle);

function ShowInfo(rectangle) {
    let buf = '';
    for (const key in rectangle) {
        if (rectangle.hasOwnProperty(key)) {
            const value = rectangle[key];
            buf += `${key}: ${value}px\n`;
        }
    }
    alert(buf);
}