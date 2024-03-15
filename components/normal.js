let a = [
    {
        name:'Linitha',
        gender:'female'
    },
    {
        name:'Bhanu',
        gender:'female'
    }
]
export let b = a.filter(function(ele){
    return ele.name.includes('Bhanu')
})
console.log(b)