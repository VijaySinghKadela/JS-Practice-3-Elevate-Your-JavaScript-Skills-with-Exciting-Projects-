

// ye throttling vala code hai 
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
                let now = new Date().getTime();
                if (now - prev > delay) {
                    prev = now;
                    return func(...args);
                }
            }
        }


const rect = document.querySelector("#center");

rect.addEventListener("mousemove",
    throttleFunction((dets) => {
        // your less repeatation code

        let div = document.createElement('div')
        div.classList.add('imagediv')

        div.style.left = dets.clientX + 'px'
        div.style.top = dets.clientY + 'px'

        let img = document.createElement('img')
        img.setAttribute('src', 'https://images.unsplash.com/photo-1715646528606-1f0a4f2db091?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

        div.appendChild(img)

        gsap.to(img,{
            y:'0',
            ease: Power1,
            duration:0.6,
        })

        gsap.to(img,{
            y:'100%',
            delay:.6,
            ease: Power2,
        })

        document.body.appendChild(div)
        setTimeout(function () {
            div.remove()
        },1500)

    }, 400));