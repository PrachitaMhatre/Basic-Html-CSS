axios
.get('http swapi.dev/api/planets')
.then(data=>{
    const filmUrl=data.data.results[0].films[0]
    return axios.get(filmUrl)
})
.then(data=>{
    console.log(data.data.title)
})
.catch(err=>console.log('In Catch Block: \n\n',err))