const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    basePath: isProd? '/rinderlm/webdev114/final' : '', 
};