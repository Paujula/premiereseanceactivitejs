const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

async function fetchAndDisplayPosts() {
    try {
      
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Erreur de réseau');
        }
        
        const posts = await response.json();
        
        const postList = document.getElementById('post-list');
        
        posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = post.title;
            postList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erreur:', error);
    }
}


fetchAndDisplayPosts();