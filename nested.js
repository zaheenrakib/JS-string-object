const collage = {
    name : 'vnc',
    class:['10','11','12'],
    events :['science fair', 'bijoy dibos','21 february'],
    unique:{
        color:'blue',
        result : {
            gpa :5,
            marit:'top'
        }
    }
}

// console.log(collage.unique.color)
collage.unique.result.marit = 'top top top top most'
console.log(collage['unique'].result.marit)
collage.events[1] = '16 december';
console.log(collage.events[1])
delete collage.class;
console.log(collage)