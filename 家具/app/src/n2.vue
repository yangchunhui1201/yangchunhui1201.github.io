<template id="n2">
    <div style="height:1290px;background: url('https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvYjdiZGU5M2ViZGE1YjE3NzYwYWFlY2Q0ZTczMGVmOWEtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp')">
        <div style="width:1188px;margin:0 auto;background:#fff;">
            <div>
                <div style="width:1188px;border:1px solid #ccc;box-sizing :border-box">
                    <div style="padding:80px 0;">
                        <div style="max-width:1100px;margin:0 auto;min-height:1008px;">
                            <div style="padding-right: 15px;padding-left: 15px;width:100%;">
                                <div style="height:62px;text-align:center;margin-bottom: 30px;">
                                    <div style="font-family: 微软雅黑;font-size: 26px;font-weight: normal;font-style: normal;color: #191919;padding: 0 0 10px 0;display: block;padding: 0 0 10px 0;vertical-align: bottom;">
                                        健身课程
                                    </div>
                                    <div style="font-family: Raleway;font-size: 12px;=font-weight: normal;=font-style: normal;color: #999999;display: block;padding: 2px;vertical-align: bottom;">
                                        Example room
                                    </div>
                                </div>
                                <div>
                                    <div style="float: left;margin-bottom: 15px;padding: 15px;" v-for="i in cc" :key="i.title">
                                        <div>
                                            <img :src="i.url" alt="" style="height: 168px;max-width: 336px;">
                                        </div>
                                        <div style="text-align:center;width:96%;padding-bottom:45px;">
                                            <p style="color: #b7b7b7;font-size: 15px;font-family: 微软雅黑;font-weight: normal;padding-bottom: 8px;">{{i.title}}</p>
                                            <p style="color: #999999;font-size: 13px;font-family: Raleway;">Yoga Fitness</p>
                                        </div>
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
            cc:[
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvMzYxN2UxMmMzOGUyNzUwNjY2OWVmNGYwZjQ3YzliMDAtNDAweDIwMC05MC53ZWJw.webp',
                    title:'瑜伽课程',
                },
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvOWJiYzc2YTE5YTFhZmNlZjFlZmU1ZmJhZTIxNjFjNTItNDAweDIwMC05MC53ZWJw.webp',
                    title:'有氧拳击',
                },
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvMzU5MmI0MjJhZTIzNDkyYzk3MzEyZDQ1M2YwYzg1NDYtNDAweDIwMC05MC53ZWJw.webp',
                    title:'动感单车',
                },
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTEvMDA4ZjNkNThiZDM4ZWE2NTUwZjE2ZDliN2YwNDJjOGMtNDAweDIwMC05MC53ZWJw.webp',
                    title:'健身项目00',
                },
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTEvMWU0MDY1NjQ3NDhlMWQ4OGM1MGU4MGEwNjUwMGIxZDgtNDAweDIwMC05MC53ZWJw.webp',
                    title:'器械训练',
                },
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTEvMTgwNTQ5Njk3NGI2MzljMTkzMDBkMmMzNTA2Y2ViODktNDAweDIwMC05MC53ZWJw.webp',
                    title:'健身项目01',
                },
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTEvZTg0MDBkNzRhNmNlODliNjhiMTFlNzY5MjBmZGQ2M2QtNDAweDIwMC05MC53ZWJw.webp',
                    title:'健身项目02',
                },
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTEvYzc4ODkwMDcwNTg1ZWJhZDAzZDBmNDcxNzcxNjRlMWUtNDAweDIwMC05MC53ZWJw.webp',
                    title:'健身项目03',
                },
                {   url:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTEvOGVlN2E5MzBiZjhjYmQ1YTIzY2VlNmEyZGJmMDZiYjUtNDAweDIwMC05MC53ZWJw.webp',
                    title:'健身项目04',
                },

            ]
        }
    },
}
</script>
<style>
</style>
