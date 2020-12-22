import { AbsPipe } from './abs.pipe'


describe('AbsPipe', () => {
  let pipe: AbsPipe

  beforeEach(() => {
    pipe = new AbsPipe()
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy()
  })

  it('positive number returned unchanged', () => {
    const input = 123
    expect(pipe.transform(input)).toBe(input)
  })

  it('negative number converted to positive', () => {
    const input = -123
    const output = 123
    expect(pipe.transform(input)).toBe(output)
  })
})
