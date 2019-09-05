const initialState={
    postsDetails:[],
    comments:[],
    commentsToShow:10
}
const postsDetails=(state=initialState,action)=>{
    switch (action.type) {
        case 'SHOW_POST_DETAILS':
                return {...state,
                    postsDetails:[action.posts],
                    comments:[action.comments]
                }
                case 'Load_More_Comments':
                    return {...state,
                        commentsToShow:state.commentsToShow+action.noOfComments
                        
                    }
        default:
            return state;
    }
}

export default postsDetails;