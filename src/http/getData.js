export async function getData(url) {
  const data = await fetch(url)
      .then((response) => {
        return response.json()
      })
      .then(data)
      .catch(err => console.warn('Error: ', err))

  return data
}
