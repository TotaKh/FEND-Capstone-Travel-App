const key='33545024-4082437d41f78b686547fcb6c'
// not woring
const pixabay = async (city ,myURL) => {
    const res = await fetch(`http://pixabay.com/api/?key=${key}&q=${city}&image_type=photo`)
        .then(response => response.json());

    let data = {
        image: res.hits[0].webformatURL
    }

    await fetch(myURL + '/pixabay', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export{pixabay}