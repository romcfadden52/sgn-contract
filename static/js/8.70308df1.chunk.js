(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{892:function(e,a,t){"use strict";t.r(a);var r=t(52),n=t(71),c=t(72),d=t(74),i=t(73),s=t(75),l=t(1),u=t.n(l),o=t(0),w=t.n(o),m=t(44),h=t.n(m),v=t(115),p=t(807),R=t(804),y=t(68),g=t(890),b=t(808),f=t(113),E=t(56),j=t(806),G=t(873),O=t.n(G),S=t(238),C="gateway",U=function(e){function a(e,t){var c;Object(n.a)(this,a),(c=Object(d.a)(this,Object(i.a)(a).call(this,e))).setGateway=function(e){localStorage.setItem(C,e),c.gateway=O.a.create({baseURL:e,timeout:1e3}),c.gateway.get("/validator/reward/".concat(c.currentUser)).then(function(e){c.setState(Object(r.a)({},e.data.result))})},c.indendWithdraw=function(){c.gateway.post("/validator/withdrawReward",{ethAddr:c.currentUser}).then(function(){p.a.success("Success! Please wait a few seconds to trigger redeem.")})},c.redeemReward=function(){c.gateway.get("/validator/rewardRequest/".concat(c.currentUser)).then(function(e){c.contracts.Guard.methods.redeemReward.cacheSend("0x"+e.data.result)})},c.renderGateway=function(){return u.a.createElement(R.a.Search,{defaultValue:c.gateway.defaults.baseURL,placeholder:"Gateway url",enterButton:"Save",onSearch:c.setGateway,style:{width:500}})},c.renderActions=function(){return[u.a.createElement(y.a,{type:"primary",onClick:c.indendWithdraw},"Initialize Redeem"),u.a.createElement(y.a,{type:"primary",onClick:c.redeemReward},"Redeem Reward")]};var s=e.accounts;return c.currentUser=s[0],c.contracts=t.drizzle.contracts,c.state={},c.contracts.Guard.methods.redeemedServiceReward.cacheCall(c.currentUser),c.contracts.Guard.methods.redeemedMiningReward.cacheCall(c.currentUser),c.setGateway(localStorage.getItem(C)),c}return Object(s.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.Guard,a=this.state,t=a.miningReward,r=a.serviceReward,n=e.redeemedServiceReward,c=e.redeemedMiningReward;return h.a.isEmpty(n)||h.a.isEmpty(c)?u.a.createElement(g.a,null):u.a.createElement(b.a,{title:"Reward",actions:this.renderActions(),extra:this.renderGateway()},u.a.createElement(f.a,{style:{marginTop:"10px"}},u.a.createElement(E.a,{span:12},u.a.createElement(j.a,{title:"Cumulative Mining Reward",value:Object(S.a)(t)})),u.a.createElement(E.a,{span:12},u.a.createElement(j.a,{title:"Cumulative Service Reward",value:Object(S.a)(r)})),u.a.createElement(E.a,{span:12},u.a.createElement(j.a,{title:"Redeemed Mining Reward",value:Object(S.a)(h.a.values(c)[0].value)})),u.a.createElement(E.a,{span:12},u.a.createElement(j.a,{title:"Redeemed Service Reward",value:Object(S.a)(h.a.values(n)[0].value)}))))}}]),a}(u.a.Component);U.contextTypes={drizzle:w.a.object},a.default=Object(v.drizzleConnect)(U,function(e){var a=e.network,t=e.accounts,n=e.contracts,c=e.Guard;return{network:a,accounts:t,Guard:Object(r.a)({},c,n.Guard)}})}}]);
//# sourceMappingURL=8.70308df1.chunk.js.map