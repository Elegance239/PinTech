
ServerEvents.recipes(event => {
    event.shaped('minecraft:blast_furnace', [
		'ISI',
		'SFS',
		'BBB'
	], {
		I: 'minecraft:iron_block',
		S: 'minecraft:smooth_stone',
		F: 'minecraft:furnace',
		B: 'minecraft:bricks',
	})
	event.shaped('minecraft:furnace', [
		'CCC',
		'C C',
		'CCC'
	], {
		C:'minecraft:cobblestone',

	})
	event.shaped('create:electron_tube', [
		' P ',
		' S ',
		' B '
	], {
		P:'create:polished_rose_quartz',
		S:'thermal:silver_plate',
		B:'create:brass_sheet'
	})
	event.shaped('create:mechanical_press', [
		' S ',
		'A A',
		'IPI'
	], {
		A:'create:andesite_casing',
		S:'create:shaft',
		I:'create:iron_sheet',
		P:'minecraft:piston'
	})
	event.shaped('create:deployer', [
		'IEI',
		'ASA',
		'IBI'
	], {
		A:'create:andesite_casing',
		S:'create:shaft',
		I:'create:iron_sheet',
		E:'create:electron_tube',
		B:'create:brass_hand',
	})
	event.shaped('create:mechanical_mixer', [
		' S ',
		'ACA',
		'IWI'
	], {
		A:'create:andesite_casing',
		S:'create:shaft',
		C:'create:cogwheel',
		W:'create:whisk',
		I:'create:iron_sheet'
	})
	event.shaped('create:empty_blaze_burner', [
		' S ',
		'SNS',
		' S '
	], {
		S:'thermal:steel_plate',
		N:'minecraft:netherrack'
	})
	event.shaped('thermal:rf_coil', [
		'  G',
		' E ',
		'G  '
	], {
		G:'createaddition:gold_rod',
		E:'create:electron_tube'
	})
	event.shaped('thermal:machine_frame', [
		'SHS',
		'HBH',
		'SRS'
	], {
		H:'thermal:obsidian_glass',
		S:'thermal:steel_plate',
		B:'create:brass_casing',
		R:'thermal:redstone_servo',
	})
	event.shaped('thermal:redstone_servo', [
		'E E',
		' I ',
		'E E'
	], {
		E:'create:electron_tube',
		I:'immersiveengineering:stick_iron'
	})
	event.shaped('create:steam_engine', [
		' S ',
		'BSB',
		'BCB'
	], {
		S:'immersiveengineering:stick_steel',
		B:'create:brass_sheet',
		C:'create:copper_casing',
	})
})