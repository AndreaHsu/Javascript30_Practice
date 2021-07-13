# NOTE

- `console.table()` 將array 內容(欄位)顯示成一個table

- `.filter(條件)` 根據條件篩選
    - callback function回傳true則代表要留下，其餘被篩掉
    - 以array形式回傳
- `map()`
    - 被``包起來的會視為字串，在這之中要寫變數要使用 ${}，
      而在``裡控己隔空格，打+-x/都會視為字串直接顯示

- `sort()`
    - 若true則回傳1，相反則回傳-1
    - split(條件) 根據條件切割字串

- `reduce()`函式(累加器)
    - reduce()的callback function裡有四個參數
        1. accumulator 初始值
        2. currentValue 正在處理的陣列元素 數值
        3. currentIndex 正在處理的陣列元素 index
        4. array 要使用reduce()的陣列
    - callback function 要回傳 accmulator
    - accumulator可以是一個int 或object
