const createDot = (x, y) => {
    var elem = document.querySelector('.point');
    var clone = elem.cloneNode(true);
    elem.after(clone);

    clone.style.top = y-10 + "px";
    clone.style.left = x-10 + "px";
}


const postDot = async (x, y) => {
    const dot = {
        x: x,
        y: y
    }

    await fetch('/postDot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dot)
    })
    .then(response => response.json())
    .then(data => console.log('Success: ', data))
    .catch(error => console.error(error))

}


const getAllDots = async () => {

    await fetch('/getAllDots', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success: ', data);
        data.map(dot => {
            createDot(dot.x, dot.y);
        })
    })
    .catch(error => console.error(error))

}
