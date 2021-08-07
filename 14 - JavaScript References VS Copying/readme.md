# NOTE
- 對`boolen`、`string`、`int`等變數都是call by value
- 對陣列、物件都是call by reference(預設)
    **陣列複製新的**
    - 則對陣列做copy: `array.slice()`可以複製一份(不同記憶體的)
    - 利用ES6 Spread，使用`[].concat(B)`可以合併兩陣列，此為空陣列加B陣列
    - 或是`[...B]`使用spread的功能將B陣列渲染到空陣列中，可以傳入陣列`(array-like)`or`String`轉換成陣列
    - 或是`Array.from(B)`可以複製新的array

    **物件複製新的**
    - `Object.assign({}, object)`，但是`assign`是只有one Level，若是有多層object則要利用其他方式。
    - `JSON.parse(JSON.stringify(obj))`可以完整複製物件
        - `JSON.stringigy`:物件轉String。
        - `JSON.parse`:String轉物件。