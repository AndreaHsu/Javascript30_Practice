# NOTE
- breakdown :中斷點時機
    -  subtree modifications: 當子元素點發生變化時
    -  arrtibute modifications: 當元素發生變化時
    -  node removal: 當元素被移除時

- console用法大全:
    - `console.warn()`: 印出警示
    - `console.error()` : 印出錯誤
    - `console.info()`: 沒差?
    - `console.log('%s is my love','Daddy')`: %s 可以任意填變數進去
    - `console.log("%c world is beautiful","font-size:10px; color: red;")`: 加%c在前面，則後面可以加上css屬性
    - `console.assert(a,b)`: a若錯誤，則印出b
    - `console.clear()`: 清除所有console
    - `console.dir()`: 印出詳細element的屬性
    - `console.group()`和`console.groupEnd()` : 群組一起方便相同格式但不同內容的東西印出查看
    - `console.count()`: 計算數量
    - `console.time()` 和 `console.timeEnd()` :計時