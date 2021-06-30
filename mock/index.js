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
  console.log(req.query.currency)
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
    historical: {[req.query.currency]: []},
  }

  const someDay = new Date('2021-01-28')
  const startPrice = parseFloat(faker.random.number({min: 8550, max: 8850, precision: 0.01}))

  switch(req.query.range) {
    case '1D':
      for (let i = 1; i < 100; i++) {
        someDay.setTime(someDay.getTime() + (5*60*1000))
        data.historical[req.query.currency].push({
          date: someDay.toISOString(),
          price: startPrice + parseFloat(faker.random.number({min: (i % 10 ? -2 : -20), max: (i % 10 ? 2 : 20), precision: 0.01})),
        })
      }
      break
  }

  setTimeout(() => res.json({data}), 1500)
})
