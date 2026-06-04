var _=Object.defineProperty;var Y=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var Q=Object.prototype.hasOwnProperty;var Z=(n,i)=>{for(var t in i)_(n,t,{get:i[t],enumerable:!0})},J=(n,i,t,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of X(i))!Q.call(n,o)&&o!==t&&_(n,o,{get:()=>i[o],enumerable:!(e=Y(i,o))||e.enumerable});return n};var ee=n=>J(_({},"__esModule",{value:!0}),n);var Le={};Z(Le,{default:()=>I});module.exports=ee(Le);var d=require("obsidian"),z={A4:{w:794,h:1123},A3:{w:1123,h:1587},Letter:{w:816,h:1056},Legal:{w:816,h:1344},A5:{w:559,h:794}},q={default:{name:"Default",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#7c6af7",bodyColor:"#1a1a2e",headingColor:"#0d0d1a",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"transparent",blockquoteBorderColor:"#7c6af7",codeBackground:"#f0f0f8",codeFontSize:.85,tableHeaderBg:"#f0f0f8",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},minimal:{name:"Minimal",fontFamily:"'Helvetica Neue', Helvetica, sans-serif",fontSize:12,lineHeight:1.6,paragraphSpacing:.45,headingScale:.88,accentColor:"#333",bodyColor:"#222",headingColor:"#111",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f8f8f8",blockquoteBorderColor:"#ccc",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#efefef",tableStriped:!1,pageBackground:"#ffffff",marginTop:16,marginBottom:16,marginLeft:20,marginRight:20},academic:{name:"Academic",fontFamily:"'Times New Roman', Times, serif",fontSize:12,lineHeight:2,paragraphSpacing:0,headingScale:.95,accentColor:"#1a3a6b",bodyColor:"#000",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#999",codeBackground:"#f9f9f9",codeFontSize:.88,tableHeaderBg:"#e8e8e8",tableStriped:!1,pageBackground:"#ffffff",marginTop:25,marginBottom:25,marginLeft:30,marginRight:30},colorful:{name:"Colorful",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1.05,accentColor:"#e84393",bodyColor:"#1a1a2e",headingColor:"#2d0a4e",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#fdf0f8",blockquoteBorderColor:"#e84393",codeBackground:"#f0eaff",codeFontSize:.85,tableHeaderBg:"#2d0a4e",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},modern:{name:"Modern",fontFamily:"Arial, sans-serif",fontSize:13,lineHeight:1.75,paragraphSpacing:.6,headingScale:1,accentColor:"#0070f3",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f0f7ff",blockquoteBorderColor:"#0070f3",codeBackground:"#f1f5f9",codeFontSize:.85,tableHeaderBg:"#0070f3",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},newspaper:{name:"Newspaper",fontFamily:"Georgia, serif",fontSize:12,lineHeight:1.7,paragraphSpacing:.4,headingScale:1.1,accentColor:"#111",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#111",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#111",tableStriped:!1,pageBackground:"#ffffff",marginTop:18,marginBottom:18,marginLeft:20,marginRight:20},dark:{name:"Dark",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#818cf8",bodyColor:"#d1d5db",headingColor:"#f1f5f9",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"#1e293b",blockquoteBorderColor:"#818cf8",codeBackground:"#0f172a",codeFontSize:.85,tableHeaderBg:"#1e293b",tableStriped:!0,pageBackground:"#111827",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25}},te={pageSize:"A4",orientation:"portrait",preset:"default",...q.default,headerText:"",footerText:"",showHeader:!0,showFooter:!0,showFooterBorder:!1,showPageNumbers:!0,pageNumberPosition:"right",pageNumberStart:1,showHeaderFooterOnFirstPage:!0,headerAlignment:"right",hideFrontmatter:!1,customFontName:"",autoBreakH1:!1,autoBreakH2:!1,includeFilenameAsTitle:!1,previewScale:1},R=n=>n/25.4*96;function D(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ne(n){return n.replace(/\r\n/g,`
`)}function oe(n){return n.replace(/^---[ \t]*\r?\n[\s\S]*?\r?\n---[ \t]*(\r?\n|$)/,"")}function re(n){return n.split(/^\/\/\/\s*$/m).map(i=>i.trim()).filter(Boolean)}async function ae(n,i,t,e){let o=document.createElement("div");return await d.MarkdownRenderer.render(n,i,o,t,e),le(o),o.innerHTML}function ie(n){return n.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function le(n){let i=new Map;n.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(t=>{var r;let e=t.textContent||"",o=ie(e);if(!o)return;let s=(r=i.get(o))!=null?r:0;i.set(o,s+1);let l=s===0?o:`${o}-${s}`;t.id=l}),n.querySelectorAll("a").forEach(t=>{t.classList.remove("external-link")}),n.querySelectorAll(".copy-code-button").forEach(t=>t.remove()),n.querySelectorAll(".callout").forEach(t=>{t.removeAttribute("data-callout-fold"),t.classList.remove("is-collapsed"),t.querySelectorAll(".callout-fold").forEach(e=>e.remove())})}function se(n){let i=n.replace(/^#([\da-f])([\da-f])([\da-f])$/i,(l,r,a,c)=>`#${r}${r}${a}${a}${c}${c}`);if(!/^#[\da-f]{6}$/i.test(i))return 1;let t=l=>l<=.04045?l/12.92:((l+.055)/1.055)**2.4,e=t(parseInt(i.slice(1,3),16)/255),o=t(parseInt(i.slice(3,5),16)/255),s=t(parseInt(i.slice(5,7),16)/255);return .2126*e+.7152*o+.0722*s}function de(n){let i=n.headingScale,t=n.fontFamily==="__custom__"?n.customFontName.trim()||"inherit":n.fontFamily,e=se(n.tableHeaderBg)<.35?"#fff":n.headingColor;return`
  .mpdf-doc {
    font-family: ${t};
    font-size: ${n.fontSize}px;
    line-height: ${n.lineHeight};
    color: ${n.bodyColor};
    box-sizing: border-box;
  }
  .mpdf-doc *, .mpdf-doc *::before, .mpdf-doc *::after { box-sizing: border-box; }
  .mpdf-doc strong, .mpdf-doc b { font-weight: 700; font-style: normal; }
  .mpdf-doc em, .mpdf-doc i { font-style: italic; font-weight: inherit; }
  .mpdf-doc mark { background: #ffe066; color: inherit; padding: 0 2px; border-radius: 2px; }
  .mpdf-doc del, .mpdf-doc s { text-decoration: line-through; }
  .mpdf-doc h1 {
    font-size: ${Math.round(22*i)}px;
    font-weight: 700;
    color: ${n.headingColor};
    margin: 0 0 ${Math.round(12*i)}px;
    line-height: 1.2;
    ${n.h1BorderBottom?`border-bottom: 2px solid ${n.accentColor}; padding-bottom: 6px;`:""}
    ${n.centerH1?"text-align: center;":""}
  }
  .mpdf-doc h2 {
    font-size: ${Math.round(17*i)}px;
    font-weight: 600;
    color: ${n.headingColor};
    margin: ${Math.round(20*i)}px 0 ${Math.round(10*i)}px;
    ${n.h2BorderBottom?`border-bottom: 0.5px solid ${n.accentColor}55; padding-bottom: 5px;`:""}
  }
  .mpdf-doc h3 {
    font-size: ${Math.round(15*i)}px;
    font-weight: 700;
    color: ${n.headingColor};
    margin: ${Math.round(16*i)}px 0 ${Math.round(8*i)}px;
    letter-spacing: 0.01em;
  }
  .mpdf-doc h4 { font-size: ${Math.round(13*i)}px; font-weight: 700; color: ${n.headingColor}; margin: 12px 0 6px; text-transform: uppercase; letter-spacing: 0.04em; }
  .mpdf-doc h5 { font-size: ${Math.round(12*i)}px; font-weight: 600; color: ${n.headingColor}; margin: 10px 0 4px; font-style: italic; }
  .mpdf-doc h6 { font-size: ${Math.round(11*i)}px; font-weight: 600; color: ${n.bodyColor}; margin: 8px 0 4px; font-style: italic; opacity: 0.75; }
  .mpdf-doc p { margin: 0 0 ${n.paragraphSpacing}em; }
  .mpdf-doc ul, .mpdf-doc ol { padding-left: 1.4em; margin: 0 0 ${n.paragraphSpacing}em; }
  .mpdf-doc li { margin-bottom: 0.2em; line-height: ${n.lineHeight}; }
  .mpdf-doc blockquote {
    border-left: 3px solid ${n.blockquoteBorderColor};
    background: ${n.blockquoteBg};
    padding: 4px 0 4px 1em;
    margin: ${n.paragraphSpacing}em 0;
    font-style: italic;
    color: ${n.bodyColor}cc;
  }
  .mpdf-doc code {
    font-family: 'Courier New', monospace;
    font-size: ${n.codeFontSize}em;
    background: ${n.codeBackground};
    padding: 1px 4px;
    border-radius: 3px;
    color: ${n.accentColor};
  }
  .mpdf-doc pre {
    background: ${n.codeBackground};
    border-radius: 4px;
    padding: 10px 12px;
    margin: 0 0 ${n.paragraphSpacing}em;
    overflow: hidden;
  }
  .mpdf-doc pre code {
    font-family: 'Courier New', monospace;
    font-size: ${n.codeFontSize}em;
    color: ${n.bodyColor};
    white-space: pre-wrap;
    word-break: break-all;
    background: none;
    padding: 0;
  }
  .mpdf-doc hr {
    border: none;
    border-top: 0.5px solid ${n.accentColor}44;
    margin: ${n.paragraphSpacing*1.5}em 0;
  }
  .mpdf-doc img { max-width: 100%; height: auto; display: block; margin: ${n.paragraphSpacing}em auto; }
  .mpdf-doc a { color: ${n.accentColor}; }
  .mpdf-doc a.external-link::after { display: none !important; content: none !important; }
  /* Belt-and-suspenders: hide any copy-code button Obsidian re-injects after
     the DOM-removal pass in postProcessRenderedHTML (e.g. via a MutationObserver
     or a theme that adds its own variant with different timing). */
  .mpdf-doc .copy-code-button { display: none !important; }
  .mpdf-doc table { width: 100%; border-collapse: collapse; margin: 0 0 ${n.paragraphSpacing}em; font-size: 0.92em; }
  .mpdf-doc th {
    background: ${n.tableHeaderBg};
    color: ${e};
    padding: 6px 10px;
    text-align: left;
    font-weight: 600;
    border: 0.5px solid ${n.accentColor}33;
    font-size: 0.9em;
  }
  .mpdf-doc td { padding: 5px 10px; border: 0.5px solid ${n.bodyColor}22; vertical-align: top; }
  ${n.tableStriped?`.mpdf-doc tbody tr:nth-child(even) { background: ${n.tableHeaderBg}55; }`:""}

  /* \u2500\u2500 Callouts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   * Obsidian renders > [!TYPE] blocks as .callout divs. We override all
   * theme-provided callout styles with !important so the PDF and the preview
   * both look identical regardless of which Obsidian theme is active.
   * The design is deliberately bolder than a plain blockquote: coloured
   * header bar, tinted body background, and ALL-CAPS type label.        */
  .mpdf-doc .callout {
    border-left: 4px solid ${n.accentColor} !important;
    border-radius: 0 5px 5px 0 !important;
    background: ${n.accentColor}12 !important;
    margin: ${n.paragraphSpacing*1.2}em 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    box-shadow: inset 0 0 0 1px ${n.accentColor}22 !important;
    font-style: normal !important;
  }
  .mpdf-doc .callout-title {
    display: flex !important;
    align-items: center !important;
    gap: 7px !important;
    padding: 7px 12px !important;
    background: ${n.accentColor}28 !important;
    border-bottom: 1px solid ${n.accentColor}33 !important;
    font-family: ${t} !important;
    font-size: 0.8em !important;
    font-weight: 800 !important;
    font-style: normal !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    color: ${n.accentColor} !important;
    line-height: 1.3 !important;
  }
  .mpdf-doc .callout-icon {
    display: inline-flex !important;
    align-items: center !important;
    flex-shrink: 0 !important;
    width: 15px !important;
    height: 15px !important;
    color: ${n.accentColor} !important;
  }
  .mpdf-doc .callout-icon svg {
    width: 15px !important;
    height: 15px !important;
    stroke: ${n.accentColor} !important;
    fill: none !important;
    stroke-width: 2 !important;
  }
  .mpdf-doc .callout-title-inner {
    flex: 1 !important;
    min-width: 0 !important;
  }
  .mpdf-doc .callout-fold { display: none !important; }
  .mpdf-doc .callout-content {
    padding: 9px 14px !important;
    color: ${n.bodyColor} !important;
    font-style: normal !important;
    background: transparent !important;
  }
  .mpdf-doc .callout-content > p:first-child { margin-top: 0 !important; }
  .mpdf-doc .callout-content > p:last-child  { margin-bottom: 0 !important; }
  /* Nested blockquotes inside callout content keep a subtler indent */
  .mpdf-doc .callout-content blockquote {
    border-left-color: ${n.accentColor}66 !important;
    background: transparent !important;
  }
  `.trim()}var ce=new Set(["P","LI","BLOCKQUOTE","TD","TH"]),pe=new Set(["P","DIV","SECTION","ARTICLE","ASIDE","NAV","HEADER","FOOTER","UL","OL","LI","TABLE","THEAD","TBODY","TFOOT","TR","TD","TH","PRE","BLOCKQUOTE","HR","IMG","H1","H2","H3","H4","H5","H6"]),me=new Set(["CODE","IMG","HR","H1","H2","H3","H4","H5","H6"]),ge=2;function he(n,i){i.innerHTML="";for(let t of n)i.appendChild(t.cloneNode(!0));return i.getBoundingClientRect().height}function fe(n,i,t){return e=>he([...n,e],i)<=t-ge}function ue(n){var t;let i=document.createTreeWalker(n,NodeFilter.SHOW_TEXT);for(;i.nextNode();){let e=i.currentNode,o=((t=e.textContent)!=null?t:"").replace(/^\s+/,"");if(o!==e.textContent&&(e.textContent=o),o.length>0)break}}function O(n,i){var p,g;let t=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),e=0,o=null,s=0;for(;t.nextNode();){let u=t.currentNode,b=(g=(p=u.textContent)==null?void 0:p.length)!=null?g:0;if(e+b>=i){o=u,s=i-e;break}e+=b}if(!o)return null;let l=document.createRange();l.selectNodeContents(n),l.setEnd(o,s);let r=document.createRange();r.selectNodeContents(n),r.setStart(o,s);let a=n.cloneNode(!1);a.appendChild(l.cloneContents());let c=n.cloneNode(!1);return c.appendChild(r.cloneContents()),ue(c),[a,c]}function be(n){let i=[],t=/\s+/g,e;for(;e=t.exec(n);)e.index>0&&e.index<n.length&&i.push(e.index);return i}function we(n,i,t){var a;let e=(a=n.textContent)!=null?a:"";if(e.length<2)return null;let o=be(e);if(o.length>0){let c=0,p=o.length-1,g=-1;for(;c<=p;){let u=Math.floor((c+p)/2),b=O(n,o[u]);if(!b){p=u-1;continue}i(b[0])?(g=u,c=u+1):p=u-1}if(g>=0)return O(n,o[g]);if(!t)return null}let s=1,l=e.length-1,r=0;for(;s<=l;){let c=Math.floor((s+l)/2),p=O(n,c);if(!p){l=c-1;continue}i(p[0])?(r=c,s=c+1):l=c-1}return r>0?O(n,r):null}function W(n,i,t){let e=n.cloneNode(!1);n.tagName==="OL"&&t!==void 0&&t>1&&(e.start=t);for(let o of i)e.appendChild(o.cloneNode(!0));return e}function xe(n,i,t){var l;let e=Array.from(n.children).filter(r=>r.tagName==="LI");if(e.length===0)return null;let o=n.tagName==="OL"&&(l=n.start)!=null?l:1,s=0;for(let r=0;r<e.length&&i(W(n,e.slice(0,r+1),o));r++)s=r+1;if(s<=0){if(!t||e.length<2)return null;s=1}return s>=e.length?null:[W(n,e.slice(0,s),o),W(n,e.slice(s),o+s)]}function j(n,i){let t=n.cloneNode(!1),e=n.querySelector("caption");e&&t.appendChild(e.cloneNode(!0));let o=n.querySelector("colgroup");o&&t.appendChild(o.cloneNode(!0)),n.tHead&&t.appendChild(n.tHead.cloneNode(!0));let s=document.createElement("tbody");for(let l of i)s.appendChild(l.cloneNode(!0));return t.appendChild(s),t}function ye(n,i,t){let e=n.tBodies[0],o=e?Array.from(e.rows):Array.from(n.rows).filter(l=>{var r;return((r=l.parentElement)==null?void 0:r.tagName)!=="THEAD"});if(o.length===0)return null;let s=0;for(let l=0;l<o.length&&i(j(n,o.slice(0,l+1)));l++)s=l+1;if(s<=0){if(!t||o.length<2)return null;s=1}return s>=o.length?null:[j(n,o.slice(0,s)),j(n,o.slice(s))]}function U(n,i){let t=n.cloneNode(!1),e=n.querySelector("code");if(e){let o=e.cloneNode(!1);o.textContent=i.join(`
`),t.appendChild(o)}else t.textContent=i.join(`
`);return t}function Te(n,i,t){var s;let e=((s=n.textContent)!=null?s:"").split(`
`);if(e.length>1&&e[e.length-1]===""&&e.pop(),e.length<2)return null;let o=0;for(let l=0;l<e.length&&i(U(n,e.slice(0,l+1)));l++)o=l+1;if(o<=0){if(!t||e.length<2)return null;o=1}return o>=e.length?null:[U(n,e.slice(0,o)),U(n,e.slice(o))]}function Ce(n){if(!ce.has(n.tagName))return!1;for(let i of Array.from(n.childNodes))if(i.nodeType===Node.ELEMENT_NODE&&pe.has(i.tagName))return!1;return!0}function Ee(n,i,t){return me.has(n.tagName)?null:n.tagName==="PRE"?Te(n,i,t):n.tagName==="TABLE"?ye(n,i,t):n.tagName==="UL"||n.tagName==="OL"?xe(n,i,t):Ce(n)?we(n,i,t):null}function He(n,i,t,e){var c;let o=document.createElement("div");o.style.cssText=["position:fixed","top:0","left:-99999px",`width:${i}px`,"visibility:hidden","pointer-events:none","z-index:-1"].join(";");let s=document.createElement("style");s.textContent=e,o.appendChild(s);let l=document.createElement("div");l.className="mpdf-doc",l.innerHTML=n,o.appendChild(l);let r=document.createElement("div");r.className="mpdf-doc",r.style.cssText=`position:absolute;top:0;left:0;width:${i}px;visibility:hidden;`,o.appendChild(r),document.body.appendChild(o);let a=[];try{let p=[],g=Array.from(l.children),u=0;for(;u<g.length;){let b=g[u],m=fe(p,r,t);if(m(b.cloneNode(!0))){p.push(b.cloneNode(!0)),u++;continue}let T=p.length===0,y=Ee(b,m,T);if(y){p.push(y[0]),a.push(p),p=[];let C=y[1];(c=C.textContent)!=null&&c.trim()||C.children.length>0?g[u]=C:u++;continue}if(p.length>0){a.push(p),p=[];continue}p.push(b.cloneNode(!0)),a.push(p),p=[],u++}p.length>0&&a.push(p)}finally{document.body.removeChild(o)}return a.length>0?a:[[]]}function ve(n,i){let t=n.length;return n.map((e,o)=>{var y,C,H;let s=o+1,l=i.showHeaderFooterOnFirstPage||o>0,r=i.showHeaderFooterOnFirstPage?i.pageNumberStart+o:i.pageNumberStart+(o-1),a=i.showHeaderFooterOnFirstPage?i.pageNumberStart+t-1:i.pageNumberStart+t-2,c=`${r} / ${a}`,p="",g="",u="",b="",m="",T="";return l&&(i.showPageNumbers?i.pageNumberPosition==="center"?u=(i.footerText?i.footerText+" \u2014 ":"")+c:i.pageNumberPosition==="left"?(p=c,g=(y=i.footerText)!=null?y:""):(p=(C=i.footerText)!=null?C:"",g=c):p=(H=i.footerText)!=null?H:"",i.headerText&&(i.headerAlignment==="center"?m=i.headerText:i.headerAlignment==="left"?b=i.headerText:T=i.headerText)),{pageNodes:e,pageNum:s,totalPages:t,headerLeft:b,headerCenter:m,headerRight:T,footerLeft:p,footerRight:g,footerCenter:u}})}var I=class extends d.Plugin{constructor(){super(...arguments);this.activeModal=null}async onload(){await this.loadSettings(),this.addCommand({id:"open-advanced-pdf-export",name:"Open Panel",callback:()=>this.openModal()}),this.registerEvent(this.app.workspace.on("file-menu",(t,e)=>{!(e instanceof d.TFile)||e.extension!=="md"||t.addItem(o=>o.setTitle("Advanced PDF Export: Open Panel").setIcon("file-output").onClick(()=>this.openModal(e)))})),this.addSettingTab(new G(this.app,this))}onunload(){var t;(t=this.activeModal)==null||t.close()}openModal(t){this.activeModal&&this.activeModal.close(),new A(this.app,this,t).open()}async loadSettings(){this.settings=Object.assign({},te,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async saveSettingsAndRender(){var t;await this.saveSettings(),(t=this.activeModal)==null||t.render()}applyPreset(t){let e=q[t];e&&(this.settings.preset=t,Object.assign(this.settings,e))}};function Se(n,i){var s,l;if(i)return i;let t=(s=n.workspace.getActiveViewOfType(d.MarkdownView))==null?void 0:s.file;if(t)return t;let e=n.workspace.getActiveFile();if((e==null?void 0:e.extension)==="md")return e;let o=n.workspace.getMostRecentLeaf();return(o==null?void 0:o.view)instanceof d.MarkdownView&&(l=o.view.file)!=null?l:null}var A=class extends d.Modal{constructor(t,e,o){super(t);this.renderComponent=new d.Component;this.currentFile=null;this.renderToken=0;this.layoutCache=null;this.renderDebounceTimer=null;this.plugin=e,this.initialFile=o!=null?o:null}async onOpen(){this.plugin.activeModal=this,this.renderComponent.load(),this.modalEl.addClass("mpdf-modal"),this.buildUI(this.contentEl);let t=Se(this.app,this.initialFile);if(t){this.currentFile=t;let e=await this.app.vault.read(t);this.editorEl.value=e,this.noteTitleEl.textContent=t.basename,this.noteTitleEl.title=t.path,this.showLoading(),await new Promise(o=>requestAnimationFrame(()=>requestAnimationFrame(()=>o()))),this.render(!0)}}onClose(){this.renderDebounceTimer!==null&&(clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.renderComponent.unload(),this.plugin.activeModal=null,this.currentFile=null,this.layoutCache=null}buildUI(t){let e=this.plugin.settings;this.buildTopbar(t.createEl("div",{cls:"mpdf-topbar"}),e);let o=t.createEl("div",{cls:"mpdf-main"}),s=o.createEl("div",{cls:"mpdf-editor-panel"});this.editorEl=s.createEl("textarea",{cls:"mpdf-editor"}),this.editorEl.placeholder=`Type or paste markdown here to preview and export as PDF.

Tip: open this panel from a note's right-click menu, command palette,
or keyboard shortcut to auto-load the active note.

Use /// on its own line for a manual page break.
Use --- for a horizontal rule.

Markdown tables:
| Col A | Col B |
|-------|-------|
| Cell  | Cell  |`;let l=o.createEl("div",{cls:"mpdf-preview-container"});this.previewEl=l.createEl("div",{cls:"mpdf-preview"}),this.loadingOverlayEl=l.createEl("div",{cls:"mpdf-loading-overlay"}),this.loadingOverlayEl.style.display="none",this.loadingOverlayEl.createEl("div",{cls:"mpdf-spinner"}),this.loadingOverlayEl.createEl("span",{cls:"mpdf-loading-text",text:"Rendering\u2026"}),this.editorEl.addEventListener("keydown",r=>{r.key==="Enter"&&(r.ctrlKey||r.metaKey)&&(r.preventDefault(),this.render(!0))})}buildTopbar(t,e){let o=t.createEl("div",{cls:"mpdf-topbar-left"});this.noteTitleEl=t.createEl("div",{cls:"mpdf-topbar-title",text:"\u2014"});let s=t.createEl("div",{cls:"mpdf-topbar-right"}),l=(m,T,y,C)=>{let H=o.createEl("div",{cls:"mpdf-ctrl"});H.createEl("span",{cls:"mpdf-ctrl-label",text:m});let M=H.createEl("select",{cls:"mpdf-select"});for(let[f,S]of Object.entries(T)){let L=M.createEl("option",{text:S,value:f});f===y&&(L.selected=!0)}M.addEventListener("change",()=>void C(M.value))},r={};Object.entries(q).forEach(([m,T])=>r[m]=T.name),l("Style",r,e.preset,async m=>{this.plugin.applyPreset(m),await this.plugin.saveSettingsAndRender()});let a={};Object.keys(z).forEach(m=>a[m]=m),l("Size",a,e.pageSize,async m=>{this.plugin.settings.pageSize=m,await this.plugin.saveSettingsAndRender()}),l("Orient",{portrait:"Portrait",landscape:"Landscape"},e.orientation,async m=>{this.plugin.settings.orientation=m,await this.plugin.saveSettingsAndRender()});let c=o.createEl("div",{cls:"mpdf-ctrl"});c.createEl("span",{cls:"mpdf-ctrl-label",text:"Zoom"});let p=c.createEl("span",{cls:"mpdf-ctrl-label",text:Math.round(e.previewScale*100)+"%"}),g=c.createEl("input");g.type="range",g.min="0.35",g.max="1.0",g.step="0.05",g.value=String(e.previewScale),g.addClass("mpdf-zoom-slider"),g.addEventListener("input",async()=>{let m=parseFloat(g.value);this.plugin.settings.previewScale=m,p.textContent=Math.round(m*100)+"%",await this.plugin.saveSettings(),this.renderPreviewOnly()});let u=o.createEl("button",{cls:"mpdf-btn",text:"Insert Page Break"});u.title="Insert page break (///)",u.addEventListener("click",()=>this.insertAtCursor(`
///
`)),this.pageCountEl=s.createEl("span",{cls:"mpdf-page-count",text:"\u2014 pages"});let b=s.createEl("button",{cls:"mpdf-btn mpdf-btn-icon"});b.setAttr("aria-label","Open Advanced PDF Export settings"),(0,d.setIcon)(b,"settings"),b.addEventListener("click",()=>{var T,y;let m=this.app.setting;(T=m==null?void 0:m.open)==null||T.call(m),(y=m==null?void 0:m.openTabById)==null||y.call(m,"advanced-pdf-export")}),this.renderBtn=s.createEl("button",{cls:"mpdf-btn",text:"\u27F3 Render PDF"}),this.renderBtn.title="Render preview (Ctrl+Enter)",this.renderBtn.addEventListener("click",()=>this.render(!0)),this.exportBtn=s.createEl("button",{cls:"mpdf-btn mpdf-btn-primary",text:"\u2B07 Export PDF"}),this.exportBtn.addEventListener("click",()=>void this.exportPDF())}insertAtCursor(t){let e=this.editorEl,o=e.selectionStart,s=e.selectionEnd;e.value=e.value.slice(0,o)+t+e.value.slice(s),e.selectionStart=e.selectionEnd=o+t.length,e.focus()}render(t=!1){let e=++this.renderToken;this.renderDebounceTimer!==null&&(clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.showLoading();let o=()=>this.doRender(e).catch(s=>{let l=s instanceof Error?s.message:String(s);console.error("[advanced-pdf-export] render error:",s),this.hideLoading(),new d.Notice("Render error: "+l)});t?requestAnimationFrame(()=>requestAnimationFrame(()=>void o())):this.renderDebounceTimer=setTimeout(()=>{this.renderDebounceTimer=null,requestAnimationFrame(()=>requestAnimationFrame(()=>void o()))},150)}static insertAutoBreaks(t,e,o){if(!e&&!o)return t;let s=t.split(`
`),l=[],r=!1,a="";for(let c of s){if(r){let p=c.match(/^(`{3,}|~{3,})\s*$/);p&&p[1][0]===a[0]&&p[1].length>=a.length&&(r=!1,a="")}else{let p=c.match(/^(`{3,}|~{3,})/);p?(r=!0,a=p[1]):l.length>0&&(e&&/^# /.test(c)||o&&/^## /.test(c))&&l.push("///")}l.push(c)}return l.join(`
`)}async doRender(t){var B,h,E;let e=this.plugin.settings,o=ne(this.editorEl.value);e.hideFrontmatter&&(o=oe(o)),e.includeFilenameAsTitle&&this.currentFile&&(o=`# ${this.currentFile.basename}

${o}`),o=A.insertAutoBreaks(o,e.autoBreakH1,e.autoBreakH2);let s=re(o),l=(B=z[e.pageSize])!=null?B:z.A4,r=e.orientation==="landscape"?l.h:l.w,a=e.orientation==="landscape"?l.w:l.h,c=R(e.marginTop),p=R(e.marginBottom),g=R(e.marginLeft),u=R(e.marginRight),b=e.showFooter?28:0,m=e.showHeader&&e.headerText?20:0,T=r-g-u,y=a-c-p-b-m,C=de(e),H=(E=(h=this.currentFile)==null?void 0:h.path)!=null?E:"pdf-export",M=await Promise.all(s.map(k=>ae(this.app,k.trim(),H,this.renderComponent)));if(t!==this.renderToken)return;let f=[];for(let k of M)f.push(...He(k,T,y,C));let S=ve(f,e),L=e.fontFamily==="__custom__"?e.customFontName.trim()||"inherit":e.fontFamily;this.layoutCache={layouts:S,pw:r,ph:a,mTop:c,mLeft:g,footerH:b,headerH:m,contentW:T,contentH:y,docCSS:C,fontFamily:L,accentColor:e.accentColor,pageBackground:e.pageBackground},this.drawPreview(this.layoutCache,e.previewScale),this.pageCountEl.textContent=`${S.length} page${S.length!==1?"s":""}`,this.hideLoading()}renderPreviewOnly(){this.layoutCache&&this.drawPreview(this.layoutCache,this.plugin.settings.previewScale)}showLoading(){this.loadingOverlayEl.style.display="flex",this.renderBtn.disabled=!0,this.renderBtn.textContent="Rendering\u2026"}hideLoading(){this.loadingOverlayEl.style.display="none",this.renderBtn.disabled=!1,this.renderBtn.textContent="\u27F3 Render PDF"}drawPreview(t,e){let{layouts:o,pw:s,ph:l,mTop:r,mLeft:a,footerH:c,headerH:p,contentW:g,contentH:u,docCSS:b,fontFamily:m,accentColor:T,pageBackground:y}=t,C=this.plugin.settings;this.previewEl.empty();let H=new Map;o.forEach((f,S)=>{for(let L of f.pageNodes)L.querySelectorAll("[id]").forEach(B=>{H.has(B.id)||H.set(B.id,S)}),L.id&&!H.has(L.id)&&H.set(L.id,S)});let M=[];for(let f of o){let S=Math.round(s*e),L=Math.round(l*e),B=this.previewEl.createEl("div",{cls:"mpdf-page-wrap"});B.style.cssText=`width:${S}px;height:${L}px;position:relative;flex-shrink:0;`,B.createEl("div",{cls:"mpdf-page-label",text:`Page ${f.pageNum} of ${f.totalPages}`}),M.push(B);let h=B.createEl("div",{cls:"mpdf-page-scale"});h.style.cssText=`width:${S}px;height:${L}px;overflow:hidden;position:relative;`;let E=document.createElement("div");E.style.cssText=[`width:${s}px`,`height:${l}px`,`transform:scale(${e})`,"transform-origin:top left","position:absolute","top:0","left:0"].join(";"),h.appendChild(E);let k=E.attachShadow({mode:"open"}),N=document.createElement("style");if(N.textContent=`
        :host {
          display: block;
          width: ${s}px;
          height: ${l}px;
          background: ${y};
          box-shadow: 0 2px 8px rgba(0,0,0,.30), 0 8px 32px rgba(0,0,0,.25);
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
        }
        *, *::before, *::after { box-sizing: border-box; }
        ${b}
      `,k.appendChild(N),C.showHeader&&(f.headerLeft||f.headerCenter||f.headerRight)){let w=document.createElement("div");if(w.style.cssText=["position:absolute",`top:${r*.4}px`,`left:${a}px`,`right:${a}px`,"display:flex","align-items:center","font-size:9px","color:#999",`font-family:${m}`,"white-space:nowrap"].join(";"),f.headerCenter){let x=document.createElement("span");x.style.cssText="flex:1;text-align:center;",x.textContent=f.headerCenter,w.appendChild(x)}else{let x=document.createElement("span");x.textContent=f.headerLeft,w.appendChild(x);let v=document.createElement("span");v.style.marginLeft="auto",v.textContent=f.headerRight,w.appendChild(v)}k.appendChild(w)}let F=document.createElement("div");F.className="mpdf-doc",F.style.cssText=["position:absolute",`top:${r+p}px`,`left:${a}px`,`width:${g}px`].join(";");for(let w of f.pageNodes)F.appendChild(w.cloneNode(!0));if(k.appendChild(F),F.querySelectorAll("a[href^='#']").forEach(w=>{let x=decodeURIComponent(w.getAttribute("href").slice(1)),v=H.get(x);v!==void 0&&(w.title=`Go to page ${v+1}`,w.addEventListener("click",V=>{var K;V.preventDefault(),(K=M[v])==null||K.scrollIntoView({behavior:"smooth",block:"start"})}))}),C.showFooter&&(f.footerLeft||f.footerRight||f.footerCenter)){let w=document.createElement("div");if(w.style.cssText=["position:absolute","bottom:0","left:0","right:0",`height:${c}px`,"display:flex","align-items:center",C.showFooterBorder?`border-top:0.5px solid ${T}33`:"",`padding:0 ${a}px`,"font-size:9px","color:#aaa",`font-family:${m}`].filter(Boolean).join(";"),f.footerCenter){let x=document.createElement("span");x.style.cssText="flex:1;text-align:center;",x.textContent=f.footerCenter,w.appendChild(x)}else{let x=document.createElement("span");x.textContent=f.footerLeft,w.appendChild(x);let v=document.createElement("span");v.style.marginLeft="auto",v.textContent=f.footerRight,w.appendChild(v)}k.appendChild(w)}}}async exportPDF(){var f,S,L,B;let t=this.plugin.settings;this.exportBtn.disabled=!0,this.exportBtn.textContent="\u2B07 Exporting\u2026";let e=()=>{this.exportBtn.disabled=!1,this.exportBtn.textContent="\u2B07 Export PDF"};if(!this.layoutCache){this.renderDebounceTimer!==null&&(clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null);let h=++this.renderToken;this.showLoading();try{await this.doRender(h)}catch(E){let k=E instanceof Error?E.message:String(E);new d.Notice("Render error: "+k),this.hideLoading(),e();return}}let o=this.layoutCache;if(!o||o.layouts.length===0){new d.Notice("Nothing to export."),e();return}let{layouts:s,pw:l,ph:r,mTop:a,mLeft:c,footerH:p,headerH:g,contentW:u,docCSS:b,fontFamily:m,accentColor:T,pageBackground:y}=o,C=s.map(h=>{let E=h.pageNodes.map(V=>V.outerHTML).join(`
`),k=t.showHeader&&(h.headerLeft||h.headerCenter||h.headerRight),N=h.headerCenter?`<span style="flex:1;text-align:center;">${D(h.headerCenter)}</span>`:`<span>${D(h.headerLeft)}</span><span style="margin-left:auto;">${D(h.headerRight)}</span>`,$=k?`<div style="position:absolute;top:${a*.4}px;left:${c}px;right:${c}px;display:flex;align-items:center;font-size:9px;color:#999;font-family:${m};white-space:nowrap;">${N}</div>`:"",F=h.footerCenter?`<span style="flex:1;text-align:center;">${D(h.footerCenter)}</span>`:`<span>${D(h.footerLeft)}</span><span style="margin-left:auto;">${D(h.footerRight)}</span>`,P=t.showFooter&&(h.footerLeft||h.footerRight||h.footerCenter),w=t.showFooterBorder?`border-top:0.5px solid ${T}33;`:"",x=P?`<div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;display:flex;align-items:center;${w}padding:0 ${c}px;font-size:9px;color:#aaa;font-family:${m};">${F}</div>`:"",v=`<div class="mpdf-doc" style="position:absolute;top:${a+g}px;left:${c}px;width:${u}px;">${E}</div>`;return`<div class="mpdf-export-page">${$}${v}${x}</div>`}),H=`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      @page { size: ${l}px ${r}px; margin: 0; }
      html, body { margin: 0; padding: 0; background: ${y}; }
      .mpdf-export-page {
        position: relative;
        width: ${l}px; height: ${r}px;
        overflow: hidden;
        background: ${y};
        page-break-after: always; break-after: page;
      }
      .mpdf-export-page:last-child { page-break-after: avoid; break-after: avoid; }
      ${b}
    `,M=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${D((S=(f=this.currentFile)==null?void 0:f.basename)!=null?S:"Export")}</title>
<style>${H}</style>
</head>
<body>
${C.join(`
`)}
</body>
</html>`;try{let h=window.require("@electron/remote");if(!(h!=null&&h.dialog))throw new Error("no remote");let E=await h.dialog.showSaveDialog({title:"Save PDF",defaultPath:((B=(L=this.currentFile)==null?void 0:L.basename)!=null?B:"export")+".pdf",filters:[{name:"PDF",extensions:["pdf"]}]});if(E.canceled||!E.filePath){e();return}new d.Notice("Generating PDF\u2026");let k=new Blob([M],{type:"text/html"}),N=URL.createObjectURL(k),$=new h.BrowserWindow({show:!1,webPreferences:{nodeIntegration:!1}});$.loadURL(N);let F=!1,P=()=>{URL.revokeObjectURL(N),$.close(),e()};$.webContents.once("did-fail-load",(w,x,v)=>{F||(F=!0,new d.Notice("PDF load error: "+v),P())}),$.webContents.once("did-finish-load",()=>{F||(F=!0,$.webContents.printToPDF({pageSize:t.pageSize,landscape:t.orientation==="landscape",printBackground:!0,margins:{marginType:"none"}}).then(w=>{window.require("fs").writeFile(E.filePath,w,x=>{x?new d.Notice("Error saving PDF: "+x.message):new d.Notice("\u2713 PDF saved: "+E.filePath),P()})}).catch(w=>{new d.Notice("PDF render error: "+w.message),P()}))})}catch(h){new d.Notice("Advanced PDF export requires the Obsidian desktop app."),e()}}},G=class extends d.PluginSettingTab{constructor(t,e){super(t,e);this.dirty=!1;this.plugin=e}display(){this.dirty=!1,this.buildSettings()}hide(){var t;this.dirty&&(this.dirty=!1,(t=this.plugin.activeModal)==null||t.render(!0))}async markDirty(){this.dirty=!0,await this.plugin.saveSettings()}buildSettings(){let{containerEl:t}=this;t.empty();let e=this.plugin.settings;t.createEl("h2",{text:"Advanced PDF Export"}),t.createEl("h3",{text:"Style Preset"}),new d.Setting(t).setName("Preset").setDesc("Pick a preset to configure the overall document style. Fine-tune any setting below.").addDropdown(r=>{Object.entries(q).forEach(([a,c])=>r.addOption(a,c.name)),r.setValue(e.preset).onChange(async a=>{this.plugin.applyPreset(a),await this.markDirty(),this.buildSettings()})}).addButton(r=>r.setButtonText("Reset Preset").setTooltip("Reset current preset to its default values").onClick(async()=>{this.plugin.applyPreset(e.preset),await this.markDirty(),this.buildSettings()})),t.createEl("h3",{text:"Page"}),new d.Setting(t).setName("Page size").addDropdown(r=>{Object.keys(z).forEach(a=>r.addOption(a,a)),r.setValue(e.pageSize).onChange(async a=>{e.pageSize=a,await this.markDirty()})}),new d.Setting(t).setName("Orientation").addDropdown(r=>r.addOptions({portrait:"Portrait",landscape:"Landscape"}).setValue(e.orientation).onChange(async a=>{e.orientation=a,await this.markDirty()})),t.createEl("h3",{text:"Margins (mm)"});let o=(r,a)=>new d.Setting(t).setName(r).addText(c=>c.setValue(String(e[a])).onChange(async p=>{e[a]=parseInt(p)||0,await this.markDirty()}));o("Top","marginTop"),o("Bottom","marginBottom"),o("Left","marginLeft"),o("Right","marginRight"),t.createEl("h3",{text:"Typography"});let s;new d.Setting(t).setName("Font family").addDropdown(r=>r.addOptions({"Georgia, serif":"Georgia (Serif)","'Times New Roman', Times, serif":"Times New Roman","'Palatino Linotype', Palatino, serif":"Palatino","Arial, sans-serif":"Arial","'Helvetica Neue', Helvetica, sans-serif":"Helvetica","'Trebuchet MS', sans-serif":"Trebuchet","'Courier New', monospace":"Courier New",__custom__:"Custom\u2026"}).setValue(e.fontFamily).onChange(async a=>{e.fontFamily=a,s.settingEl.style.display=a==="__custom__"?"":"none",await this.markDirty()})),s=new d.Setting(t).setName("Custom font name").setDesc('CSS font-family value \u2014 e.g. "Inter, sans-serif". The font must be installed on your system.').addText(r=>r.setPlaceholder("e.g. Inter, sans-serif").setValue(e.customFontName).onChange(async a=>{e.customFontName=a,await this.markDirty()})),s.settingEl.style.display=e.fontFamily==="__custom__"?"":"none",new d.Setting(t).setName("Font size (px)").addDropdown(r=>{["10","11","12","13","14","15","16"].forEach(a=>r.addOption(a,a+"px")),r.setValue(String(e.fontSize)).onChange(async a=>{e.fontSize=parseInt(a),await this.markDirty()})}),new d.Setting(t).setName("Code font size").addDropdown(r=>r.addOptions({"0.75":"0.75em","0.80":"0.80em","0.82":"0.82em","0.85":"0.85em","0.88":"0.88em","0.90":"0.90em","1.0":"1.00em"}).setValue(String(e.codeFontSize)).onChange(async a=>{e.codeFontSize=parseFloat(a),await this.markDirty()})),new d.Setting(t).setName("Line height").addDropdown(r=>r.addOptions({"1.4":"Tight (1.4)","1.6":"Compact (1.6)","1.75":"Normal (1.75)","1.85":"Relaxed (1.85)","2.0":"Double (2.0)"}).setValue(String(e.lineHeight)).onChange(async a=>{e.lineHeight=parseFloat(a),await this.markDirty()})),new d.Setting(t).setName("Paragraph spacing").addDropdown(r=>r.addOptions({0:"None","0.3":"Tight (0.3em)","0.5":"Normal (0.5em)","0.65":"Relaxed (0.65em)","1.0":"Wide (1em)"}).setValue(String(e.paragraphSpacing)).onChange(async a=>{e.paragraphSpacing=parseFloat(a),await this.markDirty()})),new d.Setting(t).setName("Heading scale").setDesc("Multiplier applied to all heading sizes.").addDropdown(r=>r.addOptions({"0.8":"Small (0.8\xD7)","0.88":"0.88\xD7","0.9":"Compact (0.9\xD7)","0.95":"0.95\xD7","1.0":"Normal (1.0\xD7)","1.05":"1.05\xD7","1.1":"Large (1.1\xD7)","1.2":"XLarge (1.2\xD7)"}).setValue(String(e.headingScale)).onChange(async a=>{e.headingScale=parseFloat(a),await this.markDirty()})),t.createEl("h3",{text:"Colors"});let l=(r,a)=>new d.Setting(t).setName(r).addColorPicker(c=>c.setValue(String(e[a])).onChange(async p=>{e[a]=p,await this.markDirty()}));l("Accent color","accentColor"),l("Body text color","bodyColor"),l("Heading color","headingColor"),l("Page background","pageBackground"),l("Blockquote background","blockquoteBg"),l("Blockquote border","blockquoteBorderColor"),l("Table header background","tableHeaderBg"),l("Code background","codeBackground"),t.createEl("h3",{text:"Heading Style"}),new d.Setting(t).setName("H1 bottom border").addToggle(r=>r.setValue(e.h1BorderBottom).onChange(async a=>{e.h1BorderBottom=a,await this.markDirty()})),new d.Setting(t).setName("H2 bottom border").addToggle(r=>r.setValue(e.h2BorderBottom).onChange(async a=>{e.h2BorderBottom=a,await this.markDirty()})),new d.Setting(t).setName("Center H1").addToggle(r=>r.setValue(e.centerH1).onChange(async a=>{e.centerH1=a,await this.markDirty()})),t.createEl("h3",{text:"Tables"}),new d.Setting(t).setName("Striped rows").addToggle(r=>r.setValue(e.tableStriped).onChange(async a=>{e.tableStriped=a,await this.markDirty()})),t.createEl("h3",{text:"Header & Footer"}),new d.Setting(t).setName("Show header").addToggle(r=>r.setValue(e.showHeader).onChange(async a=>{e.showHeader=a,await this.markDirty()})),new d.Setting(t).setName("Header text").setDesc("Appears on every page according to the chosen alignment.").addText(r=>r.setValue(e.headerText).onChange(async a=>{e.headerText=a,await this.markDirty()})),new d.Setting(t).setName("Header alignment").addDropdown(r=>r.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.headerAlignment).onChange(async a=>{e.headerAlignment=a,await this.markDirty()})),new d.Setting(t).setName("Show footer").addToggle(r=>r.setValue(e.showFooter).onChange(async a=>{e.showFooter=a,await this.markDirty()})),new d.Setting(t).setName("Footer border").setDesc("Show the separator line above the footer.").addToggle(r=>r.setValue(e.showFooterBorder).onChange(async a=>{e.showFooterBorder=a,await this.markDirty()})),new d.Setting(t).setName("Footer text").addText(r=>r.setValue(e.footerText).onChange(async a=>{e.footerText=a,await this.markDirty()})),new d.Setting(t).setName("Show page numbers").addToggle(r=>r.setValue(e.showPageNumbers).onChange(async a=>{e.showPageNumbers=a,await this.markDirty()})),new d.Setting(t).setName("Page number position").addDropdown(r=>r.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.pageNumberPosition).onChange(async a=>{e.pageNumberPosition=a,await this.markDirty()})),new d.Setting(t).setName("Page number start").setDesc("Number assigned to the first visible page number. Accepts any integer.").addText(r=>r.setValue(String(e.pageNumberStart)).onChange(async a=>{let c=parseInt(a,10);e.pageNumberStart=isNaN(c)?1:c,await this.markDirty()})),new d.Setting(t).setName("Header/footer on first page").setDesc("When off, page 1 has no header, footer, or page number. Numbering begins on page 2 using the start value.").addToggle(r=>r.setValue(e.showHeaderFooterOnFirstPage).onChange(async a=>{e.showHeaderFooterOnFirstPage=a,await this.markDirty()})),t.createEl("h3",{text:"Behaviour"}),new d.Setting(t).setName("Hide frontmatter").setDesc("Strip the YAML frontmatter block (--- \u2026 ---) from the preview and exported PDF.").addToggle(r=>r.setValue(e.hideFrontmatter).onChange(async a=>{e.hideFrontmatter=a,await this.markDirty()})),new d.Setting(t).setName("Include file name as title").setDesc("Prepend the note's file name as an H1 heading at the top of the PDF. Mirrors Obsidian's built-in 'Include file name as title' export option.").addToggle(r=>r.setValue(e.includeFilenameAsTitle).onChange(async a=>{e.includeFilenameAsTitle=a,await this.markDirty()})),new d.Setting(t).setName("Auto page break before H1").addToggle(r=>r.setValue(e.autoBreakH1).onChange(async a=>{e.autoBreakH1=a,await this.markDirty()})),new d.Setting(t).setName("Auto page break before H2").addToggle(r=>r.setValue(e.autoBreakH2).onChange(async a=>{e.autoBreakH2=a,await this.markDirty()}))}};
