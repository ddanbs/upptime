function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,p=!1;function m(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(r>0&&e[n[r]].claim_order<=o?r+1:m(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[i]+1;const a=i+1;n[a]=t,r=Math.max(a,r)}const o=[],i=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(i[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function S(){return E("")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:N(t,s,e[s])}function I(t){return Array.from(t.childNodes)}function R(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,s,r=!1){R(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function k(t,e,n,s){return L(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function H(t,e,n){return k(t,e,n,w)}function O(t,e,n){return k(t,e,n,y)}function C(t,e){return L(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return C(t," ")}function j(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function D(t,e){const n=j(t,"HTML_TAG_START",0),s=j(t,"HTML_TAG_END",n);if(n===s)return new J(void 0,e);R(t);const r=t.splice(n,s-n+1);_(r[0]),_(r[r.length-1]);const o=r.slice(1,r.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(o,e)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function B(t,e,n,s){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function K(t,e){const n=[];let s=0;for(const r of e.childNodes)if(8===r.nodeType){const e=r.textContent.trim();e===`HEAD_${t}_END`?(s-=1,n.push(r)):e===`HEAD_${t}_START`&&(s+=1,n.push(r))}else s>0&&n.push(r);return n}class W{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=y(e.nodeName):this.e=w(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}class J extends W{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function V(t,e){return new t(e)}function F(t){h=t}function Y(){if(!h)throw new Error("Function called outside component initialization");return h}function X(t){Y().$$.on_mount.push(t)}function Q(t){Y().$$.after_update.push(t)}function Z(t){Y().$$.on_destroy.push(t)}const tt=[],et=[],nt=[],st=[],rt=Promise.resolve();let ot=!1;function it(t){nt.push(t)}const at=new Set;let ct=0;function lt(){if(0!==ct)return;const t=h;do{try{for(;ct<tt.length;){const t=tt[ct];ct++,F(t),ut(t.$$)}}catch(t){throw tt.length=0,ct=0,t}for(F(null),tt.length=0,ct=0;et.length;)et.pop()();for(let t=0;t<nt.length;t+=1){const e=nt[t];at.has(e)||(at.add(e),e())}nt.length=0}while(tt.length);for(;st.length;)st.pop()();ot=!1,at.clear(),F(t)}function ut(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}const dt=new Set;let ft;function ht(){ft={r:0,c:[],p:ft}}function pt(){ft.r||r(ft.c),ft=ft.p}function mt(t,e){t&&t.i&&(dt.delete(t),t.i(e))}function gt(t,e,n,s){if(t&&t.o){if(dt.has(t))return;dt.add(t),ft.c.push((()=>{dt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function bt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[o]=a}else for(const t in i)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function vt(t){return"object"==typeof t&&null!==t?t:{}}function _t(t){t&&t.c()}function $t(t,e){t&&t.l(e)}function wt(t,e,s,i){const{fragment:a,after_update:c}=t.$$;a&&a.m(e,s),i||it((()=>{const e=t.$$.on_mount.map(n).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...e):r(e),t.$$.on_mount=[]})),c.forEach(it)}function yt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){-1===t.$$.dirty[0]&&(tt.push(t),ot||(ot=!0,rt.then(lt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xt(e,n,o,i,a,c,l,u=[-1]){const d=h;F(e);const f=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&Et(e,t)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const t=I(n.target);f.fragment&&f.fragment.l(t),t.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&mt(e.$$.fragment),wt(e,n.target,n.anchor,n.customElement),p=!1,lt()}F(d)}class St{$destroy(){yt(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Tt=[];function At(e,n=t){let s;const r=new Set;function o(t){if(i(e,t)&&(e=t,s)){const t=!Tt.length;for(const t of r)t[1](),Tt.push(t,e);if(t){for(let t=0;t<Tt.length;t+=2)Tt[t][0](Tt[t+1]);Tt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||t),i(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Nt={};var Pt={owner:"ddanbs",repo:"upptime",sites:[{name:"Google",url:"https://www.google.com"},{name:"Wikipedia",url:"https://en.wikipedia.org"},{name:"Hacker News",url:"https://news.ycombinator.com"},{name:"Test Broken Site",url:"https://thissitedoesnotexist.koj.co"},{name:"Danbs",url:"https://danbs.net"}],assignees:["ddanbs"],"status-website":{baseUrl:"/upptime",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Danbs Upptime",introTitle:"**Upptime** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"This is a sample status page which uses **real-time** data from our [GitHub repository](https://github.com/upptime/upptime). No server required — just GitHub Actions, Issues, and Pages. [**Get your own for free**](https://github.com/upptime/upptime)",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://ddanbs.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function It(t,e,n){const s=t.slice();return s[1]=e[n],s}function Rt(e){let n,s,r,o=Pt["status-website"]&&!Pt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=w("img"),this.h()},l(t){n=H(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,s=Pt["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}(),i=Pt["status-website"]&&!Pt["status-website"].hideNavTitle&&function(e){let n,s,r=Pt["status-website"].name+"";return{c(){n=w("div"),s=E(r)},l(t){n=H(t,"DIV",{});var e=I(n);s=C(e,r),e.forEach(_)},m(t,e){v(t,n,e),g(n,s)},p:t,d(t){t&&_(n)}}}();return{c(){n=w("div"),s=w("a"),o&&o.c(),r=x(),i&&i.c(),this.h()},l(t){n=H(t,"DIV",{});var e=I(n);s=H(e,"A",{href:!0,class:!0});var a=I(s);o&&o.l(a),r=U(a),i&&i.l(a),a.forEach(_),e.forEach(_),this.h()},h(){N(s,"href",Pt["status-website"].logoHref||Pt.path),N(s,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(t,e){Pt["status-website"]&&!Pt["status-website"].hideNavLogo&&o.p(t,e),Pt["status-website"]&&!Pt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&_(n),o&&o.d(),i&&i.d()}}}function Lt(t){let e,n,s,r,o,i=t[1].title+"";return{c(){e=w("li"),n=w("a"),s=E(i),o=x(),this.h()},l(t){e=H(t,"LI",{});var r=I(e);n=H(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=I(n);s=C(a,i),a.forEach(_),o=U(r),r.forEach(_),this.h()},h(){N(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",t[1].href.replace("$OWNER",Pt.owner).replace("$REPO",Pt.repo)),N(n,"target",t[1].target||"_self"),N(n,"class","svelte-a08hsz")},m(t,r){v(t,e,r),g(e,n),g(n,s),g(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(t){t&&_(e)}}}function kt(e){let n,s,r,o,i,a=Pt["status-website"]&&Pt["status-website"].logoUrl&&Rt(),c=Pt["status-website"]&&Pt["status-website"].navbar&&function(t){let e,n=Pt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Lt(It(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(1&r){let o;for(n=Pt["status-website"].navbar,o=0;o<n.length;o+=1){const i=It(t,n,o);s[o]?s[o].p(i,r):(s[o]=Lt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),l=Pt["status-website"]&&Pt["status-website"].navbarGitHub&&!Pt["status-website"].navbar&&function(e){let n,s,r,o=Pt.i18n.navGitHub+"";return{c(){n=w("li"),s=w("a"),r=E(o),this.h()},l(t){n=H(t,"LI",{});var e=I(n);s=H(e,"A",{href:!0,class:!0});var i=I(s);r=C(i,o),i.forEach(_),e.forEach(_),this.h()},h(){N(s,"href",`https://github.com/${Pt.owner}/${Pt.repo}`),N(s,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&_(n)}}}();return{c(){n=w("nav"),s=w("div"),a&&a.c(),r=x(),o=w("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(t){n=H(t,"NAV",{class:!0});var e=I(n);s=H(e,"DIV",{class:!0});var u=I(s);a&&a.l(u),r=U(u),o=H(u,"UL",{class:!0});var d=I(o);c&&c.l(d),i=U(d),l&&l.l(d),d.forEach(_),u.forEach(_),e.forEach(_),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){Pt["status-website"]&&Pt["status-website"].logoUrl&&a.p(t,e),Pt["status-website"]&&Pt["status-website"].navbar&&c.p(t,e),Pt["status-website"]&&Pt["status-website"].navbarGitHub&&!Pt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Ht(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Ot extends St{constructor(t){super(),xt(this,t,Ht,kt,i,{segment:0})}}var Ct={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ut(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function jt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dt(t,e){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=Ct[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(d,r.index),d=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ut(jt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Dt(Ut(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+jt(r[8])+'" alt="'+jt(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+jt(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Dt(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+jt(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Mt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Gt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Bt(t,e,n){const s=t.slice();return s[8]=e[n],s}function qt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Pt.path}/themes/${(Pt["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function zt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Pt["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Kt(e){let n,s;return{c(){n=w("script"),this.h()},l(t){n=H(t,"SCRIPT",{src:!0}),I(n).forEach(_),this.h()},h(){c(n.src,s=e[8].src)||N(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Wt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=H(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Jt(e){let n;return{c(){n=w("meta"),this.h()},l(t){n=H(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Vt(e){let n,s,r,o,i,a,c,u,d,f,h,p,m,b,y,E,T,A,P=Dt(Pt.i18n.footer.replace(/\$REPO/,`https://github.com/${Pt.owner}/${Pt.repo}`))+"",R=(Pt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(Pt["status-website"]||{}).customHeadHtml+"";return{c(){n=new J(!1),s=S(),this.h()},l(t){n=D(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();let L=((Pt["status-website"]||{}).themeUrl?zt:qt)(e),k=(Pt["status-website"]||{}).scripts&&function(t){let e,n=(Pt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Kt(Bt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Pt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Bt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Kt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),O=(Pt["status-website"]||{}).links&&function(t){let e,n=(Pt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Wt(Gt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Pt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Gt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Wt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),C=(Pt["status-website"]||{}).metaTags&&function(t){let e,n=(Pt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Jt(Mt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Pt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Mt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Jt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),j=Pt["status-website"].css&&function(e){let n,s,r=`<style>${Pt["status-website"].css}</style>`;return{c(){n=new J(!1),s=S(),this.h()},l(t){n=D(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),M=Pt["status-website"].js&&function(e){let n,s,r=`<script>${Pt["status-website"].js}<\/script>`;return{c(){n=new J(!1),s=S(),this.h()},l(t){n=D(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),G=(Pt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(Pt["status-website"]||{}).customBodyHtml+"";return{c(){n=new J(!1),s=S(),this.h()},l(t){n=D(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();p=new Ot({props:{segment:e[0]}});const B=e[2].default,q=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(B,e,e[1],null);return{c(){R&&R.c(),n=S(),L.c(),s=w("link"),r=w("link"),o=w("link"),k&&k.c(),i=S(),O&&O.c(),a=S(),C&&C.c(),c=S(),j&&j.c(),u=S(),M&&M.c(),d=S(),f=x(),G&&G.c(),h=x(),_t(p.$$.fragment),m=x(),b=w("main"),q&&q.c(),y=x(),E=w("footer"),T=w("p"),this.h()},l(t){const e=K("svelte-fmspuk",document.head);R&&R.l(e),n=S(),L.l(e),s=H(e,"LINK",{rel:!0,href:!0}),r=H(e,"LINK",{rel:!0,type:!0,href:!0}),o=H(e,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(e),i=S(),O&&O.l(e),a=S(),C&&C.l(e),c=S(),j&&j.l(e),u=S(),M&&M.l(e),d=S(),e.forEach(_),f=U(t),G&&G.l(t),h=U(t),$t(p.$$.fragment,t),m=U(t),b=H(t,"MAIN",{class:!0});var l=I(b);q&&q.l(l),l.forEach(_),y=U(t),E=H(t,"FOOTER",{class:!0});var g=I(E);T=H(g,"P",{}),I(T).forEach(_),g.forEach(_),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${Pt.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(Pt["status-website"]||{}).faviconSvg||(Pt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Pt["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(t,e){R&&R.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),C&&C.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,d),v(t,f,e),G&&G.m(t,e),v(t,h,e),wt(p,t,e),v(t,m,e),v(t,b,e),q&&q.m(b,null),v(t,y,e),v(t,E,e),g(E,T),T.innerHTML=P,A=!0},p(t,[e]){(Pt["status-website"]||{}).customHeadHtml&&R.p(t,e),L.p(t,e),(Pt["status-website"]||{}).scripts&&k.p(t,e),(Pt["status-website"]||{}).links&&O.p(t,e),(Pt["status-website"]||{}).metaTags&&C.p(t,e),Pt["status-website"].css&&j.p(t,e),Pt["status-website"].js&&M.p(t,e),(Pt["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),q&&q.p&&(!A||2&e)&&function(t,e,n,s,r,o){if(r){const i=l(e,n,s,o);t.p(i,r)}}(q,B,t,t[1],A?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(B,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(mt(p.$$.fragment,t),mt(q,t),A=!0)},o(t){gt(p.$$.fragment,t),gt(q,t),A=!1},d(t){R&&R.d(t),_(n),L.d(t),_(s),_(r),_(o),k&&k.d(t),_(i),O&&O.d(t),_(a),C&&C.d(t),_(c),j&&j.d(t),_(u),M&&M.d(t),_(d),t&&_(f),G&&G.d(t),t&&_(h),yt(p,t),t&&_(m),t&&_(b),q&&q.d(t),t&&_(y),t&&_(E)}}}function Ft(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Yt extends St{constructor(t){super(),xt(this,t,Ft,Vt,i,{segment:0})}}function Xt(t){let e,n,s=t[1].stack+"";return{c(){e=w("pre"),n=E(s)},l(t){e=H(t,"PRE",{});var r=I(e);n=C(r,s),r.forEach(_)},m(t,s){v(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&M(n,s)},d(t){t&&_(e)}}}function Qt(e){let n,s,r,o,i,a,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Xt(e);return{c(){s=x(),r=w("h1"),o=E(e[0]),i=x(),a=w("p"),c=E(d),l=x(),f&&f.c(),u=S(),this.h()},l(t){K("svelte-1moakz",document.head).forEach(_),s=U(t),r=H(t,"H1",{class:!0});var n=I(r);o=C(n,e[0]),n.forEach(_),i=U(t),a=H(t,"P",{class:!0});var h=I(a);c=C(h,d),h.forEach(_),l=U(t),f&&f.l(t),u=S(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(t,e){v(t,s,e),v(t,r,e),g(r,o),v(t,i,e),v(t,a,e),g(a,c),v(t,l,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&M(o,t[0]),2&e&&d!==(d=t[1].message+"")&&M(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Xt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&_(s),t&&_(r),t&&_(i),t&&_(a),t&&_(l),f&&f.d(t),t&&_(u)}}}function Zt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class te extends St{constructor(t){super(),xt(this,t,Zt,Qt,i,{status:0,error:1})}}function ee(t){let n,s,r;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=V(i,a())),{c(){n&&_t(n.$$.fragment),s=S()},l(t){n&&$t(n.$$.fragment,t),s=S()},m(t,e){n&&wt(n,t,e),v(t,s,e),r=!0},p(t,e){const r=16&e?bt(o,[vt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ht();const t=n;gt(t.$$.fragment,1,0,(()=>{yt(t,1)})),pt()}i?(n=V(i,a()),_t(n.$$.fragment),mt(n.$$.fragment,1),wt(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(t){r||(n&&mt(n.$$.fragment,t),r=!0)},o(t){n&&gt(n.$$.fragment,t),r=!1},d(t){t&&_(s),n&&yt(n,t)}}}function ne(t){let e,n;return e=new te({props:{error:t[0],status:t[1]}}),{c(){_t(e.$$.fragment)},l(t){$t(e.$$.fragment,t)},m(t,s){wt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){gt(e.$$.fragment,t),n=!1},d(t){yt(e,t)}}}function se(t){let e,n,s,r;const o=[ne,ee],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),s=S()},l(t){n.l(t),s=S()},m(t,n){i[e].m(t,n),v(t,s,n),r=!0},p(t,r){let c=e;e=a(t),e===c?i[e].p(t,r):(ht(),gt(i[c],1,1,(()=>{i[c]=null})),pt(),n=i[e],n?n.p(t,r):(n=i[e]=o[e](t),n.c()),mt(n,1),n.m(s.parentNode,s))},i(t){r||(mt(n),r=!0)},o(t){gt(n),r=!1},d(t){i[e].d(t),t&&_(s)}}}function re(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[se]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Yt({props:o}),{c(){_t(n.$$.fragment)},l(t){$t(n.$$.fragment,t)},m(t,e){wt(n,t,e),s=!0},p(t,[e]){const s=12&e?bt(r,[4&e&&{segment:t[2][0]},8&e&&vt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(mt(n.$$.fragment,t),s=!0)},o(t){gt(n.$$.fragment,t),s=!1},d(t){yt(n,t)}}}function oe(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return Q(l),u=Nt,d=s,Y().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,i,a,c,s,l]}class ie extends St{constructor(t){super(),xt(this,t,oe,re,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ae=[],ce=[{js:()=>Promise.all([import("./index.3b4994d3.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.7fb6409a.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.3593db5e.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.111e8b3a.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.4ea95a84.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],le=(ue=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ue(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ue(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ue;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function de(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{c(s.next(t))}catch(t){o(t)}}function a(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))}function fe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let he,pe=1;const me="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ge={};let be,ve;const _e=t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]}));function $e(t){const e=Object.create(null);return t.length?_e(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function we(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(be))return null;let e=t.pathname.slice(be.length);if(""===e&&(e="/"),!ae.some((t=>t.test(e))))for(let n=0;n<le.length;n+=1){const s=le[n],r=s.pattern.exec(e);if(r){const n=$e(t.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:s,match:r,page:a}}}}function ye(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=fe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=we(r);if(o){Se(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),me.pushState({id:he},"",r.href)}}function Ee(){return{x:pageXOffset,y:pageYOffset}}function xe(t){if(ge[he]=Ee(),t.state){const e=we(new URL(location.href));e?Se(e,t.state.id):location.href=location.href}else!function(t){pe=t}(pe+1),function(t){he=t}(pe),me.replaceState({id:he},"",location.href)}function Se(t,e,n,s){return de(this,void 0,void 0,(function*(){const r=!!e;if(r)he=e;else{const t=Ee();ge[he]=t,he=e=++pe,ge[he]=n?t:{x:0,y:0}}if(yield ve(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=ge[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),ge[he]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Te(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ae,Ne=null;function Pe(t){const e=fe(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=we(new URL(t,Te(document)));if(e)Ne&&t===Ne.href||(Ne={href:t,promise:We(e)}),Ne.promise}(e.href)}function Ie(t){clearTimeout(Ae),Ae=setTimeout((()=>{Pe(t)}),20)}function Re(t,e={noscroll:!1,replaceState:!1}){const n=we(new URL(t,Te(document)));if(n){const s=Se(n,null,e.noscroll);return me[e.replaceState?"replaceState":"pushState"]({id:he},"",t),s}return location.href=t,new Promise((()=>{}))}const Le="undefined"!=typeof __SAPPER__&&__SAPPER__;let ke,He,Oe,Ce=!1,Ue=[],je="{}";const De={page:function(t){const e=At(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:At(null),session:At(Le&&Le.session)};let Me,Ge,Be;function qe(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ze(t){return de(this,void 0,void 0,(function*(){ke&&De.preloading.set(!0);const e=function(t){return Ne&&Ne.href===t.href?Ne.promise:We(t)}(t),n=He={},s=yield e,{redirect:r}=s;if(n===He)if(r)yield Re(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Ke(n,e,qe(e,t.page))}}))}function Ke(t,e,n){return de(this,void 0,void 0,(function*(){De.page.set(n),De.preloading.set(!1),ke?ke.$set(e):(e.stores={page:{subscribe:De.page.subscribe},preloading:{subscribe:De.preloading.subscribe},session:De.session},e.level0={props:yield Oe},e.notify=De.page.notify,ke=new ie({target:Be,props:e,hydrate:!0})),Ue=t,je=JSON.stringify(n.query),Ce=!0,Ge=!1}))}function We(t){return de(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Oe){const t=()=>({});Oe=Le.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Me)}let a,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>de(this,void 0,void 0,(function*(){const d=s[a];if(function(t,e,n,s){if(s!==je)return!0;const r=Ue[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,d,l,r)&&(u=!0),o.segments[c]=s[a+1],!e)return{segment:d};const f=c++;let h;if(Ge||u||!Ue[a]||Ue[a].part!==e.i){u=!1;const{default:s,preload:r}=yield ce[e.i].js();let o;o=Ce||!Le.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Me):{}:Le.preloaded[a+1],h={component:s,props:o,segment:d,match:l,part:e.i}}else h=Ue[a];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Je,Ve,Fe;De.session.subscribe((t=>de(void 0,void 0,void 0,(function*(){if(Me=t,!Ce)return;Ge=!0;const e=we(new URL(location.href)),n=He={},{redirect:s,props:r,branch:o}=yield We(e);n===He&&(s?yield Re(s.location,{replaceState:!0}):yield Ke(o,r,qe(r,e.page)))})))),Je={target:document.querySelector("#sapper")},Ve=Je.target,Be=Ve,Fe=Le.baseUrl,be=Fe,ve=ze,"scrollRestoration"in me&&(me.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{me.scrollRestoration="auto"})),addEventListener("load",(()=>{me.scrollRestoration="manual"})),addEventListener("click",ye),addEventListener("popstate",xe),addEventListener("touchstart",Pe),addEventListener("mousemove",Ie),Le.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Le;Oe||(Oe=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:Oe},level1:{props:{status:o,error:i},component:te},segments:r},c=$e(n);Ke([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;me.replaceState({id:pe},"",e);const n=we(new URL(location.href));if(n)return Se(n,pe,!0,t)}));export{M as A,T as B,r as C,et as D,D as E,c as F,d as G,J as H,B as I,K as J,Dt as K,y as L,O as M,Re as N,G as O,A as P,e as Q,P as R,St as S,bt as T,Q as U,Z as V,u as W,vt as X,it as Y,z as Z,x as a,H as b,U as c,I as d,w as e,_ as f,N as g,v as h,xt as i,ht as j,pt as k,mt as l,E as m,C as n,X as o,g as p,t as q,Pt as r,i as s,gt as t,S as u,$ as v,_t as w,$t as x,wt as y,yt as z};

import __inject_styles from './inject_styles.803b7e80.js';