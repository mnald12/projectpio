const life = document.getElementById('life')
for(let i of lifes){
   const d = document.createElement('div')
   d.classList.add('display2')
   const dl = document.createElement('div')
   dl.classList.add('d-left')
   const img = document.createElement('img')
   img.src = i.image
   dl.appendChild(img)
   d.appendChild(dl)
   const dr = document.createElement('div')
   dr.classList.add('d-right')
   const h2 = document.createElement('h2')
   h2.innerText = i.title
   dr.appendChild(h2)
   const br1 = document.createElement('br')
   dr.appendChild(br1)
   const p = document.createElement('p')
   p.innerText = i.contents[0]
   dr.appendChild(p)
   const dh = document.createElement('div')
   for(let t = 0; t < i.contents.length; t++){
      if(t !== 0){
         const dp = document.createElement('p')
         dp.innerText = i.contents[t]
         const b = document.createElement('br')
         dh.appendChild(b)
         dh.appendChild(dp)
      }
   }
   dh.style.display = 'none'
   dr.appendChild(dh)
   const br2 = document.createElement('br')
   dr.appendChild(br2)
   let on = false
   const btn = document.createElement('button')
   btn.innerText = 'Read more'
   btn.addEventListener('click', () => {
      if(!on){
         dh.style.display = 'block'
         btn.innerText = 'Read less'
         on = true
      }
      else{
         dh.style.display = 'none'
         btn.innerText = 'Read more'
         on = false
      }
   })
   dr.appendChild(btn)
   d.appendChild(dr)
   life.appendChild(d)
}


const phenomena = document.getElementById('phenomena')
for(let i of phenomenas){
   const d = document.createElement('div')
   d.classList.add('display2')
   const dl = document.createElement('div')
   dl.classList.add('d-left')
   const img = document.createElement('img')
   img.src = i.image
   dl.appendChild(img)
   d.appendChild(dl)
   const dr = document.createElement('div')
   dr.classList.add('d-right')
   const h2 = document.createElement('h2')
   h2.innerText = i.title
   dr.appendChild(h2)
   const br1 = document.createElement('br')
   dr.appendChild(br1)
   const p = document.createElement('p')
   p.innerText = i.contents[0]
   dr.appendChild(p)
   const dh = document.createElement('div')
   for(let t = 0; t < i.contents.length; t++){
      if(t !== 0){
         const dp = document.createElement('p')
         dp.innerText = i.contents[t]
         const b = document.createElement('br')
         dh.appendChild(b)
         dh.appendChild(dp)
      }
   }
   dh.style.display = 'none'
   dr.appendChild(dh)
   const br2 = document.createElement('br')
   dr.appendChild(br2)
   let on = false
   const btn = document.createElement('button')
   btn.innerText = 'Read more'
   btn.addEventListener('click', () => {
      if(!on){
         dh.style.display = 'block'
         btn.innerText = 'Read less'
         on = true
      }
      else{
         dh.style.display = 'none'
         btn.innerText = 'Read more'
         on = false
      }
   })
   dr.appendChild(btn)
   d.appendChild(dr)
   phenomena.appendChild(d)
}
