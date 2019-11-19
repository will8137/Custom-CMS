const { Text, Checkbox, CalendarDay, Select, Relationship } = require('@keystonejs/fields');

module.exports = {
	fields: {
		title: {type: Text},
		artist: {
			type: Relationship,
			ref: "Artist"
		},
		recordLabel: {
			type: Relationship,
			ref: "recordLabel"
		},
		songs: {
			type: Relationship,
			ref: "Song",
			many: true
		}
	},
	labelField: 'title'
}