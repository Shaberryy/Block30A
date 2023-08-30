import { useEffect, useState } from "react"

export default function AllPosts(){
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    
    useEffect(()=> {
        async function displayAllPosts(){
            const APIResponse = await fetchAllPosts();
            if(APIResponse.success) {
                setPosts(APIResponse.data.posts);
            } else {
                setError(APIResponse.errror.message);
            }
        }
        displayAllPosts();
    }, []);
    const postsToDisplay = searchParam ? posts.filter((posts) => posts.title.toLowerCase().includes(searchParam)
    )
    : posts;
    return(
        <h1>Looking for something specific?</h1>

    )
};