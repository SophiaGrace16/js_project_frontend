class API {
    static addMovies(){
        fetch("http://localhost:3000/movies")
            .then(resp => resp.json())
            .then(movies => {
                movies.forEach(movie => {
                    const {id, movie_name, date_released, studio_name, image, imdb, movie_link} = movie
                    new Movie(id, movie_name, date_released, studio_name, image, imdb, movie_link)
            })
        })
    }
    static addEggs(){
        fetch("http://localhost:3000/eggs")
            .then(resp => resp.json())
            .then(eggs => {
                eggs.forEach(movie => {
                    const {id, egg_name, egg, image, movie_id} = egg
                    new Egg(id, egg_name, egg, image, movie_id)
            })
        })
    }
}