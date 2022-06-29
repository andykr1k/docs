"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[7954],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),l=n(2389),o=n(5979),i=n(6010),s="tabItem_LplD";function u(e){var t,n,l,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,k=e.groupId,m=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),N=g.tabGroupChoices,w=g.setTabGroupChoices,y=(0,r.useState)(b),T=y[0],x=y[1],E=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var L=N[k];null!=L&&L!==T&&f.some((function(e){return e.value===L}))&&x(L)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==T&&(O(t),x(a),null!=k&&w(k,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},m)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},7761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),s=["components"],u={sidebar_position:3},p="L15 Public Testnet",c={unversionedId:"networks/l15-testnet",id:"networks/l15-testnet",title:"L15 Public Testnet",description:"The L15 testnet was superseeded by L16 Public Testnet, please check these L16 docs.",source:"@site/docs/networks/l15-testnet.md",sourceDirName:"networks",slug:"/networks/l15-testnet",permalink:"/networks/l15-testnet",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/networks/l15-testnet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"networksSidebar",previous:{title:"Troubleshooting",permalink:"/networks/l16-testnet/troubleshooting"},next:{title:"L14 Public Testnet",permalink:"/networks/l14-testnet"}},d={},k=[{value:"Running a Node",id:"running-a-node",level:2},{value:"Start an Archive Node",id:"start-an-archive-node",level:3},{value:"Become a Validator",id:"become-a-validator",level:3},{value:"Links",id:"links",level:2},{value:"Repositories",id:"repositories",level:2}],m={toc:k};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"l15-public-testnet"},"L15 Public Testnet"),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"L15-TESTNET HAS ENDED.")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The L15 testnet was superseeded by ",(0,l.kt)("a",{parentName:"p",href:"./l16-testnet/parameters"},"L16 Public Testnet"),", please check these L16 docs."))),(0,l.kt)("p",null,"This network is ephemeral, meaning it is not meant to be fully stable and usable yet for more persistent test smart contracts. Assume the network could be reset at any time. The ",(0,l.kt)("a",{parentName:"p",href:"./l16-testnet/parameters"},"L16 Public Testnet")," is meant as a more stable persistent testnet before the mainnet (not yet running)."),(0,l.kt)("h1",{id:"metamask"},"MetaMask"),(0,l.kt)("p",null,"To add the L15 Network to MetaMask, these are the settings:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,l.kt)("td",{parentName:"tr",align:null},"L15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"New RPC URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://rpc.l15.lukso.network"},"https://rpc.l15.lukso.network"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,l.kt)("td",{parentName:"tr",align:null},"23 (0x17)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,l.kt)("td",{parentName:"tr",align:null},"LYXt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Block Explorer URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://explorer.pandora.l15.lukso.network"},"https://explorer.pandora.l15.lukso.network"))))),(0,l.kt)("p",null,"And if you need it, ",(0,l.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC"},"here is a tutorial on how to do it"),"."),(0,l.kt)("h2",{id:"running-a-node"},"Running a Node"),(0,l.kt)("h3",{id:"start-an-archive-node"},"Start an Archive Node"),(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl https://install.l15.lukso.network | bash\n$ lukso start --node-name "REPLACE-WITH-NODE-NAME"\n'))),(0,l.kt)(i.Z,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo curl https://install.l15.lukso.network | bash\n$ sudo lukso start --node-name "REPLACE-WITH-NODE-NAME"\n')))),(0,l.kt)("p",null,"The command starts your node as an archive node."),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/G2DSFqYwteI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,l.kt)("h3",{id:"become-a-validator"},"Become a Validator"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you are currently running a node, please run ",(0,l.kt)("inlineCode",{parentName:"p"},"lukso stop")," (",(0,l.kt)("inlineCode",{parentName:"p"},"sudo lukso stop")," for MacOS) before continuing."))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("a",{parentName:"li",href:"https://launchpad.l15.lukso.network"},"LUKSO Launchpad")," and follow the steps to become a validator."),(0,l.kt)("li",{parentName:"ol"},"You can check your validator status in the ",(0,l.kt)("a",{parentName:"li",href:"https://explorer.vanguard.l15.lukso.network"},"Vanguard Block Explorer"),". You can find your validator via its public key.")),(0,l.kt)("h2",{id:"links"},"Links"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://faucet.l15.lukso.network"},"https://faucet.l15.lukso.network")," To get some LYXt (test LYX)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://launchpad.l15.lukso.network"},"https://launchpad.l15.lukso.network")," The Launchpad to participate as a validator")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stats.vanguard.l15.lukso.network"},"https://stats.vanguard.l15.lukso.network")," Statistic page for the Vanguard consensus blockchain"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://explorer.vanguard.l15.lukso.network"},"https://explorer.vanguard.l15.lukso.network")," Block Explorer page for the Vanguard consensus blockchain")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stats.pandora.l15.lukso.network"},"https://stats.pandora.l15.lukso.network")," Statistic page for the Pandora shard blockchain"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://explorer.pandora.l15.lukso.network"},"https://explorer.pandora.l15.lukso.network")," Block Explorer page for the Pandora shard blockchain"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rpc.l15.lukso.network"},"https://rpc.l15.lukso.network")," Public RPC endpoint for the Pandora shard blockchain")),(0,l.kt)("h2",{id:"repositories"},"Repositories"),(0,l.kt)("p",null,"The network configuration files:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/network-configs"},"https://github.com/lukso-network/network-configs"))),(0,l.kt)("p",null,"Clients:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Vanguard"),": ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/vanguard-consensus-engine"},"https://github.com/lukso-network/vanguard-consensus-engine")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Pandora"),": ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/pandora-execution-engine"},"https://github.com/lukso-network/pandora-execution-engine")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Orchestrator"),": ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lukso-orchestrator"},"https://github.com/lukso-network/lukso-orchestrator"))))}h.isMDXComponent=!0}}]);