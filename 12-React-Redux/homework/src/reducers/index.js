const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  export default  function rootReducer(state = initialState, action) {
    
    switch(action.type){
        case "GET_MOVIES":
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
       
        case "GET_MOVIE_DETAIL":
            return {
                ...state,
                movieDetail: action.payload
            }
        case "ADD_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
            }
        case  "REMOVE_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.id)
            }
        default:
            return state
        }
    }
  
  
  
  

//  removeMovieFavorite,