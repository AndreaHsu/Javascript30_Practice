# NOTE
- `<video> `
    - 元素內本身含有`video.paused`的屬性，可偵測影片是否暫停
    - `video[play]()`或`video[pause]()`可實際操作撥放或暫停影片
    - 更改button 符號:
        - 偵測`video.addEventListener('play')`跟`video.addEventListener('pause')`
        - 再去修改button的`textContent`
    - 快進或倒退10秒
        - `video.currentTime`可以知道現在撥到第幾秒
        - 取出`.data-skip`屬性要使用`.dataset.skip`，記得取出後是文字型態，要用`parseFloat`轉為float
    - 使用拉條調整音量或撥放速率
        - `video[volume]`跟`video[playbackRate]`可以調整數值
    - 更改時間軸顯示
        - `video.duration`可以知道影片總時長
        - 先算出進行到影片的百分之幾，`(video.currentTime/video.duration)*100`
        - 再調整`progressBar.style.flexBasis`
        - 若直接拉時間軸去條想看的地方，則需要計算user點擊的地方與時間軸總長的百分比
        - 全螢幕
            - `video.requestFullscreen`可以看現在是否有全螢幕狀態，沒有是true
            - `video.requestFullscreen()`可執行全螢幕
            - 官方因應個瀏覽器不同而撰寫不同全螢幕方程