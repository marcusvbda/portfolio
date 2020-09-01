const path = require('path')
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@src': path.join(__dirname, 'src/'),
                '@components': path.join(__dirname, 'src/components'),
                '@views': path.join(__dirname, 'src/views'),
                '@scss': path.join(__dirname, 'src/scss'),
                '@libs': path.join(__dirname, 'src/libs'),
                '@store': path.join(__dirname, 'src/store'),
                '@router': path.join(__dirname, 'src/router'),
            }
        }
    }
}