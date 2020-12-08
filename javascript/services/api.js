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
}