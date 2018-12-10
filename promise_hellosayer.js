function hellosayer(name ,times)
{
    return new Promise((resolve, reject)=>
{
    let count=0
    let loopid=setInterval(
        ()=>
        {
            count++;
            console.log("Hello "+name)
            if(count===times)
            {
                clearInterval(loopid)
                resolve()
            }
        },100
    )
})
}
//Sequentially
/*hellosayer('Samarpan',4)
.then(()=>hellosayer('Arnav',2))
.then(()=>hellosayer('Shradha',4))*/

//Async-await

/*async function task()
{
    //AWAIT awaits a promise object.
    //Cant be used in global scope
    //Only in Async function
    hellosayer('Samarpan',4)
    hellosayer('Garima',2)
    await hellosayer('Arnav',5)
    await hellosayer('Shradha',4)
    await hellosayer('Harshit',5)
}*/

//USing Promise.all([array of promises])
async function task()
{
     await Promise.all([hellosayer('Samarpan',4),
    hellosayer('Garima',2),
    hellosayer('Arnav',5)])

     await Promise.all([hellosayer('Shradha',4),
     hellosayer('Harshit',5)])
}
task()