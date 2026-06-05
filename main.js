var j=Object.defineProperty;var Y=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var Q=Object.prototype.hasOwnProperty;var J=(n,i)=>{for(var t in i)j(n,t,{get:i[t],enumerable:!0})},ee=(n,i,t,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of Z(i))!Q.call(n,o)&&o!==t&&j(n,o,{get:()=>i[o],enumerable:!(e=Y(i,o))||e.enumerable});return n};var te=n=>ee(j({},"__esModule",{value:!0}),n);var Ne={};J(Ne,{default:()=>q});module.exports=te(Ne);var d=require("obsidian"),I={A4:{w:794,h:1123},A3:{w:1123,h:1587},Letter:{w:816,h:1056},Legal:{w:816,h:1344},A5:{w:559,h:794}},V={default:{name:"Default",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#7c6af7",bodyColor:"#1a1a2e",headingColor:"#0d0d1a",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"transparent",blockquoteBorderColor:"#7c6af7",codeBackground:"#f0f0f8",codeFontSize:.85,tableHeaderBg:"#f0f0f8",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},minimal:{name:"Minimal",fontFamily:"'Helvetica Neue', Helvetica, sans-serif",fontSize:12,lineHeight:1.6,paragraphSpacing:.45,headingScale:.88,accentColor:"#333",bodyColor:"#222",headingColor:"#111",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f8f8f8",blockquoteBorderColor:"#ccc",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#efefef",tableStriped:!1,pageBackground:"#ffffff",marginTop:16,marginBottom:16,marginLeft:20,marginRight:20},academic:{name:"Academic",fontFamily:"'Times New Roman', Times, serif",fontSize:12,lineHeight:2,paragraphSpacing:0,headingScale:.95,accentColor:"#1a3a6b",bodyColor:"#000",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#999",codeBackground:"#f9f9f9",codeFontSize:.88,tableHeaderBg:"#e8e8e8",tableStriped:!1,pageBackground:"#ffffff",marginTop:25,marginBottom:25,marginLeft:30,marginRight:30},colorful:{name:"Colorful",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1.05,accentColor:"#e84393",bodyColor:"#1a1a2e",headingColor:"#2d0a4e",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#fdf0f8",blockquoteBorderColor:"#e84393",codeBackground:"#f0eaff",codeFontSize:.85,tableHeaderBg:"#2d0a4e",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},modern:{name:"Modern",fontFamily:"Arial, sans-serif",fontSize:13,lineHeight:1.75,paragraphSpacing:.6,headingScale:1,accentColor:"#0070f3",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f0f7ff",blockquoteBorderColor:"#0070f3",codeBackground:"#f1f5f9",codeFontSize:.85,tableHeaderBg:"#0070f3",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},newspaper:{name:"Newspaper",fontFamily:"Georgia, serif",fontSize:12,lineHeight:1.7,paragraphSpacing:.4,headingScale:1.1,accentColor:"#111",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#111",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#111",tableStriped:!1,pageBackground:"#ffffff",marginTop:18,marginBottom:18,marginLeft:20,marginRight:20},dark:{name:"Dark",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#818cf8",bodyColor:"#d1d5db",headingColor:"#f1f5f9",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"#1e293b",blockquoteBorderColor:"#818cf8",codeBackground:"#0f172a",codeFontSize:.85,tableHeaderBg:"#1e293b",tableStriped:!0,pageBackground:"#111827",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25}},ne={pageSize:"A4",orientation:"portrait",preset:"default",...V.default,headerText:"",footerText:"",showHeader:!0,showFooter:!0,showFooterBorder:!1,showPageNumbers:!0,pageNumberPosition:"right",pageNumberStart:1,showHeaderFooterOnFirstPage:!0,headerAlignment:"right",hideFrontmatter:!1,customFontName:"",autoBreakH1:!1,autoBreakH2:!1,includeFilenameAsTitle:!1,previewScale:.9},O=n=>n/25.4*96;function P(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var oe=/[\u0590-\u08FF\uFB1D-\uFDFD\uFE70-\uFEFC]/g,re=/[A-Za-z\u0590-\u08FF\uFB1D-\uFDFD\uFE70-\uFEFC]/g;function ae(n){var e,o;let i=((e=n.match(oe))!=null?e:[]).length,t=((o=n.match(re))!=null?o:[]).length;return t>0&&i/t>.1}function ie(n){return n.replace(/\r\n/g,`
`)}function se(n){return n.replace(/^---[ \t]*\r?\n[\s\S]*?\r?\n---[ \t]*(\r?\n|$)/,"")}function le(n){return n.split(/^\/\/\/\s*$/m).map(i=>i.trim()).filter(Boolean)}async function de(n,i,t,e){let o=document.createElement("div");return await d.MarkdownRenderer.render(n,i,o,t,e),pe(o),o.innerHTML}function ce(n){return n.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function pe(n){let i=new Map;n.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(t=>{var s;let e=t.textContent||"",o=ce(e);if(!o)return;let l=(s=i.get(o))!=null?s:0;i.set(o,l+1),t.id=l===0?o:`${o}-${l}`}),n.querySelectorAll("a").forEach(t=>{t.classList.remove("external-link")}),n.querySelectorAll(".copy-code-button").forEach(t=>t.remove()),n.querySelectorAll(".callout").forEach(t=>{t.removeAttribute("data-callout-fold"),t.classList.remove("is-collapsed"),t.querySelectorAll(".callout-fold").forEach(e=>e.remove())})}function me(n){let i=n.replace(/^#([\da-f])([\da-f])([\da-f])$/i,(s,r,a,c)=>`#${r}${r}${a}${a}${c}${c}`);if(!/^#[\da-f]{6}$/i.test(i))return 1;let t=s=>s<=.04045?s/12.92:((s+.055)/1.055)**2.4,e=t(parseInt(i.slice(1,3),16)/255),o=t(parseInt(i.slice(3,5),16)/255),l=t(parseInt(i.slice(5,7),16)/255);return .2126*e+.7152*o+.0722*l}function ge(n,i=!1){let t=n.headingScale,e=n.fontFamily==="__custom__"?n.customFontName.trim()||"inherit":n.fontFamily,o=me(n.tableHeaderBg)<.35?"#fff":n.headingColor;return`
  .mpdf-doc {
    font-family: ${e};
    font-size: ${n.fontSize}px;
    line-height: ${n.lineHeight};
    color: ${n.bodyColor};
    box-sizing: border-box;
    ${i?"direction: rtl;":""}
  }
  .mpdf-doc *, .mpdf-doc *::before, .mpdf-doc *::after { box-sizing: border-box; }
  .mpdf-doc strong, .mpdf-doc b { font-weight: 700; font-style: normal; }
  .mpdf-doc em, .mpdf-doc i { font-style: italic; font-weight: inherit; }
  .mpdf-doc mark { background: #ffe066; color: inherit; padding: 0 2px; border-radius: 2px; }
  .mpdf-doc del, .mpdf-doc s { text-decoration: line-through; }
  .mpdf-doc h1 {
    font-size: ${Math.round(22*t)}px;
    font-weight: 700;
    color: ${n.headingColor};
    margin: 0 0 ${Math.round(12*t)}px;
    line-height: 1.2;
    ${n.h1BorderBottom?`border-bottom: 2px solid ${n.accentColor}; padding-bottom: 6px;`:""}
    ${n.centerH1?"text-align: center;":""}
  }
  .mpdf-doc h2 {
    font-size: ${Math.round(17*t)}px;
    font-weight: 600;
    color: ${n.headingColor};
    margin: ${Math.round(20*t)}px 0 ${Math.round(10*t)}px;
    ${n.h2BorderBottom?`border-bottom: 0.5px solid ${n.accentColor}55; padding-bottom: 5px;`:""}
  }
  .mpdf-doc h3 {
    font-size: ${Math.round(15*t)}px;
    font-weight: 700;
    color: ${n.headingColor};
    margin: ${Math.round(16*t)}px 0 ${Math.round(8*t)}px;
    letter-spacing: 0.01em;
  }
  .mpdf-doc h4 { font-size: ${Math.round(13*t)}px; font-weight: 700; color: ${n.headingColor}; margin: 12px 0 6px; text-transform: uppercase; letter-spacing: 0.04em; }
  .mpdf-doc h5 { font-size: ${Math.round(12*t)}px; font-weight: 600; color: ${n.headingColor}; margin: 10px 0 4px; font-style: italic; }
  .mpdf-doc h6 { font-size: ${Math.round(11*t)}px; font-weight: 600; color: ${n.bodyColor}; margin: 8px 0 4px; font-style: italic; opacity: 0.75; }
  .mpdf-doc p { margin: 0 0 ${n.paragraphSpacing}em; }
  .mpdf-doc ul, .mpdf-doc ol { padding-inline-start: 1.4em; margin: 0 0 ${n.paragraphSpacing}em; }
  .mpdf-doc li { margin-bottom: 0.2em; line-height: ${n.lineHeight}; }
  .mpdf-doc blockquote {
    border-inline-start: 3px solid ${n.blockquoteBorderColor};
    background: ${n.blockquoteBg};
    padding-block: 4px;
    padding-inline: 1em 0;
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
  /* Belt-and-suspenders: hide copy-code buttons re-injected after postProcessRenderedHTML. */
  .mpdf-doc .copy-code-button { display: none !important; }
  .mpdf-doc table { width: 100%; border-collapse: collapse; margin: 0 0 ${n.paragraphSpacing}em; font-size: 0.92em; }
  .mpdf-doc th {
    background: ${n.tableHeaderBg};
    color: ${o};
    padding: 6px 10px;
    text-align: start;
    font-weight: 600;
    border: 0.5px solid ${n.accentColor}33;
    font-size: 0.9em;
  }
  .mpdf-doc td { padding: 5px 10px; border: 0.5px solid ${n.bodyColor}22; vertical-align: top; }
  ${n.tableStriped?`.mpdf-doc tbody tr:nth-child(even) { background: ${n.tableHeaderBg}55; }`:""}

  /* Callouts \u2014 override theme styles with !important so preview and PDF are
   * identical regardless of the active Obsidian theme. */
  .mpdf-doc .callout {
    border-inline-start: 4px solid ${n.accentColor} !important;
    border-start-start-radius: 0 !important;
    border-start-end-radius: 5px !important;
    border-end-end-radius: 5px !important;
    border-end-start-radius: 0 !important;
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
    font-family: ${e} !important;
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
    border-inline-start-color: ${n.accentColor}66 !important;
    background: transparent !important;
  }
  `.trim()}var he=new Set(["P","LI","BLOCKQUOTE","TD","TH"]),fe=new Set(["P","DIV","SECTION","ARTICLE","ASIDE","NAV","HEADER","FOOTER","UL","OL","LI","TABLE","THEAD","TBODY","TFOOT","TR","TD","TH","PRE","BLOCKQUOTE","HR","IMG","H1","H2","H3","H4","H5","H6"]),ue=new Set(["CODE","IMG","HR","H1","H2","H3","H4","H5","H6"]),be=2;function we(n,i){i.innerHTML="";for(let t of n)i.appendChild(t.cloneNode(!0));return i.getBoundingClientRect().height}function xe(n,i,t){return e=>we([...n,e],i)<=t-be}function ye(n){var t;let i=document.createTreeWalker(n,NodeFilter.SHOW_TEXT);for(;i.nextNode();){let e=i.currentNode,o=((t=e.textContent)!=null?t:"").replace(/^\s+/,"");if(o!==e.textContent&&(e.textContent=o),o.length>0)break}}function z(n,i){var m,f;let t=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),e=0,o=null,l=0;for(;t.nextNode();){let g=t.currentNode,b=(f=(m=g.textContent)==null?void 0:m.length)!=null?f:0;if(e+b>=i){o=g,l=i-e;break}e+=b}if(!o)return null;let s=document.createRange();s.selectNodeContents(n),s.setEnd(o,l);let r=document.createRange();r.selectNodeContents(n),r.setStart(o,l);let a=n.cloneNode(!1);a.appendChild(s.cloneContents());let c=n.cloneNode(!1);return c.appendChild(r.cloneContents()),ye(c),[a,c]}function Te(n){let i=[],t=/\s+/g,e;for(;e=t.exec(n);)e.index>0&&e.index<n.length&&i.push(e.index);return i}function Ce(n,i,t){var a;let e=(a=n.textContent)!=null?a:"";if(e.length<2)return null;let o=Te(e);if(o.length>0){let c=0,m=o.length-1,f=-1;for(;c<=m;){let g=Math.floor((c+m)/2),b=z(n,o[g]);if(!b){m=g-1;continue}i(b[0])?(f=g,c=g+1):m=g-1}if(f>=0)return z(n,o[f]);if(!t)return null}let l=1,s=e.length-1,r=0;for(;l<=s;){let c=Math.floor((l+s)/2),m=z(n,c);if(!m){s=c-1;continue}i(m[0])?(r=c,l=c+1):s=c-1}return r>0?z(n,r):null}function W(n,i,t){let e=n.cloneNode(!1);n.tagName==="OL"&&t!==void 0&&t>1&&(e.start=t);for(let o of i)e.appendChild(o.cloneNode(!0));return e}function He(n,i,t){var s;let e=Array.from(n.children).filter(r=>r.tagName==="LI");if(e.length===0)return null;let o=n.tagName==="OL"&&(s=n.start)!=null?s:1,l=0;for(let r=0;r<e.length&&i(W(n,e.slice(0,r+1),o));r++)l=r+1;if(l<=0){if(!t||e.length<2)return null;l=1}return l>=e.length?null:[W(n,e.slice(0,l),o),W(n,e.slice(l),o+l)]}function U(n,i){let t=n.cloneNode(!1),e=n.querySelector("caption");e&&t.appendChild(e.cloneNode(!0));let o=n.querySelector("colgroup");o&&t.appendChild(o.cloneNode(!0)),n.tHead&&t.appendChild(n.tHead.cloneNode(!0));let l=document.createElement("tbody");for(let s of i)l.appendChild(s.cloneNode(!0));return t.appendChild(l),t}function Se(n,i,t){let e=n.tBodies[0],o=e?Array.from(e.rows):Array.from(n.rows).filter(s=>{var r;return((r=s.parentElement)==null?void 0:r.tagName)!=="THEAD"});if(o.length===0)return null;let l=0;for(let s=0;s<o.length&&i(U(n,o.slice(0,s+1)));s++)l=s+1;if(l<=0){if(!t||o.length<2)return null;l=1}return l>=o.length?null:[U(n,o.slice(0,l)),U(n,o.slice(l))]}function G(n,i){let t=n.cloneNode(!1),e=n.querySelector("code");if(e){let o=e.cloneNode(!1);o.textContent=i.join(`
`),t.appendChild(o)}else t.textContent=i.join(`
`);return t}function Ee(n,i,t){var l;let e=((l=n.textContent)!=null?l:"").split(`
`);if(e.length>1&&e[e.length-1]===""&&e.pop(),e.length<2)return null;let o=0;for(let s=0;s<e.length&&i(G(n,e.slice(0,s+1)));s++)o=s+1;if(o<=0){if(!t||e.length<2)return null;o=1}return o>=e.length?null:[G(n,e.slice(0,o)),G(n,e.slice(o))]}function ve(n){if(!he.has(n.tagName))return!1;for(let i of Array.from(n.childNodes))if(i.nodeType===Node.ELEMENT_NODE&&fe.has(i.tagName))return!1;return!0}function Le(n,i,t){return ue.has(n.tagName)?null:n.tagName==="PRE"?Ee(n,i,t):n.tagName==="TABLE"?Se(n,i,t):n.tagName==="UL"||n.tagName==="OL"?He(n,i,t):ve(n)?Ce(n,i,t):null}function ke(n,i,t,e){var f;let o=document.createElement("div");o.style.cssText=["position:fixed","top:0","left:-99999px",`width:${i}px`,"visibility:hidden","pointer-events:none","z-index:-1"].join(";");let l=new CSSStyleSheet;l.replaceSync(e);let s=[...document.adoptedStyleSheets];document.adoptedStyleSheets=[...s,l];let r=document.createElement("div");r.className="mpdf-doc";let a=new DOMParser().parseFromString(n,"text/html");Array.from(a.body.childNodes).forEach(g=>r.appendChild(document.importNode(g,!0))),o.appendChild(r);let c=document.createElement("div");c.className="mpdf-doc",c.style.cssText=`position:absolute;top:0;left:0;width:${i}px;visibility:hidden;`,o.appendChild(c),document.body.appendChild(o);let m=[];try{let g=[],b=Array.from(r.children),p=0;for(;p<b.length;){let x=b[p],C=xe(g,c,t);if(C(x.cloneNode(!0))){g.push(x.cloneNode(!0)),p++;continue}let E=g.length===0,T=Le(x,C,E);if(T){g.push(T[0]),m.push(g),g=[];let L=T[1];(f=L.textContent)!=null&&f.trim()||L.children.length>0?b[p]=L:p++;continue}if(g.length>0){m.push(g),g=[];continue}g.push(x.cloneNode(!0)),m.push(g),g=[],p++}g.length>0&&m.push(g)}finally{document.body.removeChild(o),document.adoptedStyleSheets=s}return m.length>0?m:[[]]}function Be(n,i){let t=n.length;return n.map((e,o)=>{var C,E,T;let l=o+1,s=i.showHeaderFooterOnFirstPage||o>0,r=i.showHeaderFooterOnFirstPage?i.pageNumberStart+o:i.pageNumberStart+(o-1),a=i.showHeaderFooterOnFirstPage?i.pageNumberStart+t-1:i.pageNumberStart+t-2,c=`${r} / ${a}`,m="",f="",g="",b="",p="",x="";return s&&(i.showPageNumbers?i.pageNumberPosition==="center"?g=(i.footerText?i.footerText+" \u2014 ":"")+c:i.pageNumberPosition==="left"?(m=c,f=(C=i.footerText)!=null?C:""):(m=(E=i.footerText)!=null?E:"",f=c):m=(T=i.footerText)!=null?T:"",i.headerText&&(i.headerAlignment==="center"?p=i.headerText:i.headerAlignment==="left"?b=i.headerText:x=i.headerText)),{pageNodes:e,pageNum:l,totalPages:t,headerLeft:b,headerCenter:p,headerRight:x,footerLeft:m,footerRight:f,footerCenter:g}})}var q=class extends d.Plugin{constructor(){super(...arguments);this.activeModal=null}async onload(){await this.loadSettings(),this.addCommand({id:"open-advanced-pdf-export",name:"Open Panel",callback:()=>this.openModal()}),this.registerEvent(this.app.workspace.on("file-menu",(t,e)=>{!(e instanceof d.TFile)||e.extension!=="md"||t.addItem(o=>o.setTitle("Advanced PDF Export: Open Panel").setIcon("file-output").onClick(()=>this.openModal(e)))})),this.addSettingTab(new K(this.app,this))}onunload(){var t;(t=this.activeModal)==null||t.close()}openModal(t){this.activeModal&&this.activeModal.close(),new R(this.app,this,t).open()}async loadSettings(){this.settings=Object.assign({},ne,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async saveSettingsAndRender(){var t;await this.saveSettings(),(t=this.activeModal)==null||t.render()}applyPreset(t){let e=V[t];e&&(this.settings.preset=t,Object.assign(this.settings,e))}};function Fe(n,i){var l,s;if(i)return i;let t=(l=n.workspace.getActiveViewOfType(d.MarkdownView))==null?void 0:l.file;if(t)return t;let e=n.workspace.getActiveFile();if((e==null?void 0:e.extension)==="md")return e;let o=n.workspace.getMostRecentLeaf();return(o==null?void 0:o.view)instanceof d.MarkdownView&&(s=o.view.file)!=null?s:null}var R=class extends d.Modal{constructor(t,e,o){super(t);this.renderComponent=new d.Component;this.currentFile=null;this.renderToken=0;this.layoutCache=null;this.renderDebounceTimer=null;this.plugin=e,this.initialFile=o!=null?o:null}async onOpen(){this.plugin.activeModal=this,this.renderComponent.load(),this.modalEl.addClass("mpdf-modal"),this.buildUI(this.contentEl);let t=Fe(this.app,this.initialFile);if(t){this.currentFile=t;let e=await this.app.vault.read(t);this.editorEl.value=e,this.noteTitleEl.textContent=t.basename,this.noteTitleEl.title=t.path,this.showLoading(),await new Promise(o=>window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>o()))),this.render(!0)}}onClose(){this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.renderComponent.unload(),this.plugin.activeModal=null,this.currentFile=null,this.layoutCache=null}buildUI(t){let e=this.plugin.settings;this.buildTopbar(t.createEl("div",{cls:"mpdf-topbar"}),e);let o=t.createEl("div",{cls:"mpdf-main"}),l=o.createEl("div",{cls:"mpdf-editor-panel"});this.editorEl=l.createEl("textarea",{cls:"mpdf-editor"}),this.editorEl.placeholder=`Type or paste markdown here to preview and export as PDF.

Tip: open this panel from a note's right-click menu, command palette,
or keyboard shortcut to auto-load the active note.

Use /// on its own line for a manual page break.
Use --- for a horizontal rule.

Markdown tables:
| Col A | Col B |
|-------|-------|
| Cell  | Cell  |`;let s=o.createEl("div",{cls:"mpdf-preview-container"});this.previewEl=s.createEl("div",{cls:"mpdf-preview"}),this.loadingOverlayEl=s.createEl("div",{cls:"mpdf-loading-overlay"}),this.loadingOverlayEl.createEl("div",{cls:"mpdf-spinner"}),this.loadingOverlayEl.createEl("span",{cls:"mpdf-loading-text",text:"Rendering\u2026"}),this.editorEl.addEventListener("keydown",r=>{r.key==="Enter"&&(r.ctrlKey||r.metaKey)&&(r.preventDefault(),this.render(!0))})}buildTopbar(t,e){let o=t.createEl("div",{cls:"mpdf-topbar-left"});this.noteTitleEl=t.createEl("div",{cls:"mpdf-topbar-title",text:"\u2014"});let l=t.createEl("div",{cls:"mpdf-topbar-right"}),s=(p,x,C,E)=>{let T=o.createEl("div",{cls:"mpdf-ctrl"});T.createEl("span",{cls:"mpdf-ctrl-label",text:p});let L=T.createEl("select",{cls:"mpdf-select"});for(let[u,k]of Object.entries(x)){let S=L.createEl("option",{text:k,value:u});u===C&&(S.selected=!0)}L.addEventListener("change",()=>void E(L.value))},r={};Object.entries(V).forEach(([p,x])=>r[p]=x.name),s("Style",r,e.preset,async p=>{this.plugin.applyPreset(p),await this.plugin.saveSettingsAndRender()});let a={};Object.keys(I).forEach(p=>a[p]=p),s("Size",a,e.pageSize,async p=>{this.plugin.settings.pageSize=p,await this.plugin.saveSettingsAndRender()}),s("Orient",{portrait:"Portrait",landscape:"Landscape"},e.orientation,async p=>{this.plugin.settings.orientation=p,await this.plugin.saveSettingsAndRender()});let c=o.createEl("div",{cls:"mpdf-ctrl"});c.createEl("span",{cls:"mpdf-ctrl-label",text:"Zoom"});let m=c.createEl("span",{cls:"mpdf-ctrl-label",text:Math.round(e.previewScale*100)+"%"}),f=c.createEl("input");f.type="range",f.min="0.35",f.max="1.0",f.step="0.05",f.value=String(e.previewScale),f.addClass("mpdf-zoom-slider"),f.addEventListener("input",async()=>{let p=parseFloat(f.value);this.plugin.settings.previewScale=p,m.textContent=Math.round(p*100)+"%",await this.plugin.saveSettings(),this.renderPreviewOnly()});let g=o.createEl("button",{cls:"mpdf-btn",text:"Insert Page Break"});g.title="Insert page break (///)",g.addEventListener("click",()=>this.insertAtCursor(`
///
`)),this.pageCountEl=l.createEl("span",{cls:"mpdf-page-count",text:"\u2014 pages"});let b=l.createEl("button",{cls:"mpdf-btn mpdf-btn-icon"});b.setAttr("aria-label","Open Advanced PDF Export settings"),(0,d.setIcon)(b,"settings"),b.addEventListener("click",()=>{var x,C;let p=this.app.setting;(x=p==null?void 0:p.open)==null||x.call(p),(C=p==null?void 0:p.openTabById)==null||C.call(p,"advanced-pdf-export")}),this.renderBtn=l.createEl("button",{cls:"mpdf-btn",text:"\u27F3 Render PDF"}),this.renderBtn.title="Render preview (Ctrl+Enter)",this.renderBtn.addEventListener("click",()=>this.render(!0)),this.exportBtn=l.createEl("button",{cls:"mpdf-btn mpdf-btn-primary",text:"\u2B07 Export PDF"}),this.exportBtn.addEventListener("click",()=>void this.exportPDF())}insertAtCursor(t){let e=this.editorEl,o=e.selectionStart,l=e.selectionEnd;e.value=e.value.slice(0,o)+t+e.value.slice(l),e.selectionStart=e.selectionEnd=o+t.length,e.focus()}render(t=!1){let e=++this.renderToken;this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.showLoading();let o=()=>this.doRender(e).catch(l=>{let s=l instanceof Error?l.message:String(l);console.error("[advanced-pdf-export] render error:",l),this.hideLoading(),new d.Notice("Render error: "+s)});t?window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>void o())):this.renderDebounceTimer=window.setTimeout(()=>{this.renderDebounceTimer=null,window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>void o()))},150)}static insertAutoBreaks(t,e,o){if(!e&&!o)return t;let l=t.split(`
`),s=[],r=!1,a="";for(let c of l){if(r){let m=c.match(/^(`{3,}|~{3,})\s*$/);m&&m[1][0]===a[0]&&m[1].length>=a.length&&(r=!1,a="")}else{let m=c.match(/^(`{3,}|~{3,})/);m?(r=!0,a=m[1]):s.length>0&&(e&&/^# /.test(c)||o&&/^## /.test(c))&&s.push("///")}s.push(c)}return s.join(`
`)}async doRender(t){var M,h,H;let e=this.plugin.settings,o=ie(this.editorEl.value);e.hideFrontmatter&&(o=se(o)),e.includeFilenameAsTitle&&this.currentFile&&(o=`# ${this.currentFile.basename}

${o}`),o=R.insertAutoBreaks(o,e.autoBreakH1,e.autoBreakH2);let l=le(o),s=(M=I[e.pageSize])!=null?M:I.A4,r=e.orientation==="landscape"?s.h:s.w,a=e.orientation==="landscape"?s.w:s.h,c=O(e.marginTop),m=O(e.marginBottom),f=O(e.marginLeft),g=O(e.marginRight),b=e.showFooter?28:0,p=e.showHeader&&e.headerText?20:0,x=r-f-g,C=a-c-m-b-p,E=ae(this.editorEl.value),T=ge(e,E),L=(H=(h=this.currentFile)==null?void 0:h.path)!=null?H:"pdf-export",u=await Promise.all(l.map(N=>de(this.app,N.trim(),L,this.renderComponent)));if(t!==this.renderToken)return;let k=[];for(let N of u)k.push(...ke(N,x,C,T));let S=Be(k,e),F=e.fontFamily==="__custom__"?e.customFontName.trim()||"inherit":e.fontFamily;this.layoutCache={layouts:S,pw:r,ph:a,mTop:c,mLeft:f,footerH:b,headerH:p,contentW:x,contentH:C,docCSS:T,fontFamily:F,accentColor:e.accentColor,pageBackground:e.pageBackground,isRTL:E},this.drawPreview(this.layoutCache,e.previewScale),this.pageCountEl.textContent=`${S.length} page${S.length!==1?"s":""}`,this.hideLoading()}renderPreviewOnly(){this.layoutCache&&this.drawPreview(this.layoutCache,this.plugin.settings.previewScale)}showLoading(){this.loadingOverlayEl.addClass("mpdf-loading-overlay--visible"),this.renderBtn.disabled=!0,this.renderBtn.textContent="Rendering\u2026"}hideLoading(){this.loadingOverlayEl.removeClass("mpdf-loading-overlay--visible"),this.renderBtn.disabled=!1,this.renderBtn.textContent="\u27F3 Render PDF"}drawPreview(t,e){let{layouts:o,pw:l,ph:s,mTop:r,mLeft:a,footerH:c,headerH:m,contentW:f,docCSS:g,fontFamily:b,accentColor:p,pageBackground:x,isRTL:C}=t,E=this.plugin.settings;this.previewEl.empty();let T=new Map;o.forEach((u,k)=>{for(let S of u.pageNodes)S.querySelectorAll("[id]").forEach(F=>{T.has(F.id)||T.set(F.id,k)}),S.id&&!T.has(S.id)&&T.set(S.id,k)});let L=[];for(let u of o){let k=Math.round(l*e),S=Math.round(s*e),F=this.previewEl.createEl("div",{cls:"mpdf-page-wrap"});F.style.cssText=`width:${k}px;height:${S}px;position:relative;flex-shrink:0;`,F.createEl("div",{cls:"mpdf-page-label",text:`Page ${u.pageNum} of ${u.totalPages}`}),L.push(F);let M=F.createEl("div",{cls:"mpdf-page-scale"});M.style.cssText=`width:${k}px;height:${S}px;overflow:hidden;position:relative;`;let h=document.createElement("div");h.style.cssText=[`width:${l}px`,`height:${s}px`,`transform:scale(${e})`,"transform-origin:top left","position:absolute","top:0","left:0"].join(";"),M.appendChild(h);let H=h.attachShadow({mode:"open"}),N=`
        :host {
          display: block;
          width: ${l}px;
          height: ${s}px;
          background: ${x};
          box-shadow: 0 2px 8px rgba(0,0,0,.30), 0 8px 32px rgba(0,0,0,.25);
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
        }
        *, *::before, *::after { box-sizing: border-box; }
        .mpdf-hf-center { flex: 1; text-align: center; }
        .mpdf-hf-end { margin-left: auto; }
        ${g}
      `,D=new CSSStyleSheet;if(D.replaceSync(N),H.adoptedStyleSheets=[D],E.showHeader&&(u.headerLeft||u.headerCenter||u.headerRight)){let w=document.createElement("div");if(w.style.cssText=["position:absolute",`top:${r*.4}px`,`left:${a}px`,`right:${a}px`,"display:flex","align-items:center","font-size:9px","color:#999",`font-family:${b}`,"white-space:nowrap"].join(";"),u.headerCenter){let y=document.createElement("span");y.className="mpdf-hf-center",y.textContent=u.headerCenter,w.appendChild(y)}else{let y=document.createElement("span");y.textContent=u.headerLeft,w.appendChild(y);let v=document.createElement("span");v.className="mpdf-hf-end",v.textContent=u.headerRight,w.appendChild(v)}H.appendChild(w)}let B=document.createElement("div");B.className="mpdf-doc",C&&B.setAttribute("dir","rtl"),B.style.cssText=["position:absolute",`top:${r+m}px`,`left:${a}px`,`width:${f}px`].join(";");for(let w of u.pageNodes)B.appendChild(w.cloneNode(!0));if(H.appendChild(B),B.querySelectorAll("a[href^='#']").forEach(w=>{let y=decodeURIComponent(w.getAttribute("href").slice(1)),v=T.get(y);v!==void 0&&(w.title=`Go to page ${v+1}`,w.addEventListener("click",_=>{var X;_.preventDefault(),(X=L[v])==null||X.scrollIntoView({behavior:"smooth",block:"start"})}))}),E.showFooter&&(u.footerLeft||u.footerRight||u.footerCenter)){let w=document.createElement("div");if(w.style.cssText=["position:absolute","bottom:0","left:0","right:0",`height:${c}px`,"display:flex","align-items:center",E.showFooterBorder?`border-top:0.5px solid ${p}33`:"",`padding:0 ${a}px`,"font-size:9px","color:#aaa",`font-family:${b}`].filter(Boolean).join(";"),u.footerCenter){let y=document.createElement("span");y.className="mpdf-hf-center",y.textContent=u.footerCenter,w.appendChild(y)}else{let y=document.createElement("span");y.textContent=u.footerLeft,w.appendChild(y);let v=document.createElement("span");v.className="mpdf-hf-end",v.textContent=u.footerRight,w.appendChild(v)}H.appendChild(w)}}}async exportPDF(){var k,S,F,M;let t=this.plugin.settings;this.exportBtn.disabled=!0,this.exportBtn.textContent="\u2B07 Exporting\u2026";let e=()=>{this.exportBtn.disabled=!1,this.exportBtn.textContent="\u2B07 Export PDF"};if(!this.layoutCache){this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null);let h=++this.renderToken;this.showLoading();try{await this.doRender(h)}catch(H){let N=H instanceof Error?H.message:String(H);new d.Notice("Render error: "+N),this.hideLoading(),e();return}}let o=this.layoutCache;if(!o||o.layouts.length===0){new d.Notice("Nothing to export."),e();return}let{layouts:l,pw:s,ph:r,mTop:a,mLeft:c,footerH:m,headerH:f,contentW:g,docCSS:b,fontFamily:p,accentColor:x,pageBackground:C,isRTL:E}=o,T=l.map(h=>{let H=h.pageNodes.map(_=>_.outerHTML).join(`
`),N=t.showHeader&&(h.headerLeft||h.headerCenter||h.headerRight),D=h.headerCenter?`<span style="flex:1;text-align:center;">${P(h.headerCenter)}</span>`:`<span>${P(h.headerLeft)}</span><span style="margin-left:auto;">${P(h.headerRight)}</span>`,$=N?`<div style="position:absolute;top:${a*.4}px;left:${c}px;right:${c}px;display:flex;align-items:center;font-size:9px;color:#999;font-family:${p};white-space:nowrap;">${D}</div>`:"",B=h.footerCenter?`<span style="flex:1;text-align:center;">${P(h.footerCenter)}</span>`:`<span>${P(h.footerLeft)}</span><span style="margin-left:auto;">${P(h.footerRight)}</span>`,A=t.showFooter&&(h.footerLeft||h.footerRight||h.footerCenter),w=t.showFooterBorder?`border-top:0.5px solid ${x}33;`:"",y=A?`<div style="position:absolute;bottom:0;left:0;right:0;height:${m}px;display:flex;align-items:center;${w}padding:0 ${c}px;font-size:9px;color:#aaa;font-family:${p};">${B}</div>`:"",v=`<div class="mpdf-doc"${E?' dir="rtl"':""} style="position:absolute;top:${a+f}px;left:${c}px;width:${g}px;">${H}</div>`;return`<div class="mpdf-export-page">${$}${v}${y}</div>`}),L=`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      @page { size: ${s}px ${r}px; margin: 0; }
      html, body { margin: 0; padding: 0; background: ${C}; }
      .mpdf-export-page {
        position: relative;
        width: ${s}px; height: ${r}px;
        overflow: hidden;
        background: ${C};
        page-break-after: always; break-after: page;
      }
      .mpdf-export-page:last-child { page-break-after: avoid; break-after: avoid; }
      ${b}
    `,u=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${P((S=(k=this.currentFile)==null?void 0:k.basename)!=null?S:"Export")}</title>
<style>${L}</style>
</head>
<body>
${T.join(`
`)}
</body>
</html>`;try{let h=window.require("@electron/remote");if(!(h!=null&&h.dialog))throw new Error("no remote");let H=await h.dialog.showSaveDialog({title:"Save PDF",defaultPath:((M=(F=this.currentFile)==null?void 0:F.basename)!=null?M:"export")+".pdf",filters:[{name:"PDF",extensions:["pdf"]}]});if(H.canceled||!H.filePath){e();return}new d.Notice("Generating PDF\u2026");let N=new Blob([u],{type:"text/html"}),D=URL.createObjectURL(N),$=new h.BrowserWindow({show:!1,webPreferences:{nodeIntegration:!1}});$.loadURL(D);let B=!1,A=()=>{URL.revokeObjectURL(D),$.close(),e()};$.webContents.once("did-fail-load",(w,y,v)=>{B||(B=!0,new d.Notice("PDF load error: "+v),A())}),$.webContents.once("did-finish-load",()=>{B||(B=!0,$.webContents.printToPDF({pageSize:t.pageSize,landscape:t.orientation==="landscape",printBackground:!0,margins:{marginType:"none"}}).then(w=>{window.require("fs").writeFile(H.filePath,w,y=>{y?new d.Notice("Error saving PDF: "+y.message):new d.Notice("\u2713 PDF saved: "+H.filePath),A()})}).catch(w=>{new d.Notice("PDF render error: "+w.message),A()}))})}catch(h){new d.Notice("Advanced PDF export requires the Obsidian desktop app."),e()}}},K=class extends d.PluginSettingTab{constructor(t,e){super(t,e);this.dirty=!1;this.plugin=e}display(){this.dirty=!1,this.buildSettings()}hide(){var t;this.dirty&&(this.dirty=!1,(t=this.plugin.activeModal)==null||t.render(!0))}async markDirty(){this.dirty=!0,await this.plugin.saveSettings()}buildSettings(){let{containerEl:t}=this;t.empty();let e=this.plugin.settings;new d.Setting(t).setName("Advanced PDF Export").setHeading(),new d.Setting(t).setName("Style Preset").setHeading(),new d.Setting(t).setName("Preset").setDesc("Pick a preset to configure the overall document style. Fine-tune any setting below.").addDropdown(r=>{Object.entries(V).forEach(([a,c])=>r.addOption(a,c.name)),r.setValue(e.preset).onChange(async a=>{this.plugin.applyPreset(a),await this.markDirty(),this.buildSettings()})}).addButton(r=>r.setButtonText("Reset Preset").setTooltip("Reset current preset to its default values").onClick(async()=>{this.plugin.applyPreset(e.preset),await this.markDirty(),this.buildSettings()})),new d.Setting(t).setName("Page").setHeading(),new d.Setting(t).setName("Page size").addDropdown(r=>{Object.keys(I).forEach(a=>r.addOption(a,a)),r.setValue(e.pageSize).onChange(async a=>{e.pageSize=a,await this.markDirty()})}),new d.Setting(t).setName("Orientation").addDropdown(r=>r.addOptions({portrait:"Portrait",landscape:"Landscape"}).setValue(e.orientation).onChange(async a=>{e.orientation=a,await this.markDirty()})),new d.Setting(t).setName("Margins (mm)").setHeading();let o=(r,a)=>new d.Setting(t).setName(r).addText(c=>c.setValue(String(e[a])).onChange(async m=>{Object.assign(e,{[a]:parseInt(m)||0}),await this.markDirty()}));o("Top","marginTop"),o("Bottom","marginBottom"),o("Left","marginLeft"),o("Right","marginRight"),new d.Setting(t).setName("Typography").setHeading();let l;new d.Setting(t).setName("Font family").addDropdown(r=>r.addOptions({"Georgia, serif":"Georgia (Serif)","'Times New Roman', Times, serif":"Times New Roman","'Palatino Linotype', Palatino, serif":"Palatino","Arial, sans-serif":"Arial","'Helvetica Neue', Helvetica, sans-serif":"Helvetica","'Trebuchet MS', sans-serif":"Trebuchet","'Courier New', monospace":"Courier New",__custom__:"Custom\u2026"}).setValue(e.fontFamily).onChange(async a=>{e.fontFamily=a,l.settingEl.style.display=a==="__custom__"?"":"none",await this.markDirty()})),l=new d.Setting(t).setName("Custom font name").setDesc('CSS font-family value \u2014 e.g. "Inter, sans-serif". The font must be installed on your system.').addText(r=>r.setPlaceholder("e.g. Inter, sans-serif").setValue(e.customFontName).onChange(async a=>{e.customFontName=a,await this.markDirty()})),l.settingEl.style.display=e.fontFamily==="__custom__"?"":"none",new d.Setting(t).setName("Font size (px)").addDropdown(r=>{["10","11","12","13","14","15","16"].forEach(a=>r.addOption(a,a+"px")),r.setValue(String(e.fontSize)).onChange(async a=>{e.fontSize=parseInt(a),await this.markDirty()})}),new d.Setting(t).setName("Code font size").addDropdown(r=>r.addOptions({"0.75":"0.75em","0.80":"0.80em","0.82":"0.82em","0.85":"0.85em","0.88":"0.88em","0.90":"0.90em","1.0":"1.00em"}).setValue(String(e.codeFontSize)).onChange(async a=>{e.codeFontSize=parseFloat(a),await this.markDirty()})),new d.Setting(t).setName("Line height").addDropdown(r=>r.addOptions({"1.4":"Tight (1.4)","1.6":"Compact (1.6)","1.75":"Normal (1.75)","1.85":"Relaxed (1.85)","2.0":"Double (2.0)"}).setValue(String(e.lineHeight)).onChange(async a=>{e.lineHeight=parseFloat(a),await this.markDirty()})),new d.Setting(t).setName("Paragraph spacing").addDropdown(r=>r.addOptions({0:"None","0.3":"Tight (0.3em)","0.5":"Normal (0.5em)","0.65":"Relaxed (0.65em)","1.0":"Wide (1em)"}).setValue(String(e.paragraphSpacing)).onChange(async a=>{e.paragraphSpacing=parseFloat(a),await this.markDirty()})),new d.Setting(t).setName("Heading scale").setDesc("Multiplier applied to all heading sizes.").addDropdown(r=>r.addOptions({"0.8":"Small (0.8\xD7)","0.88":"0.88\xD7","0.9":"Compact (0.9\xD7)","0.95":"0.95\xD7","1.0":"Normal (1.0\xD7)","1.05":"1.05\xD7","1.1":"Large (1.1\xD7)","1.2":"XLarge (1.2\xD7)"}).setValue(String(e.headingScale)).onChange(async a=>{e.headingScale=parseFloat(a),await this.markDirty()})),new d.Setting(t).setName("Colors").setHeading();let s=(r,a)=>new d.Setting(t).setName(r).addColorPicker(c=>c.setValue(String(e[a])).onChange(async m=>{Object.assign(e,{[a]:m}),await this.markDirty()}));s("Accent color","accentColor"),s("Body text color","bodyColor"),s("Heading color","headingColor"),s("Page background","pageBackground"),s("Blockquote background","blockquoteBg"),s("Blockquote border","blockquoteBorderColor"),s("Table header background","tableHeaderBg"),s("Code background","codeBackground"),new d.Setting(t).setName("Heading Style").setHeading(),new d.Setting(t).setName("H1 bottom border").addToggle(r=>r.setValue(e.h1BorderBottom).onChange(async a=>{e.h1BorderBottom=a,await this.markDirty()})),new d.Setting(t).setName("H2 bottom border").addToggle(r=>r.setValue(e.h2BorderBottom).onChange(async a=>{e.h2BorderBottom=a,await this.markDirty()})),new d.Setting(t).setName("Center H1").addToggle(r=>r.setValue(e.centerH1).onChange(async a=>{e.centerH1=a,await this.markDirty()})),new d.Setting(t).setName("Tables").setHeading(),new d.Setting(t).setName("Striped rows").addToggle(r=>r.setValue(e.tableStriped).onChange(async a=>{e.tableStriped=a,await this.markDirty()})),new d.Setting(t).setName("Header & Footer").setHeading(),new d.Setting(t).setName("Show header").addToggle(r=>r.setValue(e.showHeader).onChange(async a=>{e.showHeader=a,await this.markDirty()})),new d.Setting(t).setName("Header text").setDesc("Appears on every page according to the chosen alignment.").addText(r=>r.setValue(e.headerText).onChange(async a=>{e.headerText=a,await this.markDirty()})),new d.Setting(t).setName("Header alignment").addDropdown(r=>r.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.headerAlignment).onChange(async a=>{e.headerAlignment=a,await this.markDirty()})),new d.Setting(t).setName("Show footer").addToggle(r=>r.setValue(e.showFooter).onChange(async a=>{e.showFooter=a,await this.markDirty()})),new d.Setting(t).setName("Footer border").setDesc("Show the separator line above the footer.").addToggle(r=>r.setValue(e.showFooterBorder).onChange(async a=>{e.showFooterBorder=a,await this.markDirty()})),new d.Setting(t).setName("Footer text").addText(r=>r.setValue(e.footerText).onChange(async a=>{e.footerText=a,await this.markDirty()})),new d.Setting(t).setName("Show page numbers").addToggle(r=>r.setValue(e.showPageNumbers).onChange(async a=>{e.showPageNumbers=a,await this.markDirty()})),new d.Setting(t).setName("Page number position").addDropdown(r=>r.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.pageNumberPosition).onChange(async a=>{e.pageNumberPosition=a,await this.markDirty()})),new d.Setting(t).setName("Page number start").setDesc("Number assigned to the first visible page number. Accepts any integer.").addText(r=>r.setValue(String(e.pageNumberStart)).onChange(async a=>{let c=parseInt(a,10);e.pageNumberStart=isNaN(c)?1:c,await this.markDirty()})),new d.Setting(t).setName("Header/footer on first page").setDesc("When off, page 1 has no header, footer, or page number. Numbering begins on page 2 using the start value.").addToggle(r=>r.setValue(e.showHeaderFooterOnFirstPage).onChange(async a=>{e.showHeaderFooterOnFirstPage=a,await this.markDirty()})),new d.Setting(t).setName("Behaviour").setHeading(),new d.Setting(t).setName("Hide frontmatter").setDesc("Strip the YAML frontmatter block (--- \u2026 ---) from the preview and exported PDF.").addToggle(r=>r.setValue(e.hideFrontmatter).onChange(async a=>{e.hideFrontmatter=a,await this.markDirty()})),new d.Setting(t).setName("Include file name as title").setDesc("Prepend the note's file name as an H1 heading at the top of the PDF. Mirrors Obsidian's built-in 'Include file name as title' export option.").addToggle(r=>r.setValue(e.includeFilenameAsTitle).onChange(async a=>{e.includeFilenameAsTitle=a,await this.markDirty()})),new d.Setting(t).setName("Auto page break before H1").addToggle(r=>r.setValue(e.autoBreakH1).onChange(async a=>{e.autoBreakH1=a,await this.markDirty()})),new d.Setting(t).setName("Auto page break before H2").addToggle(r=>r.setValue(e.autoBreakH2).onChange(async a=>{e.autoBreakH2=a,await this.markDirty()}))}};
