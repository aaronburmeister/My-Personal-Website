const $blog = document.querySelector('#blog')

function createPost(post) {
    const $div = document.createElement('div')
    $div.className = "post"

    $div.innerHTML = `
    <h3 class="post-title">${post.title}</h3>
    <time>${post.date}</time>
    <p>${post.content}</p>
    `

    $blog.appendChild($div)
}

const examplePost = {
    title: "Example Title",
    date: "Example Date",
    content: "This will contain the body of my posts. Here is where I'll mention commentary on code, life lessons, stories, morals, etc."
}

createPost(examplePost)