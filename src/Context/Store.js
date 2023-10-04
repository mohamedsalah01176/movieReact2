import { createContext} from "react";




export let MovieContext=createContext(0)

export default function MovieContextProvider(props){

    

    return <MovieContext.Provider value={{}}>
        {props.children}
    </MovieContext.Provider>
}