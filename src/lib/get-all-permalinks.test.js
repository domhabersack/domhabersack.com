import getAllPermalinks from './get-all-permalinks'

describe('getAllPermalinks', () => {
  it('returns 259 links', async () => {
    const permalinks = await getAllPermalinks()

    expect(permalinks.length).toBe(259)
  })

  it('returns projects', async () => {
    const permalinks = await getAllPermalinks()

    expect(permalinks).toContain('/lovelicons')
  })
})
