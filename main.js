var V=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames;var X=Object.prototype.hasOwnProperty;var Y=(t,i)=>{for(var n in i)V(t,n,{get:i[n],enumerable:!0})},Q=(t,i,n,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let a of K(i))!X.call(t,a)&&a!==n&&V(t,a,{get:()=>i[a],enumerable:!(e=_(i,a))||e.enumerable});return t};var Z=t=>Q(V({},"__esModule",{value:!0}),t);var ve={};Y(ve,{default:()=>q});module.exports=Z(ve);var s=require("obsidian"),O={A4:{w:794,h:1123},A3:{w:1123,h:1587},Letter:{w:816,h:1056},Legal:{w:816,h:1344},A5:{w:559,h:794}},I={default:{name:"Default",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#7c6af7",bodyColor:"#1a1a2e",headingColor:"#0d0d1a",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"transparent",blockquoteBorderColor:"#7c6af7",codeBackground:"#f0f0f8",codeFontSize:.85,tableHeaderBg:"#f0f0f8",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},minimal:{name:"Minimal",fontFamily:"'Helvetica Neue', Helvetica, sans-serif",fontSize:12,lineHeight:1.6,paragraphSpacing:.45,headingScale:.88,accentColor:"#333",bodyColor:"#222",headingColor:"#111",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f8f8f8",blockquoteBorderColor:"#ccc",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#efefef",tableStriped:!1,pageBackground:"#ffffff",marginTop:16,marginBottom:16,marginLeft:20,marginRight:20},academic:{name:"Academic",fontFamily:"'Times New Roman', Times, serif",fontSize:12,lineHeight:2,paragraphSpacing:0,headingScale:.95,accentColor:"#1a3a6b",bodyColor:"#000",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#999",codeBackground:"#f9f9f9",codeFontSize:.88,tableHeaderBg:"#e8e8e8",tableStriped:!1,pageBackground:"#ffffff",marginTop:25,marginBottom:25,marginLeft:30,marginRight:30},colorful:{name:"Colorful",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1.05,accentColor:"#e84393",bodyColor:"#1a1a2e",headingColor:"#2d0a4e",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#fdf0f8",blockquoteBorderColor:"#e84393",codeBackground:"#f0eaff",codeFontSize:.85,tableHeaderBg:"#2d0a4e",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},modern:{name:"Modern",fontFamily:"Arial, sans-serif",fontSize:13,lineHeight:1.75,paragraphSpacing:.6,headingScale:1,accentColor:"#0070f3",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f0f7ff",blockquoteBorderColor:"#0070f3",codeBackground:"#f1f5f9",codeFontSize:.85,tableHeaderBg:"#0070f3",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},newspaper:{name:"Newspaper",fontFamily:"Georgia, serif",fontSize:12,lineHeight:1.7,paragraphSpacing:.4,headingScale:1.1,accentColor:"#111",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#111",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#111",tableStriped:!1,pageBackground:"#ffffff",marginTop:18,marginBottom:18,marginLeft:20,marginRight:20},dark:{name:"Dark",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#818cf8",bodyColor:"#d1d5db",headingColor:"#f1f5f9",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"#1e293b",blockquoteBorderColor:"#818cf8",codeBackground:"#0f172a",codeFontSize:.85,tableHeaderBg:"#1e293b",tableStriped:!0,pageBackground:"#111827",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25}},J={pageSize:"A4",orientation:"portrait",preset:"default",...I.default,headerText:"",footerText:"",showHeader:!0,showFooter:!0,showPageNumbers:!0,pageNumberPosition:"right",autoBreakH1:!1,autoBreakH2:!1,includeFilenameAsTitle:!1,previewScale:.62},R=t=>t/25.4*96;function D(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ee(t){return t.replace(/\r\n/g,`
`)}function te(t){return t.split(/^\/\/\/\s*$/m).map(i=>i.trim()).filter(Boolean)}async function ne(t,i,n,e){let a=document.createElement("div");return await s.MarkdownRenderer.render(t,i,a,n,e),ae(a),a.innerHTML}function oe(t){return t.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function ae(t){let i=new Map;t.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(n=>{var r;let e=n.textContent||"",a=oe(e);if(!a)return;let l=(r=i.get(a))!=null?r:0;i.set(a,l+1);let o=l===0?a:`${a}-${l}`;n.id=o}),t.querySelectorAll("a").forEach(n=>{n.classList.remove("external-link")}),t.querySelectorAll(".copy-code-button").forEach(n=>n.remove()),t.querySelectorAll(".callout").forEach(n=>{n.removeAttribute("data-callout-fold"),n.classList.remove("is-collapsed"),n.querySelectorAll(".callout-fold").forEach(e=>e.remove())})}function re(t){let i=t.replace(/^#([\da-f])([\da-f])([\da-f])$/i,(o,r,c,d)=>`#${r}${r}${c}${c}${d}${d}`);if(!/^#[\da-f]{6}$/i.test(i))return 1;let n=o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4,e=n(parseInt(i.slice(1,3),16)/255),a=n(parseInt(i.slice(3,5),16)/255),l=n(parseInt(i.slice(5,7),16)/255);return .2126*e+.7152*a+.0722*l}function ie(t){let i=t.headingScale,n=re(t.tableHeaderBg)<.35?"#fff":t.headingColor;return`
  .mpdf-doc {
    font-family: ${t.fontFamily};
    font-size: ${t.fontSize}px;
    line-height: ${t.lineHeight};
    color: ${t.bodyColor};
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
    color: ${t.headingColor};
    margin: 0 0 ${Math.round(12*i)}px;
    line-height: 1.2;
    ${t.h1BorderBottom?`border-bottom: 2px solid ${t.accentColor}; padding-bottom: 6px;`:""}
    ${t.centerH1?"text-align: center;":""}
  }
  .mpdf-doc h2 {
    font-size: ${Math.round(17*i)}px;
    font-weight: 600;
    color: ${t.headingColor};
    margin: ${Math.round(20*i)}px 0 ${Math.round(10*i)}px;
    ${t.h2BorderBottom?`border-bottom: 0.5px solid ${t.accentColor}55; padding-bottom: 5px;`:""}
  }
  .mpdf-doc h3 {
    font-size: ${Math.round(15*i)}px;
    font-weight: 700;
    color: ${t.headingColor};
    margin: ${Math.round(16*i)}px 0 ${Math.round(8*i)}px;
    letter-spacing: 0.01em;
  }
  .mpdf-doc h4 { font-size: ${Math.round(13*i)}px; font-weight: 700; color: ${t.headingColor}; margin: 12px 0 6px; text-transform: uppercase; letter-spacing: 0.04em; }
  .mpdf-doc h5 { font-size: ${Math.round(12*i)}px; font-weight: 600; color: ${t.headingColor}; margin: 10px 0 4px; font-style: italic; }
  .mpdf-doc h6 { font-size: ${Math.round(11*i)}px; font-weight: 600; color: ${t.bodyColor}; margin: 8px 0 4px; font-style: italic; opacity: 0.75; }
  .mpdf-doc p { margin: 0 0 ${t.paragraphSpacing}em; }
  .mpdf-doc ul, .mpdf-doc ol { padding-left: 1.4em; margin: 0 0 ${t.paragraphSpacing}em; }
  .mpdf-doc li { margin-bottom: 0.2em; line-height: ${t.lineHeight}; }
  .mpdf-doc blockquote {
    border-left: 3px solid ${t.blockquoteBorderColor};
    background: ${t.blockquoteBg};
    padding: 4px 0 4px 1em;
    margin: ${t.paragraphSpacing}em 0;
    font-style: italic;
    color: ${t.bodyColor}cc;
  }
  .mpdf-doc code {
    font-family: 'Courier New', monospace;
    font-size: ${t.codeFontSize}em;
    background: ${t.codeBackground};
    padding: 1px 4px;
    border-radius: 3px;
    color: ${t.accentColor};
  }
  .mpdf-doc pre {
    background: ${t.codeBackground};
    border-radius: 4px;
    padding: 10px 12px;
    margin: 0 0 ${t.paragraphSpacing}em;
    overflow: hidden;
  }
  .mpdf-doc pre code {
    font-family: 'Courier New', monospace;
    font-size: ${t.codeFontSize}em;
    color: ${t.bodyColor};
    white-space: pre-wrap;
    word-break: break-all;
    background: none;
    padding: 0;
  }
  .mpdf-doc hr {
    border: none;
    border-top: 0.5px solid ${t.accentColor}44;
    margin: ${t.paragraphSpacing*1.5}em 0;
  }
  .mpdf-doc img { max-width: 100%; height: auto; display: block; margin: ${t.paragraphSpacing}em auto; }
  .mpdf-doc a { color: ${t.accentColor}; }
  .mpdf-doc a.external-link::after { display: none !important; content: none !important; }
  /* Belt-and-suspenders: hide any copy-code button Obsidian re-injects after
     the DOM-removal pass in postProcessRenderedHTML (e.g. via a MutationObserver
     or a theme that adds its own variant with different timing). */
  .mpdf-doc .copy-code-button { display: none !important; }
  .mpdf-doc table { width: 100%; border-collapse: collapse; margin: 0 0 ${t.paragraphSpacing}em; font-size: 0.92em; }
  .mpdf-doc th {
    background: ${t.tableHeaderBg};
    color: ${n};
    padding: 6px 10px;
    text-align: left;
    font-weight: 600;
    border: 0.5px solid ${t.accentColor}33;
    font-size: 0.9em;
  }
  .mpdf-doc td { padding: 5px 10px; border: 0.5px solid ${t.bodyColor}22; vertical-align: top; }
  ${t.tableStriped?`.mpdf-doc tbody tr:nth-child(even) { background: ${t.tableHeaderBg}55; }`:""}

  /* \u2500\u2500 Callouts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   * Obsidian renders > [!TYPE] blocks as .callout divs. We override all
   * theme-provided callout styles with !important so the PDF and the preview
   * both look identical regardless of which Obsidian theme is active.
   * The design is deliberately bolder than a plain blockquote: coloured
   * header bar, tinted body background, and ALL-CAPS type label.        */
  .mpdf-doc .callout {
    border-left: 4px solid ${t.accentColor} !important;
    border-radius: 0 5px 5px 0 !important;
    background: ${t.accentColor}12 !important;
    margin: ${t.paragraphSpacing*1.2}em 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    box-shadow: inset 0 0 0 1px ${t.accentColor}22 !important;
    font-style: normal !important;
  }
  .mpdf-doc .callout-title {
    display: flex !important;
    align-items: center !important;
    gap: 7px !important;
    padding: 7px 12px !important;
    background: ${t.accentColor}28 !important;
    border-bottom: 1px solid ${t.accentColor}33 !important;
    font-family: ${t.fontFamily} !important;
    font-size: 0.8em !important;
    font-weight: 800 !important;
    font-style: normal !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    color: ${t.accentColor} !important;
    line-height: 1.3 !important;
  }
  .mpdf-doc .callout-icon {
    display: inline-flex !important;
    align-items: center !important;
    flex-shrink: 0 !important;
    width: 15px !important;
    height: 15px !important;
    color: ${t.accentColor} !important;
  }
  .mpdf-doc .callout-icon svg {
    width: 15px !important;
    height: 15px !important;
    stroke: ${t.accentColor} !important;
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
    color: ${t.bodyColor} !important;
    font-style: normal !important;
    background: transparent !important;
  }
  .mpdf-doc .callout-content > p:first-child { margin-top: 0 !important; }
  .mpdf-doc .callout-content > p:last-child  { margin-bottom: 0 !important; }
  /* Nested blockquotes inside callout content keep a subtler indent */
  .mpdf-doc .callout-content blockquote {
    border-left-color: ${t.accentColor}66 !important;
    background: transparent !important;
  }
  `.trim()}var le=new Set(["P","LI","BLOCKQUOTE","TD","TH"]),se=new Set(["P","DIV","SECTION","ARTICLE","ASIDE","NAV","HEADER","FOOTER","UL","OL","LI","TABLE","THEAD","TBODY","TFOOT","TR","TD","TH","PRE","BLOCKQUOTE","HR","IMG","H1","H2","H3","H4","H5","H6"]),de=new Set(["CODE","IMG","HR","H1","H2","H3","H4","H5","H6"]),ce=.5;function pe(t,i){i.innerHTML="";for(let n of t)i.appendChild(n.cloneNode(!0));return i.getBoundingClientRect().height}function me(t,i,n){return e=>pe([...t,e],i)<=n-ce}function ge(t){var n;let i=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);for(;i.nextNode();){let e=i.currentNode,a=((n=e.textContent)!=null?n:"").replace(/^\s+/,"");if(a!==e.textContent&&(e.textContent=a),a.length>0)break}}function z(t,i){var p,g;let n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),e=0,a=null,l=0;for(;n.nextNode();){let h=n.currentNode,b=(g=(p=h.textContent)==null?void 0:p.length)!=null?g:0;if(e+b>=i){a=h,l=i-e;break}e+=b}if(!a)return null;let o=document.createRange();o.selectNodeContents(t),o.setEnd(a,l);let r=document.createRange();r.selectNodeContents(t),r.setStart(a,l);let c=t.cloneNode(!1);c.appendChild(o.cloneContents());let d=t.cloneNode(!1);return d.appendChild(r.cloneContents()),ge(d),[c,d]}function he(t){let i=[],n=/\s+/g,e;for(;e=n.exec(t);)e.index>0&&e.index<t.length&&i.push(e.index);return i}function fe(t,i,n){var c;let e=(c=t.textContent)!=null?c:"";if(e.length<2)return null;let a=he(e);if(a.length>0){let d=0,p=a.length-1,g=-1;for(;d<=p;){let h=Math.floor((d+p)/2),b=z(t,a[h]);if(!b){p=h-1;continue}i(b[0])?(g=h,d=h+1):p=h-1}if(g>=0)return z(t,a[g]);if(!n)return null}let l=1,o=e.length-1,r=0;for(;l<=o;){let d=Math.floor((l+o)/2),p=z(t,d);if(!p){o=d-1;continue}i(p[0])?(r=d,l=d+1):o=d-1}return r>0?z(t,r):null}function W(t,i,n){let e=t.cloneNode(!1);t.tagName==="OL"&&n!==void 0&&n>1&&(e.start=n);for(let a of i)e.appendChild(a.cloneNode(!0));return e}function ue(t,i,n){var o;let e=Array.from(t.children).filter(r=>r.tagName==="LI");if(e.length===0)return null;let a=t.tagName==="OL"&&(o=t.start)!=null?o:1,l=0;for(let r=0;r<e.length&&i(W(t,e.slice(0,r+1),a));r++)l=r+1;if(l<=0){if(!n||e.length<2)return null;l=1}return l>=e.length?null:[W(t,e.slice(0,l),a),W(t,e.slice(l),a+l)]}function j(t,i){let n=t.cloneNode(!1),e=t.querySelector("caption");e&&n.appendChild(e.cloneNode(!0));let a=t.querySelector("colgroup");a&&n.appendChild(a.cloneNode(!0)),t.tHead&&n.appendChild(t.tHead.cloneNode(!0));let l=document.createElement("tbody");for(let o of i)l.appendChild(o.cloneNode(!0));return n.appendChild(l),n}function be(t,i,n){let e=t.tBodies[0],a=e?Array.from(e.rows):Array.from(t.rows).filter(o=>{var r;return((r=o.parentElement)==null?void 0:r.tagName)!=="THEAD"});if(a.length===0)return null;let l=0;for(let o=0;o<a.length&&i(j(t,a.slice(0,o+1)));o++)l=o+1;if(l<=0){if(!n||a.length<2)return null;l=1}return l>=a.length?null:[j(t,a.slice(0,l)),j(t,a.slice(l))]}function U(t,i){let n=t.cloneNode(!1),e=t.querySelector("code");if(e){let a=e.cloneNode(!1);a.textContent=i.join(`
`),n.appendChild(a)}else n.textContent=i.join(`
`);return n}function xe(t,i,n){var l;let e=((l=t.textContent)!=null?l:"").split(`
`);if(e.length>1&&e[e.length-1]===""&&e.pop(),e.length<2)return null;let a=0;for(let o=0;o<e.length&&i(U(t,e.slice(0,o+1)));o++)a=o+1;if(a<=0){if(!n||e.length<2)return null;a=1}return a>=e.length?null:[U(t,e.slice(0,a)),U(t,e.slice(a))]}function we(t){if(!le.has(t.tagName))return!1;for(let i of Array.from(t.childNodes))if(i.nodeType===Node.ELEMENT_NODE&&se.has(i.tagName))return!1;return!0}function Te(t,i,n){return de.has(t.tagName)?null:t.tagName==="PRE"?xe(t,i,n):t.tagName==="TABLE"?be(t,i,n):t.tagName==="UL"||t.tagName==="OL"?ue(t,i,n):we(t)?fe(t,i,n):null}function ye(t,i,n,e){var d;let a=document.createElement("div");a.style.cssText=["position:fixed","top:0","left:-99999px",`width:${i}px`,"visibility:hidden","pointer-events:none","z-index:-1"].join(";");let l=document.createElement("style");l.textContent=e,a.appendChild(l);let o=document.createElement("div");o.className="mpdf-doc",o.innerHTML=t,a.appendChild(o);let r=document.createElement("div");r.className="mpdf-doc",r.style.cssText=`position:absolute;top:0;left:0;width:${i}px;visibility:hidden;`,a.appendChild(r),document.body.appendChild(a);let c=[];try{let p=[],g=Array.from(o.children),h=0;for(;h<g.length;){let b=g[h],m=me(p,r,n);if(m(b.cloneNode(!0))){p.push(b.cloneNode(!0)),h++;continue}let y=p.length===0,T=Te(b,m,y);if(T){p.push(T[0]),c.push(p),p=[];let H=T[1];(d=H.textContent)!=null&&d.trim()||H.children.length>0?g[h]=H:h++;continue}if(p.length>0){c.push(p),p=[];continue}p.push(b.cloneNode(!0)),c.push(p),p=[],h++}p.length>0&&c.push(p)}finally{document.body.removeChild(a)}return c.length>0?c:[[]]}function Ee(t,i){let n=t.length;return t.map((e,a)=>{var p,g,h;let l=a+1,o=`${l} / ${n}`,r="",c="",d="";return i.showPageNumbers?i.pageNumberPosition==="center"?d=(i.footerText?i.footerText+" \u2014 ":"")+o:i.pageNumberPosition==="left"?(r=o,c=(p=i.footerText)!=null?p:""):(r=(g=i.footerText)!=null?g:"",c=o):r=(h=i.footerText)!=null?h:"",{pageNodes:e,pageNum:l,totalPages:n,headerText:i.headerText,footerLeft:r,footerRight:c,footerCenter:d}})}var q=class extends s.Plugin{constructor(){super(...arguments);this.activeModal=null}async onload(){await this.loadSettings(),this.addCommand({id:"open-advanced-pdf-export",name:"Open Panel",callback:()=>this.openModal()}),this.registerEvent(this.app.workspace.on("file-menu",(n,e)=>{!(e instanceof s.TFile)||e.extension!=="md"||n.addItem(a=>a.setTitle("Advanced PDF Export: Open Panel").setIcon("file-output").onClick(()=>this.openModal(e)))})),this.addSettingTab(new G(this.app,this))}onunload(){var n;(n=this.activeModal)==null||n.close()}openModal(n){this.activeModal&&this.activeModal.close(),new N(this.app,this,n).open()}async loadSettings(){this.settings=Object.assign({},J,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async saveSettingsAndRender(){var n;await this.saveSettings(),(n=this.activeModal)==null||n.render()}applyPreset(n){let e=I[n];e&&(this.settings.preset=n,Object.assign(this.settings,e))}};function Ce(t,i){var l,o;if(i)return i;let n=(l=t.workspace.getActiveViewOfType(s.MarkdownView))==null?void 0:l.file;if(n)return n;let e=t.workspace.getActiveFile();if((e==null?void 0:e.extension)==="md")return e;let a=t.workspace.getMostRecentLeaf();return(a==null?void 0:a.view)instanceof s.MarkdownView&&(o=a.view.file)!=null?o:null}var N=class extends s.Modal{constructor(n,e,a){super(n);this.renderComponent=new s.Component;this.currentFile=null;this.renderToken=0;this.layoutCache=null;this.renderDebounceTimer=null;this.plugin=e,this.initialFile=a!=null?a:null}async onOpen(){this.plugin.activeModal=this,this.renderComponent.load(),this.modalEl.addClass("mpdf-modal"),this.contentEl.style.cssText="display:flex;flex-direction:column;height:100%;padding:0;overflow:hidden;",this.buildUI(this.contentEl);let n=Ce(this.app,this.initialFile);if(n){this.currentFile=n;let e=await this.app.vault.read(n);this.editorEl.value=e,this.noteTitleEl.textContent=n.basename,this.noteTitleEl.title=n.path,this.showLoading(),await new Promise(a=>requestAnimationFrame(()=>requestAnimationFrame(()=>a()))),this.render(!0)}}onClose(){this.renderDebounceTimer!==null&&(clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.renderComponent.unload(),this.plugin.activeModal=null,this.currentFile=null,this.layoutCache=null}buildUI(n){let e=this.plugin.settings;this.buildTopbar(n.createEl("div",{cls:"mpdf-topbar"}),e);let a=n.createEl("div",{cls:"mpdf-main"}),l=a.createEl("div",{cls:"mpdf-editor-panel"});this.editorEl=l.createEl("textarea",{cls:"mpdf-editor"}),this.editorEl.placeholder=`Type or paste markdown here to preview and export as PDF.

Tip: open this panel from a note's right-click menu, command palette,
or keyboard shortcut to auto-load the active note.

Use /// on its own line for a manual page break.
Use --- for a horizontal rule.

Markdown tables:
| Col A | Col B |
|-------|-------|
| Cell  | Cell  |`;let o=a.createEl("div",{cls:"mpdf-preview-container"});this.previewEl=o.createEl("div",{cls:"mpdf-preview"}),this.loadingOverlayEl=o.createEl("div",{cls:"mpdf-loading-overlay"}),this.loadingOverlayEl.style.display="none",this.loadingOverlayEl.createEl("div",{cls:"mpdf-spinner"}),this.loadingOverlayEl.createEl("span",{cls:"mpdf-loading-text",text:"Rendering\u2026"}),this.editorEl.addEventListener("keydown",r=>{r.key==="Enter"&&(r.ctrlKey||r.metaKey)&&(r.preventDefault(),this.render(!0))})}buildTopbar(n,e){let a=n.createEl("div",{cls:"mpdf-topbar-left"});this.noteTitleEl=n.createEl("div",{cls:"mpdf-topbar-title",text:"\u2014"});let l=n.createEl("div",{cls:"mpdf-topbar-right"}),o=(m,y,T,H)=>{let S=a.createEl("div",{cls:"mpdf-ctrl"});S.createEl("span",{cls:"mpdf-ctrl-label",text:m});let M=S.createEl("select",{cls:"mpdf-select"});for(let[x,C]of Object.entries(y)){let E=M.createEl("option",{text:C,value:x});x===T&&(E.selected=!0)}M.addEventListener("change",()=>void H(M.value))},r={};Object.entries(I).forEach(([m,y])=>r[m]=y.name),o("Style",r,e.preset,async m=>{this.plugin.applyPreset(m),await this.plugin.saveSettingsAndRender()});let c={};Object.keys(O).forEach(m=>c[m]=m),o("Size",c,e.pageSize,async m=>{this.plugin.settings.pageSize=m,await this.plugin.saveSettingsAndRender()}),o("Orient",{portrait:"Portrait",landscape:"Landscape"},e.orientation,async m=>{this.plugin.settings.orientation=m,await this.plugin.saveSettingsAndRender()});let d=a.createEl("div",{cls:"mpdf-ctrl"});d.createEl("span",{cls:"mpdf-ctrl-label",text:"Zoom"});let p=d.createEl("span",{cls:"mpdf-ctrl-label",text:Math.round(e.previewScale*100)+"%"}),g=d.createEl("input");g.type="range",g.min="0.35",g.max="1.0",g.step="0.05",g.value=String(e.previewScale),g.style.cssText="width:64px;accent-color:var(--interactive-accent);",g.addEventListener("input",async()=>{let m=parseFloat(g.value);this.plugin.settings.previewScale=m,p.textContent=Math.round(m*100)+"%",await this.plugin.saveSettings(),this.renderPreviewOnly()});let h=a.createEl("button",{cls:"mpdf-btn",text:"Insert Page Break"});h.title="Insert page break (///)",h.addEventListener("click",()=>this.insertAtCursor(`
///
`)),this.pageCountEl=l.createEl("span",{cls:"mpdf-page-count",text:"\u2014 pages"});let b=l.createEl("button",{cls:"mpdf-btn mpdf-btn-icon"});b.setAttr("aria-label","Open Advanced PDF Export settings"),(0,s.setIcon)(b,"settings"),b.addEventListener("click",()=>{var y,T;let m=this.app.setting;(y=m==null?void 0:m.open)==null||y.call(m),(T=m==null?void 0:m.openTabById)==null||T.call(m,"advanced-pdf-export")}),this.renderBtn=l.createEl("button",{cls:"mpdf-btn",text:"\u27F3 Render PDF"}),this.renderBtn.title="Render preview (Ctrl+Enter)",this.renderBtn.addEventListener("click",()=>this.render(!0)),this.exportBtn=l.createEl("button",{cls:"mpdf-btn mpdf-btn-primary",text:"\u2B07 Export PDF"}),this.exportBtn.addEventListener("click",()=>void this.exportPDF())}insertAtCursor(n){let e=this.editorEl,a=e.selectionStart,l=e.selectionEnd;e.value=e.value.slice(0,a)+n+e.value.slice(l),e.selectionStart=e.selectionEnd=a+n.length,e.focus()}render(n=!1){let e=++this.renderToken;this.renderDebounceTimer!==null&&(clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.showLoading();let a=()=>this.doRender(e).catch(l=>{let o=l instanceof Error?l.message:String(l);console.error("[advanced-pdf-export] render error:",l),this.hideLoading(),new s.Notice("Render error: "+o)});n?requestAnimationFrame(()=>requestAnimationFrame(()=>void a())):this.renderDebounceTimer=setTimeout(()=>{this.renderDebounceTimer=null,requestAnimationFrame(()=>requestAnimationFrame(()=>void a()))},150)}static insertAutoBreaks(n,e,a){if(!e&&!a)return n;let l=n.split(`
`),o=[],r=!1,c="";for(let d of l){if(r){let p=d.match(/^(`{3,}|~{3,})\s*$/);p&&p[1][0]===c[0]&&p[1].length>=c.length&&(r=!1,c="")}else{let p=d.match(/^(`{3,}|~{3,})/);p?(r=!0,c=p[1]):o.length>0&&(e&&/^# /.test(d)||a&&/^## /.test(d))&&o.push("///")}o.push(d)}return o.join(`
`)}async doRender(n){var E,k,f;let e=this.plugin.settings,a=ee(this.editorEl.value);e.includeFilenameAsTitle&&this.currentFile&&(a=`# ${this.currentFile.basename}

${a}`),a=N.insertAutoBreaks(a,e.autoBreakH1,e.autoBreakH2);let l=te(a),o=(E=O[e.pageSize])!=null?E:O.A4,r=e.orientation==="landscape"?o.h:o.w,c=e.orientation==="landscape"?o.w:o.h,d=R(e.marginTop),p=R(e.marginBottom),g=R(e.marginLeft),h=R(e.marginRight),b=e.showFooter?28:0,m=e.showHeader&&e.headerText?20:0,y=r-g-h,T=c-d-p-b-m,H=ie(e),S=(f=(k=this.currentFile)==null?void 0:k.path)!=null?f:"pdf-export",M=await Promise.all(l.map(w=>ne(this.app,w.trim(),S,this.renderComponent)));if(n!==this.renderToken)return;let x=[];for(let w of M)x.push(...ye(w,y,T,H));let C=Ee(x,e);this.layoutCache={layouts:C,pw:r,ph:c,mTop:d,mLeft:g,footerH:b,headerH:m,contentW:y,contentH:T,docCSS:H,fontFamily:e.fontFamily,accentColor:e.accentColor,pageBackground:e.pageBackground},this.drawPreview(this.layoutCache,e.previewScale),this.pageCountEl.textContent=`${C.length} page${C.length!==1?"s":""}`,this.hideLoading()}renderPreviewOnly(){this.layoutCache&&this.drawPreview(this.layoutCache,this.plugin.settings.previewScale)}showLoading(){this.loadingOverlayEl.style.display="flex",this.renderBtn.disabled=!0,this.renderBtn.textContent="Rendering\u2026"}hideLoading(){this.loadingOverlayEl.style.display="none",this.renderBtn.disabled=!1,this.renderBtn.textContent="\u27F3 Render PDF"}drawPreview(n,e){let{layouts:a,pw:l,ph:o,mTop:r,mLeft:c,footerH:d,headerH:p,contentW:g,contentH:h,docCSS:b,fontFamily:m,accentColor:y,pageBackground:T}=n,H=this.plugin.settings;this.previewEl.empty();let S=new Map;a.forEach((x,C)=>{for(let E of x.pageNodes)E.querySelectorAll("[id]").forEach(k=>{S.has(k.id)||S.set(k.id,C)}),E.id&&!S.has(E.id)&&S.set(E.id,C)});let M=[];for(let x of a){let C=Math.round(l*e),E=Math.round(o*e),k=this.previewEl.createEl("div",{cls:"mpdf-page-wrap"});k.style.cssText=`width:${C}px;height:${E}px;position:relative;flex-shrink:0;`,k.createEl("div",{cls:"mpdf-page-label",text:`Page ${x.pageNum} of ${x.totalPages}`}),M.push(k);let f=k.createEl("div",{cls:"mpdf-page-scale"});f.style.cssText=`width:${C}px;height:${E}px;overflow:hidden;position:relative;`;let w=document.createElement("div");w.style.cssText=[`width:${l}px`,`height:${o}px`,`transform:scale(${e})`,"transform-origin:top left","position:absolute","top:0","left:0"].join(";"),f.appendChild(w);let $=w.attachShadow({mode:"open"}),F=document.createElement("style");if(F.textContent=`
        :host {
          display: block;
          width: ${l}px;
          height: ${o}px;
          background: ${T};
          box-shadow: 0 2px 8px rgba(0,0,0,.30), 0 8px 32px rgba(0,0,0,.25);
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
        }
        *, *::before, *::after { box-sizing: border-box; }
        ${b}
      `,$.appendChild(F),H.showHeader&&x.headerText){let u=document.createElement("div");u.textContent=x.headerText,u.style.cssText=["position:absolute",`top:${r*.4}px`,`right:${c}px`,"font-size:9px","color:#999",`font-family:${m}`,"white-space:nowrap"].join(";"),$.appendChild(u)}let L=document.createElement("div");L.className="mpdf-doc",L.style.cssText=["position:absolute",`top:${r+p}px`,`left:${c}px`,`width:${g}px`,`height:${h}px`,"overflow:hidden"].join(";");for(let u of x.pageNodes)L.appendChild(u.cloneNode(!0));if($.appendChild(L),L.querySelectorAll("a[href^='#']").forEach(u=>{let v=decodeURIComponent(u.getAttribute("href").slice(1)),B=S.get(v);B!==void 0&&(u.title=`Go to page ${B+1}`,u.addEventListener("click",P=>{var A;P.preventDefault(),(A=M[B])==null||A.scrollIntoView({behavior:"smooth",block:"start"})}))}),H.showFooter){let u=document.createElement("div");if(u.style.cssText=["position:absolute","bottom:0","left:0","right:0",`height:${d}px`,"display:flex","align-items:center",`border-top:0.5px solid ${y}33`,`padding:0 ${c}px`,"font-size:9px","color:#aaa",`font-family:${m}`].join(";"),x.footerCenter){let v=document.createElement("span");v.style.cssText="flex:1;text-align:center;",v.textContent=x.footerCenter,u.appendChild(v)}else{let v=document.createElement("span");v.textContent=x.footerLeft,u.appendChild(v);let B=document.createElement("span");B.style.marginLeft="auto",B.textContent=x.footerRight,u.appendChild(B)}$.appendChild(u)}}}async exportPDF(){var x,C,E,k;let n=this.plugin.settings;this.exportBtn.disabled=!0,this.exportBtn.textContent="\u2B07 Exporting\u2026";let e=()=>{this.exportBtn.disabled=!1,this.exportBtn.textContent="\u2B07 Export PDF"};if(!this.layoutCache){this.renderDebounceTimer!==null&&(clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null);let f=++this.renderToken;this.showLoading();try{await this.doRender(f)}catch(w){let $=w instanceof Error?w.message:String(w);new s.Notice("Render error: "+$),this.hideLoading(),e();return}}let a=this.layoutCache;if(!a||a.layouts.length===0){new s.Notice("Nothing to export."),e();return}let{layouts:l,pw:o,ph:r,mTop:c,mLeft:d,footerH:p,headerH:g,contentW:h,docCSS:b,fontFamily:m,accentColor:y,pageBackground:T}=a,H=l.map(f=>{let w=f.pageNodes.map(v=>v.outerHTML).join(`
`),$=n.showHeader&&f.headerText?`<div style="position:absolute;top:${c*.4}px;right:${d}px;font-size:9px;color:#999;font-family:${m};white-space:nowrap;">${D(f.headerText)}</div>`:"",F=f.footerCenter?`<span style="flex:1;text-align:center;">${D(f.footerCenter)}</span>`:`<span>${D(f.footerLeft)}</span><span style="margin-left:auto;">${D(f.footerRight)}</span>`,L=n.showFooter?`<div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;display:flex;align-items:center;border-top:0.5px solid ${y}33;padding:0 ${d}px;font-size:9px;color:#aaa;font-family:${m};">${F}</div>`:"",u=`<div class="mpdf-doc" style="position:absolute;top:${c+g}px;left:${d}px;width:${h}px;">${w}</div>`;return`<div class="mpdf-export-page">${$}${u}${L}</div>`}),S=`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      @page { size: ${o}px ${r}px; margin: 0; }
      html, body { margin: 0; padding: 0; background: ${T}; }
      .mpdf-export-page {
        position: relative;
        width: ${o}px; height: ${r}px;
        overflow: hidden;
        background: ${T};
        page-break-after: always; break-after: page;
      }
      .mpdf-export-page:last-child { page-break-after: avoid; break-after: avoid; }
      ${b}
    `,M=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${D((C=(x=this.currentFile)==null?void 0:x.basename)!=null?C:"Export")}</title>
<style>${S}</style>
</head>
<body>
${H.join(`
`)}
</body>
</html>`;try{let f=window.require("@electron/remote");if(!(f!=null&&f.dialog))throw new Error("no remote");let w=await f.dialog.showSaveDialog({title:"Save PDF",defaultPath:((k=(E=this.currentFile)==null?void 0:E.basename)!=null?k:"export")+".pdf",filters:[{name:"PDF",extensions:["pdf"]}]});if(w.canceled||!w.filePath){e();return}new s.Notice("Generating PDF\u2026");let $=new Blob([M],{type:"text/html"}),F=URL.createObjectURL($),L=new f.BrowserWindow({show:!1,webPreferences:{nodeIntegration:!1}});L.loadURL(F);let u=!1,v=()=>{URL.revokeObjectURL(F),L.close(),e()};L.webContents.once("did-fail-load",(B,P,A)=>{u||(u=!0,new s.Notice("PDF load error: "+A),v())}),L.webContents.once("did-finish-load",()=>{u||(u=!0,L.webContents.printToPDF({pageSize:n.pageSize,landscape:n.orientation==="landscape",printBackground:!0,margins:{marginType:"none"}}).then(B=>{window.require("fs").writeFile(w.filePath,B,P=>{P?new s.Notice("Error saving PDF: "+P.message):new s.Notice("\u2713 PDF saved: "+w.filePath),v()})}).catch(B=>{new s.Notice("PDF render error: "+B.message),v()}))})}catch(f){new s.Notice("Advanced PDF export requires the Obsidian desktop app."),e()}}},G=class extends s.PluginSettingTab{constructor(n,e){super(n,e);this.dirty=!1;this.plugin=e}display(){this.dirty=!1,this.buildSettings()}hide(){var n;this.dirty&&(this.dirty=!1,(n=this.plugin.activeModal)==null||n.render(!0))}async markDirty(){this.dirty=!0,await this.plugin.saveSettings()}buildSettings(){let{containerEl:n}=this;n.empty();let e=this.plugin.settings;n.createEl("h2",{text:"Advanced PDF Export"}),n.createEl("h3",{text:"Style Preset"}),new s.Setting(n).setName("Preset").setDesc("Pick a preset to configure the overall document style. Fine-tune any setting below.").addDropdown(o=>{Object.entries(I).forEach(([r,c])=>o.addOption(r,c.name)),o.setValue(e.preset).onChange(async r=>{this.plugin.applyPreset(r),await this.markDirty(),this.buildSettings()})}).addButton(o=>o.setButtonText("Reset Preset").setTooltip("Reset current preset to its default values").onClick(async()=>{this.plugin.applyPreset(e.preset),await this.markDirty(),this.buildSettings()})),n.createEl("h3",{text:"Page"}),new s.Setting(n).setName("Page size").addDropdown(o=>{Object.keys(O).forEach(r=>o.addOption(r,r)),o.setValue(e.pageSize).onChange(async r=>{e.pageSize=r,await this.markDirty()})}),new s.Setting(n).setName("Orientation").addDropdown(o=>o.addOptions({portrait:"Portrait",landscape:"Landscape"}).setValue(e.orientation).onChange(async r=>{e.orientation=r,await this.markDirty()})),n.createEl("h3",{text:"Margins (mm)"});let a=(o,r)=>new s.Setting(n).setName(o).addText(c=>c.setValue(String(e[r])).onChange(async d=>{e[r]=parseInt(d)||0,await this.markDirty()}));a("Top","marginTop"),a("Bottom","marginBottom"),a("Left","marginLeft"),a("Right","marginRight"),n.createEl("h3",{text:"Typography"}),new s.Setting(n).setName("Font family").addDropdown(o=>o.addOptions({"Georgia, serif":"Georgia (Serif)","'Times New Roman', Times, serif":"Times New Roman","'Palatino Linotype', Palatino, serif":"Palatino","Arial, sans-serif":"Arial","'Helvetica Neue', Helvetica, sans-serif":"Helvetica","'Trebuchet MS', sans-serif":"Trebuchet","'Courier New', monospace":"Courier New"}).setValue(e.fontFamily).onChange(async r=>{e.fontFamily=r,await this.markDirty()})),new s.Setting(n).setName("Font size (px)").addDropdown(o=>{["10","11","12","13","14","15","16"].forEach(r=>o.addOption(r,r+"px")),o.setValue(String(e.fontSize)).onChange(async r=>{e.fontSize=parseInt(r),await this.markDirty()})}),new s.Setting(n).setName("Code font size").addDropdown(o=>o.addOptions({"0.75":"0.75em","0.80":"0.80em","0.82":"0.82em","0.85":"0.85em","0.88":"0.88em","0.90":"0.90em","1.0":"1.00em"}).setValue(String(e.codeFontSize)).onChange(async r=>{e.codeFontSize=parseFloat(r),await this.markDirty()})),new s.Setting(n).setName("Line height").addDropdown(o=>o.addOptions({"1.4":"Tight (1.4)","1.6":"Compact (1.6)","1.75":"Normal (1.75)","1.85":"Relaxed (1.85)","2.0":"Double (2.0)"}).setValue(String(e.lineHeight)).onChange(async r=>{e.lineHeight=parseFloat(r),await this.markDirty()})),new s.Setting(n).setName("Paragraph spacing").addDropdown(o=>o.addOptions({0:"None","0.3":"Tight (0.3em)","0.5":"Normal (0.5em)","0.65":"Relaxed (0.65em)","1.0":"Wide (1em)"}).setValue(String(e.paragraphSpacing)).onChange(async r=>{e.paragraphSpacing=parseFloat(r),await this.markDirty()})),new s.Setting(n).setName("Heading scale").setDesc("Multiplier applied to all heading sizes.").addDropdown(o=>o.addOptions({"0.8":"Small (0.8\xD7)","0.88":"0.88\xD7","0.9":"Compact (0.9\xD7)","0.95":"0.95\xD7","1.0":"Normal (1.0\xD7)","1.05":"1.05\xD7","1.1":"Large (1.1\xD7)","1.2":"XLarge (1.2\xD7)"}).setValue(String(e.headingScale)).onChange(async r=>{e.headingScale=parseFloat(r),await this.markDirty()})),n.createEl("h3",{text:"Colors"});let l=(o,r)=>new s.Setting(n).setName(o).addColorPicker(c=>c.setValue(String(e[r])).onChange(async d=>{e[r]=d,await this.markDirty()}));l("Accent color","accentColor"),l("Body text color","bodyColor"),l("Heading color","headingColor"),l("Page background","pageBackground"),l("Blockquote background","blockquoteBg"),l("Blockquote border","blockquoteBorderColor"),l("Table header background","tableHeaderBg"),l("Code background","codeBackground"),n.createEl("h3",{text:"Heading Style"}),new s.Setting(n).setName("H1 bottom border").addToggle(o=>o.setValue(e.h1BorderBottom).onChange(async r=>{e.h1BorderBottom=r,await this.markDirty()})),new s.Setting(n).setName("H2 bottom border").addToggle(o=>o.setValue(e.h2BorderBottom).onChange(async r=>{e.h2BorderBottom=r,await this.markDirty()})),new s.Setting(n).setName("Center H1").addToggle(o=>o.setValue(e.centerH1).onChange(async r=>{e.centerH1=r,await this.markDirty()})),n.createEl("h3",{text:"Tables"}),new s.Setting(n).setName("Striped rows").addToggle(o=>o.setValue(e.tableStriped).onChange(async r=>{e.tableStriped=r,await this.markDirty()})),n.createEl("h3",{text:"Header & Footer"}),new s.Setting(n).setName("Show header").addToggle(o=>o.setValue(e.showHeader).onChange(async r=>{e.showHeader=r,await this.markDirty()})),new s.Setting(n).setName("Header text").setDesc("Appears top-right on every page.").addText(o=>o.setValue(e.headerText).onChange(async r=>{e.headerText=r,await this.markDirty()})),new s.Setting(n).setName("Show footer").addToggle(o=>o.setValue(e.showFooter).onChange(async r=>{e.showFooter=r,await this.markDirty()})),new s.Setting(n).setName("Footer text").addText(o=>o.setValue(e.footerText).onChange(async r=>{e.footerText=r,await this.markDirty()})),new s.Setting(n).setName("Show page numbers").addToggle(o=>o.setValue(e.showPageNumbers).onChange(async r=>{e.showPageNumbers=r,await this.markDirty()})),new s.Setting(n).setName("Page number position").addDropdown(o=>o.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.pageNumberPosition).onChange(async r=>{e.pageNumberPosition=r,await this.markDirty()})),n.createEl("h3",{text:"Behaviour"}),new s.Setting(n).setName("Include file name as title").setDesc("Prepend the note's file name as an H1 heading at the top of the PDF. Mirrors Obsidian's built-in 'Include file name as title' export option.").addToggle(o=>o.setValue(e.includeFilenameAsTitle).onChange(async r=>{e.includeFilenameAsTitle=r,await this.markDirty()})),new s.Setting(n).setName("Auto page break before H1").addToggle(o=>o.setValue(e.autoBreakH1).onChange(async r=>{e.autoBreakH1=r,await this.markDirty()})),new s.Setting(n).setName("Auto page break before H2").addToggle(o=>o.setValue(e.autoBreakH2).onChange(async r=>{e.autoBreakH2=r,await this.markDirty()}))}};
