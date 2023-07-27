const button=document.querySelector(".memecontainer")
const image=document.querySelector(".meme-img")
const authorval=document.querySelector(".meme-author")
const titleval=document.querySelector(".title")




const updatedata=(url,title,author)=>{
    image.setAttribute('src',url)
    titleval.innerHTML=title

}
const getmeme=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(res =>res.json()
    .then(data=>{
        console.log(data)
        updatedata(data.url,data.title,data.author)
    }
    ) )
   
}
button.addEventListener('click',getmeme)
getmeme()
