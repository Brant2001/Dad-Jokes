const Joke = (jokeObject) => {
    return `
        <div class="jokeList__joke">
            <section class="joke__id"><h3>${jokeObject.id}</h3></section>
            <section class="joke__?"><h3>${jokeObject.question}</h3></section>
            <section class="joke__answer"><h4>${jokeObject.answer}</h4></section>
        </div>
    `
} 

export default Joke