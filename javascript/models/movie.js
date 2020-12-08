class Movie {
    constructor(id, movie_name, date_released, studio_name, image, imdb, movie_link){
      this.id = id
      this.movie_name = movie_name
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
            this.showMovie(e)  

        })
      }

    movieHTML(){
        return `
        <a href="/movies/${this.id}">
        <img src="${this.image}" width="100" />
        </a>
        `
    }

    eggHTML(){
        return `
        <img src="${this.image}" width="100" />
        <p>
        ${this.movie_name} <br>
        ${this.date_released} <br>
        ${this.studio_name} <br>
        ${this.imdb} <br>
        ${this.movie_link} <br>
        Or watch on Disney+!
        </p>` 
    }

    showMovie(e){
        debugger
        const cardContainer = document.getElementById('card-container') 
        const card = document.createElement("div")
        card.id = this.id
        card.innerHTML += this.eggHTML()
        cardContainer.appendChild(card)
        const el = document.getElementById('movie-container');
        el.remove();
        // return `
        // <img src="${this.image}" width="100" />`
    }
       
  
}

