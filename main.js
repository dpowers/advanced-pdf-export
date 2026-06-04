var V=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames;var X=Object.prototype.hasOwnProperty;var Q=(n,i)=>{for(var t in i)V(n,t,{get:i[t],enumerable:!0})},Z=(n,i,t,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of Y(i))!X.call(n,o)&&o!==t&&V(n,o,{get:()=>i[o],enumerable:!(e=K(i,o))||e.enumerable});return n};var J=n=>Z(V({},"__esModule",{value:!0}),n);var Se={};Q(Se,{default:()=>z});module.exports=J(Se);var d=require("obsidian"),O={A4:{w:794,h:1123},A3:{w:1123,h:1587},Letter:{w:816,h:1056},Legal:{w:816,h:1344},A5:{w:559,h:794}},I={default:{name:"Default",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#7c6af7",bodyColor:"#1a1a2e",headingColor:"#0d0d1a",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"transparent",blockquoteBorderColor:"#7c6af7",codeBackground:"#f0f0f8",codeFontSize:.85,tableHeaderBg:"#f0f0f8",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},minimal:{name:"Minimal",fontFamily:"'Helvetica Neue', Helvetica, sans-serif",fontSize:12,lineHeight:1.6,paragraphSpacing:.45,headingScale:.88,accentColor:"#333",bodyColor:"#222",headingColor:"#111",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f8f8f8",blockquoteBorderColor:"#ccc",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#efefef",tableStriped:!1,pageBackground:"#ffffff",marginTop:16,marginBottom:16,marginLeft:20,marginRight:20},academic:{name:"Academic",fontFamily:"'Times New Roman', Times, serif",fontSize:12,lineHeight:2,paragraphSpacing:0,headingScale:.95,accentColor:"#1a3a6b",bodyColor:"#000",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#999",codeBackground:"#f9f9f9",codeFontSize:.88,tableHeaderBg:"#e8e8e8",tableStriped:!1,pageBackground:"#ffffff",marginTop:25,marginBottom:25,marginLeft:30,marginRight:30},colorful:{name:"Colorful",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1.05,accentColor:"#e84393",bodyColor:"#1a1a2e",headingColor:"#2d0a4e",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#fdf0f8",blockquoteBorderColor:"#e84393",codeBackground:"#f0eaff",codeFontSize:.85,tableHeaderBg:"#2d0a4e",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},modern:{name:"Modern",fontFamily:"Arial, sans-serif",fontSize:13,lineHeight:1.75,paragraphSpacing:.6,headingScale:1,accentColor:"#0070f3",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f0f7ff",blockquoteBorderColor:"#0070f3",codeBackground:"#f1f5f9",codeFontSize:.85,tableHeaderBg:"#0070f3",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},newspaper:{name:"Newspaper",fontFamily:"Georgia, serif",fontSize:12,lineHeight:1.7,paragraphSpacing:.4,headingScale:1.1,accentColor:"#111",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#111",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#111",tableStriped:!1,pageBackground:"#ffffff",marginTop:18,marginBottom:18,marginLeft:20,marginRight:20},dark:{name:"Dark",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#818cf8",bodyColor:"#d1d5db",headingColor:"#f1f5f9",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"#1e293b",blockquoteBorderColor:"#818cf8",codeBackground:"#0f172a",codeFontSize:.85,tableHeaderBg:"#1e293b",tableStriped:!0,pageBackground:"#111827",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25}},ee={pageSize:"A4",orientation:"portrait",preset:"default",...I.default,headerText:"",footerText:"",showHeader:!0,showFooter:!0,showPageNumbers:!0,pageNumberPosition:"right",pageNumberStart:1,showHeaderFooterOnFirstPage:!0,headerAlignment:"right",hideFrontmatter:!1,customFontName:"",autoBreakH1:!1,autoBreakH2:!1,includeFilenameAsTitle:!1,previewScale:.62},A=n=>n/25.4*96;function P(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function te(n){return n.replace(/\r\n/g,`
`)}function ne(n){return n.replace(/^---[ \t]*\r?\n[\s\S]*?\r?\n---[ \t]*(\r?\n|$)/,"")}function oe(n){return n.split(/^\/\/\/\s*$/m).map(i=>i.trim()).filter(Boolean)}async function ae(n,i,t,e){let o=document.createElement("div");return await d.MarkdownRenderer.render(n,i,o,t,e),ie(o),o.innerHTML}function re(n){return n.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function ie(n){let i=new Map;n.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(t=>{var a;let e=t.textContent||"",o=re(e);if(!o)return;let s=(a=i.get(o))!=null?a:0;i.set(o,s+1);let l=s===0?o:`${o}-${s}`;t.id=l}),n.querySelectorAll("a").forEach(t=>{t.classList.remove("external-link")}),n.querySelectorAll(".copy-code-button").forEach(t=>t.remove()),n.querySelectorAll(".callout").forEach(t=>{t.removeAttribute("data-callout-fold"),t.classList.remove("is-collapsed"),t.querySelectorAll(".callout-fold").forEach(e=>e.remove())})}function le(n){let i=n.replace(/^#([\da-f])([\da-f])([\da-f])$/i,(l,a,r,c)=>`#${a}${a}${r}${r}${c}${c}`);if(!/^#[\da-f]{6}$/i.test(i))return 1;let t=l=>l<=.04045?l/12.92:((l+.055)/1.055)**2.4,e=t(parseInt(i.slice(1,3),16)/255),o=t(parseInt(i.slice(3,5),16)/255),s=t(parseInt(i.slice(5,7),16)/255);return .2126*e+.7152*o+.0722*s}function se(n){let i=n.headingScale,t=n.fontFamily==="__custom__"?n.customFontName.trim()||"inherit":n.fontFamily,e=le(n.tableHeaderBg)<.35?"#fff":n.headingColor;return`
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
  `.trim()}var de=new Set(["P","LI","BLOCKQUOTE","TD","TH"]),ce=new Set(["P","DIV","SECTION","ARTICLE","ASIDE","NAV","HEADER","FOOTER","UL","OL","LI","TABLE","THEAD","TBODY","TFOOT","TR","TD","TH","PRE","BLOCKQUOTE","HR","IMG","H1","H2","H3","H4","H5","H6"]),pe=new Set(["CODE","IMG","HR","H1","H2","H3","H4","H5","H6"]),me=.5;function ge(n,i){i.innerHTML="";for(let t of n)i.appendChild(t.cloneNode(!0));return i.getBoundingClientRect().height}function he(n,i,t){return e=>ge([...n,e],i)<=t-me}function fe(n){var t;let i=document.createTreeWalker(n,NodeFilter.SHOW_TEXT);for(;i.nextNode();){let e=i.currentNode,o=((t=e.textContent)!=null?t:"").replace(/^\s+/,"");if(o!==e.textContent&&(e.textContent=o),o.length>0)break}}function R(n,i){var p,g;let t=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),e=0,o=null,s=0;for(;t.nextNode();){let h=t.currentNode,b=(g=(p=h.textContent)==null?void 0:p.length)!=null?g:0;if(e+b>=i){o=h,s=i-e;break}e+=b}if(!o)return null;let l=document.createRange();l.selectNodeContents(n),l.setEnd(o,s);let a=document.createRange();a.selectNodeContents(n),a.setStart(o,s);let r=n.cloneNode(!1);r.appendChild(l.cloneContents());let c=n.cloneNode(!1);return c.appendChild(a.cloneContents()),fe(c),[r,c]}function ue(n){let i=[],t=/\s+/g,e;for(;e=t.exec(n);)e.index>0&&e.index<n.length&&i.push(e.index);return i}function be(n,i,t){var r;let e=(r=n.textContent)!=null?r:"";if(e.length<2)return null;let o=ue(e);if(o.length>0){let c=0,p=o.length-1,g=-1;for(;c<=p;){let h=Math.floor((c+p)/2),b=R(n,o[h]);if(!b){p=h-1;continue}i(b[0])?(g=h,c=h+1):p=h-1}if(g>=0)return R(n,o[g]);if(!t)return null}let s=1,l=e.length-1,a=0;for(;s<=l;){let c=Math.floor((s+l)/2),p=R(n,c);if(!p){l=c-1;continue}i(p[0])?(a=c,s=c+1):l=c-1}return a>0?R(n,a):null}function _(n,i,t){let e=n.cloneNode(!1);n.tagName==="OL"&&t!==void 0&&t>1&&(e.start=t);for(let o of i)e.appendChild(o.cloneNode(!0));return e}function we(n,i,t){var l;let e=Array.from(n.children).filter(a=>a.tagName==="LI");if(e.length===0)return null;let o=n.tagName==="OL"&&(l=n.start)!=null?l:1,s=0;for(let a=0;a<e.length&&i(_(n,e.slice(0,a+1),o));a++)s=a+1;if(s<=0){if(!t||e.length<2)return null;s=1}return s>=e.length?null:[_(n,e.slice(0,s),o),_(n,e.slice(s),o+s)]}function W(n,i){let t=n.cloneNode(!1),e=n.querySelector("caption");e&&t.appendChild(e.cloneNode(!0));let o=n.querySelector("colgroup");o&&t.appendChild(o.cloneNode(!0)),n.tHead&&t.appendChild(n.tHead.cloneNode(!0));let s=document.createElement("tbody");for(let l of i)s.appendChild(l.cloneNode(!0));return t.appendChild(s),t}function xe(n,i,t){let e=n.tBodies[0],o=e?Array.from(e.rows):Array.from(n.rows).filter(l=>{var a;return((a=l.parentElement)==null?void 0:a.tagName)!=="THEAD"});if(o.length===0)return null;let s=0;for(let l=0;l<o.length&&i(W(n,o.slice(0,l+1)));l++)s=l+1;if(s<=0){if(!t||o.length<2)return null;s=1}return s>=o.length?null:[W(n,o.slice(0,s)),W(n,o.slice(s))]}function j(n,i){let t=n.cloneNode(!1),e=n.querySelector("code");if(e){let o=e.cloneNode(!1);o.textContent=i.join(`
`),t.appendChild(o)}else t.textContent=i.join(`
`);return t}function ye(n,i,t){var s;let e=((s=n.textContent)!=null?s:"").split(`
`);if(e.length>1&&e[e.length-1]===""&&e.pop(),e.length<2)return null;let o=0;for(let l=0;l<e.length&&i(j(n,e.slice(0,l+1)));l++)o=l+1;if(o<=0){if(!t||e.length<2)return null;o=1}return o>=e.length?null:[j(n,e.slice(0,o)),j(n,e.slice(o))]}function Te(n){if(!de.has(n.tagName))return!1;for(let i of Array.from(n.childNodes))if(i.nodeType===Node.ELEMENT_NODE&&ce.has(i.tagName))return!1;return!0}function Ce(n,i,t){return pe.has(n.tagName)?null:n.tagName==="PRE"?ye(n,i,t):n.tagName==="TABLE"?xe(n,i,t):n.tagName==="UL"||n.tagName==="OL"?we(n,i,t):Te(n)?be(n,i,t):null}function Ee(n,i,t,e){var c;let o=document.createElement("div");o.style.cssText=["position:fixed","top:0","left:-99999px",`width:${i}px`,"visibility:hidden","pointer-events:none","z-index:-1"].join(";");let s=document.createElement("style");s.textContent=e,o.appendChild(s);let l=document.createElement("div");l.className="mpdf-doc",l.innerHTML=n,o.appendChild(l);let a=document.createElement("div");a.className="mpdf-doc",a.style.cssText=`position:absolute;top:0;left:0;width:${i}px;visibility:hidden;`,o.appendChild(a),document.body.appendChild(o);let r=[];try{let p=[],g=Array.from(l.children),h=0;for(;h<g.length;){let b=g[h],m=he(p,a,t);if(m(b.cloneNode(!0))){p.push(b.cloneNode(!0)),h++;continue}let T=p.length===0,y=Ce(b,m,T);if(y){p.push(y[0]),r.push(p),p=[];let H=y[1];(c=H.textContent)!=null&&c.trim()||H.children.length>0?g[h]=H:h++;continue}if(p.length>0){r.push(p),p=[];continue}p.push(b.cloneNode(!0)),r.push(p),p=[],h++}p.length>0&&r.push(p)}finally{document.body.removeChild(o)}return r.length>0?r:[[]]}function He(n,i){let t=n.length;return n.map((e,o)=>{var T,y,H;let s=o+1,l=i.showHeaderFooterOnFirstPage||o>0,r=`${i.showHeaderFooterOnFirstPage?i.pageNumberStart+o:i.pageNumberStart+(o-1)} / ${t}`,c="",p="",g="",h="",b="",m="";return l&&(i.showPageNumbers?i.pageNumberPosition==="center"?g=(i.footerText?i.footerText+" \u2014 ":"")+r:i.pageNumberPosition==="left"?(c=r,p=(T=i.footerText)!=null?T:""):(c=(y=i.footerText)!=null?y:"",p=r):c=(H=i.footerText)!=null?H:"",i.headerText&&(i.headerAlignment==="center"?b=i.headerText:i.headerAlignment==="left"?h=i.headerText:m=i.headerText)),{pageNodes:e,pageNum:s,totalPages:t,headerLeft:h,headerCenter:b,headerRight:m,footerLeft:c,footerRight:p,footerCenter:g}})}var z=class extends d.Plugin{constructor(){super(...arguments);this.activeModal=null}async onload(){await this.loadSettings(),this.addCommand({id:"open-advanced-pdf-export",name:"Open Panel",callback:()=>this.openModal()}),this.registerEvent(this.app.workspace.on("file-menu",(t,e)=>{!(e instanceof d.TFile)||e.extension!=="md"||t.addItem(o=>o.setTitle("Advanced PDF Export: Open Panel").setIcon("file-output").onClick(()=>this.openModal(e)))})),this.addSettingTab(new U(this.app,this))}onunload(){var t;(t=this.activeModal)==null||t.close()}openModal(t){this.activeModal&&this.activeModal.close(),new D(this.app,this,t).open()}async loadSettings(){this.settings=Object.assign({},ee,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async saveSettingsAndRender(){var t;await this.saveSettings(),(t=this.activeModal)==null||t.render()}applyPreset(t){let e=I[t];e&&(this.settings.preset=t,Object.assign(this.settings,e))}};function ve(n,i){var s,l;if(i)return i;let t=(s=n.workspace.getActiveViewOfType(d.MarkdownView))==null?void 0:s.file;if(t)return t;let e=n.workspace.getActiveFile();if((e==null?void 0:e.extension)==="md")return e;let o=n.workspace.getMostRecentLeaf();return(o==null?void 0:o.view)instanceof d.MarkdownView&&(l=o.view.file)!=null?l:null}var D=class extends d.Modal{constructor(t,e,o){super(t);this.renderComponent=new d.Component;this.currentFile=null;this.renderToken=0;this.layoutCache=null;this.renderDebounceTimer=null;this.plugin=e,this.initialFile=o!=null?o:null}async onOpen(){this.plugin.activeModal=this,this.renderComponent.load(),this.modalEl.addClass("mpdf-modal"),this.buildUI(this.contentEl);let t=ve(this.app,this.initialFile);if(t){this.currentFile=t;let e=await this.app.vault.read(t);this.editorEl.value=e,this.noteTitleEl.textContent=t.basename,this.noteTitleEl.title=t.path,this.showLoading(),await new Promise(o=>requestAnimationFrame(()=>requestAnimationFrame(()=>o()))),this.render(!0)}}onClose(){this.renderDebounceTimer!==null&&(clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.renderComponent.unload(),this.plugin.activeModal=null,this.currentFile=null,this.layoutCache=null}buildUI(t){let e=this.plugin.settings;this.buildTopbar(t.createEl("div",{cls:"mpdf-topbar"}),e);let o=t.createEl("div",{cls:"mpdf-main"}),s=o.createEl("div",{cls:"mpdf-editor-panel"});this.editorEl=s.createEl("textarea",{cls:"mpdf-editor"}),this.editorEl.placeholder=`Type or paste markdown here to preview and export as PDF.

Tip: open this panel from a note's right-click menu, command palette,
or keyboard shortcut to auto-load the active note.

Use /// on its own line for a manual page break.
Use --- for a horizontal rule.

Markdown tables:
| Col A | Col B |
|-------|-------|
| Cell  | Cell  |`;let l=o.createEl("div",{cls:"mpdf-preview-container"});this.previewEl=l.createEl("div",{cls:"mpdf-preview"}),this.loadingOverlayEl=l.createEl("div",{cls:"mpdf-loading-overlay"}),this.loadingOverlayEl.style.display="none",this.loadingOverlayEl.createEl("div",{cls:"mpdf-spinner"}),this.loadingOverlayEl.createEl("span",{cls:"mpdf-loading-text",text:"Rendering\u2026"}),this.editorEl.addEventListener("keydown",a=>{a.key==="Enter"&&(a.ctrlKey||a.metaKey)&&(a.preventDefault(),this.render(!0))})}buildTopbar(t,e){let o=t.createEl("div",{cls:"mpdf-topbar-left"});this.noteTitleEl=t.createEl("div",{cls:"mpdf-topbar-title",text:"\u2014"});let s=t.createEl("div",{cls:"mpdf-topbar-right"}),l=(m,T,y,H)=>{let B=o.createEl("div",{cls:"mpdf-ctrl"});B.createEl("span",{cls:"mpdf-ctrl-label",text:m});let F=B.createEl("select",{cls:"mpdf-select"});for(let[u,v]of Object.entries(T)){let S=F.createEl("option",{text:v,value:u});u===y&&(S.selected=!0)}F.addEventListener("change",()=>void H(F.value))},a={};Object.entries(I).forEach(([m,T])=>a[m]=T.name),l("Style",a,e.preset,async m=>{this.plugin.applyPreset(m),await this.plugin.saveSettingsAndRender()});let r={};Object.keys(O).forEach(m=>r[m]=m),l("Size",r,e.pageSize,async m=>{this.plugin.settings.pageSize=m,await this.plugin.saveSettingsAndRender()}),l("Orient",{portrait:"Portrait",landscape:"Landscape"},e.orientation,async m=>{this.plugin.settings.orientation=m,await this.plugin.saveSettingsAndRender()});let c=o.createEl("div",{cls:"mpdf-ctrl"});c.createEl("span",{cls:"mpdf-ctrl-label",text:"Zoom"});let p=c.createEl("span",{cls:"mpdf-ctrl-label",text:Math.round(e.previewScale*100)+"%"}),g=c.createEl("input");g.type="range",g.min="0.35",g.max="1.0",g.step="0.05",g.value=String(e.previewScale),g.addClass("mpdf-zoom-slider"),g.addEventListener("input",async()=>{let m=parseFloat(g.value);this.plugin.settings.previewScale=m,p.textContent=Math.round(m*100)+"%",await this.plugin.saveSettings(),this.renderPreviewOnly()});let h=o.createEl("button",{cls:"mpdf-btn",text:"Insert Page Break"});h.title="Insert page break (///)",h.addEventListener("click",()=>this.insertAtCursor(`
///
`)),this.pageCountEl=s.createEl("span",{cls:"mpdf-page-count",text:"\u2014 pages"});let b=s.createEl("button",{cls:"mpdf-btn mpdf-btn-icon"});b.setAttr("aria-label","Open Advanced PDF Export settings"),(0,d.setIcon)(b,"settings"),b.addEventListener("click",()=>{var T,y;let m=this.app.setting;(T=m==null?void 0:m.open)==null||T.call(m),(y=m==null?void 0:m.openTabById)==null||y.call(m,"advanced-pdf-export")}),this.renderBtn=s.createEl("button",{cls:"mpdf-btn",text:"\u27F3 Render PDF"}),this.renderBtn.title="Render preview (Ctrl+Enter)",this.renderBtn.addEventListener("click",()=>this.render(!0)),this.exportBtn=s.createEl("button",{cls:"mpdf-btn mpdf-btn-primary",text:"\u2B07 Export PDF"}),this.exportBtn.addEventListener("click",()=>void this.exportPDF())}insertAtCursor(t){let e=this.editorEl,o=e.selectionStart,s=e.selectionEnd;e.value=e.value.slice(0,o)+t+e.value.slice(s),e.selectionStart=e.selectionEnd=o+t.length,e.focus()}render(t=!1){let e=++this.renderToken;this.renderDebounceTimer!==null&&(clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.showLoading();let o=()=>this.doRender(e).catch(s=>{let l=s instanceof Error?s.message:String(s);console.error("[advanced-pdf-export] render error:",s),this.hideLoading(),new d.Notice("Render error: "+l)});t?requestAnimationFrame(()=>requestAnimationFrame(()=>void o())):this.renderDebounceTimer=setTimeout(()=>{this.renderDebounceTimer=null,requestAnimationFrame(()=>requestAnimationFrame(()=>void o()))},150)}static insertAutoBreaks(t,e,o){if(!e&&!o)return t;let s=t.split(`
`),l=[],a=!1,r="";for(let c of s){if(a){let p=c.match(/^(`{3,}|~{3,})\s*$/);p&&p[1][0]===r[0]&&p[1].length>=r.length&&(a=!1,r="")}else{let p=c.match(/^(`{3,}|~{3,})/);p?(a=!0,r=p[1]):l.length>0&&(e&&/^# /.test(c)||o&&/^## /.test(c))&&l.push("///")}l.push(c)}return l.join(`
`)}async doRender(t){var k,f,C;let e=this.plugin.settings,o=te(this.editorEl.value);e.hideFrontmatter&&(o=ne(o)),e.includeFilenameAsTitle&&this.currentFile&&(o=`# ${this.currentFile.basename}

${o}`),o=D.insertAutoBreaks(o,e.autoBreakH1,e.autoBreakH2);let s=oe(o),l=(k=O[e.pageSize])!=null?k:O.A4,a=e.orientation==="landscape"?l.h:l.w,r=e.orientation==="landscape"?l.w:l.h,c=A(e.marginTop),p=A(e.marginBottom),g=A(e.marginLeft),h=A(e.marginRight),b=e.showFooter?28:0,m=e.showHeader&&e.headerText?20:0,T=a-g-h,y=r-c-p-b-m,H=se(e),B=(C=(f=this.currentFile)==null?void 0:f.path)!=null?C:"pdf-export",F=await Promise.all(s.map(L=>ae(this.app,L.trim(),B,this.renderComponent)));if(t!==this.renderToken)return;let u=[];for(let L of F)u.push(...Ee(L,T,y,H));let v=He(u,e),S=e.fontFamily==="__custom__"?e.customFontName.trim()||"inherit":e.fontFamily;this.layoutCache={layouts:v,pw:a,ph:r,mTop:c,mLeft:g,footerH:b,headerH:m,contentW:T,contentH:y,docCSS:H,fontFamily:S,accentColor:e.accentColor,pageBackground:e.pageBackground},this.drawPreview(this.layoutCache,e.previewScale),this.pageCountEl.textContent=`${v.length} page${v.length!==1?"s":""}`,this.hideLoading()}renderPreviewOnly(){this.layoutCache&&this.drawPreview(this.layoutCache,this.plugin.settings.previewScale)}showLoading(){this.loadingOverlayEl.style.display="flex",this.renderBtn.disabled=!0,this.renderBtn.textContent="Rendering\u2026"}hideLoading(){this.loadingOverlayEl.style.display="none",this.renderBtn.disabled=!1,this.renderBtn.textContent="\u27F3 Render PDF"}drawPreview(t,e){let{layouts:o,pw:s,ph:l,mTop:a,mLeft:r,footerH:c,headerH:p,contentW:g,contentH:h,docCSS:b,fontFamily:m,accentColor:T,pageBackground:y}=t,H=this.plugin.settings;this.previewEl.empty();let B=new Map;o.forEach((u,v)=>{for(let S of u.pageNodes)S.querySelectorAll("[id]").forEach(k=>{B.has(k.id)||B.set(k.id,v)}),S.id&&!B.has(S.id)&&B.set(S.id,v)});let F=[];for(let u of o){let v=Math.round(s*e),S=Math.round(l*e),k=this.previewEl.createEl("div",{cls:"mpdf-page-wrap"});k.style.cssText=`width:${v}px;height:${S}px;position:relative;flex-shrink:0;`,k.createEl("div",{cls:"mpdf-page-label",text:`Page ${u.pageNum} of ${u.totalPages}`}),F.push(k);let f=k.createEl("div",{cls:"mpdf-page-scale"});f.style.cssText=`width:${v}px;height:${S}px;overflow:hidden;position:relative;`;let C=document.createElement("div");C.style.cssText=[`width:${s}px`,`height:${l}px`,`transform:scale(${e})`,"transform-origin:top left","position:absolute","top:0","left:0"].join(";"),f.appendChild(C);let L=C.attachShadow({mode:"open"}),N=document.createElement("style");if(N.textContent=`
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
      `,L.appendChild(N),H.showHeader&&(u.headerLeft||u.headerCenter||u.headerRight)){let w=document.createElement("div");if(w.style.cssText=["position:absolute",`top:${a*.4}px`,`left:${r}px`,`right:${r}px`,"display:flex","align-items:center","font-size:9px","color:#999",`font-family:${m}`,"white-space:nowrap"].join(";"),u.headerCenter){let x=document.createElement("span");x.style.cssText="flex:1;text-align:center;",x.textContent=u.headerCenter,w.appendChild(x)}else{let x=document.createElement("span");x.textContent=u.headerLeft,w.appendChild(x);let E=document.createElement("span");E.style.marginLeft="auto",E.textContent=u.headerRight,w.appendChild(E)}L.appendChild(w)}let M=document.createElement("div");M.className="mpdf-doc",M.style.cssText=["position:absolute",`top:${a+p}px`,`left:${r}px`,`width:${g}px`,`height:${h}px`,"overflow:hidden"].join(";");for(let w of u.pageNodes)M.appendChild(w.cloneNode(!0));if(L.appendChild(M),M.querySelectorAll("a[href^='#']").forEach(w=>{let x=decodeURIComponent(w.getAttribute("href").slice(1)),E=B.get(x);E!==void 0&&(w.title=`Go to page ${E+1}`,w.addEventListener("click",q=>{var G;q.preventDefault(),(G=F[E])==null||G.scrollIntoView({behavior:"smooth",block:"start"})}))}),H.showFooter){let w=document.createElement("div");if(w.style.cssText=["position:absolute","bottom:0","left:0","right:0",`height:${c}px`,"display:flex","align-items:center",`border-top:0.5px solid ${T}33`,`padding:0 ${r}px`,"font-size:9px","color:#aaa",`font-family:${m}`].join(";"),u.footerCenter){let x=document.createElement("span");x.style.cssText="flex:1;text-align:center;",x.textContent=u.footerCenter,w.appendChild(x)}else{let x=document.createElement("span");x.textContent=u.footerLeft,w.appendChild(x);let E=document.createElement("span");E.style.marginLeft="auto",E.textContent=u.footerRight,w.appendChild(E)}L.appendChild(w)}}}async exportPDF(){var u,v,S,k;let t=this.plugin.settings;this.exportBtn.disabled=!0,this.exportBtn.textContent="\u2B07 Exporting\u2026";let e=()=>{this.exportBtn.disabled=!1,this.exportBtn.textContent="\u2B07 Export PDF"};if(!this.layoutCache){this.renderDebounceTimer!==null&&(clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null);let f=++this.renderToken;this.showLoading();try{await this.doRender(f)}catch(C){let L=C instanceof Error?C.message:String(C);new d.Notice("Render error: "+L),this.hideLoading(),e();return}}let o=this.layoutCache;if(!o||o.layouts.length===0){new d.Notice("Nothing to export."),e();return}let{layouts:s,pw:l,ph:a,mTop:r,mLeft:c,footerH:p,headerH:g,contentW:h,docCSS:b,fontFamily:m,accentColor:T,pageBackground:y}=o,H=s.map(f=>{let C=f.pageNodes.map(E=>E.outerHTML).join(`
`),L=t.showHeader&&(f.headerLeft||f.headerCenter||f.headerRight),N=f.headerCenter?`<span style="flex:1;text-align:center;">${P(f.headerCenter)}</span>`:`<span>${P(f.headerLeft)}</span><span style="margin-left:auto;">${P(f.headerRight)}</span>`,$=L?`<div style="position:absolute;top:${r*.4}px;left:${c}px;right:${c}px;display:flex;align-items:center;font-size:9px;color:#999;font-family:${m};white-space:nowrap;">${N}</div>`:"",M=f.footerCenter?`<span style="flex:1;text-align:center;">${P(f.footerCenter)}</span>`:`<span>${P(f.footerLeft)}</span><span style="margin-left:auto;">${P(f.footerRight)}</span>`,w=t.showFooter?`<div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;display:flex;align-items:center;border-top:0.5px solid ${T}33;padding:0 ${c}px;font-size:9px;color:#aaa;font-family:${m};">${M}</div>`:"",x=`<div class="mpdf-doc" style="position:absolute;top:${r+g}px;left:${c}px;width:${h}px;">${C}</div>`;return`<div class="mpdf-export-page">${$}${x}${w}</div>`}),B=`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      @page { size: ${l}px ${a}px; margin: 0; }
      html, body { margin: 0; padding: 0; background: ${y}; }
      .mpdf-export-page {
        position: relative;
        width: ${l}px; height: ${a}px;
        overflow: hidden;
        background: ${y};
        page-break-after: always; break-after: page;
      }
      .mpdf-export-page:last-child { page-break-after: avoid; break-after: avoid; }
      ${b}
    `,F=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${P((v=(u=this.currentFile)==null?void 0:u.basename)!=null?v:"Export")}</title>
<style>${B}</style>
</head>
<body>
${H.join(`
`)}
</body>
</html>`;try{let f=window.require("@electron/remote");if(!(f!=null&&f.dialog))throw new Error("no remote");let C=await f.dialog.showSaveDialog({title:"Save PDF",defaultPath:((k=(S=this.currentFile)==null?void 0:S.basename)!=null?k:"export")+".pdf",filters:[{name:"PDF",extensions:["pdf"]}]});if(C.canceled||!C.filePath){e();return}new d.Notice("Generating PDF\u2026");let L=new Blob([F],{type:"text/html"}),N=URL.createObjectURL(L),$=new f.BrowserWindow({show:!1,webPreferences:{nodeIntegration:!1}});$.loadURL(N);let M=!1,w=()=>{URL.revokeObjectURL(N),$.close(),e()};$.webContents.once("did-fail-load",(x,E,q)=>{M||(M=!0,new d.Notice("PDF load error: "+q),w())}),$.webContents.once("did-finish-load",()=>{M||(M=!0,$.webContents.printToPDF({pageSize:t.pageSize,landscape:t.orientation==="landscape",printBackground:!0,margins:{marginType:"none"}}).then(x=>{window.require("fs").writeFile(C.filePath,x,E=>{E?new d.Notice("Error saving PDF: "+E.message):new d.Notice("\u2713 PDF saved: "+C.filePath),w()})}).catch(x=>{new d.Notice("PDF render error: "+x.message),w()}))})}catch(f){new d.Notice("Advanced PDF export requires the Obsidian desktop app."),e()}}},U=class extends d.PluginSettingTab{constructor(t,e){super(t,e);this.dirty=!1;this.plugin=e}display(){this.dirty=!1,this.buildSettings()}hide(){var t;this.dirty&&(this.dirty=!1,(t=this.plugin.activeModal)==null||t.render(!0))}async markDirty(){this.dirty=!0,await this.plugin.saveSettings()}buildSettings(){let{containerEl:t}=this;t.empty();let e=this.plugin.settings;t.createEl("h2",{text:"Advanced PDF Export"}),t.createEl("h3",{text:"Style Preset"}),new d.Setting(t).setName("Preset").setDesc("Pick a preset to configure the overall document style. Fine-tune any setting below.").addDropdown(a=>{Object.entries(I).forEach(([r,c])=>a.addOption(r,c.name)),a.setValue(e.preset).onChange(async r=>{this.plugin.applyPreset(r),await this.markDirty(),this.buildSettings()})}).addButton(a=>a.setButtonText("Reset Preset").setTooltip("Reset current preset to its default values").onClick(async()=>{this.plugin.applyPreset(e.preset),await this.markDirty(),this.buildSettings()})),t.createEl("h3",{text:"Page"}),new d.Setting(t).setName("Page size").addDropdown(a=>{Object.keys(O).forEach(r=>a.addOption(r,r)),a.setValue(e.pageSize).onChange(async r=>{e.pageSize=r,await this.markDirty()})}),new d.Setting(t).setName("Orientation").addDropdown(a=>a.addOptions({portrait:"Portrait",landscape:"Landscape"}).setValue(e.orientation).onChange(async r=>{e.orientation=r,await this.markDirty()})),t.createEl("h3",{text:"Margins (mm)"});let o=(a,r)=>new d.Setting(t).setName(a).addText(c=>c.setValue(String(e[r])).onChange(async p=>{e[r]=parseInt(p)||0,await this.markDirty()}));o("Top","marginTop"),o("Bottom","marginBottom"),o("Left","marginLeft"),o("Right","marginRight"),t.createEl("h3",{text:"Typography"});let s;new d.Setting(t).setName("Font family").addDropdown(a=>a.addOptions({"Georgia, serif":"Georgia (Serif)","'Times New Roman', Times, serif":"Times New Roman","'Palatino Linotype', Palatino, serif":"Palatino","Arial, sans-serif":"Arial","'Helvetica Neue', Helvetica, sans-serif":"Helvetica","'Trebuchet MS', sans-serif":"Trebuchet","'Courier New', monospace":"Courier New",__custom__:"Custom\u2026"}).setValue(e.fontFamily).onChange(async r=>{e.fontFamily=r,s.settingEl.style.display=r==="__custom__"?"":"none",await this.markDirty()})),s=new d.Setting(t).setName("Custom font name").setDesc('CSS font-family value \u2014 e.g. "Inter, sans-serif". The font must be installed on your system.').addText(a=>a.setPlaceholder("e.g. Inter, sans-serif").setValue(e.customFontName).onChange(async r=>{e.customFontName=r,await this.markDirty()})),s.settingEl.style.display=e.fontFamily==="__custom__"?"":"none",new d.Setting(t).setName("Font size (px)").addDropdown(a=>{["10","11","12","13","14","15","16"].forEach(r=>a.addOption(r,r+"px")),a.setValue(String(e.fontSize)).onChange(async r=>{e.fontSize=parseInt(r),await this.markDirty()})}),new d.Setting(t).setName("Code font size").addDropdown(a=>a.addOptions({"0.75":"0.75em","0.80":"0.80em","0.82":"0.82em","0.85":"0.85em","0.88":"0.88em","0.90":"0.90em","1.0":"1.00em"}).setValue(String(e.codeFontSize)).onChange(async r=>{e.codeFontSize=parseFloat(r),await this.markDirty()})),new d.Setting(t).setName("Line height").addDropdown(a=>a.addOptions({"1.4":"Tight (1.4)","1.6":"Compact (1.6)","1.75":"Normal (1.75)","1.85":"Relaxed (1.85)","2.0":"Double (2.0)"}).setValue(String(e.lineHeight)).onChange(async r=>{e.lineHeight=parseFloat(r),await this.markDirty()})),new d.Setting(t).setName("Paragraph spacing").addDropdown(a=>a.addOptions({0:"None","0.3":"Tight (0.3em)","0.5":"Normal (0.5em)","0.65":"Relaxed (0.65em)","1.0":"Wide (1em)"}).setValue(String(e.paragraphSpacing)).onChange(async r=>{e.paragraphSpacing=parseFloat(r),await this.markDirty()})),new d.Setting(t).setName("Heading scale").setDesc("Multiplier applied to all heading sizes.").addDropdown(a=>a.addOptions({"0.8":"Small (0.8\xD7)","0.88":"0.88\xD7","0.9":"Compact (0.9\xD7)","0.95":"0.95\xD7","1.0":"Normal (1.0\xD7)","1.05":"1.05\xD7","1.1":"Large (1.1\xD7)","1.2":"XLarge (1.2\xD7)"}).setValue(String(e.headingScale)).onChange(async r=>{e.headingScale=parseFloat(r),await this.markDirty()})),t.createEl("h3",{text:"Colors"});let l=(a,r)=>new d.Setting(t).setName(a).addColorPicker(c=>c.setValue(String(e[r])).onChange(async p=>{e[r]=p,await this.markDirty()}));l("Accent color","accentColor"),l("Body text color","bodyColor"),l("Heading color","headingColor"),l("Page background","pageBackground"),l("Blockquote background","blockquoteBg"),l("Blockquote border","blockquoteBorderColor"),l("Table header background","tableHeaderBg"),l("Code background","codeBackground"),t.createEl("h3",{text:"Heading Style"}),new d.Setting(t).setName("H1 bottom border").addToggle(a=>a.setValue(e.h1BorderBottom).onChange(async r=>{e.h1BorderBottom=r,await this.markDirty()})),new d.Setting(t).setName("H2 bottom border").addToggle(a=>a.setValue(e.h2BorderBottom).onChange(async r=>{e.h2BorderBottom=r,await this.markDirty()})),new d.Setting(t).setName("Center H1").addToggle(a=>a.setValue(e.centerH1).onChange(async r=>{e.centerH1=r,await this.markDirty()})),t.createEl("h3",{text:"Tables"}),new d.Setting(t).setName("Striped rows").addToggle(a=>a.setValue(e.tableStriped).onChange(async r=>{e.tableStriped=r,await this.markDirty()})),t.createEl("h3",{text:"Header & Footer"}),new d.Setting(t).setName("Show header").addToggle(a=>a.setValue(e.showHeader).onChange(async r=>{e.showHeader=r,await this.markDirty()})),new d.Setting(t).setName("Header text").setDesc("Appears on every page according to the chosen alignment.").addText(a=>a.setValue(e.headerText).onChange(async r=>{e.headerText=r,await this.markDirty()})),new d.Setting(t).setName("Header alignment").addDropdown(a=>a.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.headerAlignment).onChange(async r=>{e.headerAlignment=r,await this.markDirty()})),new d.Setting(t).setName("Show footer").addToggle(a=>a.setValue(e.showFooter).onChange(async r=>{e.showFooter=r,await this.markDirty()})),new d.Setting(t).setName("Footer text").addText(a=>a.setValue(e.footerText).onChange(async r=>{e.footerText=r,await this.markDirty()})),new d.Setting(t).setName("Show page numbers").addToggle(a=>a.setValue(e.showPageNumbers).onChange(async r=>{e.showPageNumbers=r,await this.markDirty()})),new d.Setting(t).setName("Page number position").addDropdown(a=>a.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.pageNumberPosition).onChange(async r=>{e.pageNumberPosition=r,await this.markDirty()})),new d.Setting(t).setName("Page number start").setDesc("Number assigned to the first visible page number. Accepts any integer.").addText(a=>a.setValue(String(e.pageNumberStart)).onChange(async r=>{let c=parseInt(r,10);e.pageNumberStart=isNaN(c)?1:c,await this.markDirty()})),new d.Setting(t).setName("Header/footer on first page").setDesc("When off, page 1 has no header, footer, or page number. Numbering begins on page 2 using the start value.").addToggle(a=>a.setValue(e.showHeaderFooterOnFirstPage).onChange(async r=>{e.showHeaderFooterOnFirstPage=r,await this.markDirty()})),t.createEl("h3",{text:"Behaviour"}),new d.Setting(t).setName("Hide frontmatter").setDesc("Strip the YAML frontmatter block (--- \u2026 ---) from the preview and exported PDF.").addToggle(a=>a.setValue(e.hideFrontmatter).onChange(async r=>{e.hideFrontmatter=r,await this.markDirty()})),new d.Setting(t).setName("Include file name as title").setDesc("Prepend the note's file name as an H1 heading at the top of the PDF. Mirrors Obsidian's built-in 'Include file name as title' export option.").addToggle(a=>a.setValue(e.includeFilenameAsTitle).onChange(async r=>{e.includeFilenameAsTitle=r,await this.markDirty()})),new d.Setting(t).setName("Auto page break before H1").addToggle(a=>a.setValue(e.autoBreakH1).onChange(async r=>{e.autoBreakH1=r,await this.markDirty()})),new d.Setting(t).setName("Auto page break before H2").addToggle(a=>a.setValue(e.autoBreakH2).onChange(async r=>{e.autoBreakH2=r,await this.markDirty()}))}};
