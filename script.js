function changeImage()
{
    const img = document.getElementById  ('imagem-1');

    const currentSrc = img.getAettribute("src")

    if (currentSrc === 'img/not.jfif'){

        img.setAttribute ("src","img/positivowebp.webp")
        img.setAttribute ("alt","fdssd")
        
    } else {

        
        img.setAtttibute ("src","img/not.jfif");
        img.setAttribute ("alt","");
        
    };
        
        


}