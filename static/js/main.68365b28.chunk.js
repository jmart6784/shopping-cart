(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{15:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(13),r=a.n(i),o=a(5),m=a(3),l=a(1),s=function(){return c.a.createElement("div",{id:"home-container"},c.a.createElement("h1",{id:"home-title"},"Welcome to Odin Shop"),c.a.createElement("h3",{id:"home-sub-title"},"Check out our products now!"),c.a.createElement(m.b,{id:"home-link",to:"/shop"},"Click here"))},u=c.a.createContext([{},function(){}]),h=function(){var e=Object(n.useContext)(u),t=Object(o.a)(e,2),a=t[0];t[1];return c.a.createElement("div",{id:"navbar"},c.a.createElement("div",null),c.a.createElement(m.b,{id:"nav-home",className:"nav-link",to:"/"},"Odin Shop"),c.a.createElement("div",{id:"nav-r-links"},c.a.createElement(m.b,{className:"nav-link nav-shop",to:"/cart"},0===a.length?"Cart":"Cart(".concat(a.length,")")),c.a.createElement(m.b,{className:"nav-link nav-shop",to:"/shop"},"Shop")))},p=function(){var e=Object(n.useState)([{id:1,image:"images/img1.jpg",name:"Laptop",price:450,quantity:0,stock:10},{id:2,image:"images/img2.jpg",name:"Bicycle",price:200,quantity:0,stock:20},{id:3,image:"images/img3.jpg",name:"Shoes",price:30,quantity:0,stock:15},{id:4,image:"images/img4.png",name:"Smart Phone",price:400,quantity:0,stock:30},{id:5,image:"images/img5.png",name:"Game console",price:500,quantity:0,stock:22},{id:6,image:"images/img6.jpeg",name:"Tshirt",price:7,quantity:0,stock:95}]),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useContext)(u),l=Object(o.a)(r,2),s=l[0],h=l[1];return c.a.createElement("div",{id:"shop-div"},c.a.createElement("h1",{className:"shop-title"},"Deals of the Day"),c.a.createElement("div",{className:"listing-grid"},a.map((function(e){return c.a.createElement("div",{className:"listing-container",key:e.id},c.a.createElement("div",{style:{backgroundImage:"url(".concat(e.image,")")},className:"listing"}),c.a.createElement("h3",{className:"shop-item-info"},e.name),c.a.createElement("h2",{className:"shop-item-info"},"$",e.price),c.a.createElement("h3",{className:"shop-item-info"},0===e.stock?"Out of Stock":"In stock(".concat(e.stock,")")),c.a.createElement("div",{className:"quantity-container"},c.a.createElement("button",{onClick:function(){return function(e){var t=[].concat(a);t.forEach((function(t){t.name===e.name&&0!==t.quantity&&(t.quantity=t.quantity-1,t.stock=t.stock+1)})),i(t)}(e)},className:"quantity-btn"},"-"),c.a.createElement("span",{className:"current-quantity"},e.quantity),c.a.createElement("button",{onClick:function(){return function(e){var t=[].concat(a);t.forEach((function(t){t.name===e.name&&0!==t.stock&&(t.quantity=t.quantity+1,t.stock=t.stock-1)})),i(t)}(e)},className:"quantity-btn"},"+")),c.a.createElement(m.b,{onClick:function(){return function(e){0===e.quantity&&(e.quantity=e.quantity+1);var t=[].concat(s),n=[].concat(a),c=[];n.forEach((function(e){e.quantity>0&&(0===t.length?t.push(e):t.forEach((function(a){t.forEach((function(e){c.push(e.id)})),c.includes(e.id)?a.quantity=a.quantity+e.quantity:t.push(e)})))})),h(t)}(e)},to:"/cart",className:"shop-add-cart"},"Add to cart"))}))))},d=function(){var e=Object(n.useContext)(u),t=Object(o.a)(e,2),a=t[0],i=t[1],r=function(e){if(0!==e.length){var t=[];return e.forEach((function(e){var a=e.price*e.quantity;t.push(a)})),t.reduce((function(e,t){return e+t}),0)}};return c.a.createElement("div",{id:"cart-container"},c.a.createElement("h1",{className:"cart-page-title"},0===a.length?"Your cart is Empty":"My cart"),c.a.createElement("div",{className:"cart-items-container"},a.map((function(e){return c.a.createElement("div",{className:"cart-item-div",key:e.id},c.a.createElement("div",{className:"cart-item-image",style:{backgroundImage:"url(".concat(e.image,")")}}),c.a.createElement("h3",{className:"cart-item-details"},e.name," QTY: ",e.quantity," Price:"," ",e.price*e.quantity))}))),void 0!==r(a)?c.a.createElement("h2",{className:"cart-total"},"Total: $"+r(a)):"",0!==a.length?c.a.createElement(m.b,{onClick:function(){return i([])},to:"/thankyou",className:"checkout-link"},"Checkout"):null)},E=function(){return c.a.createElement("div",{className:"ty-container"},c.a.createElement("h1",{className:"ty-title"},"Thank you for shopping with us!"))},g=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1];return c.a.createElement(u.Provider,{value:[a,i]},c.a.createElement(m.a,null,c.a.createElement(h,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",component:s}),c.a.createElement(l.a,{exact:!0,path:"/shop",component:p}),c.a.createElement(l.a,{exact:!0,path:"/cart",component:d}),c.a.createElement(l.a,{exact:!0,path:"/thankyou",component:E}))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.68365b28.chunk.js.map