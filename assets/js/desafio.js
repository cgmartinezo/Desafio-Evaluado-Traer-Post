const postData = document.querySelector("#post-data")

const getPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        mostrarResultados(data)

    } catch (error) {
        console.log("Error al leer la base de datos: " + error);
    }

}

const mostrarResultados = data => {
    postData.innerHTML = ""
    data.forEach(item => {
        postData.innerHTML += `
        <ul>
        <li><strong>${item.title}</strong></li>
        <p>${item.body}</p>
         </ul>

      `;
    });
};




