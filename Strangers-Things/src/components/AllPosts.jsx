import { useEffect, useState } from "react"
import React from "react";
import { fetchAllPosts } from "../assets/API/index.js";

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
        <>
        {/* search bar */}
        <h4>Looking for something specific?</h4>
        <div>
            <label>
                Search:{" "}
            </label>
            <input
                type="text"
                placeholder="search"
                onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
            />
        </div>
        </>
    )
};