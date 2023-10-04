import {AllMovies} from "../types/AllMovies"
const intialValue={movies:[],pagecount:0}

export const moviesRedux=(state=intialValue,action)=>{
    switch(action.type){
        case AllMovies:
            return{movies:action.data,pagecount:action.pages}
        default:
            return state
    }
}