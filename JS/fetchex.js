const res=fetch("https://api.github.com/users/pallavi523");
res.then((data)=>{
    return data.json();
}).then((d)=>{
    console.log(d);
}).catch((err)=>{
    console.log("err is",err)
});