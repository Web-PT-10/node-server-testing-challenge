module.exports = {
	dev: {
		client: 'sqlite3',
		connection: {
			filename: './data/hobbits.db3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	},
	test: {
		client: 'sqlite3',
		connection: {
			filename: './data/test.db3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	}
};
