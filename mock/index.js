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

server.get(['/cryptocurrency/:symbol'], (req, res) => {
  const data = {
    symbol: req.params.symbol,
    lastupdated: faker.date.past(),
    quote: {
      PLN: {
        price: parseFloat(faker.finance.amount(60000, 90000)),
        percent_change_1h: parseFloat(faker.random.number({min: -1, max: 1, precision: 0.01}).toFixed(2)),
        percent_change_6h: parseFloat(faker.random.number({min: -2, max: 2, precision: 0.01}).toFixed(2)),
        percent_change_24h: parseFloat(faker.random.number({min: -8, max: 8, precision: 0.01}).toFixed(2)),
        percent_change_7d: parseFloat(faker.random.number({min: -35, max: 35, precision: 0.01}).toFixed(2)),
      },
      USD: {
        price: parseFloat(faker.finance.amount(18000, 28000)),
        percent_change_1h: parseFloat(faker.random.number({min: -1, max: 1, precision: 0.01}).toFixed(2)),
        percent_change_6h: parseFloat(faker.random.number({min: -2, max: 2, precision: 0.01}).toFixed(2)),
        percent_change_24h: parseFloat(faker.random.number({min: -8, max: 8, precision: 0.01}).toFixed(2)),
        percent_change_7d: parseFloat(faker.random.number({min: -35, max: 35, precision: 0.01}).toFixed(2)),
      },
      EUR: {
        price: parseFloat(faker.finance.amount(14000, 22000)),
        percent_change_1h: parseFloat(faker.random.number({min: -1, max: 1, precision: 0.01}).toFixed(2)),
        percent_change_6h: parseFloat(faker.random.number({min: -2, max: 2, precision: 0.01}).toFixed(2)),
        percent_change_24h: parseFloat(faker.random.number({min: -8, max: 8, precision: 0.01}).toFixed(2)),
        percent_change_7d: parseFloat(faker.random.number({min: -35, max: 35, precision: 0.01}).toFixed(2)),
      },
    },
    historical: {
      USD: [
        {
          date: "2018-06-14T08:00:00.000Z",
          price: 9283.03,
        },
        {
          date: "2018-06-14T09:00:00.000Z",
          price: 9285.59,
        },
        {
          date: "2018-06-14T10:00:00.000Z",
          price: 9299.98,
        },
        {
          date: "2018-06-14T11:00:00.000Z",
          price: 9324.15,
        },
        {
          date: "2018-06-14T12:00:00.000Z",
          price: 9325.99,
        },
        {
          date: "2018-06-14T13:00:00.000Z",
          price: 9326.24,
        },
        {
          date: "2018-06-14T14:00:00.000Z",
          price: 9325.56,
        },
        {
          date: "2018-06-14T15:00:00.000Z",
          price: 9312.68,
        },
        {
          date: "2018-06-14T16:00:00.000Z",
          price: 9306.95,
        },
        {
          date: "2018-06-14T17:00:00.000Z",
          price: 9289.28,
        },
        {
          date: "2018-06-14T18:00:00.000Z",
          price: 9285.09,
        },
        {
          date: "2018-06-14T19:00:00.000Z",
          price: 9279.95,
        },
        {
          date: "2018-06-14T20:00:00.000Z",
          price: 9278.06,
        },
        {
          date: "2018-06-14T21:00:00.000Z",
          price: 9280.12,
        },
      ]
    },
  }

  setTimeout(() => res.json({data}), 1500)
})
