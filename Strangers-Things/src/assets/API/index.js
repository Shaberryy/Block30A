// const COHORT = "2301-ftb-et-web-am";
// const baseURL = `https://strangers-things.herokuapp.com/api/${COHORT}`;
//https://strangers-things.herokuapp.com/api/2301-ftb-et-web-am/posts
const baseURL = `https://strangers-things.herokuapp.com/api/2301-ftb-et-web-am`

export async function fetchAllPosts() {
  try {
    const response = await fetch(`${baseURL}/posts`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
} 
//    console.log(fetchAllPosts);

export async function fetchSinglePost(id) {
    try{
        const response = await fetch(`${baseURL}/posts/${id}`)
    } catch (error){
        console.error(error);
    }
}

export async function createPost(location, title,messages,author,price) {
    try{
        
    }catch (error){
        console.error(error);
    }
}