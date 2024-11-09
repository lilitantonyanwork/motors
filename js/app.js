function isWebp(){
  function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {

    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });
}

isWebp();


(function(r,o){typeof exports=="object"&&typeof module<"u"?module.exports=o():typeof define=="function"&&define.amd?define(o):(r=typeof globalThis<"u"?globalThis:r||self,r.HystModal=o())})(this,function(){"use strict";var D=Object.defineProperty;var z=(r,o,d)=>o in r?D(r,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[o]=d;var u=(r,o,d)=>(z(r,typeof o!="symbol"?o+"":o,d),d);/**
 * tua-body-scroll-lock v1.2.1
 * (c) 2021 Evinma, BuptStEve
 * @license MIT
 */var r=function(){return typeof window>"u"},o=function(e){e=e||navigator.userAgent;var t=/(iPad).*OS\s([\d_]+)/.test(e),s=!t&&/(iPhone\sOS)\s([\d_]+)/.test(e),n=/(Android);?[\s/]+([\d.]+)?/.test(e),i=s||t;return{ios:i,android:n}};function d(c){if(r())return!1;if(!c)throw new Error("options must be provided");var e=!1,t={get passive(){e=!0}},s=function(){},n="__TUA_BSL_TEST_PASSIVE__";window.addEventListener(n,s,t),window.removeEventListener(n,s,t);var i=c.capture;return e?c:typeof i<"u"?i:!1}var v=0,S=0,O=0,m=null,f=!1,h=[],L=d({passive:!1}),M=!r()&&"scrollBehavior"in document.documentElement.style,T=function(){var e=document.body,t=Object.assign({},e.style),s=window.innerWidth-e.clientWidth;return e.style.overflow="hidden",e.style.boxSizing="border-box",e.style.paddingRight="".concat(s,"px"),function(){["overflow","boxSizing","paddingRight"].forEach(function(n){e.style[n]=t[n]||""})}},E=function(){var e=document.documentElement,t=document.body,s=e.scrollTop||t.scrollTop,n=Object.assign({},e.style),i=Object.assign({},t.style);return e.style.height="100%",e.style.overflow="hidden",t.style.top="-".concat(s,"px"),t.style.width="100%",t.style.height="auto",t.style.position="fixed",t.style.overflow="hidden",function(){e.style.height=n.height||"",e.style.overflow=n.overflow||"",["top","width","height","overflow","position"].forEach(function(l){t.style[l]=i[l]||""}),M?window.scrollTo({top:s,behavior:"instant"}):window.scrollTo(0,s)}},g=function(e){e.cancelable&&e.preventDefault()},A=function(e,t){if(t){var s=t.scrollTop,n=t.scrollLeft,i=t.scrollWidth,l=t.scrollHeight,a=t.clientWidth,p=t.clientHeight,w=e.targetTouches[0].clientX-O,b=e.targetTouches[0].clientY-S,k=Math.abs(b)>Math.abs(w),j=b>0&&s===0,C=w>0&&n===0,P=w<0&&n+a+1>=i,I=b<0&&s+p+1>=l;if(k&&(j||I)||!k&&(C||P))return g(e)}return e.stopPropagation(),!0},B=function(e){e||e!==null&&process.env.NODE_ENV!=="production"&&console.warn("If scrolling is also required in the floating layer, the target element must be provided.")},x=function(e){if(!r()){if(B(e),o().ios){if(e){var t=Array.isArray(e)?e:[e];t.forEach(function(s){s&&h.indexOf(s)===-1&&(s.ontouchstart=function(n){S=n.targetTouches[0].clientY,O=n.targetTouches[0].clientX},s.ontouchmove=function(n){n.targetTouches.length===1&&A(n,s)},h.push(s))})}f||(document.addEventListener("touchmove",g,L),f=!0)}else v<=0&&(m=o().android?E():T());v+=1}},_=function(){if(!r()){if(v=0,!o().ios&&typeof m=="function"){m();return}if(h.length)for(var e=h.pop();e;)e.ontouchmove=null,e.ontouchstart=null,e=h.pop();f&&(document.removeEventListener("touchmove",g,L),f=!1)}};const W="";class y{constructor(e){u(this,"stopTrigger",!1);u(this,"openedModals",[]);u(this,"isBodyLocked",!1);u(this,"isBusy",!1);u(this,"config",{linkAttributeName:"data-hystmodal",closeOnEsc:!0,closeOnOverlay:!0,closeOnButton:!0,catchFocus:!0,isStacked:!1,backscroll:!0,waitTransitions:!1,fixedSelectors:["[data-hystfixed]"]});u(this,"focusElements",["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])']);this.config=Object.assign(this.config,e),this.eventsFeeler()}init(){return this}eventsFeeler(){let e=!1;document.addEventListener("click",t=>{const s=t.target,n=s.closest(`[${this.config.linkAttributeName}]`);if(n&&!this.isBusy){this.isBusy=!0,t.preventDefault();const a=this.config.linkAttributeName,p=a?n.getAttribute(a):null;p&&this.open(p,n.hasAttribute("data-stacked"),n);return}const i=s.closest("[data-hystclose]");if(this.config.closeOnButton&&i&&!this.isBusy){this.isBusy=!0,t.preventDefault();const a=s.closest(".hystmodal");a&&this.close(a);return}if((s.classList.contains("hystmodal")||s.classList.contains("hystmodal__wrap"))&&e&&!this.isBusy){this.isBusy=!0,t.preventDefault();const a=s.closest(".hystmodal");a&&this.close(a)}}),document.addEventListener("mousedown",({target:t})=>{e=!1,!(!this.config.closeOnOverlay||!(t instanceof HTMLElement)||!(t.classList.contains("hystmodal")||t.classList.contains("hystmodal__wrap")))&&(e=!0)}),window.addEventListener("keydown",t=>{var s;if(this.config.closeOnEsc&&t.key==="Escape"&&this.openedModals.length&&!this.isBusy){t.preventDefault(),this.isBusy=!0,this.close((s=this.openedModals[this.openedModals.length-1])==null?void 0:s.element);return}this.config.catchFocus&&t.key==="Tab"&&this.openedModals.length&&this.focusCatcher(t)})}async openObj(e,t=!1){if(this.config.beforeOpen&&this.config.beforeOpen(e,this),this.stopTrigger){this.stopTrigger=!1;return}if(this.config.isStacked||t){const i=this.openedModals.filter(l=>l.element===e.element);await Promise.all(i.map(async l=>{await this.closeObj(l,!1,!0,!1)}))}else await this.closeAll(),this.openedModals=[];if(this.isBodyLocked||this.bodyScrollControl(e,"opening"),!e.element.querySelector(".hystmodal__window")){console.error("Warning: selector .hystmodal__window not found in modal window"),this.isBusy=!1;return}this.openedModals.push(e),e.element.classList.add("hystmodal--animated"),e.element.classList.add("hystmodal--active"),e.element.style.zIndex=e.zIndex.toString(),e.element.setAttribute("aria-hidden","false");const n=getComputedStyle(e.element).getPropertyValue("--hystmodal-speed");this.focusIn(e.element),setTimeout(()=>{e.element.classList.remove("hystmodal--animated"),this.isBusy=!1},y.cssParseSpeed(n))}async open(e,t=this.config.isStacked,s=null){const n=this.getActiveModal(),i=e?document.querySelector(e):null;if(!i){console.error("Warning: selector .hystmodal__window not found in modal window"),this.isBusy=!1;return}const l=getComputedStyle(i).getPropertyValue("--hystmodal-zindex"),a={element:i,openedWindow:i,starter:s,zIndex:n?n.zIndex+this.openedModals.length:parseInt(l,10),config:this.config,isOpened:!1};await this.openObj(a,t),this.isBusy=!1}closeObj(e,t=!1,s=!1,n=!0){return new Promise(i=>{if(!e)return;this.config.waitTransitions&&!s&&(e.element.classList.add("hystmodal--animated"),e.element.classList.add("hystmodal--moved")),e.element.classList.remove("hystmodal--active");const l=getComputedStyle(e.element).getPropertyValue("--hystmodal-speed");e.element.setAttribute("aria-hidden","false"),this.openedModals=this.openedModals.filter(a=>a.element!==e.element),setTimeout(()=>{e.element.classList.remove("hystmodal--animated"),e.element.classList.remove("hystmodal--moved"),e.element.style.zIndex="",this.config.backscroll&&!this.openedModals.length&&t&&(_(),this.bodyScrollControl(e,"closing"),this.isBodyLocked=!1),this.config.catchFocus&&e.starter&&n&&e.starter.focus(),this.config.afterClose&&this.config.afterClose(e,this),i(e)},this.config.waitTransitions&&!s?y.cssParseSpeed(l):0)})}async close(e=null){if(!e){const s=await this.closeAll();return s.length?s[s.length-1]:null}const t=this.openedModals.find(s=>s.element===e);return t?(await this.closeObj(t,!0),this.isBusy=!1,t):null}async closeAll(){const e=[];return await Promise.all(this.openedModals.map(async t=>{await this.closeObj(t,!0),e.push(t)})),this.openedModals=[],this.isBusy=!1,e}focusIn(e){if(!this.openedModals.length)return;const t=Array.from(e.querySelectorAll(this.focusElements.join(", ")));t.length&&t[0].focus()}focusCatcher(e){const t=this.openedModals[this.openedModals.length-1],s=Array.from(t.element.querySelectorAll(this.focusElements.join(", ")));if(!t.element.contains(document.activeElement))s[0].focus(),e.preventDefault();else{if(!document.activeElement)return;const n=s.indexOf(document.activeElement);e.shiftKey&&n===0&&(s[s.length-1].focus(),e.preventDefault()),!e.shiftKey&&n===s.length-1&&(s[0].focus(),e.preventDefault())}}static cssParseSpeed(e){const t=parseFloat(e),s=e.match(/m?s/),n=s?s[0]:null;let i=0;switch(n){case"s":i=t*1e3;break;case"ms":i=t;break}return i}getActiveModal(){return this.openedModals.length?this.openedModals[this.openedModals.length-1]:null}bodyScrollControl(e,t){const s=Array.from(this.config.fixedSelectors?document.querySelectorAll(this.config.fixedSelectors.join(", ")):[]);if(t==="closing"){if(this.openedModals.length)return;s.forEach(i=>{i.style.marginRight=""}),document.documentElement.classList.remove("hystmodal__opened");return}if(this.config.backscroll&&!this.isBodyLocked){const i=Array.from(e.element.querySelectorAll("[data-needscroll], .ss-list"));i.push(e.element),x(i),this.isBodyLocked=!0}const n=parseFloat(document.body.style.paddingRight);n&&s.forEach(i=>{i.style.marginRight=`${parseInt(getComputedStyle(i).marginRight,10)+n}px`}),document.documentElement.classList.add("hystmodal__opened")}}return y});



const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
});


const tabButtons = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.content');

if (tabButtons && tabContents) {
  tabButtons.forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      const tabId = tabBtn.getAttribute('data-id');

      tabButtons.forEach((btn) => btn.classList.remove('tab--active'));
      tabBtn.classList.add('tab--active');

      tabContents.forEach((content) => {
        content.classList.remove('content--active');

        if (content.id === tabId) {
          content.classList.add('content--active');
        }
      });
    });
  });
}



const tabButtonsInner = document.querySelectorAll('.tab-inner');
const tabContentsInner = document.querySelectorAll('.content-inner');

if (tabButtonsInner && tabContentsInner) {
  tabButtonsInner.forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      const tabId = tabBtn.getAttribute('data-id');

      tabButtonsInner.forEach((btn) => btn.classList.remove('tab-inner--active'));
      tabBtn.classList.add('tab-inner--active');

      tabContentsInner.forEach((content) => {
        content.classList.remove('content-inner--active');

        if (content.id === tabId) {
          content.classList.add('content-inner--active');
        }
      });
    });
  });
}


const tabButtonsInnerTabs = document.querySelectorAll('.tab-btn');
const tabContentsInnerBlock = document.querySelectorAll('.content-inner__tab-content');

if (tabButtonsInnerTabs && tabContentsInnerBlock) {
    tabButtonsInnerTabs.forEach((tabBtn) => {
        tabBtn.addEventListener('click', () => {
            const tabId = tabBtn.getAttribute('data-id');

            tabButtonsInnerTabs.forEach((btn) => btn.classList.remove('tab-btn--active'));
            tabBtn.classList.add('tab-btn--active');

            tabContentsInnerBlock.forEach((content) => {
                content.classList.remove('content-inner--active');

                if (content.id === tabId) {
                    content.classList.add('content-inner--active');
                }
            });
        });
    });
}

document.getElementById("menu").addEventListener("click", displayUserManu);

function displayUserManu(){
    let menu = document.getElementById("dropdown");
    menu.classList.toggle('show');
}

window.onload = function(){

    var popup = document.getElementById('dropdown');

    var openButton = document.getElementById('menu');
    document.onclick = function(e){

        if(e.target.id != 'popup' || e.target.id !=  'openButton'){
            menu.classList.remove('show');
        }

    };
};
