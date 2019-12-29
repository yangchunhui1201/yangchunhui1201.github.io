<template id="n5">
    <div style="height:1490px;background: url('https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvYjdiZGU5M2ViZGE1YjE3NzYwYWFlY2Q0ZTczMGVmOWEtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp')">
        <div style="width:1188px;margin:0 auto;background:#fff;">
            <div>
                <div style="width:1188px;height:1340px;border:1px solid #ccc;box-sizing :border-box">
                    <div style="padding:60px 0;">
                        <div style="max-width:1100px;margin:0 auto;min-height:1008px;">
                            <div style="padding-top: 1px;padding-right: 15px;padding-left: 15px;width:100%;">
                                <div style="height:62px;text-align:center;margin-bottom: 30px;">
                                    <div style="font-family: 微软雅黑;font-size: 26px;font-weight: normal;font-style: normal;color: #191919;padding: 0 0 10px 0;display: block;padding: 0 0 10px 0;vertical-align: bottom;">
                                        教练团队
                                    </div>
                                    <div style="font-family: Raleway;font-size: 12px;=font-weight: normal;=font-style: normal;color: #999999;display: block;padding: 2px;vertical-align: bottom;">
                                        TEAM
                                    </div>
                                </div>
                                <div v-for="i in dd" :key="i.dd" style="float: left;margin-bottom: 15px;padding: 30px;">
                                    <div>
                                        <img :src="i.url" alt="" style="height: 372px;max-width: 304px;">
                                    </div>
                                    <div style="text-align:center;width:96%;height:150px;overflow:hidden;">
                                        <p style="color: #444444;font-size: 16px;font-family: arial;font-weight: normal;padding-top: 10px;">Kevin Kate</p>
                                        <p style="color: #b7b7b7;font-size: 14px;font-family: 微软雅黑;padding: 3px 0 8px 0;">健身教练</p>
                                        <p style="color: #777777;font-size: 13px;word-break: break-all;font-family: 微软雅黑;line-height: 24px;padding-bottom: 25px;padding-left: 20px;padding-right: 20px;">担任中心健身教练，教练经验丰富</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
        components:{
    },
    data() {
        return {
            dd:[
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvNjJiNTUxNDY3YmNmMWQzODdmZGRlYWMxZTllMzc2ZjQtNDUweDU1MC05MC53ZWJw.webp'},
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvYWQ1NzkyODJjYmUzNWZlMmZkMmQwMDRmMWM1ZTU1YzAtNDUweDU1MC05MC53ZWJw.webp'},
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvZmI3OWNkYWUxZmNiMDYxMjc4MWYyNmNiYjc1MDNiYzgtNDUweDU1MC05MC53ZWJw.webp'},
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvNTMzYjA5NzQ0NzUzMmI4ZjI2NzU0ZjUyYzcyMzc2NmEtNDUweDU1MC05MC53ZWJw.webp'},
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvYzFlNjA3NDQyYWFlYmYwOTYwMGYyOWNiNTY1NGQwOWEtNDUweDU1MC05MC53ZWJw.webp'}
                
            ]
        }
    },
}
</script>