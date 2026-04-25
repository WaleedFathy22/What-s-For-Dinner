var dishes = [
  // photo-1: Garlic Butter Shrimp
  {
    dishName: "Garlic Butter Shrimp",
    level: "Easy",
    nation: "Seafood",
    dishImage: "images/photo-1.avif",
    description: "Juicy shrimp sautéed in rich garlic butter sauce",
    rate: 4.8,
    reviews: 312,
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    hasNote: false,
    ingredients: [
      "400g large shrimp, peeled and deveined",
      "4 tbsp unsalted butter",
      "5 cloves garlic, minced",
      "2 tbsp olive oil",
      "Juice of 1 lemon",
      "1/4 tsp red pepper flakes",
      "Salt and black pepper to taste",
      "Fresh parsley, chopped for garnish"
    ],
    instructions: [
      "Pat shrimp dry with paper towels and season with salt and pepper.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Add shrimp in a single layer and cook for 1–2 minutes per side until pink. Remove from pan.",
      "Reduce heat to medium. Add butter and garlic, cook for 1 minute until fragrant.",
      "Add red pepper flakes and lemon juice, stir well.",
      "Return shrimp to the pan and toss to coat in the sauce.",
      "Garnish with fresh parsley and serve immediately with crusty bread or pasta."
    ],
    nutrition: {
      calories: 320,
      protin: 34,
      carbo: 4,
      fat: 18,
      fiber: 0,
      sodium: 480,
    },
    tips: [
      "Pat shrimp completely dry before cooking for a better sear.",
      "Don't overcook shrimp — they're done as soon as they turn pink and curl into a C shape.",
      "Use fresh garlic, not jarred, for the best flavor in the sauce.",
      "Add a splash of white wine after the garlic for extra depth.",
      "Serve immediately — shrimp get rubbery if they sit too long.",
      "Use large or jumbo shrimp so they don't overcook while the sauce develops."
    ],
  },

  // photo-2: Spaghetti Carbonara
	{
    dishName: "Spaghetti Carbonara",
    level: "Easy",
    nation: "Italian",
    dishImage: "../images/photo-2.avif",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    rate: 4.8,
    reviews: 234,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    hasNote: true,
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale, diced",
      "4 large egg yolks + 1 whole egg",
      "100g Pecorino Romano, finely grated",
      "50g Parmesan, finely grated",
      "Freshly cracked black pepper, to taste",
      "Salt for pasta water",
      "1 tbsp olive oil"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil and cook spaghetti until al dente.",
      "While pasta cooks, fry the pancetta in a skillet over medium heat until crispy.",
      "In a bowl, whisk together egg yolks, whole egg, Pecorino, Parmesan, and black pepper.",
      "Reserve 3/4 cup of pasta cooking water before draining.",
      "Add 1/4 cup hot pasta water to the egg mixture and whisk to temper the eggs.",
      "Remove skillet from heat, add drained pasta and toss with pancetta.",
      "Pour egg mixture over pasta and toss quickly, adding pasta water gradually until silky.",
      "Serve immediately with extra cheese and cracked pepper on top."
    ],
    nutrition: {
      calories: 520,
      protin: 28,
      carbo: 62,
      fat: 18,
      fiber: 3,
      sodium: 680,
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency.",
      "Never add cream — the creaminess comes from eggs and starchy pasta water.",
      "Work quickly off the heat when adding the egg mixture to avoid scrambling.",
      "Save more pasta water than you think you'll need.",
      "Guanciale is the authentic choice but pancetta or thick bacon work great.",
      "Serve immediately — carbonara does not reheat well."
    ],
  },

  // photo-3: Caesar Salad
  {
    dishName: "Caesar Salad",
    level: "Easy",
    nation: "American",
    dishImage: "images/photo-3.avif",
    description: "Crisp romaine lettuce with homemade Caesar dressing and croutons",
    rate: 4.6,
    reviews: 198,
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    hasNote: false,
    ingredients: [
      "2 heads romaine lettuce, chopped",
      "1 cup cherry tomatoes, halved",
      "80g Parmesan, shaved",
      "2 cups croutons",
      "3 tbsp mayonnaise",
      "2 tbsp lemon juice",
      "1 tsp Worcestershire sauce",
      "1 clove garlic, minced",
      "1 tsp Dijon mustard",
      "Salt and black pepper to taste"
    ],
    instructions: [
      "Make the dressing: whisk together mayonnaise, lemon juice, Worcestershire sauce, garlic, and Dijon mustard.",
      "Season dressing with salt and pepper. Thin with a little water if too thick.",
      "For croutons: cube bread, toss with olive oil and garlic powder, bake at 190°C for 10 minutes until golden.",
      "Place chopped romaine in a large bowl.",
      "Add cherry tomatoes and pour dressing over the lettuce. Toss well to coat.",
      "Top with shaved Parmesan and croutons.",
      "Serve immediately before croutons soften."
    ],
    nutrition: {
      calories: 280,
      protin: 10,
      carbo: 22,
      fat: 17,
      fiber: 4,
      sodium: 520,
    },
    tips: [
      "Chill your salad bowl and plates for an extra crisp, restaurant-quality result.",
      "Tear the lettuce instead of cutting for better texture.",
      "Make the dressing a day ahead — the flavors deepen overnight.",
      "Add homemade croutons right before serving so they stay crunchy.",
      "Shave Parmesan with a vegetable peeler for elegant, thin slices.",
      "For extra richness, add a soft-boiled egg on top."
    ],
  },

  // photo-4: Honey Garlic Salmon
  {
    dishName: "Honey Garlic Salmon",
    level: "Easy",
    nation: "Seafood",
    dishImage: "images/photo-4.avif",
    description: "Pan-seared salmon with a sweet and savory glaze",
    rate: 4.9,
    reviews: 187,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    hasNote: false,
    ingredients: [
      "2 salmon fillets (about 200g each)",
      "3 tbsp honey",
      "2 tbsp soy sauce",
      "4 cloves garlic, minced",
      "1 tsp fresh ginger, grated",
      "1 tbsp olive oil",
      "Salt and pepper to taste",
      "Sesame seeds and sliced green onions for garnish"
    ],
    instructions: [
      "Season salmon fillets with salt and pepper on both sides.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4–5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4–5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed rice."
    ],
    nutrition: {
      calories: 380,
      protin: 34,
      carbo: 22,
      fat: 16,
      fiber: 1,
      sodium: 540,
    },
    tips: [
      "Pat the salmon dry before cooking for a better sear and crispier skin.",
      "Don't move the salmon once it's in the pan — let it develop a golden crust naturally.",
      "If the sauce gets too thick, add a splash of water to loosen it.",
      "Salmon is done when it flakes easily with a fork at the thickest part.",
      "Use low-sodium soy sauce to control the saltiness of the glaze.",
      "Let the salmon rest for 2 minutes before serving for juicier results."
    ],
  },

  // photo-5: Classic Smash Burger
  {
    dishName: "Classic Smash Burger",
    level: "Easy",
    nation: "American",
    dishImage: "images/photo-5.avif",
    description: "Crispy double beef patty burger with special sauce and fresh toppings",
    rate: 4.9,
    reviews: 541,
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    hasNote: false,
    ingredients: [
      "400g ground beef (80% lean), divided into 4 balls",
      "4 slices American cheddar cheese",
      "2 brioche buns, toasted",
      "1 tomato, sliced",
      "1/2 white onion, sliced into rings",
      "Pickled cucumbers (gherkins)",
      "Shredded iceberg lettuce",
      "3 tbsp mayonnaise",
      "1 tbsp ketchup",
      "1 tsp mustard",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Make the special sauce: mix mayo, ketchup, mustard, and a dash of pickle juice. Set aside.",
      "Heat a cast iron skillet or griddle over high heat until very hot.",
      "Place 2 beef balls on the skillet and immediately smash flat with a spatula.",
      "Season generously with salt and pepper. Cook for 2 minutes until edges are crispy.",
      "Flip patties, place cheddar on top immediately, and cook for 1 more minute.",
      "Stack double patties on toasted bun.",
      "Spread special sauce on both bun halves, then layer with lettuce, tomato, onion, and pickles.",
      "Serve immediately while hot and crispy."
    ],
    nutrition: {
      calories: 680,
      protin: 42,
      carbo: 38,
      fat: 38,
      fiber: 2,
      sodium: 890,
    },
    tips: [
      "Use 80/20 ground beef — the fat is what creates that crispy, caramelized crust.",
      "Your skillet must be extremely hot before adding the beef for proper smashing.",
      "Smash immediately and firmly — you have about 10 seconds before the meat sets.",
      "Never press the patty after the first smash or you'll squeeze out all the juices.",
      "Add cheese right after flipping so it melts perfectly from the residual heat.",
      "Toast your buns on the same skillet for maximum flavor."
    ],
  },

  // photo-6: Chicken Fried Rice
  {
    dishName: "Chicken Fried Rice",
    level: "Easy",
    nation: "Asian",
    dishImage: "images/photo-6.avif",
    description: "Classic fried rice with tender chicken and mixed vegetables",
    rate: 4.5,
    reviews: 287,
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    hasNote: false,
    ingredients: [
      "3 cups cooked jasmine rice (day-old preferred)",
      "300g chicken breast, diced",
      "2 eggs, beaten",
      "1 cup frozen peas",
      "1 cup corn kernels",
      "2 carrots, diced small",
      "3 cloves garlic, minced",
      "3 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp sesame oil",
      "2 tbsp cooking oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Season chicken with salt and pepper. Cook in hot oil until golden, about 4–5 minutes. Remove.",
      "In the same wok, scramble the beaten eggs until just set. Push to the side.",
      "Add garlic and stir-fry for 30 seconds.",
      "Add carrots, peas, and corn. Stir-fry for 2–3 minutes.",
      "Add the cold rice and break up any clumps. Stir-fry on high heat for 3–4 minutes.",
      "Add soy sauce, oyster sauce, and sesame oil. Toss everything to combine.",
      "Return chicken to the wok, toss well, and serve hot."
    ],
    nutrition: {
      calories: 420,
      protin: 28,
      carbo: 52,
      fat: 11,
      fiber: 4,
      sodium: 780,
    },
    tips: [
      "Always use day-old cold rice — fresh rice is too moist and will clump together.",
      "Cook on the highest heat possible for that authentic wok-tossed flavor.",
      "Cook the rice in batches if your pan is small to avoid steaming.",
      "Add a splash of rice vinegar at the end for a subtle tanginess.",
      "Don't skip the sesame oil — add it at the end for maximum aroma.",
      "Substitute chicken with shrimp, beef, or tofu for a variation."
    ],
  },

  // photo-7: Sweet Potato & Chickpea Tacos
  {
    dishName: "Sweet Potato Tacos",
    level: "Medium",
    nation: "Mexican",
    dishImage: "images/photo-7.avif",
    description: "Vibrant tacos with roasted sweet potato, crispy chickpeas and avocado",
    rate: 4.7,
    reviews: 163,
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    hasNote: false,
    ingredients: [
      "2 medium sweet potatoes, diced",
      "1 can (400g) chickpeas, drained and dried",
      "8 small flour or corn tortillas",
      "2 avocados, sliced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, diced",
      "Fresh cilantro and jalapeño slices",
      "2 limes",
      "2 tsp cumin",
      "1 tsp smoked paprika",
      "1 tsp chili powder",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 200°C. Toss sweet potato and chickpeas with olive oil and spices.",
      "Spread on a baking sheet and roast for 20–25 minutes until sweet potato is tender and chickpeas are crispy.",
      "Warm tortillas in a dry skillet or directly over a gas flame for 30 seconds each side.",
      "Mix cherry tomatoes, red onion, lime juice, and cilantro to make a quick pico de gallo.",
      "Layer each tortilla with sweet potato and chickpeas.",
      "Top with avocado slices, pico de gallo, jalapeño, and fresh cilantro.",
      "Squeeze fresh lime juice over each taco and serve immediately."
    ],
    nutrition: {
      calories: 420,
      protin: 14,
      carbo: 58,
      fat: 16,
      fiber: 12,
      sodium: 410,
    },
    tips: [
      "Make sure chickpeas are completely dry before roasting for maximum crispiness.",
      "Don't overcrowd the baking sheet — spread ingredients in a single layer.",
      "Char tortillas directly over a gas flame for authentic smoky flavor.",
      "Add a drizzle of chipotle mayo or tahini sauce for extra richness.",
      "Roast a big batch of sweet potato and chickpeas — they're great for meal prep.",
      "Squeeze lime over everything right before eating to keep the avocado fresh."
    ],
  },

  // photo-8: Chicken Tikka Masala
  {
    dishName: "Chicken Tikka Masala",
    level: "Medium",
    nation: "Indian",
    dishImage: "images/photo-8.avif",
    description: "Tender chicken in a rich, spiced tomato and cream sauce",
    rate: 4.8,
    reviews: 429,
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    hasNote: true,
    note: "Marinate the chicken for at least 1 hour for best results.",
    ingredients: [
      "700g chicken breast, cut into chunks",
      "1 cup plain yogurt",
      "2 tsp garam masala",
      "1 tsp turmeric",
      "1 tsp cumin",
      "1 tsp coriander",
      "1 tsp chili powder",
      "1 can (400g) crushed tomatoes",
      "1 cup heavy cream",
      "1 large onion, finely chopped",
      "4 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "2 tbsp butter",
      "Salt to taste",
      "Fresh cilantro for garnish",
      "Naan bread to serve"
    ],
    instructions: [
      "Marinate chicken in yogurt, 1 tsp garam masala, turmeric, and salt for at least 1 hour.",
      "Grill or broil marinated chicken at high heat until charred. Set aside.",
      "In a large pan, melt butter over medium heat. Cook onion until golden, about 8 minutes.",
      "Add garlic and ginger, cook for 2 minutes.",
      "Add remaining spices and stir for 1 minute until fragrant.",
      "Add crushed tomatoes, stir well, and simmer for 15 minutes.",
      "Pour in heavy cream and add the grilled chicken. Simmer for 10 more minutes.",
      "Garnish with fresh cilantro and serve hot with naan bread or steamed rice."
    ],
    nutrition: {
      calories: 520,
      protin: 42,
      carbo: 18,
      fat: 28,
      fiber: 3,
      sodium: 640,
    },
    tips: [
      "Marinate the chicken overnight for the deepest, most tender flavor.",
      "Char the chicken under a broiler or on a grill — the smokiness is essential.",
      "Use full-fat yogurt and cream for the richest, most authentic sauce.",
      "Bloom your spices in butter for 30 seconds before adding tomatoes.",
      "Taste and adjust garam masala at the end to balance the sauce.",
      "The sauce can be made a day ahead and reheated — it tastes even better the next day."
    ],
  },

  // photo-9: Roasted Tomato Soup
  {
    dishName: "Roasted Tomato Soup",
    level: "Easy",
    nation: "Italian",
    dishImage: "images/photo-9.avif",
    description: "Velvety roasted tomato soup topped with cream and pumpkin seeds",
    rate: 4.6,
    reviews: 214,
    prepTime: 10,
    cookTime: 40,
    servings: 4,
    hasNote: false,
    ingredients: [
      "1kg ripe tomatoes, halved",
      "1 large onion, quartered",
      "5 cloves garlic",
      "3 tbsp olive oil",
      "500ml vegetable broth",
      "1 tsp sugar",
      "1 tsp dried basil",
      "Salt and black pepper to taste",
      "4 tbsp heavy cream, to serve",
      "Pumpkin seeds and fresh parsley for garnish"
    ],
    instructions: [
      "Preheat oven to 200°C. Place tomatoes, onion, and garlic on a baking sheet.",
      "Drizzle with olive oil, season with salt, pepper, and dried basil.",
      "Roast for 35–40 minutes until tomatoes are caramelized and slightly charred.",
      "Transfer roasted vegetables to a blender or use an immersion blender.",
      "Add vegetable broth and blend until smooth.",
      "Pour into a pot, add sugar, and heat over medium for 5 minutes. Adjust seasoning.",
      "Ladle into bowls, swirl with cream, and top with pumpkin seeds and parsley."
    ],
    nutrition: {
      calories: 210,
      protin: 5,
      carbo: 22,
      fat: 12,
      fiber: 5,
      sodium: 480,
    },
    tips: [
      "Use the ripest tomatoes you can find — they make all the difference in flavor.",
      "Don't skip roasting — it caramelizes the tomatoes and adds deep sweetness.",
      "Add a pinch of sugar to balance acidity if your tomatoes are too tart.",
      "For extra creaminess, stir in a tablespoon of butter at the end.",
      "Strain the soup after blending for an ultra-smooth, restaurant-quality texture.",
      "Serve with a grilled cheese sandwich for the ultimate comfort meal."
    ],
  },

  // photo-10: Thai Red Curry
  {
    dishName: "Thai Red Curry",
    level: "Medium",
    nation: "Thai",
    dishImage: "images/photo-10.avif",
    description: "Aromatic and spicy Thai red curry with vegetables and fresh basil",
    rate: 4.7,
    reviews: 256,
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    hasNote: false,
    ingredients: [
      "500g chicken or tofu, cut into chunks",
      "2 tbsp red curry paste",
      "1 can (400ml) coconut milk",
      "1 cup vegetable or chicken broth",
      "1 eggplant, sliced",
      "1 red bell pepper, sliced",
      "2 tbsp fish sauce (or soy sauce)",
      "1 tbsp palm sugar or brown sugar",
      "4–5 fresh Thai basil leaves",
      "2 dried red chilies",
      "1 tbsp coconut oil",
      "Steamed jasmine rice to serve"
    ],
    instructions: [
      "Heat coconut oil in a wok or large pan over medium-high heat.",
      "Add red curry paste and stir-fry for 1–2 minutes until fragrant.",
      "Add the thick top layer of coconut milk first and stir into the paste.",
      "Add chicken or tofu and cook until sealed, about 4–5 minutes.",
      "Pour in the remaining coconut milk and broth. Bring to a gentle simmer.",
      "Add eggplant, bell pepper, fish sauce, sugar, and dried chilies.",
      "Simmer for 10–12 minutes until vegetables are tender.",
      "Stir in fresh Thai basil, remove from heat, and serve with jasmine rice."
    ],
    nutrition: {
      calories: 450,
      protin: 32,
      carbo: 24,
      fat: 26,
      fiber: 4,
      sodium: 720,
    },
    tips: [
      "Use the thick cream at the top of the coconut milk can to fry the curry paste for a richer flavor.",
      "Don't boil the curry vigorously — a gentle simmer keeps the coconut milk from splitting.",
      "Taste constantly and balance with fish sauce (salty), sugar (sweet), and lime juice (sour).",
      "Add Thai basil at the very end — heat kills its fragrance quickly.",
      "For extra heat, add fresh bird's eye chilies along with the red chilies.",
      "Kaffir lime leaves added during simmering give an authentic citrus aroma."
    ],
  },

  // photo-11: Balsamic Glazed Salmon
  {
    dishName: "Balsamic Glazed Salmon",
    level: "Easy",
    nation: "Seafood",
    dishImage: "images/photo-11.avif",
    description: "Pan-seared salmon on wilted spinach with a tangy balsamic reduction",
    rate: 4.8,
    reviews: 175,
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    hasNote: false,
    ingredients: [
      "2 salmon fillets (200g each)",
      "3 tbsp balsamic vinegar",
      "1 tbsp honey",
      "1 tbsp soy sauce",
      "200g fresh baby spinach",
      "1 cup cucumber, diced",
      "1 tomato, diced",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Fresh dill for garnish"
    ],
    instructions: [
      "Mix balsamic vinegar, honey, and soy sauce in a small bowl to make the glaze.",
      "Season salmon fillets with salt and pepper on both sides.",
      "Heat olive oil in a skillet over medium-high heat. Sear salmon skin-side down for 4–5 minutes.",
      "Flip salmon, brush with balsamic glaze, and cook for another 3–4 minutes.",
      "In a separate pan, sauté garlic in olive oil for 30 seconds, then add spinach until wilted.",
      "Make a quick salsa with cucumber, tomato, dill, olive oil, lemon juice, salt, and pepper.",
      "Plate wilted spinach, place salmon on top, spoon over vegetable salsa, and drizzle with remaining glaze."
    ],
    nutrition: {
      calories: 410,
      protin: 36,
      carbo: 18,
      fat: 20,
      fiber: 3,
      sodium: 560,
    },
    tips: [
      "Reduce the balsamic glaze in a small saucepan first for a thicker, more intense flavor.",
      "Sear salmon skin-side first for a crispy skin that won't stick to the pan.",
      "Don't overcook — salmon should be slightly translucent in the center when you remove it from heat.",
      "Baby spinach wilts in under 2 minutes — add it right before serving so it stays bright.",
      "The cucumber-tomato salsa can be made ahead and refrigerated for up to 2 hours.",
      "Use aged balsamic vinegar if possible — its natural sweetness needs less honey."
    ],
  },

    // photo-12: Margherita Pizza
{
  dishName: "Margherita Pizza",
  level: "Medium",
  nation: "Italian",
  dishImage: "images/photo-12.avif",
  description: "Classic Neapolitan pizza with San Marzano tomatoes and fresh mozzarella",
  rate: 4.9,
  reviews: 387,
  prepTime: 20,
  cookTime: 12,
  servings: 2,
  hasNote: true,
  ingredients: [
    "300g pizza dough",
    "150ml San Marzano tomato sauce",
    "200g fresh mozzarella, torn",
    "Fresh basil leaves",
    "2 tbsp olive oil",
    "1 clove garlic, minced",
    "1/2 tsp salt",
    "Pinch of dried oregano"
  ],
  instructions: [
    "Preheat oven to 250°C with a pizza stone or baking tray inside for at least 30 minutes.",
    "Stretch the dough by hand into a thin round — avoid using a rolling pin.",
    "Mix tomato sauce with garlic, salt, and a drizzle of olive oil.",
    "Spread sauce evenly over the dough leaving a 2cm border for the crust.",
    "Tear mozzarella and distribute evenly over the sauce.",
    "Slide pizza onto the hot stone and bake for 10–12 minutes until crust is charred and blistered.",
    "Remove from oven, add fresh basil leaves, drizzle with olive oil, and serve immediately."
  ],
  nutrition: {
    calories: 480,
    protin: 20,
    carbo: 58,
    fat: 18,
    fiber: 3,
    sodium: 610,
  },
  tips: [
    "Preheat your oven as hot as it goes — the high heat is what creates the blistered crust.",
    "Stretch the dough by hand, not a rolling pin, to keep the air bubbles in the crust.",
    "Use fresh mozzarella, not shredded — it melts differently and tastes far better.",
    "Always add basil after baking to keep it fresh and fragrant.",
    "Less is more — don't overload the pizza with sauce or cheese.",
    "If you have a broiler, switch it on for the last 2 minutes for an authentic char."
  ]
}
];

function setIngredients(dish, index) {
  var ingredients = "";
  for (let i = 0; i < dish[index].ingredients.length; i++) {
    ingredients += `<li><span >${i + 1}</span>${dish[index].ingredients[i]}</li>`;
  }
  return ingredients;
}

function setInstructions(dish, index) {
  var instructions = "";
  for (let i = 0; i < dish[index].instructions.length; i++) {
    instructions += `<li><span >${i + 1}</span>${dish[index].instructions[i]}</li>`;
  }
  return instructions;
}

function setChefTips(dishes, index) {
  var tips = "";
  for (let i = 0; i < dishes[index].tips.length; i++) {
    tips += `<div id="tip" class="tip" ><i class="fas fa-circle-check" ></i><p class="m-0 text-color" id="chef-tip" >${dishes[index].tips[i]}</p></div>`;
  }
  return tips;
}

function setNutrition(dishes, index) {
  document.getElementById("calories").innerHTML = `${dishes[index].nutrition.calories} ckal`;
  document.getElementById("Protein").innerHTML = `${dishes[index].nutrition.protin} g`;
  document.getElementById("carbo").innerHTML = dishes[index].nutrition.carbo + "g";
  document.getElementById("fat").innerHTML = dishes[index].nutrition.fat + "g";
  document.getElementById("fiber").innerHTML = dishes[index].nutrition.fiber + "g";
  document.getElementById("sodium").innerHTML = dishes[index].nutrition.sodium + "g";
}

function setNote(dishes, index) {
  var note = document.getElementById("note");
	dishes[index].hasNote === true ? (note.style.display = "flex") : (note.style.display = "none");
}

function setDishInfo(dishes, index) {
  document.getElementById("dish-name").innerHTML = dishes[index].dishName;
  document.getElementById("image").src = dishes[index].dishImage;
  document.getElementById("dish-description").innerHTML =dishes[index].description;
  document.getElementById("level").innerHTML = dishes[index].level;
  document.getElementById("nation").innerHTML = dishes[index].nation;
  document.getElementById("prep-time").innerHTML = dishes[index].prepTime + " min";
  document.getElementById("cook-time").innerHTML = dishes[index].cookTime + " min";
  document.getElementById("servings").innerHTML = dishes[index].servings + " People";
  document.getElementById("rate").innerHTML = dishes[index].rate;
  document.getElementById("review").innerHTML =`(${dishes[index].reviews} reviews)`;
  document.getElementById("ingredients").innerHTML = setIngredients(dishes,index,);
  document.getElementById("instructions").innerHTML = setInstructions(dishes,index);
  document.getElementById("chef-tips").innerHTML = setChefTips(dishes, index);
  setNutrition(dishes,index);
  setNote(dishes, index);
}

function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeDish() {
	setDishInfo(dishes,getRandomNumber(0,dishes.length));
}

changeDish();
