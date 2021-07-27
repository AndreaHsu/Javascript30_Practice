# NOTE 

- `fetch()` :
    - 是一個內建的api，可用來取得某個網頁的資訊
    - 回傳一個promise，可用 `.then()` parse
    - [用法](https://www.oxxostudio.tw/articles/201908/js-fetch.html)

- `RegExp()`: 正規表達式
    - `'gi'` :`g`代表global,`i`代表insensitive,不受大小寫影響
    - `match()`:找出有符合的

- `innerHTML`:可取出該element裡的HTML

- 數字加上逗號隔開
    - ```javascript 
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      ```