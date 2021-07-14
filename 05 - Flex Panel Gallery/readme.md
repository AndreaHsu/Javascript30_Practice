# NOTE

- `flex` 可以達到左右排序的功能
    - 若在父元素設定 `display:flex`，則在子元素中可以設定flex大小
    - `flex:1`可以讓子元素等寬填滿，若設定`flex:5`則表示該設定的子元素會是其餘子元素的5倍大
    - `flex-direction` 設定排列方向是 column(y軸) 還是row(x軸)，預設是column
    - [flex調整介紹](https://ithelp.ithome.com.tw/articles/10227461)
    - [flex的三個參數]()
        - flex :flex-grow flex-shrink flex-basis
            1. flex-grow 剩余空间索取: 默认值为0，不索取
            2. flex-shrink 子元素总宽度大于复制元素如何缩小
            3. flex-basis: 该属性用来设置元素的宽度，当然width也可以用来设置元素的宽度，如果设置了width和flex-basis，那么flex-basis会覆盖width值。

-  `justify-content:center` && `align-item:center`
    - 依據`flex-direction`設定的主/側軸來決定排列方式
    - 例如設定`flex-direction: row`，那 `justify-content: center`就指水平置中， 而`align-items: center`代表垂直置中。

- css選擇器
    - 星號：實作中我們會在CSS中看到星號*，代表所有的元素，
    - 大於：>是選擇該物件底下"直接的元素"，例如：.class>p{style...}就是class底下的所有直接的P元素，那假如這時候class底下的P元素被其他元素包住，如<div>那就不算直接的元素，所以這種時候P不會被選擇。
    - 空格：承上例，假如是.class p{style...}，這時就是選擇class底下 **所有** P元素，無論直接或間接。
    - 沒有空格：當兩個物件之間沒有空格，如p.class{style...}代表該區塊要**同時符合兩個條件**才會被選擇。
    - ,：,代表"或"條件。只要符合其中一個就會被選擇。
    - `:first-child` & `:last-child` :偽類別，分別可以存取第一個跟最後一個子元素


- `translateY()`：CSS transform的一個函式，用以調整區塊Y方向的位置

- `addEventListener("transitionend")` 可以監聽動畫結束

- `classList.toggle(class)` : 加上/刪除該className

- `e.propertyName` 可以抓到觸發transitionend的屬性名稱