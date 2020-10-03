import './scss/index.scss'

const test = x => x * 2
test()

async function f() {
  return await new Promise(resolve => {
    resolve('async is working')
  })
}

f().then(console.log)
