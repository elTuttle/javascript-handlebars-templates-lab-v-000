function createRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;

  var ingredients = document.getElementsByName("ingredients").elements;

  var ingredientHash = {};

  ingredients.forEach( function(element){
    debugger;
  })

  var recipe = {
    name: name,
    description: description
  }

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var rTemplate = recipeTemplate(recipe);

  document.getElementById("main").innerHTML += rTemplate;
}

function init() {
  //put any page initialization/handlebars initialization here
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var rfTemplate = recipeFormTemplate();
  document.getElementById("main").innerHTML += rfTemplate;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
