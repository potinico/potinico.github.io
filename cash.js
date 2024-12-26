// + cash.js

// cash anim beta (scroll through)
var camelCase=function(){var d=/(?:^\w|[A-Z]|\b\w)/g,p=/[\s-_]+/g;return function(f){return f.replace(d,function(d,f){return d[0===f?"toLowerCase":"toUpperCase"]()}).replace(p,"")}}(),getPrefixedProp=function(){var d={},p=document.createElement("div").style;return function(f){f=camelCase(f);if(d[f])return d[f];var e=f.charAt(0).toUpperCase()+f.slice(1),e=(f+" "+["webkit","moz","ms","o"].join(e+" ")+e).split(" ");$.each(e,function(e){if(e in p)return d[e]=f=d[f]=e,!1});return d[f]}}();
$.prefixedProp=getPrefixedProp;$.camelCase=camelCase;
(function(d){function p(){var a=g.length,b;if(g.playing&&0!==a){for(;a--;)(b=g[a])&&!1===b()&&(b=g.indexOf(b),-1<b&&g.splice(b,1));g.frame=H(p)}else g.playing=!1,g.frame=null}function f(a,b,c,d){if(1===arguments.length){if(B[a])return B[a];var n=T.exec(a);return B[a]=n?f.apply(null,n.slice(1,5)):null}var l=3*a,h=3*(c-a)-l,k=1-l-h,v=3*b,q=3*(d-b)-v,I=1-v-q;return function(a){for(var b=a,c=0,d;3>c;){d=b*(l+b*(h+b*k))-a;if(.001>Math.abs(d))break;b-=d/(l+b*(2*h+3*k*b));c++}a=b;return a*(v+a*(q+a*I))}}
function e(a,b){return function(c,d){c=c||0==c?c:b;return d?c:" "+a+"("+c+")"}}function z(a){(a=U.exec(a))||0===a?(a=a.slice(1,3),a[0]=parseFloat(a[0])):a=[0,"px"];return a}function V(a,b,c,d,n,f){var h=Math.acos,k=Math.atan,v=Math.sqrt,q=Math.PI,I=a*d-b*c,J=1,g=1,t,u,e,r={};if(a||b)t=v(a*a+b*b),e=0<b?h(a/t):-h(a/t),J=t,g=I/t,t=k((a*c+b*d)/(t*t));else if(c||d)u=v(c*c+d*d),e=.5*q-(0<d?h(-c/u):-h(c/u)),J=I/u,g=u,u=k((a*c+b*d)/(u*u));n&&"0"!==n&&(r.translateX=n);f&&"0"!==n&&(r.translateY=f);1!==J&&(r.scaleX=
J);1!==g&&(r.scaleY=g);t&&(r.skewX=t);u&&(r.skewY=u);0!==e&&(r.rotate=180/q*e+"deg");return r}function R(a,b,c){var d=c,f=0;b=b&&2===b.length?b[0]:b;c&&2===c.length&&(d=c[0],f=c[1]||0);return b+(d-b)*a+f}function W(a,b,c){var f={start:{},end:{}};a=w.getComputedStyle(a);var g,l,h,k,e;if(c)f.start[A]=a[A],f.end[A]="";else{e={start:{translateZ:0},end:{translateZ:0}};k=a[A];var q=K.exec(k);h={};if(q)if("matrix"===q[1])h=V.apply(null,q[2].split(/[\s,]+/));else for(;q;)h[q[1]]=q[2],q=K.exec(k);for(l in h)k=
x[l](h[l],!0),e.start[l]=k,e.end[l]=k;f.transforms=e}for(g in b)k=b[g],x[g]?c?f.end[A]+=x[g](k):(e.start[g]=z(e.start[g]||x[g](null,!0)),e.end[g]=z(k)):(l=d.prefixedProp(g),h=a[l],c||(h=z(h),k=z(k)),f.start[l]=h,f.end[l]=k);return f}function y(){}function S(a,b,c,e){function n(b){var e=c;b.length&&(e=d.extend({},c,b[1]),b=b[0]);e.frameStart.call(a,a);d.each(a,function(a,c){var h=a.nodeType,k=h&&!e.disableAnimate&&a.animate,l=h?a.style:a,r={},n={},p={},w=e.stagger*c,z=e.delay,E=y;if(h)r=W(a,b,k),n=
r.start,p=r.end;else for(m in b)n[m]=l[m],p[m]=b[m];e.itemStart.call(a,a,c);if(k){var k=d.extend({},e,{delay:z+w}),E=a.animate([n,p],k),L;if("alternate"===C&&F%2||"normal"===C)L=p;E.addEventListener("finish",function(b){if(L)for(m in L)l[m]=L[m];v(a,c)})}else{var H=e.duration,G=Date.now(),N=G+z+w,K=f(e.easing)||B.linear,F=e.iterations,C=e.direction,O="reverse"===C||"alternate-reverse"===C,M=r.transforms,D=0,P,m,Q,E=function(){G=Date.now();if(!(G<N)){D=(G-N)/H;1<D&&(D=1);P=K(O?1-D:D);for(m in p)l[m]=
R(P,n[m],p[m]);if(h&&M){Q="";for(m in M.end)Q+=x[m](R(P,M.start[m],M.end[m]));l[A]=Q}if(!1===e.itemProgress.call(a,a,c))return!1;if(1<=D){if("alternate"===C||"alternate-reverse"===C)O=!O;if(1>=F)return v(a,c),!1;1<F&&Infinity!==F&&F--;N=G}}};g.push(E);g.play()}return E})}a=a.length?a:[a];b=b.length?b:[b];c=d.extend({},X,c);var l=a.length,h=0,k=b.length,v=function(d,e){c.itemComplete.call(d,d,e);l--;l||(c.frameComplete.call(a,a),h++,h<k?(l=a.length,n(b[h])):c.complete.call(a,a))};c.start.call(a,a);
n(b[h])}var w=window,H=w.requestAnimationFrame||w.webkitRequestAnimationFrame||w.mozRequestAnimationFrame||w.msRequestAnimationFrame||function(a){w.setTimeout(a,20)},g=[];g.play=function(){g.frame=g.frame||H(p);g.playing=!0};d.animations=g;var B={linear:function(a){return a}},T=/cubic-bezier\(([\d\.]+),\s+?([\d\.]+),\s+?([\d\.]+),\s+?([\d\.]+)\)/i;d.extend(B,{ease:f(.25,.1,.25,1),"ease-in":f(.42,0,1,1),"ease-out":f(0,0,.58,1),"ease-in-out":f(.42,0,.58,1)});d.easings=B;var A=d.prefixedProp("transform"),
x={};d.each("rotate rotateX rotateY rotateZ skew skewX skewY".split(" "),function(a){x[a]=e(a,"0deg")});d.each(["x","y","z"],function(a){var b="translate"+a.toUpperCase();x[b]=x[a]=e(b,0)});d.each(["scale","scaleX","scaleY","scaleZ"],function(a){x[a]=e(a,1)});var U=/(-?[0-9]+(?:\.[0-9]+)?)([a-z%]+)?$/i,K=/([a-z]+)\((.*?)\)/ig,X={iterations:1,duration:400,easing:"linear",delay:0,stagger:0,reversed:!1,direction:"normal",fill:"both",start:y,complete:y,itemStart:y,itemProgress:y,itemComplete:y,frameStart:y,
frameComplete:y};d.animate=function(a,b,c){return new S(a,b,c)};d.fn.animate=function(a,b){return new S(this,a,b)}})(window.$);



/*-----------------------------------------------------

  CUSTOM STUFF

-----------------------------------------------------*/


// custom sequence function
function _s(d,a,b){a=a||0;b=b||d.length;var c=d[a];a+1<b&&(c.opts.complete=function(){_s(d,a+1,b)});c.e.animate(c.frame,c.opts)};





/*-----------------------------------------------------

  VARS + SELECTORS

-----------------------------------------------------*/


// easings

var outCust =  'cubic-bezier(0.26, 0.97, 0.5, 1)',
    outQuint = 'cubic-bezier(0.23, 1, 0.32, 1)',
    inQuint = 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
    outBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

var outEase = outQuint, // set here = easier to change all later
    inEase = inQuint;

// selectors

var card = $('.card'),
    frontElems = card.find('.popPhoto, .buddy, .right .head, .sub, .stats'),
    loader = $('#loader'),
    popPhoto = card.find('.popPhoto'),
    back = card.find('.back'),
    backClose = back.find('.close'),
    backImages = back.find('img'),
    playAll = $('#playAll');




/*-----------------------------------------------------

  SEQUENCES

-----------------------------------------------------*/

var seq_intro = [
  { e: card, frame: { y: 0, opacity: 1 }, opts: { duration: 500, easing: outEase } },
  { e: frontElems, frame: { y: 0, opacity: 1 }, opts: { duration: 300, easing: outEase, stagger: 60 }  }
];

var seq_outro = [
  { e: frontElems, frame: { y: '100px', opacity: 0 }, opts: { duration: 200, easing: inEase, stagger: 60 }  },
  { e: card, frame: { y: '100px', opacity: 0 }, opts: { duration: 500, easing: inEase } },
];


// sequence 'popular photos' click
var seq_backOpen = [
  { e: popPhoto, frame: { scale: 0.9 }, opts: { duration: 60, easing: 'ease-in-out' } },
  { e: popPhoto, frame: { scale: 1 }, opts: { duration: 60, easing: 'ease-in-out' } },
  { e: popPhoto, frame: { y: '100px' }, opts: { duration: 120, easing: 'ease-in' } },
  { e: back, frame: { y: 0 }, opts: { duration: 400, easing: outEase } },
  { e: backImages, frame: { y: 0, opacity: 1 }, opts: { duration: 400, stagger: 30, easing: outEase } },
  { e: backClose, frame: { y: 0, opacity: 1, rotate: '180deg' }, opts: { duration: 400, easing: outEase } },
  { e: backClose, frame: { rotate: 0 }, opts: { duration: 1000, easing: 'ease-in-out' } }
];

// close 'back'
var seq_backClose = [
  { e: backClose, frame: { y: '-30px', opacity: 0 }, opts: { duration: 120, easing: inEase } },
  { e: back, frame: { y: '100%' }, opts: { duration: 250, easing: inEase } },
  { e: backImages, frame: { y: '60px', opacity: 0 }, opts: { duration: 0 } }, // reset
  { e: popPhoto, frame: { y: 0 }, opts: { duration: 400, easing: outEase } },
];




// lastAll
// ! err -- need to know when an entire sequence is done, slighly awful
var lastAll = [
  { e: playAll, frame: { y: 0 }, opts: { duration: 1, complete: function(){ finishPlayAll(); } }}
]; // needed to know when done

// no delays in-between, so add delay-frame
var _dFrame = [
  { e: playAll, frame: { y: 0 }, opts: { duration: 300  }}
];

// combine them all, err: concat() fail so this ugly stuff instead:
var seq_playAll = [
  
  { e: frontElems, frame: { y: '100px', opacity: 0 }, opts: { duration: 200, easing: inEase, stagger: 60 }  },
  { e: card, frame: { y: '100px', opacity: 0 }, opts: { duration: 500, easing: inEase } },
  
  _dFrame[0],
  
  { e: card, frame: { y: 0, opacity: 1 }, opts: { duration: 500, easing: outEase } },
  { e: frontElems, frame: { y: 0, opacity: 1 }, opts: { duration: 300, easing: outEase, stagger: 60 }  },
  
  _dFrame[0],
  
  { e: popPhoto, frame: { scale: 0.9 }, opts: { duration: 60, easing: 'ease-in-out' } },
  { e: popPhoto, frame: { scale: 1 }, opts: { duration: 60, easing: 'ease-in-out' } },
  { e: popPhoto, frame: { y: '100px' }, opts: { duration: 120, easing: 'ease-in' } },
  { e: back, frame: { y: 0 }, opts: { duration: 400, easing: outEase } },
  { e: backImages, frame: { y: 0, opacity: 1 }, opts: { duration: 400, stagger: 30, easing: outEase } },
  { e: backClose, frame: { y: 0, opacity: 1, rotate: '180deg' }, opts: { duration: 400, easing: outEase } },
  { e: backClose, frame: { rotate: 0 }, opts: { duration: 1000, easing: 'ease-in-out' } },
  
  _dFrame[0],
  
  { e: backClose, frame: { y: '-30px', opacity: 0 }, opts: { duration: 120, easing: inEase } },
  { e: back, frame: { y: '100%' }, opts: { duration: 250, easing: inEase } },
  { e: backImages, frame: { y: '60px', opacity: 0 }, opts: { duration: 0 } }, // reset
  { e: popPhoto, frame: { y: 0 }, opts: { duration: 400, easing: outEase } },
  
  lastAll[0]
  
];




/*-----------------------------------------------------

  ACTIONS

-----------------------------------------------------*/

// make sure all images has loaded
$(window).on('load', function(){

  setTimeout(function(){ // force wait
    
    loader.removeClass('load'); // remove loader
    _s(seq_intro); // intro sequence
    
  }, 1000);
  
});


popPhoto.on('click', function(){
  _s(seq_backOpen);
})

back.on('click', '.close', function(){
  _s(seq_backClose);
})


// playAll clicks

playAll.on('click', function(){
  
  var t = $(this);
  
  if(!t.hasClass('playing')){
    t.addClass('playing');
    t.text('Playing');
    
    _s(seq_playAll);
    
  }
  
})

function finishPlayAll(){
  playAll.text('Awesome!').addClass('awesome');
  setTimeout(function(){
    playAll.text('Play all');
    playAll[0].className = 'btn';
  }, 1000);
}