class Egg {

    constructor(id, egg_movie, egg, image, movie_id, found_count, approved){
        this.id = id
        this.egg_movie = egg_movie
        this.egg = egg
        this.image = image
        this.movie_id = movie_id
        this.found_count = found_count
        this.approved = approved
        this.renderEgg()
        this.renderForm()
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

    renderForm() {
        const eggForm = document.getElementById('egg-form')
        const neweggCard = document.createElement('div')
        neweggCard.classList.add('egg-form')
        neweggCard.dataset.movie_id = this.id
        neweggCard.movie_id = this.id
        neweggCard.innerHTML += this.eggForm()
        eggForm.appendChild(neweggCard) 
        neweggCard.addEventListener('click', e => {
            if (e.target.className.includes("submit")) this.addEgg(e)
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

    eggForm(){
        return `
        <form id="egg-form">
            <input type="text" name="egg_movie" placeholder="name"/>
            <br/>
            <input type="text" name="egg" placeholder="What is the egg?"/>
            <br/>
            <input type="text" name="image" placeholder="Image Address Link to the Image of the Egg"/>
            <br/>
            <input type="text" name="movie_id" placeholder="?"/>
            <br/>
            <input type="text" name="found_count" placeholder="?"/>
            <br/>
            <input type="text" name="approved" placeholder="?"/>
            <br/>
            <input type="submit" value="Submit"/>

        </form>
        `
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
        fetch(`http://localhost:3000/movies/${this.movie_id}/eggs/${this.id}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(newEgg => {
            const {id, egg_movie, egg, image, movie_id, found_count, approved} = newEgg
            new Egg(id, egg_movie, egg, image, movie_id, found_count, approved)
            document.getElementById('egg-form').reset()
        })
      }

}