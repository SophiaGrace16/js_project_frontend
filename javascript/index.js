document.addEventListener("DOMContentLoaded",function(){
    // call our new function in there 
    API.addMovies()

    document.getElementById('egg-form').addEventListener('submit', API.addHog)
})
