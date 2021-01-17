const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const faker = require('faker')

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.listen(3000, () => {
  console.log('JSON Server is running...')
})

server.get(['/cryptocurrency'], (req, res) => {
  const data = []
  const cryptoCurrencySymbols = ['TRX', 'BTC', 'LSK', 'ETH', 'XLM', 'XRP', 'VRC', 'XVC']

  for (let i = 0; i < cryptoCurrencySymbols.length; i++) {
    data.push({
      symbol: cryptoCurrencySymbols[i],
      lastupdated: faker.date.past(),
      quote: {
        PLN: {
          price: parseFloat(faker.finance.amount(60000, 90000)),
          percent_change_6h: parseFloat(faker.random.number({min: -2, max: 2, precision: 0.01}).toFixed(2)),
          percent_change_24h: parseFloat(faker.random.number({min: -8, max: 8, precision: 0.01}).toFixed(2)),
          percent_change_7d: parseFloat(faker.random.number({min: -35, max: 35, precision: 0.01}).toFixed(2)),
        },
        USD: {
          price: parseFloat(faker.finance.amount(18000, 28000)),
          percent_change_6h: parseFloat(faker.random.number({min: -2, max: 2, precision: 0.01}).toFixed(2)),
          percent_change_24h: parseFloat(faker.random.number({min: -8, max: 8, precision: 0.01}).toFixed(2)),
          percent_change_7d: parseFloat(faker.random.number({min: -35, max: 35, precision: 0.01}).toFixed(2)),
        },
        EUR: {
          price: parseFloat(faker.finance.amount(14000, 22000)),
          percent_change_6h: parseFloat(faker.random.number({min: -2, max: 2, precision: 0.01}).toFixed(2)),
          percent_change_24h: parseFloat(faker.random.number({min: -8, max: 8, precision: 0.01}).toFixed(2)),
          percent_change_7d: parseFloat(faker.random.number({min: -35, max: 35, precision: 0.01}).toFixed(2)),
        },
      }
    })
  }

  setTimeout(() => res.json({data}), 1500)
})
