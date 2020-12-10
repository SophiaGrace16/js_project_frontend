class Egg {

    constructor(id, egg_movie, egg, image, movie_id, found_count){
        this.id = id
        this.egg_movie = egg_movie
        this.egg = egg
        this.image = image
        this.movie_id = movie_id
        this.found_count = found_count
        this.renderEgg()
    }

    renderEgg() {
        const eggContainer = document.getElementById('egg-container')
        const eggCard = document.createElement('div')
        let counterButton = document.getElementById('btn')
        eggCard.classList.add('egg-card')
        eggCard.dataset.id = this.id
        eggCard.id = this.id
        eggCard.innerHTML += this.eggHTML()
        eggContainer.appendChild(eggCard) 
        eggCard.addEventListener('click', e => {
            if (e.target.className.includes("counter-button")) this.clickCounter(e)
        })
    }
    
    clickCounter(e) {
        let counter = this
        let count = document.getElementById(`count-${this.id}`)
        this.found_count ++;
        fetch(`http://localhost:3000/movies/${this.movie_id}/eggs/${this.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(
                {
                found_count: counter.found_count
                }
            )
        })
        .then(response => response.json())
        .then(json => {
            count.innerText = `${json.found_count}`;
        })
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

                <button class="counter-button btn btn-primary btn-md btn-block">
                    Have you found this Easter Egg yet?<br>
                    So far it has been found...<br>
                    <div id="count-${this.id}">${this.found_count}</div>
                </button>
               
        </div>
        `
    }

}