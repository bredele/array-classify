/**
 * Dependencie(s)
 */

const test = require('tape')
const classify = require('..')

test('group objects in an array given a sorting callback', assert => {
  assert.plan(1)
  const arr = [
    {name: 'foo', value: 'hello'},
    {name: 'beep', value: 'boop'},
    {name: 'foo', value: 'world'},
    {name: 'bar', value: 'beep'},
    {name: 'john', value: 'doe'},
    {name: 'beep', value: 'beep'},
    {name: 'jane', value: 'smith'}
  ]
  assert.deepEqual(classify(arr, (a, b) => a.name === b.name), [
    [
      {name: 'foo', value: 'hello'},
      {name: 'foo', value: 'world'}
    ],
    [
      {name: 'beep', value: 'boop'},
      {name: 'beep', value: 'beep'}
    ],
    {name: 'bar', value: 'beep'},
    {name: 'john', value: 'doe'},
    {name: 'jane', value: 'smith'}
  ])
})
