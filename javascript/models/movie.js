class Movie {
    constructor(id, movie_name, date_released, studio_name, image, imdb, movie_link){
      this.id = id
      this.movie_name = movie_name
      this.date_released = date_released
      this.studio_name = studio_name
      this.image = image
      this.imdb = imdb
      this.movie_link = movie_link
      this.renderList()
    }

    renderList(){
        const listContainer = document.getElementById('list-container')
        const listCard = document.createElement('div')
        listCard.classList.add('list-card')
        listCard.id = this.id
        listCard.dataset.id = this.id
        listCard.innerHTML += this.listHTML()
        listContainer.appendChild(listCard)
        listCard.addEventListener('click', e => {
            e.preventDefault() 
            this.showMovie(e)
        })
      }

    listHTML(){
        return `
        <div class = "row">
            <div class = "col-lg-12">
                <a class = "movie-link" href="/movies/${this.id}">
                <img src="${this.image}" width="30%" />
                </a>
            </div>
        </div>
        `
    }

    showMovie(e){
        debugger
        const movieContainer = document.getElementById('movie-container') 
        const movieCard = document.createElement("div")
        movieCard.id = this.id
        movieCard.innerHTML += this.eggHTML()
        movieContainer.appendChild(movieCard)
        const el = document.getElementById('list-container');
        el.remove();
        // return `
        // <img src="${this.image}" width="100" />`
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
        </p>
        `
    }

    
       
  
}

