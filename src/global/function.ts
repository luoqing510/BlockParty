export function getImgBase64(imgUrl: string) {
    return new Promise((resolve, reject) => {
        if (!imgUrl) {
            reject('请传入imgUrl内容')
        }
        if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(imgUrl)) {
            window.URL = window.URL || window.webkitURL
            var xhr = new XMLHttpRequest()
            xhr.open('get', imgUrl, true)
            xhr.responseType = 'blob'
            xhr.onload = function () {
                if (this.status == 200) {
                    // 得到一个blob对象
                    var blob = this.response
                    const oFileReader = new FileReader()
                    oFileReader.onloadend = function (e) {
                        const base64 = e.target?.result
                        resolve(base64)
                    }
                    oFileReader.readAsDataURL(blob)
                }
            }
            xhr.send()
        } else {
            // 非图片地址
            reject('非(png/jpe?g/gif/svg等)图片地址')
        }
    })
}