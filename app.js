async function getAlbums() {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums")
    const data = await res.json()
    console.log("Albums", data);
    for (let el of data) {
        document.querySelector(".row1").innerHTML += `<div class="col-md-4 border border-dark m-2 "><h5 class="text-info">Album_ID</h5>
        <h4 class="text-center">${el.id}</h4></div><div class="col-md-6 border border-dark m-2"><h5 class="text-info">Album_Title</h5><h4 class="text-center">${el.title}</h4></div>`
    }
}

getAlbums()