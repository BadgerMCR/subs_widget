module.exports = {
	name: "subs - football",
	description: "subs for football",
	category: "football",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			horizontal_position: "left",
			vertical_position: "bottom",
			width: "50"
		}
	},
	entry_props: [
		
		{
			name: "number_on",
			description: "Player number on",
			type: "String"

		},
		{
			name: "name_on",
			description: "Player Name on",
			type: "String"

		},
		{
			name: "number_off",
			description: "Player number off",
			type: "String"

		},
		{
			name: "name_off",
			description: "Player Name off",
			type: "String"

		},


		


	],
	vue_template: getFile("template.html").toString(),
	css: getFile("style.css").toString()
}