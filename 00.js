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
// Функция принимает объект-прямоугольник и возвращает
// его площадь.

function ShowArea(rectangle) {
    alert(Area(rectangle));

}

function Area(rectangle) {
    let area = Width(rectangle) * Height(rectangle);
    return area;
}

function ShowPerimetr(rectangle) {
    alert(Perimetr(rectangle));

}

function Perimetr(rectangle) {
    let perimetr = (Width(rectangle) + Height(rectangle)) * 2;
    return perimetr;
}

function ChangeWidth(rectangle, width = +prompt('Enter + width value')) {
    rectangle.botX += width;
    Render(rectangle);
}


function ChangeWidthHeight(rectangle, width = +prompt('Enter + width value'), height = +prompt('Enter + height value')) {
    rectangle.botX += width;
    rectangle.botY += height;
    Render(rectangle);
}

function MoveX(rectangle, move = +prompt('Enter + move value')) {
    rectangle.topX += move;
    rectangle.botX += move;
    Render(rectangle);
}

function MoveY(rectangle, move = +prompt('Enter + move value')) {
    rectangle.topY += move;
    rectangle.botY += move;
    Render(rectangle);
}

function Move(rectangle, moveX = +prompt('Enter + move x value'), moveY = +prompt('Enter + move y value')) {
    rectangle.topY += moveY;
    rectangle.botY += moveY;
    rectangle.topX += moveX;
    rectangle.botX += moveX;
    Render(rectangle);
}