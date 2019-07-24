(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),l=a.n(r),s=(a(101),a(19)),o=a(20),c=a(22),m=a(21),u=a(12),h=a(23),d=(a(36),a(171)),v=a(170),T=(a(51),a(49)),b=a.n(T),p=a(95),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={time:0,start:0,isRunning:!1,colorBox:null,startTime:null,endTime:null},a.startTimer=a.startTimer.bind(Object(u.a)(a)),a.stopTimer=a.stopTimer.bind(Object(u.a)(a)),a.resetTimer=a.resetTimer.bind(Object(u.a)(a)),a.greenAlert=null,a.yellowAlert=null,a.redAlert=null,a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"startTimer",value:function(){var e=this;this.setState({time:this.state.time,start:Date.now()-this.state.time,isRunning:!0,startTime:new Date}),this.timerTick=setInterval(function(){return e.setState({time:Date.now()-e.state.start})},1e3),this.greenAlert=setTimeout(function(){e.vibrate(2e3),e.setColor("green")},this.props.greenTime),this.yellowAlert=setTimeout(function(){e.vibrate(2e3),e.setColor("yellow")},this.props.yellowTime),this.redAlert=setTimeout(function(){e.vibrate(2e3),e.alertLoop(),e.setColor("red")},this.props.redTime)}},{key:"alertLoop",value:function(){var e=this;this.intervalVibrate=setInterval(function(){return e.vibrate(1e3)},this.props.vibrateTime)}},{key:"stopTimer",value:function(){this.setState({isRunning:!1,endTime:Date.now()}),clearInterval(this.timerTick),clearInterval(this.intervalVibrate),clearTimeout(this.greenAlert),clearTimeout(this.yellowAlert),clearTimeout(this.redAlert)}},{key:"resetTimer",value:function(){this.setState({time:0}),this.setColor(null)}},{key:"vibrate",value:function(e){navigator.vibrate&&navigator.vibrate(e)}},{key:"setColor",value:function(e){this.setState({colorBox:e})}},{key:"render",value:function(){var e=Object(p.a)("%H : %M"),t={height:"250px",backgroundColor:this.state.colorBox,display:"flex"},a={height:"110px",width:"100%",bottom:"30px",position:"absolute"};this.state.colorBox&&(t.backgroundColor=this.state.colorBox);var n=0===this.state.time?i.a.createElement("button",{style:a,onClick:this.startTimer},"start"):null,r=this.state.isRunning?i.a.createElement("button",{style:a,onClick:this.stopTimer},"stop"):null,l=0===this.state.time||this.state.isRunning?null:i.a.createElement("button",{style:a,onClick:this.resetTimer},"reset"),s=0===this.state.time||this.state.isRunning?null:i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("span",null,"Start Time: ",e(this.state.startTime))),i.a.createElement("div",null,i.a.createElement("span",null,"End Time: ",e(this.state.endTime)))),o=0!==this.state.time&&!this.state.isRunning&&this.state.time<this.props.greenTime?i.a.createElement("span",null,"UnderTime: ",b()(this.props.greenTime-this.state.time).format("mm m ss s")):null,c=0!==this.state.time&&!this.state.isRunning&&this.state.time>this.props.redTime?i.a.createElement("span",null,"OverTime: ",b()(this.state.time-this.props.redTime).format("mm m ss s")):null;return i.a.createElement("div",{class:"text1"},i.a.createElement("div",{style:t,id:"bigBox"}),i.a.createElement("h3",{style:{flex:"0 0 auto",fontSize:"4.5em"}}," ",b()(this.state.time).format("mm m ss s")," "),n,s,c||o,r,l)}}]),t}(i.a.Component),y=a(172),w=a(90),g=a(169),E=(a(105),a(35)),k=(a(152),a(10)),S=a.n(k),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={green:a.convertTimeToMs(S()("2079-11-27T00:05:00")),yellow:a.convertTimeToMs(S()("2079-11-27T00:06:00")),red:a.convertTimeToMs(S()("2079-11-27T00:07:00")),vibrateDelay:a.convertTimeToMs(S()("2079-11-27T00:00:30"))},a.handleSelect=a.handleSelect.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){if(this.props.onInitialRun){var e=this.state,t=e.green,a=e.yellow,n=e.red,i=e.vibrateDelay;this.props.onInitialRun({green:t,yellow:a,red:n,vibrateDelay:i})}}},{key:"disabledHours",value:function(){return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}},{key:"disabledMinutes",value:function(){return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]}},{key:"handleSelect",value:function(){var e=this.state,t=e.green,a=e.yellow,n=e.red,i=e.vibrateDelay;this.props.onRunClick({green:t,yellow:a,red:n,vibrateDelay:i})}},{key:"convertTimeToMs",value:function(e){return e?1e3*(60*e.minutes()+e.seconds()):this.convertTimeToMs(S()("2017-11-27T00:00:00"))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(y.a,null,i.a.createElement(y.a.Row,null,i.a.createElement(y.a.Group,{as:w.a,controlId:"formGreen"},i.a.createElement(y.a.Label,null,"Green"),i.a.createElement(E.a,{id:"timeGreen",onChange:function(t){e.setState({green:e.convertTimeToMs(t)})},showTime:{format:"mm:ss"},showHour:!1,format:"mm:ss",secondStep:15,defaultValue:S()("2017-11-27T00:05:00")})),i.a.createElement(y.a.Group,{as:w.a,controlId:"formYellow"},i.a.createElement(y.a.Label,null,"Yellow"),i.a.createElement(E.a,{id:"timeYellow",onChange:function(t){e.setState({yellow:e.convertTimeToMs(t)})},showTime:{format:"mm:ss"},showHour:!1,format:"mm:ss",secondStep:15,defaultValue:S()("2017-11-27T00:06:00")})),i.a.createElement(y.a.Group,{as:w.a,controlId:"formRed"},i.a.createElement(y.a.Label,null,"Red"),i.a.createElement(E.a,{id:"timeRed",onChange:function(t){e.setState({red:e.convertTimeToMs(t)})},showTime:{format:"mm:ss"},showHour:!1,format:"mm:ss",secondStep:15,defaultValue:S()("2017-11-27T00:07:00")})),i.a.createElement(y.a.Group,{as:w.a,controlId:"formVibrateDelay"},i.a.createElement(y.a.Label,null,"Late Interval"),i.a.createElement(E.a,{id:"timeVibrateDelay",onChange:function(t){e.setState({vibrateDelay:e.convertTimeToMs(t)})},showTime:{format:"ss"},showHour:!1,showMinute:!1,format:"ss",secondStep:5,disabledMinutes:this.disabledMinutes,defaultValue:S()("2017-11-27T00:00:30")}))),i.a.createElement("div",{class:"form-button-container"},i.a.createElement(g.a,{variant:"primary"},"Delete"),i.a.createElement(g.a,{variant:"primary",onClick:this.handleSelect},"Run"))))}}]),t}(i.a.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={timerPanels:[0]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){var t=this.state.timerPanels.length+1;this.setState({timerPanels:this.state.timerPanels.concat([t])})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"panel-wrapper"},this.state.timerPanels.map(function(t){return i.a.createElement(O,Object.assign({},e.props,{key:t,id:t}))})),i.a.createElement(g.a,{onClick:this.handleClick.bind(this)},"Add new"))}}]),t}(i.a.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this))).state={activeTab:"setting",green:null,yellow:null,red:null,vibrate:null},a.handleSelect=a.handleSelect.bind(Object(u.a)(a)),a.handleTimerSelect=a.handleTimerSelect.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleSelect",value:function(e){this.setState({})}},{key:"handleTimerSelect",value:function(e){var t=e.green,a=e.yellow,n=e.red,i=e.vibrateDelay;this.setState({green:t,yellow:a,red:n,vibrate:i,activeTab:"timer"})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(d.a,{activeKey:this.state.activeTab,defaultActiveKey:"setting",onSelect:function(t,a){e.setState({activeTab:t})},id:"uncontrolled-tab-example"},i.a.createElement(v.a,{eventKey:"setting",title:"Setting"},i.a.createElement(j,{onRunClick:this.handleTimerSelect})),i.a.createElement(v.a,{eventKey:"timer",title:"Timer"},i.a.createElement(f,{greenTime:this.state.green,yellowTime:this.state.yellow,redTime:this.state.red,vibrateTime:this.state.vibrate}))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,a){},96:function(e,t,a){e.exports=a(167)}},[[96,1,2]]]);
//# sourceMappingURL=main.f9e204ec.chunk.js.map