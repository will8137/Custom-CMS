const { Text, Checkbox, CalendarDay, Select, Relationship } = require('@keystonejs/fields');

module.exports = {
	fields: {
		name: {type: Text},
		recordLabel: {
			type: Relationship,
			ref: "recordLabel",
			many: true
		},
		albums: {
			type: Relationship,
			ref: "Album",
			many: true
		},
		songs: {
			type: Relationship,
			ref: "Song",
			many: true
		}
	},
	labelField: 'name'
}