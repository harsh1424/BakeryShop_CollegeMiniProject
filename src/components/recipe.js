// src/components/RecipePage.js
import React from 'react';
import './RecipePage.css';

const recipes = [
  {
    name: 'Chocolate Cake',
    ingredients: [
      '1 and 1/2 cups all-purpose flour',
      '1 and 1/2 cups granulated sugar',
      '3/4 cup unsweetened cocoa powder',
      '1 and 1/2 teaspoons baking powder',
      '1 and 1/2 teaspoons baking soda',
      '1 teaspoon salt',
      '2 large eggs',
      '1 cup whole milk',
      '1/2 cup vegetable oil',
      '2 teaspoons vanilla extract',
      '1 cup boiling water'
    ],
    instructions: [
      'Preheat your oven to 350°F (175°C).',
      'Grease and flour two 9-inch round baking pans.',
      'In a large bowl, stir together the flour, sugar, cocoa, baking powder, baking soda, and salt.',
      'Add the eggs, milk, oil, and vanilla, and beat for 2 minutes on medium speed. Stir in the boiling water (the batter will be thin).',
      'Pour the batter into the prepared pans.',
      'Bake for 30 to 35 minutes, or until a toothpick inserted in the center comes out clean.',
      'Cool in the pans for 10 minutes, then remove to a wire rack to cool completely.'
    ]
  },
  {
    name: 'Pineapple Cake',
    ingredients: [
      '1 cup granulated sugar',
      '1/2 cup unsalted butter, softened',
      '2 large eggs',
      '1 teaspoon vanilla extract',
      '1 and 1/2 cups all-purpose flour',
      '1 and 1/2 teaspoons baking powder',
      '1/4 teaspoon salt',
      '1/2 cup whole milk',
      '1 can (8 oz) crushed pineapple, drained'
    ],
    instructions: [
      'Preheat your oven to 350°F (175°C).',
      'Grease and flour an 8-inch square baking pan.',
      'In a large bowl, cream together the sugar and butter until light and fluffy.',
      'Beat in the eggs one at a time, then stir in the vanilla.',
      'Combine the flour, baking powder, and salt; add to the creamed mixture alternately with the milk.',
      'Fold in the crushed pineapple.',
      'Pour the batter into the prepared pan.',
      'Bake for 35 to 40 minutes, or until a toothpick inserted in the center comes out clean.',
      'Cool in the pan on a wire rack.'
    ]
  },
  {
    name: 'Black Forest Cake',
    ingredients: [
      '1 and 2/3 cups all-purpose flour',
      '1 and 1/2 teaspoons baking powder',
      '1/2 teaspoon baking soda',
      '1/2 teaspoon salt',
      '3/4 cup unsweetened cocoa powder',
      '1 and 1/2 cups granulated sugar',
      '1/2 cup unsalted butter, softened',
      '2 large eggs',
      '1 teaspoon vanilla extract',
      '1 cup whole milk',
      '1/2 cup boiling water',
      '2 cups whipped cream',
      '1 can (21 oz) cherry pie filling'
    ],
    instructions: [
      'Preheat your oven to 350°F (175°C).',
      'Grease and flour two 9-inch round baking pans.',
      'In a medium bowl, stir together the flour, baking powder, baking soda, salt, cocoa, and sugar.',
      'Add the butter, eggs, vanilla, and milk. Beat for 2 minutes on medium speed. Stir in the boiling water (the batter will be thin).',
      'Pour the batter into the prepared pans.',
      'Bake for 30 to 35 minutes, or until a toothpick inserted in the center comes out clean.',
      'Cool in the pans for 10 minutes, then remove to a wire rack to cool completely.',
      'To assemble the cake, place one layer on a serving plate. Spread with a layer of whipped cream and top with cherry pie filling. Place the second layer on top and repeat with the whipped cream and cherry pie filling.',
      'Top with additional whipped cream and cherries, if desired.'
    ]
  }
];

const RecipePage = () => {
  return (
    <div className="recipe-page">
        <br/>
        <br/>
        <br/>
        
      <h1>Our Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h2>{recipe.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              {recipe.instructions.map((instruction, idx) => (
                <li key={idx}>{instruction}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
