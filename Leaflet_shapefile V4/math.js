function getSlope(x1, y1, x2, y2){
    x3 = x2 - x1;
    y3 = y2 - y1;
    slope = y3 / x3;
    lblInfo.innerHTML = ("Slope = " + slope);
    return slope;
}

function getLength (x1, y1, x2, y2) {
    //d = sqrt(sq(x2-x1) + sq(y2-y1))
    Xs = Math.pow(x2-x1, 2);
    Ys = Math.pow(y2-y1, 2);
    d = Math.sqrt(Math.abs(Xs + Ys));
    return d;
}

function getLengthOfBase(lineLength, y2, y1) {
    //sq(x) = sq(y) - sq(lL)
    y3 = y2 - y1;
    lengthOfBase = Math.sqrt(Math.abs((y3 * y3) - (lineLength * lineLength)));
    return lengthOfBase;
}

function getYIntercept(x, y, slope) {
    //y = m(x) + b
    //y = slope(x) + yInt
    slopeX = slope * x;
    yInt = y - slopeX;
    lblInfo.innerHTML += ("<br>yInt = " + yInt);
    return yInt;
}

function getPointByFunction(slope, x, yInt) {
    mx = slope * x;
    y = mx + yInt;
    point = [y, x];
    return point;
}

function createMoveLine(curPos, newPos) {
    lineLatlng = [curPos, newPos];
    if (moveline) {
        moveline.remove();
    }
    moveline = L.polyline(lineLatlng, {color: "#336699", dashArray: "5", opacity: 0.75}).addTo(map);
    //L.circle(lineLatlng[0], {radius:50, color:"red"}).addTo(map).bindTooltip("Coords: " + lineLatlng[0]);
    //L.circle(lineLatlng[1], {radius:50, color:"blue"}).addTo(map).bindTooltip("Coords: " + lineLatlng[1]);
}