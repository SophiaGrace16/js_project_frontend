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
        let counterButton = document.getElementById('counter-button')
        eggCard.classList.add('egg-card')
        eggCard.id = this.id
        eggCard.innerHTML += this.eggHTML()
        eggContainer.appendChild(eggCard) 
        eggCard.addEventListener('click', e => {
            if (e.target.className.includes('counter-button')) this.clickCounter(e)
            debugger
        })
    }
    
    clickCounter(e) {
        e.target.found_count ++;
        fetch(`http://localhost:3000/movies/${this.movie_id}/eggs/${this.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(
                {
                "found_count": counterButton.found_count
                }
            )
        })
        .then(response => response.json())
        .then(json => {
            counterButton.innerText = `${json.found_count}`;
        })
        debugger
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

                <button id="counter-button" class="btn btn-primary btn-md btn-block">
                <b>Have you found this Easter Egg yet?</b> <br>
                So far it has been found...<br>
                ${this.found_count}
                </button>
        </div>
        `
    }

}