const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('Arguments must be numbers')
      }
    }, 500)
  })
}

asyncAdd(1, 2)
  .then(res => {
    return res + 1
  })
  .then(res => {
    return res + 10
  })
  .then(res => {
    console.log(res)
  })
