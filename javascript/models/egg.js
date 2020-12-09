class Egg {

    constructor(id, egg_movie, egg, movie_id ){
        this.id = id
        this.egg_movie = egg_movie
        this.egg = egg
        this.movie_id = movie_id
        this.renderEgg()
    }

    renderEgg() {
        const eggContainer = document.getElementById('egg-container')
        const eggCard = document.createElement('div')
        eggCard.classList.add('egg-card')
        eggCard.id = this.id
        eggCard.innerHTML += this.movieHTML()
        eggContainer.appendChild(movieCard)
        eggCard.addEventListener('click', e => {
            e.preventDefault()
            this.showMovie(e)  
        })
    }

}