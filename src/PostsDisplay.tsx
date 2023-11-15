import { useState } from 'react';

type Props = {}

export default function PostsDisplay({}: Props) {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Happy Wednesday', body: 'My dudes!'},
        {id: 2, title: 'React', body: 'I love react!'},
        {id: 3, title: 'November', body: 'is one of my favorite months!'},
        {id: 4, title: 'Hello', body: 'This is another body!'},
    ])
    console.log(posts);

    const sortPosts = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let copiedPosts = [...posts];
        if (e.target.value === 'asc'){
            copiedPosts.sort( (a, b) => a.id - b.id );
        } else {
            copiedPosts.sort( (a, b) => b.id - a.id);
        }
        setPosts(copiedPosts);
    }

    return (
        <div>
            <h1>Post Display</h1>
            <select onChange={sortPosts}>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>
            {posts.map(p => (
                <div key={p.id}>
                    <h2>{p.title}</h2>
                    <p>{p.body}</p>
                </div>
            ))}
        </div>
    )
}