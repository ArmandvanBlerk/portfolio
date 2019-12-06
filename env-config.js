const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portfolio-setup-project.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfolio-setup-project.herokuapp.com',
  'process.env.CLIENT_ID': '78cAORjzsMaXlJ1R2uhZa5ThdR31v7cO'
}
