import { CryptoNamePipe } from './crypto-name.pipe'
import { CryptoModel } from '../model/crypto.model'

describe('CryptoNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CryptoNamePipe()
    expect(pipe).toBeTruthy()
  })

  it('translate BTC crypto to "Bitcoin" name', () => {
    const pipe = new CryptoNamePipe()
    const crypto = ({symbol: 'BTC'} as CryptoModel)
    expect(pipe.transform(crypto)).toBe('Bitcoin')
  })

  it('translate unknown crypto to empty string', () => {
    const pipe = new CryptoNamePipe()
    const crypto = ({symbol: 'UNKNOWN'} as CryptoModel)
    expect(pipe.transform(crypto)).toBe('')
  })
})
