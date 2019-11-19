const { Text, Checkbox, CalendarDay, Select, Relationship } = require('@keystonejs/fields');

const options = [
  { value: 'critical', label: "Critical Music" },
  { value: 'viper', label: "Viper Records" }
];

module.exports = {
	fields: {
		title: {
			type: Text
		},
		artist: {
			type: Relationship,
			ref: "Artist"
		},
		recordLabel: {
			type: Relationship,
			ref: "recordLabel"
		}
	},
	labelField: 'title'
}