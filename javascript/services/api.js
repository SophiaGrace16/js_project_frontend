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

    static addEgg(e){
        e.preventDefault()
        // capture our form data
        let data = {
            'egg_movie': e.target.egg_movie.value,
            'egg': e.target.egg.value,
            'image': e.target.image.value,
            'found_count': e.target.found_count.value,
            'movie_id': e.target.movie_id.value,
            'approved': e.target.approved.false,
            
        };
        // write our fetch and send it to our back end
        fetch('http://localhost:3000/hogs', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // grab our fetch response
        .then(resp => resp.json())
        .then(newEgg => {
            const {id, egg_movie, egg, image, movie_id, found_count, approved} = newEgg
            new Egg(id, egg_movie, egg, image, movie_id, found_count, approved)
            document.getElementById('egg-form').reset()
        })
        // create a new Hog object
        // clear our form
      }
}

// this is a static fetch (class level) request that allows us to call things from our backend. 
//It will call to the index and it is ultimately what allows us to load in all of our shows. 
//  const {id, movie_name, date_released, studio_name, image, imdb, movie_link, eggs {id, egg_name, egg, image, movie_id}} = movie
// new Movie(id, movie_name, date_released, studio_name, image, imdb, movie_link, eggs {id, egg_name, egg, image, movie_id})