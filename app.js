!function(t){function e(e){for(var r,u,a=e[0],c=e[1],f=e[2],l=0,p=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(s&&s(e);p.length;)p.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={0:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var f=0;f<a.length;f++)e(a[f]);var s=c;i.push([2,1]),n()}({2:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i={type:o.a.AUTO,parent:"game",backgroundColor:"#33A5E7",scale:{width:500,height:320,mode:o.a.Scale.FIT,autoCenter:o.a.Scale.CENTER_BOTH},render:{pixelArt:!1},physics:{default:"arcade",arcade:{gravity:{y:750}}}},u=n(1),a=n.n(u);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw i}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(u,t);var e,n,r,i=h(u);function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=i.call(this,t,e,n,"hero-run-sheet",0),t.add.existing(b(r)),t.physics.add.existing(b(r)),r.anims.play("hero-running"),r.body.setCollideWorldBounds(!0),r.body.setMaxVelocity(300,400),r.body.setDragX(400),r.keys=t.cursorKeys,r.input={},r.setupMovement(),r.setupAnimations(),r.scale=.05,r}return e=u,(n=[{key:"setupAnimations",value:function(){var t=this;this.animState=new a.a({init:"idle",transitions:[{name:"idle",from:["falling","running","pivoting"],to:"idle"},{name:"run",from:["falling","idle","pivoting"],to:"running"},{name:"pivot",from:["falling","running"],to:"pivoting"},{name:"jump",from:["idle","running","pivoting"],to:"jumping"},{name:"flip",from:["falling","jupming"],to:"flipping"},{name:"fall",from:"*",to:"falling"}],methods:{onEnterState:function(e){t.anims.play("hero-"+e.to)}}}),this.animPredicates={idle:function(){return t.body.onFloor()&&0===t.body.velocity.x},run:function(){return t.body.onFloor()&&Math.sign(t.body.velocity.x)===(t.flipX?-1:1)},pivot:function(){return t.body.onFloor()&&Math.sign(t.body.velocity.x)===(t.flipX?1:-1)},jump:function(){return t.body.velocity.y<0},flip:function(){return t.body.velocity.y<0&&t.moveState.is("flipping")},fall:function(){return t.body.velocity.y>0}}}},{key:"setupMovement",value:function(){var t=this;this.moveState=new a.a({init:"standing",transitions:[{name:"jump",from:"standing",to:"jumping"},{name:"flip",from:"jumping",to:"flipping"},{name:"fall",from:"standing",to:"falling"},{name:"touchdown",from:["jumping","flipping","falling"],to:"standing"}],methods:{onJump:function(){t.body.setVelocityY(-400)},onFlip:function(){t.body.setVelocityY(-300)}}}),this.movePredicates={jump:function(){return t.input.didPressJump},flip:function(){return t.input.didPressJump},fall:function(){return!t.body.onFloor()},touchdown:function(){return t.body.onFloor()}}}},{key:"preUpdate",value:function(t,e){p(m(u.prototype),"preUpdate",this).call(this,t,e),this.input.didPressJump=o.a.Input.Keyboard.JustDown(this.keys.up),this.keys.left.isDown?(this.body.setAccelerationX(-1500),this.setFlipX(!0)):this.keys.right.isDown?(this.body.setAccelerationX(1500),this.setFlipX(!1)):this.body.setAccelerationX(0),(this.moveState.is("jumping")||this.moveState.is("flipping"))&&!this.keys.up.isDown&&this.body.velocity.y<-150&&this.body.setVelocityY(-150);var n,r=f(this.moveState.transitions());try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i in this.movePredicates&&this.movePredicates[i]()){this.moveState[i]();break}}}catch(t){r.e(t)}finally{r.f()}var a,c=f(this.animState.transitions());try{for(c.s();!(a=c.n()).done;){var s=a.value;if(s in this.animPredicates&&this.animPredicates[s]()){this.animState[s]();break}}}catch(t){c.e(t)}finally{c.f()}}}])&&l(e.prototype,n),r&&l(e,r),u}(o.a.GameObjects.Sprite);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_(t);if(e){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?P(t):e}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(i,t);var e,n,r,o=S(i);function i(t,e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,t,e,n,"onion",0)).r=0;var u=Math.random();return r.scale=.5*u,t.add.existing(P(r)),t.physics.add.existing(P(r)),r.body.setCircle(r.width/2,0,r.height/8),r}return e=i,(n=[{key:"preUpdate",value:function(){this.setRotation(this.r),this.r+=.1}}])&&w(e.prototype,n),r&&w(e,r),i}(o.a.GameObjects.Sprite);function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M(t);if(e){var o=M(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return A(this,n)}}function A(t,e){return!e||"object"!==k(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(i,t);var e,n,r,o=E(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,{key:"GameScene"})}return e=i,(n=[{key:"preload",value:function(){this.load.image("bg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-299mem-31meg-1607544523.jpg?crop=1.00xw:0.755xh;0,0.213xh&resize=1200:*"),this.load.image("onion","https://lh3.googleusercontent.com/proxy/V0K2TMLRAfq_vCIST9_CeWyfHbepKAz_cRGm2iTfAa90k3nsVh6eHJ9N59uX04V0VvsL5rhnMOTrSvx4Ca8FE3i9BmJB4PUgi0ZE8weYLThqXX3kjw"),this.load.image("hero-run-sheet","https://cdn.pixabay.com/photo/2020/05/01/15/45/mouse-5117776_1280.png")}},{key:"create",value:function(t){this.add.image(250,160,"bg").scale=.6,this.score=0,this.text=this.add.text(20,20,"0"),this.cursorKeys=this.input.keyboard.createCursorKeys(),this.addHero(),this.onionSpawner=this.time.addEvent({callback:this.spawnOnion,callbackScope:this,delay:300,loop:!0})}},{key:"addHero",value:function(){this.hero=new v(this,150,50)}},{key:"update",value:function(t,e){this.text.text="".concat(this.score)}},{key:"spawnOnion",value:function(){var t=this,e=Math.random(),n=new x(this,500*e,0);this.physics.add.collider(this.hero,n),this.physics.add.overlap(this.hero,n,(function(){t.hero.destroy(),t.onionSpawner.destroy(),t.text.destroy(),t.add.text(50,20,"YOU LOSE, try again, your score was ".concat(t.score)),setTimeout((function(){return t.scene.restart()}),2e3)})),this.score+=1,setTimeout((function(){n.destroy()}),2e3)}}])&&R(e.prototype,n),r&&R(e,r),i}(o.a.Scene);new o.a.Game(Object.assign(i,{scene:[C]}))}});