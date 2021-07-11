# NOTE

- transition
    - `transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1)` 設定動畫轉場
    - `transition: all 3s` 設定動畫延遲幾秒

- tranform
    - transform-origin : 設定物件中心點
    - transform: rotate(30deg) 旋轉幾度
    - 一開始先設定 90deg(12點鐘方向開始轉)

- `setInterval`
    - 計時器
    - setInterval(function,time)
    - 1000 為 1秒

- `new Date()` 取得現在時間
    - `getHours()`
    - `getMinutes()`
    - `getSeconds()`

- 從javascript裡直接改變css
    - `element.style.transform`

- transform rotate的小問題
    - 因為transition轉場在354度到0度不會順時針繼續轉，而是逆時針回去到正確的角度在順時針轉
    - 解決辦法: 當計算到90度(12點鐘方向)時先關掉動畫
    - 關掉動畫: `element.style.transition = 'all 0.0s'`

