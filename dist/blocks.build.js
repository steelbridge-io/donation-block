!function(e){function a(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}var t={};a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="",a(a.s=0)}([function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});t(1)},function(e,a,t){"use strict";var l=t(2),n=(t.n(l),t(3)),__=(t.n(n),wp.i18n.__),r=wp.editor,c=r.RichText,m=r.MediaUpload,i=r.PlainText,s=wp.blocks.registerBlockType,o=wp.components.Button;s("cgb/block-donation-block",{title:__("donation-block - CGB Block"),icon:"shield",category:"common",keywords:[__("donation-block \u2014 CGB Block"),__("CGB Example"),__("create-guten-block")],attributes:{title:{source:"text",selector:".card__title"},body:{type:"array",source:"children",selector:".card__body"},imageAlt:{attribute:"alt",selector:".card__image"},imageUrl:{attribute:"src",selector:".card__image"},title2:{source:"text",selector:".card__title2"},body2:{type:"array",source:"children",selector:".card__body2"},imageAlt2:{attribute:"alt",selector:".card__image2"},imageUrl2:{attribute:"src",selector:".card__image2"},title3:{source:"text",selector:".card__title3"},body3:{type:"array",source:"children",selector:".card__body3"},imageAlt3:{attribute:"alt",selector:".card__image3"},imageUrl3:{attribute:"src",selector:".card__image3"},title4:{source:"text",selector:".card__title4"},body4:{type:"array",source:"children",selector:".card__body4"},imageAlt4:{attribute:"alt",selector:".card__image4"},imageUrl4:{attribute:"src",selector:".card__image4"},title5:{source:"text",selector:".card__title5"},body5:{type:"array",source:"children",selector:".card__body5"},imageAlt5:{attribute:"alt",selector:".card__image5"},imageUrl5:{attribute:"src",selector:".card__image5"},title6:{source:"text",selector:".card__title6"},body6:{type:"array",source:"children",selector:".card__body6"},imageAlt6:{attribute:"alt",selector:".card__image6"},imageUrl6:{attribute:"src",selector:".card__image6"},title7:{source:"text",selector:".card__title7"},body7:{type:"array",source:"children",selector:".card__body7"},imageAlt7:{attribute:"alt",selector:".card__image7"},imageUrl7:{attribute:"src",selector:".card__image7"},title8:{source:"text",selector:".card__title8"},body8:{type:"array",source:"children",selector:".card__body8"},imageAlt8:{attribute:"alt",selector:".card__image8"},imageUrl8:{attribute:"src",selector:".card__image8"},title9:{source:"text",selector:".card__title9"},body9:{type:"array",source:"children",selector:".card__body9"},imageAlt9:{attribute:"alt",selector:".card__image9"},imageUrl9:{attribute:"src",selector:".card__image9"},title10:{source:"text",selector:".card__title10"},body10:{type:"array",source:"children",selector:".card__body10"},imageAlt10:{attribute:"alt",selector:".card__image10"},imageUrl10:{attribute:"src",selector:".card__image10"}},edit:function(e){var a=e.attributes,t=(e.className,e.setAttributes),l=function(e){return a.imageUrl?wp.element.createElement("img",{src:a.imageUrl,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(o,{onClick:e,className:"button button-large"},"Pick an image"))},n=function(e){return a.imageUrl2?wp.element.createElement("img",{src:a.imageUrl2,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(o,{onClick:e,className:"button button-large"},"Pick an image"))},r=function(e){return a.imageUrl3?wp.element.createElement("img",{src:a.imageUrl3,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(o,{onClick:e,className:"button button-large"},"Pick an image"))},s=function(e){return a.imageUrl4?wp.element.createElement("img",{src:a.imageUrl4,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(o,{onClick:e,className:"button button-large"},"Pick an image"))},d=function(e){return a.imageUrl5?wp.element.createElement("img",{src:a.imageUrl5,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(o,{onClick:e,className:"button button-large"},"Pick an image"))},p=function(e){return a.imageUrl6?wp.element.createElement("img",{src:a.imageUrl6,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(o,{onClick:e,className:"button button-large"},"Pick an image"))},u=function(e){return a.imageUrl7?wp.element.createElement("img",{src:a.imageUrl7,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(o,{onClick:e,className:"button button-large"},"Pick an image"))},g=function(e){return a.imageUrl8?wp.element.createElement("img",{src:a.imageUrl8,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(o,{onClick:e,className:"button button-large"},"Pick an image"))},w=function(e){return a.imageUrl9?wp.element.createElement("img",{src:a.imageUrl9,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(o,{onClick:e,className:"button button-large"},"Pick an image"))},E=function(e){return a.imageUrl10?wp.element.createElement("img",{src:a.imageUrl10,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(o,{onClick:e,className:"button button-large"},"Pick an image"))};return wp.element.createElement("div",{className:e.className},wp.element.createElement("div",{className:"container"},wp.element.createElement(m,{onSelect:function(e){t({imageAlt:e.alt,imageUrl:e.url})},type:"image",value:a.imageID,render:function(e){var a=e.open;return l(a)}}),wp.element.createElement(i,{onChange:function(e){return t({title:e})},value:a.title,placeholder:"Title #1",className:"heading"}),wp.element.createElement(c,{onChange:function(e){return t({body:e})},value:a.body,multiline:"p",placeholder:"Your card text"})),wp.element.createElement("div",{className:"container containertwo"},wp.element.createElement(m,{onSelect:function(e){t({imageAlt2:e.alt,imageUrl2:e.url})},type:"image",value:a.imageID2,render:function(e){var a=e.open;return n(a)}}),wp.element.createElement(i,{onChange:function(e){return t({title2:e})},value:a.title2,placeholder:"Title #2",className:"headingtwo"}),wp.element.createElement(c,{onChange:function(e){return t({body2:e})},value:a.body2,multiline:"p",placeholder:"Your card text"})),wp.element.createElement("div",{className:"container containerthree"},wp.element.createElement(m,{onSelect:function(e){t({imageAlt3:e.alt,imageUrl3:e.url})},type:"image",value:a.imageID3,render:function(e){var a=e.open;return r(a)}}),wp.element.createElement(i,{onChange:function(e){return t({title3:e})},value:a.title3,placeholder:"Title #3",className:"headingthree"}),wp.element.createElement(c,{onChange:function(e){return t({body3:e})},value:a.body3,multiline:"p",placeholder:"Your card text"})),wp.element.createElement("div",{className:"container containerfour"},wp.element.createElement(m,{onSelect:function(e){t({imageAlt4:e.alt,imageUrl4:e.url})},type:"image",value:a.imageID4,render:function(e){var a=e.open;return s(a)}}),wp.element.createElement(i,{onChange:function(e){return t({title4:e})},value:a.title4,placeholder:"Title #4",className:"headingfour"}),wp.element.createElement(c,{onChange:function(e){return t({body4:e})},value:a.body4,multiline:"p",placeholder:"Your card text"})),wp.element.createElement("div",{className:"container containerfive"},wp.element.createElement(m,{onSelect:function(e){t({imageAlt5:e.alt,imageUrl5:e.url})},type:"image",value:a.imageID5,render:function(e){var a=e.open;return d(a)}}),wp.element.createElement(i,{onChange:function(e){return t({title5:e})},value:a.title5,placeholder:"Title #5",className:"headingfive"}),wp.element.createElement(c,{onChange:function(e){return t({body5:e})},value:a.body5,multiline:"p",placeholder:"Your card text"})),wp.element.createElement("div",{className:"container containersix"},wp.element.createElement(m,{onSelect:function(e){t({imageAlt6:e.alt,imageUrl6:e.url})},type:"image",value:a.imageID6,render:function(e){var a=e.open;return p(a)}}),wp.element.createElement(i,{onChange:function(e){return t({title6:e})},value:a.title6,placeholder:"Title #6",className:"headingsix"}),wp.element.createElement(c,{onChange:function(e){return t({body6:e})},value:a.body6,multiline:"p",placeholder:"Your card text"})),wp.element.createElement("div",{className:"container containerseven"},wp.element.createElement(m,{onSelect:function(e){t({imageAlt7:e.alt,imageUrl7:e.url})},type:"image",value:a.imageID7,render:function(e){var a=e.open;return u(a)}}),wp.element.createElement(i,{onChange:function(e){return t({title7:e})},value:a.title7,placeholder:"Title #7",className:"headingseven"}),wp.element.createElement(c,{onChange:function(e){return t({body7:e})},value:a.body7,multiline:"p",placeholder:"Your card text"})),wp.element.createElement("div",{className:"container containereight"},wp.element.createElement(m,{onSelect:function(e){t({imageAlt8:e.alt,imageUrl8:e.url})},type:"image",value:a.imageID8,render:function(e){var a=e.open;return g(a)}}),wp.element.createElement(i,{onChange:function(e){return t({title8:e})},value:a.title8,placeholder:"Title #8",className:"headingeight"}),wp.element.createElement(c,{onChange:function(e){return t({body8:e})},value:a.body8,multiline:"p",placeholder:"Your card text"})),wp.element.createElement("div",{className:"container containernine"},wp.element.createElement(m,{onSelect:function(e){t({imageAlt9:e.alt,imageUrl9:e.url})},type:"image",value:a.imageID9,render:function(e){var a=e.open;return w(a)}}),wp.element.createElement(i,{onChange:function(e){return t({title9:e})},value:a.title9,placeholder:"Title #9",className:"headingnine"}),wp.element.createElement(c,{onChange:function(e){return t({body9:e})},value:a.body9,multiline:"p",placeholder:"Your card text"})),wp.element.createElement("div",{className:"container containerten"},wp.element.createElement(m,{onSelect:function(e){t({imageAlt10:e.alt,imageUrl10:e.url})},type:"image",value:a.imageID10,render:function(e){var a=e.open;return E(a)}}),wp.element.createElement(i,{onChange:function(e){return t({title10:e})},value:a.title10,placeholder:"Title #10",className:"headingten"}),wp.element.createElement(c,{onChange:function(e){return t({body10:e})},value:a.body10,multiline:"p",placeholder:"Your card text"})))},save:function(e){var a=e.attributes,t=a.title,l=a.imageUrl,n=a.imageAlt,r=a.body,c=a.title2,m=void 0===c?"":c,i=a.body2,s=a.imageUrl2,o=a.imageAlt2,d=a.title3,p=void 0===d?"":d,u=a.body3,g=a.imageUrl3,w=a.imageAlt3,E=a.title4,v=void 0===E?"":E,b=a.body4,N=a.imageUrl4,_=a.imageAlt4,h=a.title5,y=void 0===h?"":h,f=a.body5,U=a.imageUrl5,x=a.imageAlt5,C=a.title6,k=void 0===C?"":C,A=a.body6,T=a.imageUrl6,S=a.imageAlt6,P=a.title7,D=void 0===P?"":P,F=a.body7,I=a.imageUrl7,Y=a.imageAlt7,O=a.title8,B=void 0===O?"":O,j=a.body8,G=a.imageUrl8,M=a.imageAlt8,R=a.title9,q=void 0===R?"":R,z=a.body9,H=a.imageUrl9,J=a.imageAlt9,K=a.title10,L=void 0===K?"":K,Q=a.body10,V=a.imageUrl10,W=a.imageAlt10,X=!(m.length>0),Z=!(p.length>0),$=!(v.length>0),ee=!(y.length>0),ae=!(k.length>0),te=!(D.length>0),le=!(B.length>0),ne=!(q.length>0),re=!(L.length>0);return wp.element.createElement("div",{className:"panel-group",id:"accordion",role:"tablist","aria-multiselectable":"true"},wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingOne"},wp.element.createElement("div",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne"},wp.element.createElement("h3",{className:"card__title"},t)),wp.element.createElement("i",{className:"fas fa-caret-down"}))),wp.element.createElement("div",{id:"collapseOne",className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingOne"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"card"},wp.element.createElement("div",{className:"col-md-6"},function(e,a){return e?a?wp.element.createElement("img",{className:"card__image img-responsive",src:e,alt:a}):wp.element.createElement("img",{className:"card__image img-responsive",src:e,alt:"","aria-hidden":"true"}):null}(l,n)),wp.element.createElement("div",{className:"col-md-6"},wp.element.createElement("div",{className:"card__body"},r))))))),X?{}:wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingTwo"},wp.element.createElement("div",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},wp.element.createElement("h3",{className:"card__title2"}," ",m," ")))),wp.element.createElement("div",{id:"collapseTwo",className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingTwo"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{class:"row"},wp.element.createElement("div",{className:"card"},wp.element.createElement("div",{className:"col-md-6"},wp.element.createElement("div",{className:"card__body2"},i)),wp.element.createElement("div",{className:"col-md-6"},function(e,a){return e?a?wp.element.createElement("img",{className:"card__image2 img-responsive",src:e,alt:a}):wp.element.createElement("img",{className:"card__image2 img-responsive",src:e,alt:"","aria-hidden":"true"}):null}(s,o))))))),Z?{}:wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingThree"},wp.element.createElement("div",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},wp.element.createElement("h3",{className:"card__title3"}," ",p," ")))),wp.element.createElement("div",{id:"collapseThree",className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingThree"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"card"},wp.element.createElement("div",{className:"col-md-6"},function(e,a){return e?a?wp.element.createElement("img",{className:"card__image3 img-responsive",src:e,alt:a}):wp.element.createElement("img",{className:"card__image3 img-responsive",src:e,alt:"","aria-hidden":"true"}):null}(g,w)),wp.element.createElement("div",{className:"col-md-6"},wp.element.createElement("div",{className:"card__body3"},u))))))),$?{}:wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingFour"},wp.element.createElement("div",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseFour","aria-expanded":"false","aria-controls":"collapseFour"},wp.element.createElement("h3",{className:"card__title4"}," ",v," ")))),wp.element.createElement("div",{id:"collapseFour",className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingFour"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"card"},wp.element.createElement("div",{className:"col-md-6"},wp.element.createElement("div",{className:"card__body4"},b)),wp.element.createElement("div",{className:"col-md-6"},function(e,a){return e?a?wp.element.createElement("img",{className:"card__image4 img-responsive",src:e,alt:a}):wp.element.createElement("img",{className:"card__image4 img-responsive",src:e,alt:"","aria-hidden":"true"}):null}(N,_))))))),ee?{}:wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingFive"},wp.element.createElement("div",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseFive","aria-expanded":"false","aria-controls":"collapseFive"},wp.element.createElement("h3",{className:"card__title5"}," ",y," ")))),wp.element.createElement("div",{id:"collapseFive",className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingFive"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{class:"row"},wp.element.createElement("div",{className:"card"},wp.element.createElement("div",{class:"col-md-6"},function(e,a){return e?a?wp.element.createElement("img",{className:"card__image5 img-responsive",src:e,alt:a}):wp.element.createElement("img",{className:"card__image5 img-responsive",src:e,alt:"","aria-hidden":"true"}):null}(U,x)),wp.element.createElement("div",{className:"col-md-6"},wp.element.createElement("div",{className:"card__body5"},f))))))),ae?{}:wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingSix"},wp.element.createElement("div",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseSix","aria-expanded":"false","aria-controls":"collapseSix"},wp.element.createElement("h3",{className:"card__title6"}," ",k," ")))),wp.element.createElement("div",{id:"collapseSix",className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingSix"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"card"},wp.element.createElement("div",{className:"col-md-6"},wp.element.createElement("div",{className:"card__body6"},A)),wp.element.createElement("div",{className:"col-md-6"},function(e,a){return e?a?wp.element.createElement("img",{className:"card__image6 img-responsive",src:e,alt:a}):wp.element.createElement("img",{className:"card__image6 img-responsive",src:e,alt:"","aria-hidden":"true"}):null}(T,S))))))),te?{}:wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingSeven"},wp.element.createElement("div",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseSeven","aria-expanded":"false","aria-controls":"collapseSeven"},wp.element.createElement("h3",{className:"card__title7"}," ",D," ")))),wp.element.createElement("div",{id:"collapseSeven",className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingSeven"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"card"},wp.element.createElement("div",{className:"col-md-6"},function(e,a){return e?a?wp.element.createElement("img",{className:"card__image7 img-responsive",src:e,alt:a}):wp.element.createElement("img",{className:"card__image7 img-responsive",src:e,alt:"","aria-hidden":"true"}):null}(I,Y)),wp.element.createElement("div",{className:"col-md-6"},wp.element.createElement("div",{className:"card__body7"},F))))))),le?{}:wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingEight"},wp.element.createElement("div",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseEight","aria-expanded":"false","aria-controls":"collapseEight"},wp.element.createElement("h3",{className:"card__title8"}," ",B," ")))),wp.element.createElement("div",{id:"collapseEight",className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingEight"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"card"},wp.element.createElement("div",{className:"col-md-6"},wp.element.createElement("div",{className:"card__body8"},j)),wp.element.createElement("div",{className:"col-md-6"},function(e,a){return e?a?wp.element.createElement("img",{className:"card__image8 img-responsive",src:e,alt:a}):wp.element.createElement("img",{className:"card__image8 img-responsive",src:e,alt:"","aria-hidden":"true"}):null}(G,M))))))),ne?{}:wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingNine"},wp.element.createElement("div",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseNine","aria-expanded":"false","aria-controls":"collapseNine"},wp.element.createElement("h3",{className:"card__title9"}," ",q," ")))),wp.element.createElement("div",{id:"collapseNine",className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingNine"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"card"},wp.element.createElement("div",{className:"col-md-6"},function(e,a){return e?a?wp.element.createElement("img",{className:"card__image9 img-responsive",src:e,alt:a}):wp.element.createElement("img",{className:"card__image9 img-responsive",src:e,alt:"","aria-hidden":"true"}):null}(H,J)),wp.element.createElement("div",{className:"col-md-6"},wp.element.createElement("div",{className:"card__body9"},z))))))),re?{}:wp.element.createElement("div",{className:"panel panel-default"},wp.element.createElement("div",{className:"panel-heading",role:"tab",id:"headingTen"},wp.element.createElement("div",{className:"panel-title"},wp.element.createElement("a",{role:"button","data-toggle":"collapse","data-parent":"#accordion",href:"#collapseTen","aria-expanded":"false","aria-controls":"collapseTen"},wp.element.createElement("h3",{className:"card__title10"}," ",L," ")))),wp.element.createElement("div",{id:"collapseTen",className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingTen"},wp.element.createElement("div",{className:"panel-body"},wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"card"},wp.element.createElement("div",{className:"col-md-6"},wp.element.createElement("div",{className:"card__body10"},Q)),wp.element.createElement("div",{className:"col-md-6"},function(e,a){return e?a?wp.element.createElement("img",{className:"card__image10 img-responsive",src:e,alt:a}):wp.element.createElement("img",{className:"card__image10 img-responsive",src:e,alt:"","aria-hidden":"true"}):null}(V,W))))))))}})},function(e,a){},function(e,a){}]);