const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
        'mongodb+srv://hung0715:r2931671@cluster0.bv7jgur.mongodb.net/Marketplace?retryWrites=true&w=majority' ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' +
        (process.env.MONGO_PORT || '27017') +
        '/mernproject'
}
export default config