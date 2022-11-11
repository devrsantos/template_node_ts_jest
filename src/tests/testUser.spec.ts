import { User } from '@config/User'

test('If exist', () => {
  const user = new User()
  user.name = 'Renan'

  expect(user.name).toBe('Renan')
})
