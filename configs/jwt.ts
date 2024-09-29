const jwtConfig = {
    secret : process.env.JWT_SECRET || 'secret',

    ttl: '1h'
}
export default jwtConfig
