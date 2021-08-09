# NOTE
- 解構賦值(Destructuring assignment) 透過解構賦值，可以把直接把物件/陣列中的值塞入變數中
    //等於const height = hero.offsetHeight;
    const {offsetHeight:height ,offsetWidth:width} = hero
    //等於let x = e.offsetX,y = e.offsetY
    let {offsetX : x,offsetY : y} = e

- 以`const walk = 100`為例，我們會先把 (實際的位置/全部的長度)*100 - (100 / 2)，這樣會以中心點為(0.0)，左上及右下分別為`(-50, -50)`及`(50,50)`
- 製作shadow的動畫: 
    - `text.style.textShadow`
    - 參數分別代表:`x, y, blur, color(rgba)`
- `Math.round()`:數字顯示到個位數。