function fetchData () {
    fetch('https://api.y-media.io/testjson/task')
        .then(response => response.json())
        .then(data => {
            const html = data
                .map(item => {
                    return `
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title text-center">${item.title}</h4>
                                    <h5 class="text-center">${item.sku}</h3>
                                </div>
                                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                                <div class="card-body">
                                    <div class="text-center">Product options:</div>
                                    <ul>
                                        <li>Metal type: ${item.options[0]['metal_type']}</li>
                                        <li>Metal color: ${item.options[0]['metal_color']}</li>
                                        <li>Stone shape: ${item.options[0]['stone_shape']}</li>
                                        <li>Gemstone color: ${item.options[0]['gemstone_color']}</li>
                                    </ul>
                                    <div class="text-center">
                                        <strong>${parseFloat(item.price).toFixed(2)} ${item.currency}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })
                .join("");
            document.querySelector('#app').insertAdjacentHTML('afterbegin', html)
        })
        .catch(error => {
            console.log(error)
        })
}

fetchData();
