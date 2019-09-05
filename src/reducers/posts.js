const initialState = {
  posts: []
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        posts: [...state.posts, ...action.posts]
      };

    case "GET_SEARCHED_POSTS":
      console.log(`text: ${action.text}`);

      let posts = state.posts;
     let toSearch = action.text;
 
    let results=posts.filter(post=>{
        
        console.log(Object.values(post));
        console.log(toSearch);
        console.log(Object.values(post).filter(element=>JSON.stringify(element).includes(toSearch)))
       let outcome=Object.values(post).filter(element=>JSON.stringify(element).includes(toSearch))
        if(outcome.length!==0) {
            return post;
        }
    })
        
     
      console.log(results);
      return {
        posts: results
      };
    default:
      return state;
  }
};

export default posts;
