1. spin up a brand new project using express generator called homework-practice-mongodb(express name-of-project --view=ejs) `COMPLETE`
2. Delete public and views folder `COMPLETE`
3. npm uninstall ejs `COMPLETE`
4. also delete the lines that tell the application to use the view engine, view and the static file (reference today's project app.js) `COMPLETE`
5. npm i mongoose `COMPLETE`
6. create a new folder called recipe in the routes folder. `COMPLETE`
7. inside the recipe folder create a file call recipe.js and make sure you require it in app.js `COMPLETE`
8. inside the recipe folder create controller and model folder `COMPLETE`
9. in the controller folder create a file called recipeController `COMPLETE` *
10. in the model folder create a filed called Recipe.js `COMPLETE`
11. in Recipe.js create a model with the key RecipeName. `COMPLETE`
12. in the recipeController bring in the Recipe model and create a function called getAllRecipe.`COMPLETE`
13. use the getAllRecipe function in recipeRouter.js the function show get all the recipes.`COMPLETE`
14. in recipeController create a function called createRecipe the function should create a recipe and make sure it is saved to the mongodb. `COMPLETE`
15. submit github url link in essay. Don't forget to .gitignore node_modules.

`STEP 1` - TYPE THIS CODE IN TERMINAL `express name-of-project --view ejs` HIT ENTER.

`STEP 2` - TYPE IN TERMINAL `npm i` HIT ENTER 

`STEP 3` - IN APP.JS CHANGE VAR TO CONST.

`STEP 4` - DELETE `PUBLIC FOLDER`.

`STEP 5` - DELETE `VIEWS FOLDER`.

`STEP 6` - IN TERMINAL `npm uninstall ejs`.

`STEP 7` - IN TERMINAL INSTALL MONGOOSE `npm i mongoose`.

`STEP 8` - CREATE `RECIPE FOLDER` IN `ROUTES FOLDER`.

`STEP 9` - INSIDE THE `RECIPE FOLDER` CREATE A FILE CALLED `RECIPE.JS`.

`STEP 10` - MAKE SURE TO REQUIRE IT IN.
```JAVASCRIPT
const recipe = require("./routes/recipe");
app.use('/api/recipe', recipe);
```
`STEP 11` - WIRE UP RECIPE.JS
