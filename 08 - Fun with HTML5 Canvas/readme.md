# NOTE
- canva 跟 繪筆一些初始設定
    - <canvas> 有一個方法(method)叫getContext()，透過此方法可以取得渲染環境及其繪圖函數(function)
    - `ctx.strokeStyle`定義繪畫的顏色
    - `ctx.lineJoin`定義兩線相交時的拐角
    - `ctx.lineCap`定義結束端點樣式
    - `ctx.lineWidth`定義畫筆寬度

- ctx 繪圖流程
    - `ctx.beginPath()`當作繪畫啟動
    - `ctx.moveTo(a,b)`當作起始位置
    - `ctx.lineTo(a,b)`當作終點位置
    - `ctx.stroke()`代表繪製已定義的路徑

- 顏色變化: hsl是一個色彩表示的方式`hsl(hue, Saturation, Lightness)`
    - hue代表顏色的度數0-360，0是紅色 ，120是綠色，240是藍色
    - Saturation代表灰階程度，0%為灰黑，100%為彩色，一般設置為100%
    - Lightness為亮度，0%代表黑，100%代表白，一般設置為50%

- 畫筆寬度變化: 對lineWidth++ 或 --
