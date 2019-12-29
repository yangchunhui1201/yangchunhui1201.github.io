<template id="all">
  <div>
    <div style="flex: 7;">
      <div style="padding-top: 1px;padding-bottom: 30px;flex:1">
        <span style="font-family: 微软雅黑;font-size: 22px;font-weight: normal;font-style: normal;color: #000000;display: inline-block;padding: 0 0 0px 0px;vertical-align: bottom;">动态资讯</span>
        <span style="font-family: Raleway;font-size: 13px;font-weight: normal;font-style: normal;color: #333333;display: inline-block;padding: 2px;vertical-align: bottom;">/NEWS</span>
      </div>
      <ul style="min-height:60px;list-style: none;min-width: 900px;">
        <li v-for="i in arr" :key="i.title"  style="max-width:99.8%;min-height: 120px;margin-bottom:12px;">
          <div style="width: 100%;height: 100%;">
            <div style="width:160px;padding-right: 30px;padding-bottom:20px;float: left;">
              <div id="cc">
                <img :src="i.c">
              </div>
            </div>
            <div style="width:80%;height: 100%;">
              <p style="font-family: 微软雅黑;">
                <a href style="font-size: 16px;line-height: 16px;color:#000">{{i.title}}</a>
              </p>
              <p style="font-weight: normal;color: #999;line-height: 16px;vertical-align: top;font-size:16px;">
                <span style="line-height: 12px;color:#999;font-size:12px;">{{i.time}}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    name: 'n3',
    components:{
    },
    data() {
        return {
            arr:[
                {c:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvMGU3ODVkODVlM2FjOTUzZjc2NDk1ZTI4MDYwOGE2NDMtMTYweDEwMC05MC53ZWJw.webp',
                title:'推荐五个健身技巧,不知道的这些健身难有好成效',
                time:'发布时间：2017年06月01日',
                },
                {c:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvYzhjODM4MDQ4Yzg3MzBkZDdhNGM3MWI1MjkyZjk0NmMtMTYweDEwMC05MC53ZWJw.webp',
                title:'风靡全球的新型健身黑科技 SIXPAD新一代EMS健身设备震撼上市',
                time:'发布时间：2017年06月01日',
                },
                {c:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvM2NkNjcwMTRhNmRlZjIwM2RhOGY5YWEyNGQ3NmJlZTEtMTYweDEwMC05MC53ZWJw.webp',
                title:'健身运动自行车品牌MARMOT土拨鼠:中国体育消费能力逐年升高',
                time:'发布时间：2017年06月01日',
                },
                {c:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvNmFlZWEwZDlmMDA3NDZkNWNmYzEyYjQ4ODI2YTE5ZGQtMTYweDEwMC05MC53ZWJw.webp',
                title:'与时俱进 体育公园物业不断提升服务水平',
                time:'发布时间：2017年06月01日',
                },
                {c:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvNmUzZjgzZjkxMDYwMDM0MjY4ZDhkOTQyYTMwNzAyMWItMTYweDEwMC05MC53ZWJw.webp',
                title:'健身励志英8岁男练就一身肌肉风靡网络',
                time:'发布时间：2017年06月01日',
                },
                {c:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvMDM1NzVhMDkxOTU3NjMyMjBlMjdiNmJiZjJiNTMxZTktMTYweDEwMC05MC53ZWJw.webp',
                title:'葡萄牙体育主帅:会根据梅西是否上场准备两套方案',
                time:'发布时间：2017年06月01日',
                },
                {c:'https://ccdn.goodq.top/caches/feb679790ef254f0c60008b6d2ff5a1c/aHR0cHM6Ly81YTFlNzI0ZjAyMjBkLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMTIvYmZhNWNhNzc4Y2ZjZDJhNGZlODE5MTY0ZDUwMmMyOTItMTYweDEwMC05MC53ZWJw.webp',
                title:'度势体育深度布局奥运资源 与多国奥委会达成合作',
                time:'发布时间：2017年06月01日',
                },
            ]
        }
    },
}
</script>