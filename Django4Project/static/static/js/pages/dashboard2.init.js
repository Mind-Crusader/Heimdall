!function(l){"use strict";var o=function(){this.$body=l("body")};o.prototype.createAreaGraph=function(o,e,i,r,t){var a=new Rickshaw.Graph({element:document.querySelector(o),renderer:"area",stroke:!0,height:190,preserve:!0,series:[{color:r[0],data:e[0],name:t[0]},{color:r[1],data:e[1],name:t[1]}]});a.render(),setInterval(function(){i.removeData(e),i.addData(e),a.update()},700),l(window).resize(function(){a.render()})},o.prototype.createPlotGraph=function(o,e,i,r,t,a,n){l.plot(l(o),[{data:e,label:r[0],color:t[0]},{data:i,label:r[1],color:t[1]}],{series:{lines:{show:!0,fill:!0,lineWidth:1,fillColor:{colors:[{opacity:.5},{opacity:.5}]}},points:{show:!0},shadowSize:0},legend:{position:"nw",backgroundColor:"transparent"},grid:{hoverable:!0,clickable:!0,borderColor:a,borderWidth:1,labelMargin:10,backgroundColor:n},yaxis:{min:0,max:15,tickColor:"rgba(108, 120, 151, 0.1)",font:{color:"#5d727c"}},xaxis:{tickColor:"rgba(108, 120, 151, 0.1)",font:{color:"#5d727c"}},tooltip:!0,tooltipOpts:{content:"%s: Value of %x is %y",shifts:{x:-60,y:25},defaultTheme:!1}})},o.prototype.init=function(){for(var o=[[],[],[],[],[],[],[],[],[]],e=new Rickshaw.Fixtures.RandomData(200),i=0;i<100;i++)e.addData(o);this.createAreaGraph("#rickshaw9",o,e,["#1a2942","#E9E9E9"],["Moscow","Shanghai"]);this.createPlotGraph("#website-stats",[[0,9],[1,8],[2,5],[3,8],[4,5],[5,14],[6,10]],[[0,5],[1,12],[2,4],[3,3],[4,12],[5,11],[6,14]],["Visits","Pages/Visit"],["#3bc0c3","#1a2942"],"rgba(108, 120, 151, 0.1)","transparent")},l.Dashboard2=new o,l.Dashboard2.Constructor=o}(window.jQuery),function(o){"use strict";window.jQuery.Dashboard2.init()}(),$(".inlinesparkline").sparkline([10,8,5,7,4,4,7,5,2,8,3,4,5],{type:"line",width:"100%",height:"32",lineWidth:2,lineColor:"rgba(26,41,66,0.7)",fillColor:"rgba(59,192,195,0.5)",highlightSpotColor:"#3bc0c3",highlightLineColor:"#1a2942",spotRadius:3}),$(".dynamicbar-big").sparkline([8,4,1,2,6,7,1,6,2,4,3,5,6,0,3,0,4,6,5,7,6,9,0],{type:"bar",barColor:"#3bc0c3",height:"32",barWidth:7,barSpacing:2}),$("#compositeline").sparkline([8,4,1,2,6,7,1,6,2,4,3,5,6,0,3,0,4,6,5,7,6],{fillColor:!1,changeRangeMin:0,chartRangeMax:10,type:"line",width:"100%",height:"32",lineWidth:2,lineColor:"#1a2942",highlightSpotColor:"#3bc0c3",highlightLineColor:"#f13c6e",spotRadius:4}),$(".sparkpie-big").sparkline([3,4,1,2],{type:"pie",width:"100%",height:"50",sliceColors:["#1a2942","#f13c6e","#3bc0c3","#dcdcdc"],offset:0,borderWidth:0,borderColor:"#00007f"});