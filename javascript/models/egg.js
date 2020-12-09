class Egg {

    constructor(id, egg_movie, egg, image, movie_id ){
        this.id = id
        this.egg_movie = egg_movie
        this.egg = egg
        this.image = image
        this.movie_id = movie_id
        this.renderEgg()
    }

    renderEgg() {
        const eggContainer = document.getElementById('egg-container')
        const eggCard = document.createElement('div')
        eggCard.classList.add('egg-card')
        eggCard.id = this.id
        eggCard.innerHTML += this.eggHTML()
        eggContainer.appendChild(eggCard) 
    }

    eggHTML(){
        return `
        <div class="card border-primary mb-3">

            <div class="image-container">
                <img src="${this.image}" class = "egg-card"/>
            </div>
                <div class="movie-lead">
                    <h3> ${this.egg_movie} </h3>
                        <div class = "small">
                        ${this.egg} <br>
                        </div>
                </div>
        </div>
        `
    }

}