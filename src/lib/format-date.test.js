import formatDate from './format-date'

describe('formatDate', () => {
  it('returns “YYYY-MM-DD” as MMMM DD, YYYY', () => {
    expect(formatDate('1986-06-15')).toBe('June 15, 1986')
  })
})
