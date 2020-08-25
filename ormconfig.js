module.exports = {
    type: 'postgres',
    host: 'localhost',
    post: 5432,
    username: 'admindb',
    password: '6I20gNv3RMgT',
    database: 'dev-v3-od-552-app',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',
    },
}