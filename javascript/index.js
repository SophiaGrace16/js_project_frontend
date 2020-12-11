document.addEventListener("DOMContentLoaded",function(){
    // call our new function in there 
    API.addMovies()

    document.getElementById('form').addEventListener('submit', API.addEgg)
})
