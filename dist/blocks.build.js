!function(e){function t(l){if(a[l])return a[l].exports;var n=a[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,l){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(1)},function(e,t,a){"use strict";var l=a(2),n=(a.n(l),a(3)),__=(a.n(n),wp.i18n.__),r=wp.editor,c=r.RichText,i=r.MediaUpload,o=r.PlainText,m=wp.blocks.registerBlockType,s=wp.components.Button;m("cgb/block-donation-block",{title:__("donation-block - CGB Block"),icon:"shield",category:"common",keywords:[__("donation-block \u2014 CGB Block"),__("CGB Example"),__("create-guten-block")],attributes:{title:{source:"text",selector:".card__title"},body:{type:"array",source:"children",selector:".card__body"},imageAlt:{attribute:"alt",selector:".card__image"},imageUrl:{attribute:"src",selector:".card__image"},title2:{source:"text",selector:".card__title2"},body2:{type:"array",source:"children",selector:".card__body2"},imageAlt2:{attribute:"alt",selector:".card__image2"},imageUrl2:{attribute:"src",selector:".card__image2"}},edit:function(e){var t=e.attributes,a=(e.className,e.setAttributes),l=function(e){return t.imageUrl?wp.element.createElement("img",{src:t.imageUrl,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(s,{onClick:e,className:"button button-large"},"Pick an image"))},n=function(e){return t.imageUrl2?wp.element.createElement("img",{src:t.imageUrl2,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(s,{onClick:e,className:"button button-large"},"Pick an image"))};return wp.element.createElement("div",{className:e.className},wp.element.createElement("div",{className:"container"},wp.element.createElement(i,{onSelect:function(e){a({imageAlt:e.alt,imageUrl:e.url})},type:"image",value:t.imageID,render:function(e){var t=e.open;return l(t)}}),wp.element.createElement(o,{onChange:function(e){return a({title:e})},value:t.title,placeholder:"Your card title",className:"heading"}),wp.element.createElement(c,{onChange:function(e){return a({body:e})},value:t.body,multiline:"p",placeholder:"Your card text"})),wp.element.createElement("div",{className:"container"},wp.element.createElement(i,{onSelect:function(e){a({imageAlt2:e.alt,imageUrl2:e.url})},type:"image",value:t.imageID2,render:function(e){var t=e.open;return n(t)}}),wp.element.createElement(o,{onChange:function(e){return a({title2:e})},value:t.title2,placeholder:"Title 2",className:"headingtwo"}),wp.element.createElement(c,{onChange:function(e){return a({body2:e})},value:t.body2,multiline:"p",placeholder:"Your card text"})))},save:function(e){var t=e.attributes,a=t.title,l=t.imageUrl,n=t.imageAlt,r=t.body,c=t.title2,i=void 0===c?"":c,o=t.body2,m=t.imageUrl2,s=t.imageAlt2,d=!(i.length>0);return wp.element.createElement("div",{className:"panel-group",id:"accordion",role:"tablist","aria-multiselectable":"true"},wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingOne"},wp.element.createElement("h4",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},wp.element.createElement("h3",{className:"card__title"},a)))),wp.element.createElement("div",{id:"collapseOne",className:"panel-collapse collapse in",role:"tabpanel","aria-labelledby":"headingOne"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{className:"card"},function(e,t){return e?t?wp.element.createElement("img",{className:"card__image",src:e,alt:t}):wp.element.createElement("img",{className:"card__image",src:e,alt:"","aria-hidden":"true"}):null}(l,n),wp.element.createElement("div",{className:"card__body"},r))))),d?{}:wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingTwo"},wp.element.createElement("h4",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},wp.element.createElement("h3",{className:"card__title2"}," ",i," ")))),wp.element.createElement("div",{id:"collapseTwo",className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingTwo"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{className:"card"},function(e,t){return e?t?wp.element.createElement("img",{className:"card__image2",src:e,alt:t}):wp.element.createElement("img",{className:"card__image2",src:e,alt:"","aria-hidden":"true"}):null}(m,s),wp.element.createElement("div",{className:"card__body2"},o))))))}})},function(e,t){},function(e,t){}]);