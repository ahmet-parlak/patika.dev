const posts = [
    { user: 'John Doe', content: 'Lorem ipsum dolor sit amet, consectetur' },
    { user: 'Jarvis Pepperspray', content: 'Lorem ipsum dolor sit amet' },
    { user: 'Samuel Serif', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
];

const listPosts = () => {
    console.log("\n************************** POSTS ***************************");
    posts.map((post) => {
        console.log(post.user);
        console.log(post.content);
        console.log("------------------------------------------------------------");
    });
};

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        posts.push(newPost)
        resolve(posts)
    });
};


listPosts();

(async () => {
    try {
        await addPost({ user: "Barry Tone", content: "Duis aute irure dolor in reprehenderit in" });
        listPosts();
    } catch (err) {
        console.log(err);
    }
})();







