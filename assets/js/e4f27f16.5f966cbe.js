"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[3352],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=d(a),N=r,c=k["".concat(s,".").concat(N)]||k[N]||m[N]||l;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2838:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return k}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],o={title:"LSP7 Digital Asset",sidebar_position:6},s="LSP7DigitalAsset",d={unversionedId:"standards/smart-contracts/lsp7-digital-asset",id:"standards/smart-contracts/lsp7-digital-asset",title:"LSP7 Digital Asset",description:"The LSP7DigitalAsset contract represents digital assets, for either fungible or non-fungible tokens where minting and transfering is specified with an amount of tokens. It have some functions from ERC20 and ERC777 with more upgraded features.",source:"@site/docs/standards/smart-contracts/lsp7-digital-asset.md",sourceDirName:"standards/smart-contracts",slug:"/standards/smart-contracts/lsp7-digital-asset",permalink:"/standards/smart-contracts/lsp7-digital-asset",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/smart-contracts/lsp7-digital-asset.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"LSP7 Digital Asset",sidebar_position:6},sidebar:"standardsSidebar",previous:{title:"LSP4 Digital Asset Metadata",permalink:"/standards/smart-contracts/lsp4-digital-asset-metadata"},next:{title:"LSP8 Identifiable Digital Asset",permalink:"/standards/smart-contracts/lsp8-identifiable-digital-asset"}},p=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3},{value:"decimals",id:"decimals",children:[{value:"Return Values:",id:"return-values",children:[],level:4}],level:3},{value:"totalSupply",id:"totalsupply",children:[{value:"Return Values:",id:"return-values-1",children:[],level:4}],level:3},{value:"balanceOf",id:"balanceof",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4},{value:"Return Values:",id:"return-values-2",children:[],level:4}],level:3},{value:"authorizeOperator",id:"authorizeoperator",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3},{value:"revokeOperator",id:"revokeoperator",children:[{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:3},{value:"isOperatorFor",id:"isoperatorfor",children:[{value:"Parameters:",id:"parameters-4",children:[],level:4},{value:"Return Values:",id:"return-values-3",children:[],level:4}],level:3},{value:"transfer",id:"transfer",children:[{value:"Parameters:",id:"parameters-5",children:[],level:4}],level:3},{value:"transferBatch",id:"transferbatch",children:[{value:"Parameters:",id:"parameters-6",children:[],level:4}],level:3}],level:2},{value:"Events",id:"events",children:[{value:"Transfer",id:"transfer-1",children:[{value:"Values:",id:"values",children:[],level:4}],level:3},{value:"AuthorizedOperator",id:"authorizedoperator",children:[{value:"Values:",id:"values-1",children:[],level:4}],level:3},{value:"RevokedOperator",id:"revokedoperator",children:[{value:"Values:",id:"values-2",children:[],level:4}],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],m={toc:p};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lsp7digitalasset"},"LSP7DigitalAsset"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"LSP7DigitalAsset")," contract represents digital assets, for either fungible or non-fungible tokens where minting and transfering is specified with an amount of tokens. It have some functions from ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol"},"ERC20"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC777/ERC777.sol"},"ERC777"))," with more upgraded features."),(0,l.kt)("p",null,"This contract serves as a ",(0,l.kt)("strong",{parentName:"p"},"Fungible Token Contract")," when ",(0,l.kt)("inlineCode",{parentName:"p"},"isNFT")," bool is set to ",(0,l.kt)("strong",{parentName:"p"},"false")," in the constructor, and serves as ",(0,l.kt)("strong",{parentName:"p"},"Non-Fungible Token Contract")," otherwise."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"LSP7DigitalAsset contract also contains the methods from")," ",(0,l.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-165"},(0,l.kt)("em",{parentName:"a"},"ERC165"))," :")),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"supportsInterface (bytes4 interfaceId) public view  returns (bool)"))))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  constructor(\n    string memory name_,\n    string memory symbol_,\n    address newOwner_,\n    bool isNFT_\n    ) LSP4DigitalAssetMetadata(name_, symbol_, newOwner_)\n")),(0,l.kt)("p",null,"Sets the token name, symbol and the ",(0,l.kt)("strong",{parentName:"p"},"initial owner")," of the contract, specify if the contract represent a fungible token or an NFT and registers ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/interface-ids"},"LSP7DigitalAsset InterfaceId")),"."),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name_")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of the token.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"symbol_")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The symbol of the token.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newOwner_")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The owner of the contract.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"isNFT_")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Specify if the contract represent a fungible or a non-fungible token.")))),(0,l.kt)("h3",{id:"decimals"},"decimals"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function decimals() public view returns (uint256 value)\n")),(0,l.kt)("p",null,"Returns the number of decimals used to get its user representation."),(0,l.kt)("p",null,"If the contract represents a ",(0,l.kt)("strong",{parentName:"p"},"NFT")," then ",(0,l.kt)("strong",{parentName:"p"},"0")," SHOULD be used, otherwise ",(0,l.kt)("strong",{parentName:"p"},"18")," is the common value."),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of decimals of the token.")))),(0,l.kt)("h3",{id:"totalsupply"},"totalSupply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function totalSupply() public view returns (uint256 value)\n")),(0,l.kt)("p",null,"Returns the number of existing tokens."),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of existing tokens.")))),(0,l.kt)("h3",{id:"balanceof"},"balanceOf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function balanceOf(\n    address tokenOwner\n  ) public view returns (uint256 value)\n")),(0,l.kt)("p",null,"Returns the number of tokens owned by ",(0,l.kt)("inlineCode",{parentName:"p"},"tokenOwner"),"."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"tokenOwner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address to query.")))),(0,l.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of tokens owned by this address.")))),(0,l.kt)("h3",{id:"authorizeoperator"},"authorizeOperator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function authorizeOperator(\n    address operator,\n    uint256 amount\n  ) public\n")),(0,l.kt)("p",null,"Sets ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," as the amount of tokens ",(0,l.kt)("inlineCode",{parentName:"p"},"operator")," address has access to from callers tokens."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Triggers the ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"#authorizedoperator"},"AuthorizedOperator"))," event when an address get authorized as an operator"),"."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"operator")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address to authorize as an operator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of tokens operator has access to.")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("h4",{parentName:"div",id:"requirements"},"Requirements:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"operator")," cannot be calling address."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"operator")," cannot be the zero address.")))),(0,l.kt)("h3",{id:"revokeoperator"},"revokeOperator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function revokeOperator(\n    address operator\n  ) public\n")),(0,l.kt)("p",null,"Removes ",(0,l.kt)("inlineCode",{parentName:"p"},"operator")," address as an operator of callers tokens."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Triggers the ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"#revokedoperator"},"RevokedOperator"))," event when an address get revoked as an operator"),"."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"operator")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address to revoke as an operator.")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("h4",{parentName:"div",id:"requirements-1"},"Requirements:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"operator")," cannot be calling address."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"operator")," cannot be the zero address.")))),(0,l.kt)("h3",{id:"isoperatorfor"},"isOperatorFor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function isOperatorFor(\n    address tokenOwner,\n    address operator\n  ) public view returns (uint256 amount)\n")),(0,l.kt)("p",null,"Returns amount of tokens ",(0,l.kt)("inlineCode",{parentName:"p"},"operator")," address has access to from ",(0,l.kt)("inlineCode",{parentName:"p"},"tokenOwner"),". Operators can send and burn tokens on behalf of their owners. The tokenOwner is their own operator."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"tokenOwner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The token owner.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"operator")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address to query operator status for.")))),(0,l.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of tokens ",(0,l.kt)("inlineCode",{parentName:"td"},"operator")," address has access to from ",(0,l.kt)("inlineCode",{parentName:"td"},"tokenOwner"),".")))),(0,l.kt)("h3",{id:"transfer"},"transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function transfer(\n    address from,\n    address to,\n    uint256 amount,\n    bool force,\n    bytes memory data\n  ) public\n")),(0,l.kt)("p",null,"Transfers amount of tokens from ",(0,l.kt)("inlineCode",{parentName:"p"},"from")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"to"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"force")," parameter will be used when notifying the token sender and receiver and revert."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Triggers the ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"#trasnfer-2"},"Transfer"))," event when tokens get transferred successfully.")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"from")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The sending address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The receiving address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of token to transfer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"force")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"When set to TRUE, ",(0,l.kt)("inlineCode",{parentName:"td"},"to")," may be any address; when set to FALSE ",(0,l.kt)("inlineCode",{parentName:"td"},"to")," must be a contract that supports LSP1 UniversalReceiver and not revert.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Additional data the caller wants included in the emitted event, and sent in the hooks to ",(0,l.kt)("inlineCode",{parentName:"td"},"from")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"to")," addresses.")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("h4",{parentName:"div",id:"requirements-2"},"Requirements:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"from")," cannot be the zero address."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"to")," cannot be the zero address."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"amount")," tokens must be owned by ",(0,l.kt)("inlineCode",{parentName:"li"},"from")," ."),(0,l.kt)("li",{parentName:"ul"},"If the caller is not ",(0,l.kt)("inlineCode",{parentName:"li"},"from"),", it must be an operator for ",(0,l.kt)("inlineCode",{parentName:"li"},"from")," with access to at least ",(0,l.kt)("inlineCode",{parentName:"li"},"amount")," tokens.")))),(0,l.kt)("h3",{id:"transferbatch"},"transferBatch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function transferBatch(\n    address[] from,\n    address[] to,\n    uint256[] amount,\n    bool[] force,\n    bytes[] memory data\n  ) public\n")),(0,l.kt)("p",null,"Transfers many tokens based on the list ",(0,l.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"to"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"amount"),". If any transfer fails, the call will revert."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Triggers the ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"#trasnfer-2"},"Transfer"))," event when tokens get transferred successfully.")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"from")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The list of sending addresses.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The list of receiving addresses.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of tokens to transfer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"force")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"When set to TRUE, ",(0,l.kt)("inlineCode",{parentName:"td"},"to")," may be any address; when set to FALSE ",(0,l.kt)("inlineCode",{parentName:"td"},"to")," must be a contract that supports LSP1 UniversalReceiver and not revert.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Additional data the caller wants included in the emitted event, and sent in the hooks to ",(0,l.kt)("inlineCode",{parentName:"td"},"from")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"to")," addresses.")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("h4",{parentName:"div",id:"requirements-3"},"Requirements:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"from"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"to"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"amount")," lists are the same length."),(0,l.kt)("li",{parentName:"ul"},"No values in ",(0,l.kt)("inlineCode",{parentName:"li"},"from")," can be the zero address."),(0,l.kt)("li",{parentName:"ul"},"No values in ",(0,l.kt)("inlineCode",{parentName:"li"},"to")," can be the zero address."),(0,l.kt)("li",{parentName:"ul"},"Each ",(0,l.kt)("inlineCode",{parentName:"li"},"amount")," tokens must be owned by ",(0,l.kt)("inlineCode",{parentName:"li"},"from"),"."),(0,l.kt)("li",{parentName:"ul"},"If the caller is not ",(0,l.kt)("inlineCode",{parentName:"li"},"from"),", it must be an operator for ",(0,l.kt)("inlineCode",{parentName:"li"},"from")," with access to at least ",(0,l.kt)("inlineCode",{parentName:"li"},"amount")," tokens.")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"transfer-1"},"Transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Transfer(\n    address operator,\n    address from,\n    address to,\n    uint256 amount,\n    bool force,\n    bytes data\n  )\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"MUST")," be fired when ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"#transfer"},"transfer"))," get executed successfuly.")),(0,l.kt)("h4",{id:"values"},"Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"operator")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address of operator sending tokens.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"from")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address which tokens are sent.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The receiving address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of tokens transferred.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"force")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"When set to TRUE, to may be any address; when set to FALSE to must be a contract that supports LSP1 UniversalReceiver and not revert.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Additional data the caller wants included in the emitted event, and sent in the hooks to from and to addresses.")))),(0,l.kt)("h3",{id:"authorizedoperator"},"AuthorizedOperator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event AuthorizedOperator(\n    address operator,\n    address tokenOwner,\n    uint256 amount\n  )\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"MUST")," be fired when ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"#authorizeoperator"},"authorizeOperator"))," get executed successfully.")),(0,l.kt)("h4",{id:"values-1"},"Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"operator")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address authorized as an operator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"tokenOwner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The token owner.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The amount of tokens ",(0,l.kt)("inlineCode",{parentName:"td"},"operator")," address has access to from ",(0,l.kt)("inlineCode",{parentName:"td"},"tokenOwner"),".")))),(0,l.kt)("h3",{id:"revokedoperator"},"RevokedOperator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  event RevokedOperator(\n    address operator,\n    address tokenOwner\n  )\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"MUST")," be fired when ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"#revokeoperator"},"revokeOperator"))," get executed successfully.")),(0,l.kt)("h4",{id:"values-2"},"Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"operator")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The address revoked from operating.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"tokenOwner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The token owner.")))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-7-DigitalAsset.md"},"LUKSO Standards Proposals: LSP7 - Digital Asset (Standard Specification, GitHub)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP7DigitalAsset"},"LSP7 Digital Asset: Solidity implementations (GitHub)"))))}k.isMDXComponent=!0}}]);