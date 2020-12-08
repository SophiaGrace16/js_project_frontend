# Pixar Easter Egg Hunt
* This file contains the <b>Front End code</b> for this project
* To see the <b>Back End Code</b> click here >> (https://github.com/SophiaGrace16/js_project_backend.git)


## Back End Routes

Prefix Verb      |  URI Pattern            |   Controller#Action
-----------------|-------------------------|-----------------------
eggs GET         |  /eggs(.:format)        |   eggs#index
-----------------|-------------------------|-----------------------
POST             |  /eggs(.:format)        |  eggs#create
-----------------|-------------------------|-----------------------
egg GET          |  /eggs/:                |   eggs#show
-----------------|-------------------------|-----------------------
PATCH            |  /eggs/:id(.:format)    |   eggs#update
-----------------|-------------------------|-----------------------
PUT              |  /eggs/:id(.:format)    |   eggs#update
-----------------|-------------------------|-----------------------
DELETE           |  /eggs/:id(.:format)    |   eggs#destroy
-----------------|-------------------------|-----------------------
movies GET       |  /movies(.:format)      |   movies#index
-----------------|-------------------------|-----------------------
POST             |  /movies(.:format)      |   movies#create
-----------------|-------------------------|-----------------------
movie GET        |  /movies/:id(.:format)  |   movies#show
-----------------|-------------------------|-----------------------
PATCH            |  /movies/:id(.:format)  |   movies#update
-----------------|-------------------------|-----------------------
PUT              |  /movies/:id(.:format)  |   movies#update
-----------------|-------------------------|-----------------------
DELETE           |  /movies/:id(.:format)  |   movies#destroy

