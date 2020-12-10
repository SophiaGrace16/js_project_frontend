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
        eggCard.classList.add('egg-card')
        eggCard.id = this.id
        eggCard.innerHTML += this.eggHTML()
        eggContainer.appendChild(eggCard) 
        eggCard.addEventListener('click', e => {
            if (e.target.className.includes("counter-button")) this.clickCounter(e)
        })
    }
    
    clickCounter() {
        var button = document.getElementById("counter-button"),
        count = this.found_count;
        button.onclick = function() {
        count += 1;
        button.innerHTML = count;
        };
    }
    
    eggHTML(){
        debugger
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
                ${this.found_count} times!
                 </button>
        </div>
        `
    }

}