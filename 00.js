let rectangle = {
    topX: 20,
    topY: 5,
    botX: 50,
    botY: 30
}

function Render(rectangle) {
    let box = document.getElementById('box');
    box.style.width = Width(rectangle) + 'px';
    box.style.height = Height(rectangle) + 'px';
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

function ShowWidth(rectangle) {
    let width = Width(rectangle);
    alert(width);
}

function Width(rectangle) {
    let width = rectangle.botX - rectangle.topX;
    return width < 0 ? width * -1 : width;
}

function ShowHeight(rectangle) {
    let height = Height(rectangle);
    alert(height);
}

function Height(rectangle) {
    let height = rectangle.botY - rectangle.topY;
    return height < 0 ? height * -1 : height;
}