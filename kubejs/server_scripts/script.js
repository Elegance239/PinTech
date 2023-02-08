// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
	
	event.custom({
		type: 'create:pressing',
		ingredients: [
			Ingredient.of('thermal:tin_ingot').toJson()
		],
		results: [
			Item.of('thermal:tin_plate').toJson(),
		],
	})
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('create:rose_quartz').toJson(),
			Ingredient.of('minecraft:sand').toJson(),
		],
		results: [
			Item.of('create:polished_rose_quartz').toJson(),
		],
		heatRequirement: 'heated',
	})
	event.custom({
		type: 'create:milling',
		ingredients: [
			Ingredient.of('create:raw_zinc').toJson(),
		],
		results: [
			Item.of('create:crushed_zinc_ore').toJson(),
		],
	})
	event.custom({
		type: 'create:compacting',
		ingredients: [
			Ingredient.of('minecraft:sand').toJson(),
			Ingredient.of('minecraft:bricks').toJson(),
			Ingredient.of('minecraft:white_concrete_powder').toJson(),
		],
		results: [
			Item.of('3x immersiveengineering:cokebrick').toJson(),
		],

	})
	event.custom({
		type: 'create:mechanical_crafting',
		pattern: [
			'  T  ',
			' ESE ',
			'TCMCT',
			' ESE ',
			'  T  ',
		],
		key: {
			"T": {
				"item": "thermal:tin_plate"
			  },
			  "E": {
				"item": "create:electron_tube"
			  },
			  "S": {
				"item": "immersiveengineering:stick_steel"
			  },
			  "C": {
				"item": "createaddition:copper_spool"
			  },
			  "M": {
				"item": "thermal:machine_frame"
			  },
		},
		result: {
			"item": "createaddition:alternator"
		},
	})
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('minecraft:quartz').toJson(),
			Ingredient.of('minecraft:redstone').toJson(),
			Ingredient.of('minecraft:redstone').toJson(),
			Ingredient.of('minecraft:redstone').toJson(),
			Ingredient.of('minecraft:redstone').toJson(),
		],
		results: [
			Item.of('create:rose_quartz').toJson(),
		]
	})
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('minecraft:sand').toJson(),
			Ingredient.of('minecraft:obsidian').toJson(),
			Ingredient.of('minecraft:quartz').toJson(),
		],
		results: [
			Item.of('2x thermal:obsidian_glass').toJson(),
		],
		heatRequirement:'heated',
	})
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
		  "item": "create:andesite_casing"
		},
		"loops": 2,
		"results": [
		  {
			"item": "create:brass_casing"
		  },
		],
		"sequence": [
		  {
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "create:andesite_casing"
			  },
			  {
				"item": "immersiveengineering:treated_wood_horizontal"
			  }
			],
			"results": [
			  {
				"item": "create:andesite_casing"
			  }
			]
		  },
		  {
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "create:andesite_casing"
			  },
			  {
				"item": "immersiveengineering:treated_wood_horizontal"
			  }
			],
			"results": [
			  {
				"item": "create:andesite_casing"
			  }
			]
		  },
		  {
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "create:andesite_casing"
			  },
			  {
				"item": "create:brass_sheet"
			  }
			],
			"results": [
			  {
				"item": "create:andesite_casing"
			  }
			]
		  }
		],
		"transitionalItem": {
		  "item": "create:andesite_casing"
		}
	  })
	  event.custom({
		"type": "create:splashing",
		"ingredients": [
		  {
			"item": "thermal:raw_silver"
		  }
		],
		"results": [
		  {
			"item": "thermal:silver_dust"
		  }
		],
	  })
	  event.custom({
		"type": "create:compacting",
		"ingredients": [
			{
				"item": "thermal:silver_dust"
			}
		],
		"results": [
			{
				"item": "thermal:silver_ingot"
			}
		]

	});
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('create:crushed_tin_ore').toJson(),
		],
		results: [
			Item.of('9x thermal:tin_nugget').toJson(),
		]
	})

});

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	event.add('ingots:tier0', 'minecraft:iron_ingot')
	event.add('ingots:tier0', 'minecraft:gold_ingot')
	event.add('ingots:tier0', 'minecraft:copper_ingot')
	event.add('ingots:tier1', 'create:zinc_ingot')
	event.add('ingots:tier2', 'thermal:tin_ingot')
	event.add('ingots:tier2', 'thermal:silver_ingot')
	event.add('ores:tier0', 'minecraft:raw_iron')
	event.add('ores:tier0', 'minecraft:raw_gold')
	event.add('ores:tier0', 'minecraft:raw_copper')
})