import{aF as tr}from"./index-CieCtWkI.js";var vr=Nr;function Nr(e){e=e||{};var t=e.max||Number.MAX_SAFE_INTEGER,r=typeof e.start<"u"?e.start:Math.floor(Math.random()*t);return function(){return r=r%t,r++}}const Ln=tr(vr);var Re={exports:{}},de,_e;function Or(){if(_e)return de;_e=1;var e=1e3,t=e*60,r=t*60,s=r*24,a=s*7,l=s*365.25;de=function(i,c){c=c||{};var f=typeof i;if(f==="string"&&i.length>0)return u(i);if(f==="number"&&isFinite(i))return c.long?o(i):d(i);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(i))};function u(i){if(i=String(i),!(i.length>100)){var c=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(i);if(c){var f=parseFloat(c[1]),h=(c[2]||"ms").toLowerCase();switch(h){case"years":case"year":case"yrs":case"yr":case"y":return f*l;case"weeks":case"week":case"w":return f*a;case"days":case"day":case"d":return f*s;case"hours":case"hour":case"hrs":case"hr":case"h":return f*r;case"minutes":case"minute":case"mins":case"min":case"m":return f*t;case"seconds":case"second":case"secs":case"sec":case"s":return f*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return f;default:return}}}}function d(i){var c=Math.abs(i);return c>=s?Math.round(i/s)+"d":c>=r?Math.round(i/r)+"h":c>=t?Math.round(i/t)+"m":c>=e?Math.round(i/e)+"s":i+"ms"}function o(i){var c=Math.abs(i);return c>=s?n(i,c,s,"day"):c>=r?n(i,c,r,"hour"):c>=t?n(i,c,t,"minute"):c>=e?n(i,c,e,"second"):i+" ms"}function n(i,c,f,h){var p=c>=f*1.5;return Math.round(i/f)+" "+h+(p?"s":"")}return de}function Sr(e){r.debug=r,r.default=r,r.coerce=o,r.disable=l,r.enable=a,r.enabled=u,r.humanize=Or(),r.destroy=n,Object.keys(e).forEach(i=>{r[i]=e[i]}),r.names=[],r.skips=[],r.formatters={};function t(i){let c=0;for(let f=0;f<i.length;f++)c=(c<<5)-c+i.charCodeAt(f),c|=0;return r.colors[Math.abs(c)%r.colors.length]}r.selectColor=t;function r(i){let c,f=null,h,p;function A(...O){if(!A.enabled)return;const S=A,b=Number(new Date),N=b-(c||b);S.diff=N,S.prev=c,S.curr=b,c=b,O[0]=r.coerce(O[0]),typeof O[0]!="string"&&O.unshift("%O");let x=0;O[0]=O[0].replace(/%([a-zA-Z%])/g,(H,ue)=>{if(H==="%%")return"%";x++;const Z=r.formatters[ue];if(typeof Z=="function"){const fe=O[x];H=Z.call(S,fe),O.splice(x,1),x--}return H}),r.formatArgs.call(S,O),(S.log||r.log).apply(S,O)}return A.namespace=i,A.useColors=r.useColors(),A.color=r.selectColor(i),A.extend=s,A.destroy=r.destroy,Object.defineProperty(A,"enabled",{enumerable:!0,configurable:!1,get:()=>f!==null?f:(h!==r.namespaces&&(h=r.namespaces,p=r.enabled(i)),p),set:O=>{f=O}}),typeof r.init=="function"&&r.init(A),A}function s(i,c){const f=r(this.namespace+(typeof c>"u"?":":c)+i);return f.log=this.log,f}function a(i){r.save(i),r.namespaces=i,r.names=[],r.skips=[];let c;const f=(typeof i=="string"?i:"").split(/[\s,]+/),h=f.length;for(c=0;c<h;c++)f[c]&&(i=f[c].replace(/\*/g,".*?"),i[0]==="-"?r.skips.push(new RegExp("^"+i.slice(1)+"$")):r.names.push(new RegExp("^"+i+"$")))}function l(){const i=[...r.names.map(d),...r.skips.map(d).map(c=>"-"+c)].join(",");return r.enable(""),i}function u(i){if(i[i.length-1]==="*")return!0;let c,f;for(c=0,f=r.skips.length;c<f;c++)if(r.skips[c].test(i))return!1;for(c=0,f=r.names.length;c<f;c++)if(r.names[c].test(i))return!0;return!1}function d(i){return i.toString().substring(2,i.toString().length-2).replace(/\.\*\?$/,"*")}function o(i){return i instanceof Error?i.stack||i.message:i}function n(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return r.enable(r.load()),r}var Lr=Sr;(function(e,t){var r={};t.formatArgs=a,t.save=l,t.load=u,t.useColors=s,t.storage=d(),t.destroy=(()=>{let n=!1;return()=>{n||(n=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function s(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let n;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(n=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(n[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function a(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const i="color: "+this.color;n.splice(1,0,i,"color: inherit");let c=0,f=0;n[0].replace(/%[a-zA-Z%]/g,h=>{h!=="%%"&&(c++,h==="%c"&&(f=c))}),n.splice(f,0,i)}t.log=console.debug||console.log||(()=>{});function l(n){try{n?t.storage.setItem("debug",n):t.storage.removeItem("debug")}catch{}}function u(){let n;try{n=t.storage.getItem("debug")}catch{}return!n&&typeof process<"u"&&"env"in process&&(n=r.DEBUG),n}function d(){try{return localStorage}catch{}}e.exports=Lr(t);const{formatters:o}=e.exports;o.j=function(n){try{return JSON.stringify(n)}catch(i){return"[UnexpectedJSONParseError]: "+i.message}}})(Re,Re.exports);var An=Re.exports,Ce={exports:{}};const Ar="2.0.0",sr=256,yr=Number.MAX_SAFE_INTEGER||9007199254740991,wr=16,Fr=sr-6,Tr=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var ne={MAX_LENGTH:sr,MAX_SAFE_COMPONENT_LENGTH:wr,MAX_SAFE_BUILD_LENGTH:Fr,MAX_SAFE_INTEGER:yr,RELEASE_TYPES:Tr,SEMVER_SPEC_VERSION:Ar,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},he={};const Pr=typeof process=="object"&&he&&he.NODE_DEBUG&&/\bsemver\b/i.test(he.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};var ie=Pr;(function(e,t){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:s,MAX_LENGTH:a}=ne,l=ie;t=e.exports={};const u=t.re=[],d=t.safeRe=[],o=t.src=[],n=t.t={};let i=0;const c="[a-zA-Z0-9-]",f=[["\\s",1],["\\d",a],[c,s]],h=A=>{for(const[O,S]of f)A=A.split(`${O}*`).join(`${O}{0,${S}}`).split(`${O}+`).join(`${O}{1,${S}}`);return A},p=(A,O,S)=>{const b=h(O),N=i++;l(A,N,O),n[A]=N,o[N]=O,u[N]=new RegExp(O,S?"g":void 0),d[N]=new RegExp(b,S?"g":void 0)};p("NUMERICIDENTIFIER","0|[1-9]\\d*"),p("NUMERICIDENTIFIERLOOSE","\\d+"),p("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${c}*`),p("MAINVERSION",`(${o[n.NUMERICIDENTIFIER]})\\.(${o[n.NUMERICIDENTIFIER]})\\.(${o[n.NUMERICIDENTIFIER]})`),p("MAINVERSIONLOOSE",`(${o[n.NUMERICIDENTIFIERLOOSE]})\\.(${o[n.NUMERICIDENTIFIERLOOSE]})\\.(${o[n.NUMERICIDENTIFIERLOOSE]})`),p("PRERELEASEIDENTIFIER",`(?:${o[n.NUMERICIDENTIFIER]}|${o[n.NONNUMERICIDENTIFIER]})`),p("PRERELEASEIDENTIFIERLOOSE",`(?:${o[n.NUMERICIDENTIFIERLOOSE]}|${o[n.NONNUMERICIDENTIFIER]})`),p("PRERELEASE",`(?:-(${o[n.PRERELEASEIDENTIFIER]}(?:\\.${o[n.PRERELEASEIDENTIFIER]})*))`),p("PRERELEASELOOSE",`(?:-?(${o[n.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[n.PRERELEASEIDENTIFIERLOOSE]})*))`),p("BUILDIDENTIFIER",`${c}+`),p("BUILD",`(?:\\+(${o[n.BUILDIDENTIFIER]}(?:\\.${o[n.BUILDIDENTIFIER]})*))`),p("FULLPLAIN",`v?${o[n.MAINVERSION]}${o[n.PRERELEASE]}?${o[n.BUILD]}?`),p("FULL",`^${o[n.FULLPLAIN]}$`),p("LOOSEPLAIN",`[v=\\s]*${o[n.MAINVERSIONLOOSE]}${o[n.PRERELEASELOOSE]}?${o[n.BUILD]}?`),p("LOOSE",`^${o[n.LOOSEPLAIN]}$`),p("GTLT","((?:<|>)?=?)"),p("XRANGEIDENTIFIERLOOSE",`${o[n.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),p("XRANGEIDENTIFIER",`${o[n.NUMERICIDENTIFIER]}|x|X|\\*`),p("XRANGEPLAIN",`[v=\\s]*(${o[n.XRANGEIDENTIFIER]})(?:\\.(${o[n.XRANGEIDENTIFIER]})(?:\\.(${o[n.XRANGEIDENTIFIER]})(?:${o[n.PRERELEASE]})?${o[n.BUILD]}?)?)?`),p("XRANGEPLAINLOOSE",`[v=\\s]*(${o[n.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[n.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[n.XRANGEIDENTIFIERLOOSE]})(?:${o[n.PRERELEASELOOSE]})?${o[n.BUILD]}?)?)?`),p("XRANGE",`^${o[n.GTLT]}\\s*${o[n.XRANGEPLAIN]}$`),p("XRANGELOOSE",`^${o[n.GTLT]}\\s*${o[n.XRANGEPLAINLOOSE]}$`),p("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),p("COERCE",`${o[n.COERCEPLAIN]}(?:$|[^\\d])`),p("COERCEFULL",o[n.COERCEPLAIN]+`(?:${o[n.PRERELEASE]})?(?:${o[n.BUILD]})?(?:$|[^\\d])`),p("COERCERTL",o[n.COERCE],!0),p("COERCERTLFULL",o[n.COERCEFULL],!0),p("LONETILDE","(?:~>?)"),p("TILDETRIM",`(\\s*)${o[n.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",p("TILDE",`^${o[n.LONETILDE]}${o[n.XRANGEPLAIN]}$`),p("TILDELOOSE",`^${o[n.LONETILDE]}${o[n.XRANGEPLAINLOOSE]}$`),p("LONECARET","(?:\\^)"),p("CARETTRIM",`(\\s*)${o[n.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",p("CARET",`^${o[n.LONECARET]}${o[n.XRANGEPLAIN]}$`),p("CARETLOOSE",`^${o[n.LONECARET]}${o[n.XRANGEPLAINLOOSE]}$`),p("COMPARATORLOOSE",`^${o[n.GTLT]}\\s*(${o[n.LOOSEPLAIN]})$|^$`),p("COMPARATOR",`^${o[n.GTLT]}\\s*(${o[n.FULLPLAIN]})$|^$`),p("COMPARATORTRIM",`(\\s*)${o[n.GTLT]}\\s*(${o[n.LOOSEPLAIN]}|${o[n.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",p("HYPHENRANGE",`^\\s*(${o[n.XRANGEPLAIN]})\\s+-\\s+(${o[n.XRANGEPLAIN]})\\s*$`),p("HYPHENRANGELOOSE",`^\\s*(${o[n.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[n.XRANGEPLAINLOOSE]})\\s*$`),p("STAR","(<|>)?=?\\s*\\*"),p("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),p("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(Ce,Ce.exports);var K=Ce.exports;const br=Object.freeze({loose:!0}),_r=Object.freeze({}),jr=e=>e?typeof e!="object"?br:e:_r;var Ne=jr;const je=/^[0-9]+$/,nr=(e,t)=>{const r=je.test(e),s=je.test(t);return r&&s&&(e=+e,t=+t),e===t?0:r&&!s?-1:s&&!r?1:e<t?-1:1},Dr=(e,t)=>nr(t,e);var ir={compareIdentifiers:nr,rcompareIdentifiers:Dr};const Q=ie,{MAX_LENGTH:De,MAX_SAFE_INTEGER:ee}=ne,{safeRe:Ge,t:Ve}=K,Gr=Ne,{compareIdentifiers:z}=ir;let Vr=class G{constructor(t,r){if(r=Gr(r),t instanceof G){if(t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>De)throw new TypeError(`version is longer than ${De} characters`);Q("SemVer",t,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const s=t.trim().match(r.loose?Ge[Ve.LOOSE]:Ge[Ve.FULL]);if(!s)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+s[1],this.minor=+s[2],this.patch=+s[3],this.major>ee||this.major<0)throw new TypeError("Invalid major version");if(this.minor>ee||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>ee||this.patch<0)throw new TypeError("Invalid patch version");s[4]?this.prerelease=s[4].split(".").map(a=>{if(/^[0-9]+$/.test(a)){const l=+a;if(l>=0&&l<ee)return l}return a}):this.prerelease=[],this.build=s[5]?s[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(Q("SemVer.compare",this.version,this.options,t),!(t instanceof G)){if(typeof t=="string"&&t===this.version)return 0;t=new G(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof G||(t=new G(t,this.options)),z(this.major,t.major)||z(this.minor,t.minor)||z(this.patch,t.patch)}comparePre(t){if(t instanceof G||(t=new G(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let r=0;do{const s=this.prerelease[r],a=t.prerelease[r];if(Q("prerelease compare",r,s,a),s===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(s===void 0)return-1;if(s===a)continue;return z(s,a)}while(++r)}compareBuild(t){t instanceof G||(t=new G(t,this.options));let r=0;do{const s=this.build[r],a=t.build[r];if(Q("build compare",r,s,a),s===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(s===void 0)return-1;if(s===a)continue;return z(s,a)}while(++r)}inc(t,r,s){switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,s);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,s);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,s),this.inc("pre",r,s);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,s),this.inc("pre",r,s);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const a=Number(s)?1:0;if(!r&&s===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[a];else{let l=this.prerelease.length;for(;--l>=0;)typeof this.prerelease[l]=="number"&&(this.prerelease[l]++,l=-2);if(l===-1){if(r===this.prerelease.join(".")&&s===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(a)}}if(r){let l=[r,a];s===!1&&(l=[r]),z(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=l):this.prerelease=l}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var T=Vr;const Ue=T,Ur=(e,t,r=!1)=>{if(e instanceof Ue)return e;try{return new Ue(e,t)}catch(s){if(!r)return null;throw s}};var J=Ur;const Mr=J,Xr=(e,t)=>{const r=Mr(e,t);return r?r.version:null};var xr=Xr;const zr=J,qr=(e,t)=>{const r=zr(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null};var Jr=qr;const Me=T,Hr=(e,t,r,s,a)=>{typeof r=="string"&&(a=s,s=r,r=void 0);try{return new Me(e instanceof Me?e.version:e,r).inc(t,s,a).version}catch{return null}};var Br=Hr;const Xe=J,Yr=(e,t)=>{const r=Xe(e,null,!0),s=Xe(t,null,!0),a=r.compare(s);if(a===0)return null;const l=a>0,u=l?r:s,d=l?s:r,o=!!u.prerelease.length;if(!!d.prerelease.length&&!o)return!d.patch&&!d.minor?"major":u.patch?"patch":u.minor?"minor":"major";const i=o?"pre":"";return r.major!==s.major?i+"major":r.minor!==s.minor?i+"minor":r.patch!==s.patch?i+"patch":"prerelease"};var Wr=Yr;const kr=T,Kr=(e,t)=>new kr(e,t).major;var Zr=Kr;const Qr=T,et=(e,t)=>new Qr(e,t).minor;var rt=et;const tt=T,st=(e,t)=>new tt(e,t).patch;var nt=st;const it=J,ot=(e,t)=>{const r=it(e,t);return r&&r.prerelease.length?r.prerelease:null};var at=ot;const xe=T,ct=(e,t,r)=>new xe(e,r).compare(new xe(t,r));var j=ct;const lt=j,ut=(e,t,r)=>lt(t,e,r);var ft=ut;const dt=j,ht=(e,t)=>dt(e,t,!0);var Et=ht;const ze=T,mt=(e,t,r)=>{const s=new ze(e,r),a=new ze(t,r);return s.compare(a)||s.compareBuild(a)};var Oe=mt;const pt=Oe,$t=(e,t)=>e.sort((r,s)=>pt(r,s,t));var gt=$t;const Rt=Oe,Ct=(e,t)=>e.sort((r,s)=>Rt(s,r,t));var It=Ct;const vt=j,Nt=(e,t,r)=>vt(e,t,r)>0;var oe=Nt;const Ot=j,St=(e,t,r)=>Ot(e,t,r)<0;var Se=St;const Lt=j,At=(e,t,r)=>Lt(e,t,r)===0;var or=At;const yt=j,wt=(e,t,r)=>yt(e,t,r)!==0;var ar=wt;const Ft=j,Tt=(e,t,r)=>Ft(e,t,r)>=0;var Le=Tt;const Pt=j,bt=(e,t,r)=>Pt(e,t,r)<=0;var Ae=bt;const _t=or,jt=ar,Dt=oe,Gt=Le,Vt=Se,Ut=Ae,Mt=(e,t,r,s)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e===r;case"!==":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e!==r;case"":case"=":case"==":return _t(e,r,s);case"!=":return jt(e,r,s);case">":return Dt(e,r,s);case">=":return Gt(e,r,s);case"<":return Vt(e,r,s);case"<=":return Ut(e,r,s);default:throw new TypeError(`Invalid operator: ${t}`)}};var cr=Mt;const Xt=T,xt=J,{safeRe:re,t:te}=K,zt=(e,t)=>{if(e instanceof Xt)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let r=null;if(!t.rtl)r=e.match(t.includePrerelease?re[te.COERCEFULL]:re[te.COERCE]);else{const o=t.includePrerelease?re[te.COERCERTLFULL]:re[te.COERCERTL];let n;for(;(n=o.exec(e))&&(!r||r.index+r[0].length!==e.length);)(!r||n.index+n[0].length!==r.index+r[0].length)&&(r=n),o.lastIndex=n.index+n[1].length+n[2].length;o.lastIndex=-1}if(r===null)return null;const s=r[2],a=r[3]||"0",l=r[4]||"0",u=t.includePrerelease&&r[5]?`-${r[5]}`:"",d=t.includePrerelease&&r[6]?`+${r[6]}`:"";return xt(`${s}.${a}.${l}${u}${d}`,t)};var qt=zt;class Jt{constructor(){this.max=1e3,this.map=new Map}get(t){const r=this.map.get(t);if(r!==void 0)return this.map.delete(t),this.map.set(t,r),r}delete(t){return this.map.delete(t)}set(t,r){if(!this.delete(t)&&r!==void 0){if(this.map.size>=this.max){const a=this.map.keys().next().value;this.delete(a)}this.map.set(t,r)}return this}}var Ht=Jt,Ee,qe;function D(){if(qe)return Ee;qe=1;const e=/\s+/g;class t{constructor(E,R){if(R=a(R),E instanceof t)return E.loose===!!R.loose&&E.includePrerelease===!!R.includePrerelease?E:new t(E.raw,R);if(E instanceof l)return this.raw=E.value,this.set=[[E]],this.formatted=void 0,this;if(this.options=R,this.loose=!!R.loose,this.includePrerelease=!!R.includePrerelease,this.raw=E.trim().replace(e," "),this.set=this.raw.split("||").map($=>this.parseRange($.trim())).filter($=>$.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const $=this.set[0];if(this.set=this.set.filter(C=>!A(C[0])),this.set.length===0)this.set=[$];else if(this.set.length>1){for(const C of this.set)if(C.length===1&&O(C[0])){this.set=[C];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let E=0;E<this.set.length;E++){E>0&&(this.formatted+="||");const R=this.set[E];for(let $=0;$<R.length;$++)$>0&&(this.formatted+=" "),this.formatted+=R[$].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(E){const $=((this.options.includePrerelease&&h)|(this.options.loose&&p))+":"+E,C=s.get($);if(C)return C;const g=this.options.loose,I=g?o[n.HYPHENRANGELOOSE]:o[n.HYPHENRANGE];E=E.replace(I,Cr(this.options.includePrerelease)),u("hyphen replace",E),E=E.replace(o[n.COMPARATORTRIM],i),u("comparator trim",E),E=E.replace(o[n.TILDETRIM],c),u("tilde trim",E),E=E.replace(o[n.CARETTRIM],f),u("caret trim",E);let L=E.split(" ").map(w=>b(w,this.options)).join(" ").split(/\s+/).map(w=>Rr(w,this.options));g&&(L=L.filter(w=>(u("loose invalid filter",w,this.options),!!w.match(o[n.COMPARATORLOOSE])))),u("range list",L);const v=new Map,y=L.map(w=>new l(w,this.options));for(const w of y){if(A(w))return[w];v.set(w.value,w)}v.size>1&&v.has("")&&v.delete("");const P=[...v.values()];return s.set($,P),P}intersects(E,R){if(!(E instanceof t))throw new TypeError("a Range is required");return this.set.some($=>S($,R)&&E.set.some(C=>S(C,R)&&$.every(g=>C.every(I=>g.intersects(I,R)))))}test(E){if(!E)return!1;if(typeof E=="string")try{E=new d(E,this.options)}catch{return!1}for(let R=0;R<this.set.length;R++)if(Ir(this.set[R],E,this.options))return!0;return!1}}Ee=t;const r=Ht,s=new r,a=Ne,l=ae(),u=ie,d=T,{safeRe:o,t:n,comparatorTrimReplace:i,tildeTrimReplace:c,caretTrimReplace:f}=K,{FLAG_INCLUDE_PRERELEASE:h,FLAG_LOOSE:p}=ne,A=m=>m.value==="<0.0.0-0",O=m=>m.value==="",S=(m,E)=>{let R=!0;const $=m.slice();let C=$.pop();for(;R&&$.length;)R=$.every(g=>C.intersects(g,E)),C=$.pop();return R},b=(m,E)=>(u("comp",m,E),m=H(m,E),u("caret",m),m=x(m,E),u("tildes",m),m=Z(m,E),u("xrange",m),m=gr(m,E),u("stars",m),m),N=m=>!m||m.toLowerCase()==="x"||m==="*",x=(m,E)=>m.trim().split(/\s+/).map(R=>be(R,E)).join(" "),be=(m,E)=>{const R=E.loose?o[n.TILDELOOSE]:o[n.TILDE];return m.replace(R,($,C,g,I,L)=>{u("tilde",m,$,C,g,I,L);let v;return N(C)?v="":N(g)?v=`>=${C}.0.0 <${+C+1}.0.0-0`:N(I)?v=`>=${C}.${g}.0 <${C}.${+g+1}.0-0`:L?(u("replaceTilde pr",L),v=`>=${C}.${g}.${I}-${L} <${C}.${+g+1}.0-0`):v=`>=${C}.${g}.${I} <${C}.${+g+1}.0-0`,u("tilde return",v),v})},H=(m,E)=>m.trim().split(/\s+/).map(R=>ue(R,E)).join(" "),ue=(m,E)=>{u("caret",m,E);const R=E.loose?o[n.CARETLOOSE]:o[n.CARET],$=E.includePrerelease?"-0":"";return m.replace(R,(C,g,I,L,v)=>{u("caret",m,C,g,I,L,v);let y;return N(g)?y="":N(I)?y=`>=${g}.0.0${$} <${+g+1}.0.0-0`:N(L)?g==="0"?y=`>=${g}.${I}.0${$} <${g}.${+I+1}.0-0`:y=`>=${g}.${I}.0${$} <${+g+1}.0.0-0`:v?(u("replaceCaret pr",v),g==="0"?I==="0"?y=`>=${g}.${I}.${L}-${v} <${g}.${I}.${+L+1}-0`:y=`>=${g}.${I}.${L}-${v} <${g}.${+I+1}.0-0`:y=`>=${g}.${I}.${L}-${v} <${+g+1}.0.0-0`):(u("no pr"),g==="0"?I==="0"?y=`>=${g}.${I}.${L}${$} <${g}.${I}.${+L+1}-0`:y=`>=${g}.${I}.${L}${$} <${g}.${+I+1}.0-0`:y=`>=${g}.${I}.${L} <${+g+1}.0.0-0`),u("caret return",y),y})},Z=(m,E)=>(u("replaceXRanges",m,E),m.split(/\s+/).map(R=>fe(R,E)).join(" ")),fe=(m,E)=>{m=m.trim();const R=E.loose?o[n.XRANGELOOSE]:o[n.XRANGE];return m.replace(R,($,C,g,I,L,v)=>{u("xRange",m,$,C,g,I,L,v);const y=N(g),P=y||N(I),w=P||N(L),B=w;return C==="="&&B&&(C=""),v=E.includePrerelease?"-0":"",y?C===">"||C==="<"?$="<0.0.0-0":$="*":C&&B?(P&&(I=0),L=0,C===">"?(C=">=",P?(g=+g+1,I=0,L=0):(I=+I+1,L=0)):C==="<="&&(C="<",P?g=+g+1:I=+I+1),C==="<"&&(v="-0"),$=`${C+g}.${I}.${L}${v}`):P?$=`>=${g}.0.0${v} <${+g+1}.0.0-0`:w&&($=`>=${g}.${I}.0${v} <${g}.${+I+1}.0-0`),u("xRange return",$),$})},gr=(m,E)=>(u("replaceStars",m,E),m.trim().replace(o[n.STAR],"")),Rr=(m,E)=>(u("replaceGTE0",m,E),m.trim().replace(o[E.includePrerelease?n.GTE0PRE:n.GTE0],"")),Cr=m=>(E,R,$,C,g,I,L,v,y,P,w,B)=>(N($)?R="":N(C)?R=`>=${$}.0.0${m?"-0":""}`:N(g)?R=`>=${$}.${C}.0${m?"-0":""}`:I?R=`>=${R}`:R=`>=${R}${m?"-0":""}`,N(y)?v="":N(P)?v=`<${+y+1}.0.0-0`:N(w)?v=`<${y}.${+P+1}.0-0`:B?v=`<=${y}.${P}.${w}-${B}`:m?v=`<${y}.${P}.${+w+1}-0`:v=`<=${v}`,`${R} ${v}`.trim()),Ir=(m,E,R)=>{for(let $=0;$<m.length;$++)if(!m[$].test(E))return!1;if(E.prerelease.length&&!R.includePrerelease){for(let $=0;$<m.length;$++)if(u(m[$].semver),m[$].semver!==l.ANY&&m[$].semver.prerelease.length>0){const C=m[$].semver;if(C.major===E.major&&C.minor===E.minor&&C.patch===E.patch)return!0}return!1}return!0};return Ee}var me,Je;function ae(){if(Je)return me;Je=1;const e=Symbol("SemVer ANY");class t{static get ANY(){return e}constructor(i,c){if(c=r(c),i instanceof t){if(i.loose===!!c.loose)return i;i=i.value}i=i.trim().split(/\s+/).join(" "),u("comparator",i,c),this.options=c,this.loose=!!c.loose,this.parse(i),this.semver===e?this.value="":this.value=this.operator+this.semver.version,u("comp",this)}parse(i){const c=this.options.loose?s[a.COMPARATORLOOSE]:s[a.COMPARATOR],f=i.match(c);if(!f)throw new TypeError(`Invalid comparator: ${i}`);this.operator=f[1]!==void 0?f[1]:"",this.operator==="="&&(this.operator=""),f[2]?this.semver=new d(f[2],this.options.loose):this.semver=e}toString(){return this.value}test(i){if(u("Comparator.test",i,this.options.loose),this.semver===e||i===e)return!0;if(typeof i=="string")try{i=new d(i,this.options)}catch{return!1}return l(i,this.operator,this.semver,this.options)}intersects(i,c){if(!(i instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new o(i.value,c).test(this.value):i.operator===""?i.value===""?!0:new o(this.value,c).test(i.semver):(c=r(c),c.includePrerelease&&(this.value==="<0.0.0-0"||i.value==="<0.0.0-0")||!c.includePrerelease&&(this.value.startsWith("<0.0.0")||i.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&i.operator.startsWith(">")||this.operator.startsWith("<")&&i.operator.startsWith("<")||this.semver.version===i.semver.version&&this.operator.includes("=")&&i.operator.includes("=")||l(this.semver,"<",i.semver,c)&&this.operator.startsWith(">")&&i.operator.startsWith("<")||l(this.semver,">",i.semver,c)&&this.operator.startsWith("<")&&i.operator.startsWith(">")))}}me=t;const r=Ne,{safeRe:s,t:a}=K,l=cr,u=ie,d=T,o=D();return me}const Bt=D(),Yt=(e,t,r)=>{try{t=new Bt(t,r)}catch{return!1}return t.test(e)};var ce=Yt;const Wt=D(),kt=(e,t)=>new Wt(e,t).set.map(r=>r.map(s=>s.value).join(" ").trim().split(" "));var Kt=kt;const Zt=T,Qt=D(),es=(e,t,r)=>{let s=null,a=null,l=null;try{l=new Qt(t,r)}catch{return null}return e.forEach(u=>{l.test(u)&&(!s||a.compare(u)===-1)&&(s=u,a=new Zt(s,r))}),s};var rs=es;const ts=T,ss=D(),ns=(e,t,r)=>{let s=null,a=null,l=null;try{l=new ss(t,r)}catch{return null}return e.forEach(u=>{l.test(u)&&(!s||a.compare(u)===1)&&(s=u,a=new ts(s,r))}),s};var is=ns;const pe=T,os=D(),He=oe,as=(e,t)=>{e=new os(e,t);let r=new pe("0.0.0");if(e.test(r)||(r=new pe("0.0.0-0"),e.test(r)))return r;r=null;for(let s=0;s<e.set.length;++s){const a=e.set[s];let l=null;a.forEach(u=>{const d=new pe(u.semver.version);switch(u.operator){case">":d.prerelease.length===0?d.patch++:d.prerelease.push(0),d.raw=d.format();case"":case">=":(!l||He(d,l))&&(l=d);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${u.operator}`)}}),l&&(!r||He(r,l))&&(r=l)}return r&&e.test(r)?r:null};var cs=as;const ls=D(),us=(e,t)=>{try{return new ls(e,t).range||"*"}catch{return null}};var fs=us;const ds=T,lr=ae(),{ANY:hs}=lr,Es=D(),ms=ce,Be=oe,Ye=Se,ps=Ae,$s=Le,gs=(e,t,r,s)=>{e=new ds(e,s),t=new Es(t,s);let a,l,u,d,o;switch(r){case">":a=Be,l=ps,u=Ye,d=">",o=">=";break;case"<":a=Ye,l=$s,u=Be,d="<",o="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(ms(e,t,s))return!1;for(let n=0;n<t.set.length;++n){const i=t.set[n];let c=null,f=null;if(i.forEach(h=>{h.semver===hs&&(h=new lr(">=0.0.0")),c=c||h,f=f||h,a(h.semver,c.semver,s)?c=h:u(h.semver,f.semver,s)&&(f=h)}),c.operator===d||c.operator===o||(!f.operator||f.operator===d)&&l(e,f.semver))return!1;if(f.operator===o&&u(e,f.semver))return!1}return!0};var ye=gs;const Rs=ye,Cs=(e,t,r)=>Rs(e,t,">",r);var Is=Cs;const vs=ye,Ns=(e,t,r)=>vs(e,t,"<",r);var Os=Ns;const We=D(),Ss=(e,t,r)=>(e=new We(e,r),t=new We(t,r),e.intersects(t,r));var Ls=Ss;const As=ce,ys=j;var ws=(e,t,r)=>{const s=[];let a=null,l=null;const u=e.sort((i,c)=>ys(i,c,r));for(const i of u)As(i,t,r)?(l=i,a||(a=i)):(l&&s.push([a,l]),l=null,a=null);a&&s.push([a,null]);const d=[];for(const[i,c]of s)i===c?d.push(i):!c&&i===u[0]?d.push("*"):c?i===u[0]?d.push(`<=${c}`):d.push(`${i} - ${c}`):d.push(`>=${i}`);const o=d.join(" || "),n=typeof t.raw=="string"?t.raw:String(t);return o.length<n.length?o:t};const ke=D(),we=ae(),{ANY:$e}=we,Y=ce,Fe=j,Fs=(e,t,r={})=>{if(e===t)return!0;e=new ke(e,r),t=new ke(t,r);let s=!1;e:for(const a of e.set){for(const l of t.set){const u=Ps(a,l,r);if(s=s||u!==null,u)continue e}if(s)return!1}return!0},Ts=[new we(">=0.0.0-0")],Ke=[new we(">=0.0.0")],Ps=(e,t,r)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===$e){if(t.length===1&&t[0].semver===$e)return!0;r.includePrerelease?e=Ts:e=Ke}if(t.length===1&&t[0].semver===$e){if(r.includePrerelease)return!0;t=Ke}const s=new Set;let a,l;for(const h of e)h.operator===">"||h.operator===">="?a=Ze(a,h,r):h.operator==="<"||h.operator==="<="?l=Qe(l,h,r):s.add(h.semver);if(s.size>1)return null;let u;if(a&&l){if(u=Fe(a.semver,l.semver,r),u>0)return null;if(u===0&&(a.operator!==">="||l.operator!=="<="))return null}for(const h of s){if(a&&!Y(h,String(a),r)||l&&!Y(h,String(l),r))return null;for(const p of t)if(!Y(h,String(p),r))return!1;return!0}let d,o,n,i,c=l&&!r.includePrerelease&&l.semver.prerelease.length?l.semver:!1,f=a&&!r.includePrerelease&&a.semver.prerelease.length?a.semver:!1;c&&c.prerelease.length===1&&l.operator==="<"&&c.prerelease[0]===0&&(c=!1);for(const h of t){if(i=i||h.operator===">"||h.operator===">=",n=n||h.operator==="<"||h.operator==="<=",a){if(f&&h.semver.prerelease&&h.semver.prerelease.length&&h.semver.major===f.major&&h.semver.minor===f.minor&&h.semver.patch===f.patch&&(f=!1),h.operator===">"||h.operator===">="){if(d=Ze(a,h,r),d===h&&d!==a)return!1}else if(a.operator===">="&&!Y(a.semver,String(h),r))return!1}if(l){if(c&&h.semver.prerelease&&h.semver.prerelease.length&&h.semver.major===c.major&&h.semver.minor===c.minor&&h.semver.patch===c.patch&&(c=!1),h.operator==="<"||h.operator==="<="){if(o=Qe(l,h,r),o===h&&o!==l)return!1}else if(l.operator==="<="&&!Y(l.semver,String(h),r))return!1}if(!h.operator&&(l||a)&&u!==0)return!1}return!(a&&n&&!l&&u!==0||l&&i&&!a&&u!==0||f||c)},Ze=(e,t,r)=>{if(!e)return t;const s=Fe(e.semver,t.semver,r);return s>0?e:s<0||t.operator===">"&&e.operator===">="?t:e},Qe=(e,t,r)=>{if(!e)return t;const s=Fe(e.semver,t.semver,r);return s<0?e:s>0||t.operator==="<"&&e.operator==="<="?t:e};var bs=Fs;const ge=K,er=ne,_s=T,rr=ir,js=J,Ds=xr,Gs=Jr,Vs=Br,Us=Wr,Ms=Zr,Xs=rt,xs=nt,zs=at,qs=j,Js=ft,Hs=Et,Bs=Oe,Ys=gt,Ws=It,ks=oe,Ks=Se,Zs=or,Qs=ar,en=Le,rn=Ae,tn=cr,sn=qt,nn=ae(),on=D(),an=ce,cn=Kt,ln=rs,un=is,fn=cs,dn=fs,hn=ye,En=Is,mn=Os,pn=Ls,$n=ws,gn=bs;var yn={parse:js,valid:Ds,clean:Gs,inc:Vs,diff:Us,major:Ms,minor:Xs,patch:xs,prerelease:zs,compare:qs,rcompare:Js,compareLoose:Hs,compareBuild:Bs,sort:Ys,rsort:Ws,gt:ks,lt:Ks,eq:Zs,neq:Qs,gte:en,lte:rn,cmp:tn,coerce:sn,Comparator:nn,Range:on,satisfies:an,toComparators:cn,maxSatisfying:ln,minSatisfying:un,minVersion:fn,validRange:dn,outside:hn,gtr:En,ltr:mn,intersects:pn,simplifyRange:$n,subset:gn,SemVer:_s,re:ge.re,src:ge.src,tokens:ge.t,SEMVER_SPEC_VERSION:er.SEMVER_SPEC_VERSION,RELEASE_TYPES:er.RELEASE_TYPES,compareIdentifiers:rr.compareIdentifiers,rcompareIdentifiers:rr.rcompareIdentifiers},Rn={},V={},ur=k;k.default=k;k.stable=hr;k.stableStringify=hr;var se="[...]",fr="[Circular]",X=[],M=[];function dr(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function k(e,t,r,s){typeof s>"u"&&(s=dr()),Ie(e,"",0,[],void 0,0,s);var a;try{M.length===0?a=JSON.stringify(e,t,r):a=JSON.stringify(e,Er(t),r)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;X.length!==0;){var l=X.pop();l.length===4?Object.defineProperty(l[0],l[1],l[3]):l[0][l[1]]=l[2]}}return a}function q(e,t,r,s){var a=Object.getOwnPropertyDescriptor(s,r);a.get!==void 0?a.configurable?(Object.defineProperty(s,r,{value:e}),X.push([s,r,t,a])):M.push([t,r,e]):(s[r]=e,X.push([s,r,t]))}function Ie(e,t,r,s,a,l,u){l+=1;var d;if(typeof e=="object"&&e!==null){for(d=0;d<s.length;d++)if(s[d]===e){q(fr,e,t,a);return}if(typeof u.depthLimit<"u"&&l>u.depthLimit){q(se,e,t,a);return}if(typeof u.edgesLimit<"u"&&r+1>u.edgesLimit){q(se,e,t,a);return}if(s.push(e),Array.isArray(e))for(d=0;d<e.length;d++)Ie(e[d],d,d,s,e,l,u);else{var o=Object.keys(e);for(d=0;d<o.length;d++){var n=o[d];Ie(e[n],n,d,s,e,l,u)}}s.pop()}}function Cn(e,t){return e<t?-1:e>t?1:0}function hr(e,t,r,s){typeof s>"u"&&(s=dr());var a=ve(e,"",0,[],void 0,0,s)||e,l;try{M.length===0?l=JSON.stringify(a,t,r):l=JSON.stringify(a,Er(t),r)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;X.length!==0;){var u=X.pop();u.length===4?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return l}function ve(e,t,r,s,a,l,u){l+=1;var d;if(typeof e=="object"&&e!==null){for(d=0;d<s.length;d++)if(s[d]===e){q(fr,e,t,a);return}try{if(typeof e.toJSON=="function")return}catch{return}if(typeof u.depthLimit<"u"&&l>u.depthLimit){q(se,e,t,a);return}if(typeof u.edgesLimit<"u"&&r+1>u.edgesLimit){q(se,e,t,a);return}if(s.push(e),Array.isArray(e))for(d=0;d<e.length;d++)ve(e[d],d,d,s,e,l,u);else{var o={},n=Object.keys(e).sort(Cn);for(d=0;d<n.length;d++){var i=n[d];ve(e[i],i,d,s,e,l,u),o[i]=e[i]}if(typeof a<"u")X.push([a,t,e]),a[t]=o;else return o}s.pop()}}function Er(e){return e=typeof e<"u"?e:function(t,r){return r},function(t,r){if(M.length>0)for(var s=0;s<M.length;s++){var a=M[s];if(a[1]===t&&a[0]===r){r=a[2],M.splice(s,1);break}}return e.call(this,t,r)}}const wn=tr(ur);Object.defineProperty(V,"__esModule",{value:!0});V.EthereumProviderError=V.EthereumRpcError=void 0;const In=ur;class mr extends Error{constructor(t,r,s){if(!Number.isInteger(t))throw new Error('"code" must be an integer.');if(!r||typeof r!="string")throw new Error('"message" must be a nonempty string.');super(r),this.code=t,s!==void 0&&(this.data=s)}serialize(){const t={code:this.code,message:this.message};return this.data!==void 0&&(t.data=this.data),this.stack&&(t.stack=this.stack),t}toString(){return In.default(this.serialize(),On,2)}}V.EthereumRpcError=mr;class vn extends mr{constructor(t,r,s){if(!Nn(t))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(t,r,s)}}V.EthereumProviderError=vn;function Nn(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}function On(e,t){if(t!=="[Circular]")return t}var Te={},U={};Object.defineProperty(U,"__esModule",{value:!0});U.errorValues=U.errorCodes=void 0;U.errorCodes={rpc:{invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},provider:{userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901}};U.errorValues={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.serializeError=e.isValidCode=e.getMessageFromCode=e.JSON_RPC_SERVER_ERROR_MESSAGE=void 0;const t=U,r=V,s=t.errorCodes.rpc.internal,a="Unspecified error message. This is a bug, please report it.",l={code:s,message:u(s)};e.JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.";function u(f,h=a){if(Number.isInteger(f)){const p=f.toString();if(c(t.errorValues,p))return t.errorValues[p].message;if(n(f))return e.JSON_RPC_SERVER_ERROR_MESSAGE}return h}e.getMessageFromCode=u;function d(f){if(!Number.isInteger(f))return!1;const h=f.toString();return!!(t.errorValues[h]||n(f))}e.isValidCode=d;function o(f,{fallbackError:h=l,shouldIncludeStack:p=!1}={}){var A,O;if(!h||!Number.isInteger(h.code)||typeof h.message!="string")throw new Error("Must provide fallback error with integer number code and string message.");if(f instanceof r.EthereumRpcError)return f.serialize();const S={};if(f&&typeof f=="object"&&!Array.isArray(f)&&c(f,"code")&&d(f.code)){const N=f;S.code=N.code,N.message&&typeof N.message=="string"?(S.message=N.message,c(N,"data")&&(S.data=N.data)):(S.message=u(S.code),S.data={originalError:i(f)})}else{S.code=h.code;const N=(A=f)===null||A===void 0?void 0:A.message;S.message=N&&typeof N=="string"?N:h.message,S.data={originalError:i(f)}}const b=(O=f)===null||O===void 0?void 0:O.stack;return p&&f&&b&&typeof b=="string"&&(S.stack=b),S}e.serializeError=o;function n(f){return f>=-32099&&f<=-32e3}function i(f){return f&&typeof f=="object"&&!Array.isArray(f)?Object.assign({},f):f}function c(f,h){return Object.prototype.hasOwnProperty.call(f,h)}})(Te);var le={};Object.defineProperty(le,"__esModule",{value:!0});le.ethErrors=void 0;const Pe=V,pr=Te,F=U;le.ethErrors={rpc:{parse:e=>_(F.errorCodes.rpc.parse,e),invalidRequest:e=>_(F.errorCodes.rpc.invalidRequest,e),invalidParams:e=>_(F.errorCodes.rpc.invalidParams,e),methodNotFound:e=>_(F.errorCodes.rpc.methodNotFound,e),internal:e=>_(F.errorCodes.rpc.internal,e),server:e=>{if(!e||typeof e!="object"||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:t}=e;if(!Number.isInteger(t)||t>-32005||t<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return _(t,e)},invalidInput:e=>_(F.errorCodes.rpc.invalidInput,e),resourceNotFound:e=>_(F.errorCodes.rpc.resourceNotFound,e),resourceUnavailable:e=>_(F.errorCodes.rpc.resourceUnavailable,e),transactionRejected:e=>_(F.errorCodes.rpc.transactionRejected,e),methodNotSupported:e=>_(F.errorCodes.rpc.methodNotSupported,e),limitExceeded:e=>_(F.errorCodes.rpc.limitExceeded,e)},provider:{userRejectedRequest:e=>W(F.errorCodes.provider.userRejectedRequest,e),unauthorized:e=>W(F.errorCodes.provider.unauthorized,e),unsupportedMethod:e=>W(F.errorCodes.provider.unsupportedMethod,e),disconnected:e=>W(F.errorCodes.provider.disconnected,e),chainDisconnected:e=>W(F.errorCodes.provider.chainDisconnected,e),custom:e=>{if(!e||typeof e!="object"||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:t,message:r,data:s}=e;if(!r||typeof r!="string")throw new Error('"message" must be a nonempty string');return new Pe.EthereumProviderError(t,r,s)}}};function _(e,t){const[r,s]=$r(t);return new Pe.EthereumRpcError(e,r||pr.getMessageFromCode(e),s)}function W(e,t){const[r,s]=$r(t);return new Pe.EthereumProviderError(e,r||pr.getMessageFromCode(e),s)}function $r(e){if(e){if(typeof e=="string")return[e];if(typeof e=="object"&&!Array.isArray(e)){const{message:t,data:r}=e;if(t&&typeof t!="string")throw new Error("Must specify string message.");return[t||void 0,r]}}return[]}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getMessageFromCode=e.serializeError=e.EthereumProviderError=e.EthereumRpcError=e.ethErrors=e.errorCodes=void 0;const t=V;Object.defineProperty(e,"EthereumRpcError",{enumerable:!0,get:function(){return t.EthereumRpcError}}),Object.defineProperty(e,"EthereumProviderError",{enumerable:!0,get:function(){return t.EthereumProviderError}});const r=Te;Object.defineProperty(e,"serializeError",{enumerable:!0,get:function(){return r.serializeError}}),Object.defineProperty(e,"getMessageFromCode",{enumerable:!0,get:function(){return r.getMessageFromCode}});const s=le;Object.defineProperty(e,"ethErrors",{enumerable:!0,get:function(){return s.ethErrors}});const a=U;Object.defineProperty(e,"errorCodes",{enumerable:!0,get:function(){return a.errorCodes}})})(Rn);export{wn as a,An as b,Rn as d,ur as f,Ln as g,vr as j,yn as s};