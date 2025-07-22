document.querySelectorAll(".drum").forEach((button)=>{
    button.addEventListener("click",(e)=>{ 
       const drum=e.target.classList[0];
       e.target.classList.add('pressed')
       setTimeout(()=>{
        e.target.classList.remove('pressed')
       },100)
       let audio
        switch(drum){
            case 'w':
                audio=new Audio('./sounds/tom-1.mp3')
                audio.play()

            case 'a':
                audio=new Audio('./sounds/tom-2.mp3')
                audio.play()

            case 's':
                audio=new Audio('./sounds/tom-3.mp3')
                audio.play()
            case 'd':
                audio=new Audio('./sounds/tom-4.mp3')
                audio.play()
            case 'j':
                audio=new Audio('./sounds/snare.mp3')
                audio.play()
            case 'k':
                audio=new Audio('./sounds/crash.mp3')
                audio.play()
            case 'l':
                audio=new Audio('./sounds/kick-bass.mp3')
                audio.play()
        }
    })
})
document.addEventListener('keypress',(e)=>{
    // console.log(e.key);
    const drum=e.key;
       let audio
        switch(drum){
            case 'w':
                audio=new Audio('./sounds/tom-1.mp3')
                audio.play()

            case 'a':
                audio=new Audio('./sounds/tom-2.mp3')
                audio.play()

            case 's':
                audio=new Audio('./sounds/tom-3.mp3')
                audio.play()
            case 'd':
                audio=new Audio('./sounds/tom-4.mp3')
                audio.play()
            case 'j':
                audio=new Audio('./sounds/snare.mp3')
                audio.play()
            case 'k':
                audio=new Audio('./sounds/crash.mp3')
                audio.play()
            case 'l':
                audio=new Audio('./sounds/kick-bass.mp3')
                audio.play()
        }
})