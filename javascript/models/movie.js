class Movie {
    constructor(id, movie_name, date_released, studio_name, image, imdb, movie_link){
      this.id = id
      this.name = movie_name
      this.date_released = date_released
      this.studio_name = studio_name
      this.image = image
      this.imdb = imdb
      this.movie_link = movie_link
      this.renderMovie()
    }

    renderMovie(){
        const movieContainer = document.getElementById('movie-container')
        const movieCard = document.createElement('div')
        movieCard.classList.add('movie-card')
        movieCard.id = this.id
        movieCard.innerHTML += this.movieHTML()
        movieContainer.appendChild(movieCard)
        movieCard.addEventListener('click', e => {
            e.preventDefault()
            if (e.target.className.includes('header')) this.showMovie(e)
        })
      }

    movieHTML(){
        return `
        <a href="/movies/${this.id}">
        <img src="${this.image}" width="100" />
        </a>
        `
    }

    showMovie(e){

    }

    showHog(e){
        debugger
      }
  
}

