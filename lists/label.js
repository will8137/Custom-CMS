const { Text, Checkbox, CalendarDay, Select, Relationship } = require('@keystonejs/fields');

module.exports = {
	fields: {
		title: {
			type: Text
		},
		artists: {
			type: Relationship, 
			ref: "Artist", 
			many: true
		},
		songs: {
			type: Relationship,
			ref: "Song",
			many: true
		},
		albums: {
			type: Relationship,
			ref: "Album",
			many: true
		}
	},
	labelField: 'title'
}