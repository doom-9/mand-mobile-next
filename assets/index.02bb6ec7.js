var e={md:{action_sheet:{cancel:"取消"},captcha:{sendCaptcha:"发送验证码",countdown:"{$1}秒后重发"},cashier:{payCash:"支付金额(元)",confirmPay:"确定支付",morePayWays:"更多支付方式",pay:"支付",payResultSearch:"支付结果查询中...",paySuccess:"支付成功",payFail:"支付失败，请稍后重试",confirm:"我知道了"},date_picker:{year:"年",month:"月",day:"日",hour:"时",minute:"分",second:"秒"},dialog:{confirm:"确定",cancel:"取消"},number_keyboard:{confirm:"确定"},picker:{confirm:"确认",cancel:"取消"},result_page:{networkError:"网络连接异常",noInformation:"暂无信息",lostWay:"您要访问的页面已丢失"},scroll_view:{more:{loading:"更多加载中...",allLoaded:"全部已加载"},refresh:{pullDownRefresh:"下拉刷新",freedRefresh:"释放刷新",refreshing:"刷新中...",success:"刷新成功"}},selector:{cancel:"取消"},tab_picker:{choose:"请选择"}}};function r(e,r){return e&&r?e.replace(/\{(\w+)\}/g,((e,a)=>r[a])):e}var a=(a,c)=>{let n;const o=a.split(".");let t=e;for(let e=0,l=o.length;e<l;e++){if(n=t[o[e]],e===l-1)return r(n,c);if(!n)return"";t=n}return""};export{a as t};
