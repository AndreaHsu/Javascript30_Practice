# NOTE

- `<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">`
    - `type="range` 是拉條
    - `type="color"` 是選色盤
- `:root`相當於 `<html>` 元素，一般CSS的變數會宣告於此
    - 宣告CSS variable: `--variable` 
- `filter:blur()` 調整模糊度

- `this.dataset`
    - 會出現該選取項目中所有`data-`的項目及值。舉例來說，如果要選取`data-sizing`的值，可以使用`this.dataset.sizing`
    - 在範例中，`data-sizing`存放的是px，所以在取到目標的值之後，還需要加上px單位才可以運作，但顏色沒有單位，所以也可以為空，避免報錯。

- `style.setProperty` 相當於在javsscript中設定CSS
    - `document.documentElement`表示所有頁面上的element

- opacity 設定透明度(練習)
    - `input range`設定: `step="0.1"` 表示調整間距是0.1