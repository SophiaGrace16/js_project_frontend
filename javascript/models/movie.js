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
            this.createEggs(e)
            this.eggForm(e)
        })
      }

    listHTML(){
        return `
        <div class ="image-list">
            <a href="/movies/${this.id}">
                <img src="${this.image}" class="movie-image"  />
            </a>
        </div>
        
        `
    }

    showMovie(e){
        const movieContainer = document.getElementById('movie-container') 
        const movieCard = document.createElement("div")
        movieCard.dataset.id = this.id
        movieCard.id = this.id
        movieCard.innerHTML += this.movieHTML()
        movieContainer.appendChild(movieCard)
        const el = document.getElementById('list-container');
        el.remove();
    }

    movieHTML(){
        return `
        <div class="card border-primary mb-3">

            <div class="image-container">
                <img src="${this.image}" class = "movie-card"/>
            </div>
            <div class="movie-lead">
                <h3> ${this.movie_name} </h3>
                    <div class = "small">
                    ${this.date_released} <br>
                    ${this.studio_name} <br>
                    <a href=${this.imdb} target="_blank">${this.movie_name} IMDB</a>
                    <br>
                    <a href=${this.movie_link} target="_blank">Click here to rent the movie on Amazon!</a>
                    <br>
                    Or watch on <a href="https://www.disneyplus.com/home" target="_blank">Disney+</a>!
                    </div>
            </div>
        </div>
        `
    }

    eggForm(){
        return `
        <form id="egg-form">
        <input type="text" name="movie-name" placeholder="name"/>
        <br/>
        <input type="text" name="egg" placeholder="What is the egg?"/>
        <br/>
        <input type="text" name="image" placeholder="Image Address Link to the Image of the Egg"/>
        <br/>
        <input type="text" name="weight" placeholder="weight"/>
        <br/>
        <input type="text" name="img" placeholder="img url"/>
        <br/>
        <input type="text" name="cuteness" placeholder="how cute is your piglet on a 1-10 scale?"/>
        <br/>
        <input type="submit" value="Submit"/>
        </form>
        `
        
    }

    createEggs(e) {
        //fetch
        //create our associated eggs
        fetch(`http://localhost:3000/movies/${this.id}/eggs`)
        .then(resp => resp.json())
        .then(eggs => {
            eggs.forEach(newEgg => {
                const {id, egg_movie, egg, image, movie_id, found_count, approved} = newEgg
                new Egg(id, egg_movie, egg, image, movie_id, found_count, approved)
            })
        })
    }
}
