# NOTE
- 設置讀取照片位置
    - `window.scroll`:滑動時的上緣
    - `window.innerHeight`:視窗的高。故`window.scroll+window.innerHeight`等於滑動時的下緣
    - `sliderImage.height`:圖片的高
    - `slideInAt=window.scroll+window.innerHeight - sliderImage.height/2`代表滑下來時到圖片一半的全長度
    - `sliderImage.offsetTop`:代表頁面頂端到圖片上緣距離。
    - `isHalfShown = slideInAt > sliderImage.offsetTop`:當畫面移動超過圖片的高時顯示
    - `isNotScrolledPast = window.scrollY < imageBottom`:當畫面移動時圖片的下緣高度未到視窗上緣時
    - 當`isHalfShown&&isNotScrolledPast`為true時，表視窗移動已經超過圖片的一半時，以及圖片的下緣還沒超過視窗上部時，添加動畫的class皆存在，當其中一個不存在時即取消。