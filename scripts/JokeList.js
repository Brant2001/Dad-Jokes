import { useJoke } from "./JokeDataProvider.js";
import Joke from "./Joke.js";


const contentTarget = document.querySelector(".jokeList")

const JokeList = () => {
    
    const jokeObjectsArray = useJoke()

    for (const jokeObject of jokeObjectsArray) {
        contentTarget.innerHTML += Joke(jokeObject)
    }
}

export default JokeList
