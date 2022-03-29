document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', event => {
        //handle click
        const collection = document.getElementsByClassName("grid-item");

        for(let i = 0; i < collection.length - 1; i++)
        {
            collection[i].style.backgroundColor = 'hsl(183, 100%, 15%)';
            collection[i].style.color = 'white';
        }

        collection[collection.length - 1].style.backgroundColor = 'hsl(185, 41%, 84%)';
        collection[collection.length - 1].style.color = 'hsl(183, 100%, 15%)';

        item.style.backgroundColor = 'hsl(172, 67%, 45%)';
        item.style.color = 'hsl(183, 100%, 15%)';
    })
})

const btn = document.getElementById('button')
btn.addEventListener('click', event => {
        //handle click
        btn.style.backgroundColor = 'hsl(186, 14%, 43%)';
        btn.style.color = 'white';
        location.reload()
})