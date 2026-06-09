var I=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var Y=Object.prototype.hasOwnProperty;var Z=(n,t)=>{for(var e in t)I(n,e,{get:t[e],enumerable:!0})},J=(n,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of X(t))!Y.call(n,i)&&i!==e&&I(n,i,{get:()=>t[i],enumerable:!(r=K(t,i))||r.enumerable});return n};var Q=n=>J(I({},"__esModule",{value:!0}),n);var De={};Z(De,{default:()=>z});module.exports=Q(De);var s=require("obsidian"),O={A4:{w:794,h:1123},A3:{w:1123,h:1587},Letter:{w:816,h:1056},Legal:{w:816,h:1344},A5:{w:559,h:794}},q={default:{name:"Default",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#7c6af7",bodyColor:"#1a1a2e",headingColor:"#0d0d1a",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"transparent",blockquoteBorderColor:"#7c6af7",codeBackground:"#f0f0f8",codeFontSize:.85,tableHeaderBg:"#f0f0f8",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},minimal:{name:"Minimal",fontFamily:"'Helvetica Neue', Helvetica, sans-serif",fontSize:12,lineHeight:1.6,paragraphSpacing:.45,headingScale:.88,accentColor:"#333",bodyColor:"#222",headingColor:"#111",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f8f8f8",blockquoteBorderColor:"#ccc",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#efefef",tableStriped:!1,pageBackground:"#ffffff",marginTop:16,marginBottom:16,marginLeft:20,marginRight:20},academic:{name:"Academic",fontFamily:"'Times New Roman', Times, serif",fontSize:12,lineHeight:2,paragraphSpacing:0,headingScale:.95,accentColor:"#1a3a6b",bodyColor:"#000",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#999",codeBackground:"#f9f9f9",codeFontSize:.88,tableHeaderBg:"#e8e8e8",tableStriped:!1,pageBackground:"#ffffff",marginTop:25,marginBottom:25,marginLeft:30,marginRight:30},colorful:{name:"Colorful",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1.05,accentColor:"#e84393",bodyColor:"#1a1a2e",headingColor:"#2d0a4e",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#fdf0f8",blockquoteBorderColor:"#e84393",codeBackground:"#f0eaff",codeFontSize:.85,tableHeaderBg:"#2d0a4e",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},modern:{name:"Modern",fontFamily:"Arial, sans-serif",fontSize:13,lineHeight:1.75,paragraphSpacing:.6,headingScale:1,accentColor:"#0070f3",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f0f7ff",blockquoteBorderColor:"#0070f3",codeBackground:"#f1f5f9",codeFontSize:.85,tableHeaderBg:"#0070f3",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},newspaper:{name:"Newspaper",fontFamily:"Georgia, serif",fontSize:12,lineHeight:1.7,paragraphSpacing:.4,headingScale:1.1,accentColor:"#111",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#111",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#111",tableStriped:!1,pageBackground:"#ffffff",marginTop:18,marginBottom:18,marginLeft:20,marginRight:20},dark:{name:"Dark",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#818cf8",bodyColor:"#d1d5db",headingColor:"#f1f5f9",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"#1e293b",blockquoteBorderColor:"#818cf8",codeBackground:"#0f172a",codeFontSize:.85,tableHeaderBg:"#1e293b",tableStriped:!0,pageBackground:"#111827",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25}},ee={pageSize:"A4",orientation:"portrait",preset:"default",...q.default,headerText:"",footerText:"",showHeader:!0,showFooter:!0,showFooterBorder:!1,showPageNumbers:!0,pageNumberPosition:"right",pageNumberStart:1,showHeaderFooterOnFirstPage:!0,headerAlignment:"right",hideFrontmatter:!1,customFontName:"",autoBreakH1:!1,autoBreakH2:!1,includeFilenameAsTitle:!1,previewScale:.9},A=n=>n/25.4*96;function $(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function te(n){return n.replace(/<\/style/gi,"<\\/style")}var ne=/[\u0590-\u08FF\uFB1D-\uFDFD\uFE70-\uFEFC]/g,oe=/[A-Za-z\u0590-\u08FF\uFB1D-\uFDFD\uFE70-\uFEFC]/g;function re(n){let t=(n.match(ne)??[]).length,e=(n.match(oe)??[]).length;return e>0&&t/e>.1}function ae(n){return n.replace(/\r\n/g,`
`)}function ie(n){return n.replace(/^---[ \t]*\r?\n[\s\S]*?\r?\n---[ \t]*(\r?\n|$)/,"")}function le(n){return n.split(/^\/\/\/\s*$/m).map(t=>t.trim()).filter(Boolean)}async function se(n,t,e,r){let i=activeDocument.createElement("div");return await s.MarkdownRenderer.render(n,t,i,e,r),ce(i),i}function de(n){return n.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function ce(n){let t=new Map;n.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(e=>{let r=e.textContent||"",i=de(r);if(!i)return;let l=t.get(i)??0;t.set(i,l+1),e.id=l===0?i:`${i}-${l}`}),n.querySelectorAll("a").forEach(e=>{e.classList.remove("external-link")}),n.querySelectorAll(".copy-code-button").forEach(e=>e.remove()),n.querySelectorAll(".callout").forEach(e=>{e.removeAttribute("data-callout-fold"),e.classList.remove("is-collapsed"),e.querySelectorAll(".callout-fold").forEach(r=>r.remove())}),n.querySelectorAll("style, script").forEach(e=>e.remove())}function pe(n){let t=n.replace(/^#([\da-f])([\da-f])([\da-f])$/i,(o,a,d,c)=>`#${a}${a}${d}${d}${c}${c}`);if(!/^#[\da-f]{6}$/i.test(t))return 1;let e=o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4,r=e(parseInt(t.slice(1,3),16)/255),i=e(parseInt(t.slice(3,5),16)/255),l=e(parseInt(t.slice(5,7),16)/255);return .2126*r+.7152*i+.0722*l}function me(n,t=!1){let e=n.headingScale,r=n.fontFamily==="__custom__"?n.customFontName.trim()||"inherit":n.fontFamily,i=pe(n.tableHeaderBg)<.35?"#fff":n.headingColor;return`
  .mpdf-doc {
    font-family: ${r};
    font-size: ${n.fontSize}px;
    line-height: ${n.lineHeight};
    color: ${n.bodyColor};
    box-sizing: border-box;
    ${t?"direction: rtl;":""}
  }
  .mpdf-doc *, .mpdf-doc *::before, .mpdf-doc *::after { box-sizing: border-box; }
  .mpdf-doc strong, .mpdf-doc b { font-weight: 700; font-style: normal; }
  .mpdf-doc em, .mpdf-doc i { font-style: italic; font-weight: inherit; }
  .mpdf-doc mark { background: #ffe066; color: inherit; padding: 0 2px; border-radius: 2px; }
  .mpdf-doc del, .mpdf-doc s { text-decoration: line-through; }
  .mpdf-doc h1 {
    font-size: ${Math.round(22*e)}px;
    font-weight: 700;
    color: ${n.headingColor};
    margin: 0 0 ${Math.round(12*e)}px;
    line-height: 1.2;
    ${n.h1BorderBottom?`border-bottom: 2px solid ${n.accentColor}; padding-bottom: 6px;`:""}
    ${n.centerH1?"text-align: center;":""}
  }
  .mpdf-doc h2 {
    font-size: ${Math.round(17*e)}px;
    font-weight: 600;
    color: ${n.headingColor};
    margin: ${Math.round(20*e)}px 0 ${Math.round(10*e)}px;
    ${n.h2BorderBottom?`border-bottom: 0.5px solid ${n.accentColor}55; padding-bottom: 5px;`:""}
  }
  .mpdf-doc h3 {
    font-size: ${Math.round(15*e)}px;
    font-weight: 700;
    color: ${n.headingColor};
    margin: ${Math.round(16*e)}px 0 ${Math.round(8*e)}px;
    letter-spacing: 0.01em;
  }
  .mpdf-doc h4 { font-size: ${Math.round(13*e)}px; font-weight: 700; color: ${n.headingColor}; margin: 12px 0 6px; text-transform: uppercase; letter-spacing: 0.04em; }
  .mpdf-doc h5 { font-size: ${Math.round(12*e)}px; font-weight: 600; color: ${n.headingColor}; margin: 10px 0 4px; font-style: italic; }
  .mpdf-doc h6 { font-size: ${Math.round(11*e)}px; font-weight: 600; color: ${n.bodyColor}; margin: 8px 0 4px; font-style: italic; opacity: 0.75; }
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
    color: ${i};
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
    font-family: ${r} !important;
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
  `.trim()}function ge(){return Array.from(activeDocument.head.querySelectorAll("style[id^='MJX-']")).map(n=>n.textContent??"").join(`
`)}var he=new Set(["P","LI","BLOCKQUOTE","TD","TH"]),fe=new Set(["P","DIV","SECTION","ARTICLE","ASIDE","NAV","HEADER","FOOTER","UL","OL","LI","TABLE","THEAD","TBODY","TFOOT","TR","TD","TH","PRE","BLOCKQUOTE","HR","IMG","H1","H2","H3","H4","H5","H6"]),ue=new Set(["CODE","IMG","HR","H1","H2","H3","H4","H5","H6"]),be=2;function we(n,t){t.empty();for(let e of n)t.appendChild(e.cloneNode(!0));return t.getBoundingClientRect().height}function Te(n,t,e){return r=>we([...n,r],t)<=e-be}function xe(n){let t=activeDocument.createTreeWalker(n,NodeFilter.SHOW_TEXT);for(;t.nextNode();){let e=t.currentNode,r=(e.textContent??"").replace(/^\s+/,"");if(r!==e.textContent&&(e.textContent=r),r.length>0)break}}function R(n,t){let e=activeDocument.createTreeWalker(n,NodeFilter.SHOW_TEXT),r=0,i=null,l=0;for(;e.nextNode();){let p=e.currentNode,f=p.textContent?.length??0;if(r+f>=t){i=p,l=t-r;break}r+=f}if(!i)return null;let o=activeDocument.createRange();o.selectNodeContents(n),o.setEnd(i,l);let a=activeDocument.createRange();a.selectNodeContents(n),a.setStart(i,l);let d=n.cloneNode(!1);d.appendChild(o.cloneContents());let c=n.cloneNode(!1);return c.appendChild(a.cloneContents()),xe(c),[d,c]}function Ce(n){let t=[],e=/\s+/g,r;for(;r=e.exec(n);)r.index>0&&r.index<n.length&&t.push(r.index);return t}function ve(n,t,e){let r=n.textContent??"";if(r.length<2)return null;let i=Ce(r);if(i.length>0){let d=0,c=i.length-1,p=-1;for(;d<=c;){let f=Math.floor((d+c)/2),u=R(n,i[f]);if(!u){c=f-1;continue}t(u[0])?(p=f,d=f+1):c=f-1}if(p>=0)return R(n,i[p]);if(!e)return null}let l=1,o=r.length-1,a=0;for(;l<=o;){let d=Math.floor((l+o)/2),c=R(n,d);if(!c){o=d-1;continue}t(c[0])?(a=d,l=d+1):o=d-1}return a>0?R(n,a):null}function V(n,t,e){let r=n.cloneNode(!1);n.tagName==="OL"&&e!==void 0&&e>1&&(r.start=e);for(let i of t)r.appendChild(i.cloneNode(!0));return r}function ye(n,t,e){let r=Array.from(n.children).filter(o=>o.tagName==="LI");if(r.length===0)return null;let i=n.tagName==="OL"?n.start??1:1,l=0;for(let o=0;o<r.length&&t(V(n,r.slice(0,o+1),i));o++)l=o+1;if(l<=0){if(!e||r.length<2)return null;l=1}return l>=r.length?null:[V(n,r.slice(0,l),i),V(n,r.slice(l),i+l)]}function _(n,t){let e=n.cloneNode(!1),r=n.querySelector("caption");r&&e.appendChild(r.cloneNode(!0));let i=n.querySelector("colgroup");i&&e.appendChild(i.cloneNode(!0)),n.tHead&&e.appendChild(n.tHead.cloneNode(!0));let l=activeDocument.createElement("tbody");for(let o of t)l.appendChild(o.cloneNode(!0));return e.appendChild(l),e}function Ee(n,t,e){let r=n.tBodies[0],i=r?Array.from(r.rows):Array.from(n.rows).filter(o=>o.parentElement?.tagName!=="THEAD");if(i.length===0)return null;let l=0;for(let o=0;o<i.length&&t(_(n,i.slice(0,o+1)));o++)l=o+1;if(l<=0){if(!e||i.length<2)return null;l=1}return l>=i.length?null:[_(n,i.slice(0,l)),_(n,i.slice(l))]}function W(n,t){let e=n.cloneNode(!1),r=n.querySelector("code");if(r){let i=r.cloneNode(!1);i.textContent=t.join(`
`),e.appendChild(i)}else e.textContent=t.join(`
`);return e}function Se(n,t,e){let r=(n.textContent??"").split(`
`);if(r.length>1&&r[r.length-1]===""&&r.pop(),r.length<2)return null;let i=0;for(let l=0;l<r.length&&t(W(n,r.slice(0,l+1)));l++)i=l+1;if(i<=0){if(!e||r.length<2)return null;i=1}return i>=r.length?null:[W(n,r.slice(0,i)),W(n,r.slice(i))]}function He(n){if(!he.has(n.tagName))return!1;for(let t of Array.from(n.childNodes))if(t.nodeType===Node.ELEMENT_NODE&&fe.has(t.tagName))return!1;return!0}function Le(n,t,e){return ue.has(n.tagName)?null:n.tagName==="PRE"?Se(n,t,e):n.tagName==="TABLE"?Ee(n,t,e):n.tagName==="UL"||n.tagName==="OL"?ye(n,t,e):He(n)?ve(n,t,e):null}function Be(n,t,e,r){let i=activeDocument.createElement("div");i.style.cssText=["position:fixed","top:0","left:-99999px",`width:${t}px`,"visibility:hidden","pointer-events:none","z-index:-1"].join(";");let l=i.attachShadow({mode:"open"}),o=new CSSStyleSheet;o.replaceSync(r),l.adoptedStyleSheets=[o];let a=activeDocument.createElement("div");a.className="mpdf-doc";for(let p of Array.from(n.children))a.appendChild(p.cloneNode(!0));l.appendChild(a);let d=activeDocument.createElement("div");d.className="mpdf-doc",d.style.cssText=`position:absolute;top:0;left:0;width:${t}px;visibility:hidden;`,l.appendChild(d),activeDocument.body.appendChild(i);let c=[];try{let p=[],f=Array.from(a.children),u=0;for(;u<f.length;){let m=f[u],v=Te(p,d,e);if(v(m.cloneNode(!0))){p.push(m.cloneNode(!0)),u++;continue}let E=p.length===0,S=Le(m,v,E);if(S){p.push(S[0]),c.push(p),p=[];let x=S[1];x.textContent?.trim()||x.children.length>0?f[u]=x:u++;continue}if(p.length>0){c.push(p),p=[];continue}p.push(m.cloneNode(!0)),c.push(p),p=[],u++}p.length>0&&c.push(p)}finally{activeDocument.body.removeChild(i)}return c.length>0?c:[[]]}function ke(n,t){let e=n.length;return n.map((r,i)=>{let l=i+1,o=t.showHeaderFooterOnFirstPage||i>0,a=t.showHeaderFooterOnFirstPage?t.pageNumberStart+i:t.pageNumberStart+(i-1),d=t.showHeaderFooterOnFirstPage?t.pageNumberStart+e-1:t.pageNumberStart+e-2,c=`${a} / ${d}`,p="",f="",u="",m="",v="",E="";return o&&(t.showPageNumbers?t.pageNumberPosition==="center"?u=(t.footerText?t.footerText+" \u2014 ":"")+c:t.pageNumberPosition==="left"?(p=c,f=t.footerText??""):(p=t.footerText??"",f=c):p=t.footerText??"",t.headerText&&(t.headerAlignment==="center"?v=t.headerText:t.headerAlignment==="left"?m=t.headerText:E=t.headerText)),{pageNodes:r,pageNum:l,totalPages:e,headerLeft:m,headerCenter:v,headerRight:E,footerLeft:p,footerRight:f,footerCenter:u}})}var z=class extends s.Plugin{activeModal=null;async onload(){await this.loadSettings(),this.addCommand({id:"open-panel",name:"Open Panel",callback:()=>this.openModal()}),this.registerEvent(this.app.workspace.on("file-menu",(t,e)=>{!(e instanceof s.TFile)||e.extension!=="md"||t.addItem(r=>r.setTitle("Advanced PDF Export: Open Panel").setIcon("file-output").onClick(()=>this.openModal(e)))})),this.addSettingTab(new U(this.app,this))}onunload(){this.activeModal?.close()}openModal(t){this.activeModal&&this.activeModal.close(),new j(this.app,this,t).open()}async loadSettings(){this.settings=Object.assign({},ee,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async saveSettingsAndRender(){await this.saveSettings(),this.activeModal?.render()}applyPreset(t){let e=q[t];e&&(this.settings.preset=t,Object.assign(this.settings,e))}};function Fe(n,t){if(t)return t;let e=n.workspace.getActiveViewOfType(s.MarkdownView)?.file;if(e)return e;let r=n.workspace.getActiveFile();if(r?.extension==="md")return r;let i=n.workspace.getMostRecentLeaf();return i?.view instanceof s.MarkdownView?i.view.file??null:null}var j=class n extends s.Modal{plugin;editorEl;previewEl;pageCountEl;noteTitleEl;renderBtn;exportBtn;loadingOverlayEl;renderComponent=new s.Component;initialFile;currentFile=null;renderToken=0;layoutCache=null;renderDebounceTimer=null;constructor(t,e,r){super(t),this.plugin=e,this.initialFile=r??null}async onOpen(){this.plugin.activeModal=this,this.renderComponent.load(),this.modalEl.addClass("mpdf-modal"),this.buildUI(this.contentEl);let t=Fe(this.app,this.initialFile);if(t){this.currentFile=t;let e=await this.app.vault.read(t);this.editorEl.value=e,this.noteTitleEl.textContent=t.basename,this.noteTitleEl.title=t.path,this.showLoading(),await new Promise(r=>window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>r()))),this.render(!0)}}onClose(){this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.renderComponent.unload(),this.plugin.activeModal=null,this.currentFile=null,this.layoutCache=null}buildUI(t){let e=this.plugin.settings;this.buildTopbar(t.createEl("div",{cls:"mpdf-topbar"}),e);let r=t.createEl("div",{cls:"mpdf-main"}),i=r.createEl("div",{cls:"mpdf-editor-panel"});this.editorEl=i.createEl("textarea",{cls:"mpdf-editor"}),this.editorEl.placeholder=`Type or paste markdown here to preview and export as PDF.

Tip: open this panel from a note's right-click menu, command palette,
or keyboard shortcut to auto-load the active note.

Use /// on its own line for a manual page break.
Use --- for a horizontal rule.

Markdown tables:
| Col A | Col B |
|-------|-------|
| Cell  | Cell  |`;let l=r.createEl("div",{cls:"mpdf-preview-container"});this.previewEl=l.createEl("div",{cls:"mpdf-preview"}),this.loadingOverlayEl=l.createEl("div",{cls:"mpdf-loading-overlay"}),this.loadingOverlayEl.createEl("div",{cls:"mpdf-spinner"}),this.loadingOverlayEl.createEl("span",{cls:"mpdf-loading-text",text:"Rendering\u2026"}),this.editorEl.addEventListener("keydown",o=>{o.key==="Enter"&&(o.ctrlKey||o.metaKey)&&(o.preventDefault(),this.render(!0))})}buildTopbar(t,e){let r=t.createEl("div",{cls:"mpdf-topbar-left"});this.noteTitleEl=t.createEl("div",{cls:"mpdf-topbar-title",text:"\u2014"});let i=t.createEl("div",{cls:"mpdf-topbar-right"}),l=(m,v,E,S)=>{let x=r.createEl("div",{cls:"mpdf-ctrl"});x.createEl("span",{cls:"mpdf-ctrl-label",text:m});let k=x.createEl("select",{cls:"mpdf-select"});for(let[h,g]of Object.entries(v)){let b=k.createEl("option",{text:g,value:h});h===E&&(b.selected=!0)}k.addEventListener("change",()=>void S(k.value))},o={};Object.entries(q).forEach(([m,v])=>o[m]=v.name),l("Style",o,e.preset,async m=>{this.plugin.applyPreset(m),await this.plugin.saveSettingsAndRender()});let a={};Object.keys(O).forEach(m=>a[m]=m),l("Size",a,e.pageSize,async m=>{this.plugin.settings.pageSize=m,await this.plugin.saveSettingsAndRender()}),l("Orient",{portrait:"Portrait",landscape:"Landscape"},e.orientation,async m=>{this.plugin.settings.orientation=m,await this.plugin.saveSettingsAndRender()});let d=r.createEl("div",{cls:"mpdf-ctrl"});d.createEl("span",{cls:"mpdf-ctrl-label",text:"Zoom"});let c=d.createEl("span",{cls:"mpdf-ctrl-label",text:Math.round(e.previewScale*100)+"%"}),p=d.createEl("input");p.type="range",p.min="0.35",p.max="1.0",p.step="0.05",p.value=String(e.previewScale),p.addClass("mpdf-zoom-slider"),p.addEventListener("input",()=>{let m=parseFloat(p.value);this.plugin.settings.previewScale=m,c.textContent=Math.round(m*100)+"%",this.plugin.saveSettings().then(()=>{this.renderPreviewOnly()})});let f=r.createEl("button",{cls:"mpdf-btn",text:"Insert Page Break"});f.title="Insert page break (///)",f.addEventListener("click",()=>this.insertAtCursor(`
///
`)),this.pageCountEl=i.createEl("span",{cls:"mpdf-page-count",text:"\u2014 pages"});let u=i.createEl("button",{cls:"mpdf-btn mpdf-btn-icon"});u.setAttr("aria-label","Open Advanced PDF Export settings"),(0,s.setIcon)(u,"settings"),u.addEventListener("click",()=>{let m=this.app.setting;m?.open?.(),m?.openTabById?.("advanced-pdf-export")}),this.renderBtn=i.createEl("button",{cls:"mpdf-btn",text:"\u27F3 Render PDF"}),this.renderBtn.title="Render preview (Ctrl+Enter)",this.renderBtn.addEventListener("click",()=>this.render(!0)),this.exportBtn=i.createEl("button",{cls:"mpdf-btn mpdf-btn-primary",text:"\u2B07 Export PDF"}),this.exportBtn.addEventListener("click",()=>void this.exportPDF())}insertAtCursor(t){let e=this.editorEl,r=e.selectionStart,i=e.selectionEnd;e.value=e.value.slice(0,r)+t+e.value.slice(i),e.selectionStart=e.selectionEnd=r+t.length,e.focus()}render(t=!1){let e=++this.renderToken;this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.showLoading();let r=()=>this.doRender(e).catch(i=>{let l=i instanceof Error?i.message:String(i);console.error("[advanced-pdf-export] render error:",i),this.hideLoading(),new s.Notice("Render error: "+l)});t?window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>void r())):this.renderDebounceTimer=window.setTimeout(()=>{this.renderDebounceTimer=null,window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>void r()))},150)}static insertAutoBreaks(t,e,r){if(!e&&!r)return t;let i=t.split(`
`),l=[],o=!1,a="";for(let d of i){if(o){let c=d.match(/^(`{3,}|~{3,})\s*$/);c&&c[1][0]===a[0]&&c[1].length>=a.length&&(o=!1,a="")}else{let c=d.match(/^(`{3,}|~{3,})/);c?(o=!0,a=c[1]):l.length>0&&(e&&/^# /.test(d)||r&&/^## /.test(d))&&l.push("///")}l.push(d)}return l.join(`
`)}async doRender(t){let e=this.plugin.settings,r=ae(this.editorEl.value);e.hideFrontmatter&&(r=ie(r)),e.includeFilenameAsTitle&&this.currentFile&&(r=`# ${this.currentFile.basename}

${r}`),r=n.insertAutoBreaks(r,e.autoBreakH1,e.autoBreakH2);let i=le(r),l=O[e.pageSize]??O.A4,o=e.orientation==="landscape"?l.h:l.w,a=e.orientation==="landscape"?l.w:l.h,d=A(e.marginTop),c=A(e.marginBottom),p=A(e.marginLeft),f=A(e.marginRight),u=e.showFooter?28:0,m=e.showHeader&&e.headerText?20:0,v=o-p-f,E=a-d-c-u-m,S=re(this.editorEl.value),x=me(e,S),k=this.currentFile?.path??"pdf-export",h=await Promise.all(i.map(y=>se(this.app,y.trim(),k,this.renderComponent)));if(t!==this.renderToken)return;let g=ge(),b=g?`${g}
${x}`:x,T=[];for(let y of h)T.push(...Be(y,v,E,b));let F=ke(T,e),L=e.fontFamily==="__custom__"?e.customFontName.trim()||"inherit":e.fontFamily;this.layoutCache={layouts:F,pw:o,ph:a,mTop:d,mLeft:p,footerH:u,headerH:m,contentW:v,contentH:E,docCSS:b,fontFamily:L,accentColor:e.accentColor,pageBackground:e.pageBackground,isRTL:S},this.drawPreview(this.layoutCache,e.previewScale),this.pageCountEl.textContent=`${F.length} page${F.length!==1?"s":""}`,this.hideLoading()}renderPreviewOnly(){this.layoutCache&&this.drawPreview(this.layoutCache,this.plugin.settings.previewScale)}showLoading(){this.loadingOverlayEl.addClass("is-active"),this.renderBtn.disabled=!0,this.renderBtn.textContent="Rendering\u2026"}hideLoading(){this.loadingOverlayEl.removeClass("is-active"),this.renderBtn.disabled=!1,this.renderBtn.textContent="\u27F3 Render PDF"}drawPreview(t,e){let{layouts:r,pw:i,ph:l,mTop:o,mLeft:a,footerH:d,headerH:c,contentW:p,docCSS:f,fontFamily:u,accentColor:m,pageBackground:v,isRTL:E}=t,S=this.plugin.settings;this.previewEl.empty();let x=new Map;r.forEach((h,g)=>{for(let b of h.pageNodes)b.querySelectorAll("[id]").forEach(T=>{x.has(T.id)||x.set(T.id,g)}),b.id&&!x.has(b.id)&&x.set(b.id,g)});let k=[];for(let h of r){let g=Math.round(i*e),b=Math.round(l*e),T=this.previewEl.createEl("div",{cls:"mpdf-page-wrap"});T.style.cssText=`width:${g}px;height:${b}px;`,T.createEl("div",{cls:"mpdf-page-label",text:`Page ${h.pageNum} of ${h.totalPages}`}),k.push(T);let F=T.createEl("div",{cls:"mpdf-page-scale"});F.style.cssText=`width:${g}px;height:${b}px;`;let L=activeDocument.createElement("div");L.addClass("mpdf-shadow-host"),L.style.cssText=`width:${i}px;height:${l}px;transform:scale(${e});`,F.appendChild(L);let y=L.attachShadow({mode:"open"}),D=`
        :host {
          display: block;
          width: ${i}px;
          height: ${l}px;
          background: ${v};
          box-shadow: 0 2px 8px rgba(0,0,0,.30), 0 8px 32px rgba(0,0,0,.25);
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
        }
        *, *::before, *::after { box-sizing: border-box; }
        .mpdf-hf-center { flex: 1; text-align: center; }
        .mpdf-hf-right { margin-left: auto; }
        ${f}
      `,N=new CSSStyleSheet;if(N.replaceSync(D),y.adoptedStyleSheets=[N],S.showHeader&&(h.headerLeft||h.headerCenter||h.headerRight)){let w=activeDocument.createElement("div");if(w.style.cssText=["position:absolute",`top:${o*.4}px`,`left:${a}px`,`right:${a}px`,"display:flex","align-items:center","font-size:9px","color:#999",`font-family:${u}`,"white-space:nowrap"].join(";"),h.headerCenter){let C=activeDocument.createElement("span");C.className="mpdf-hf-center",C.textContent=h.headerCenter,w.appendChild(C)}else{let C=activeDocument.createElement("span");C.textContent=h.headerLeft,w.appendChild(C);let B=activeDocument.createElement("span");B.className="mpdf-hf-right",B.textContent=h.headerRight,w.appendChild(B)}y.appendChild(w)}let H=activeDocument.createElement("div");H.className="mpdf-doc",E&&H.setAttribute("dir","rtl"),H.style.cssText=["position:absolute",`top:${o+c}px`,`left:${a}px`,`width:${p}px`].join(";");for(let w of h.pageNodes)H.appendChild(w.cloneNode(!0));if(y.appendChild(H),H.querySelectorAll("a[href^='#']").forEach(w=>{let C=decodeURIComponent(w.getAttribute("href").slice(1)),B=x.get(C);B!==void 0&&(w.title=`Go to page ${B+1}`,w.addEventListener("click",G=>{G.preventDefault(),k[B]?.scrollIntoView({behavior:"smooth",block:"start"})}))}),S.showFooter&&(h.footerLeft||h.footerRight||h.footerCenter)){let w=activeDocument.createElement("div");if(w.style.cssText=["position:absolute","bottom:0","left:0","right:0",`height:${d}px`,"display:flex","align-items:center",S.showFooterBorder?`border-top:0.5px solid ${m}33`:"",`padding:0 ${a}px`,"font-size:9px","color:#aaa",`font-family:${u}`].filter(Boolean).join(";"),h.footerCenter){let C=activeDocument.createElement("span");C.className="mpdf-hf-center",C.textContent=h.footerCenter,w.appendChild(C)}else{let C=activeDocument.createElement("span");C.textContent=h.footerLeft,w.appendChild(C);let B=activeDocument.createElement("span");B.className="mpdf-hf-right",B.textContent=h.footerRight,w.appendChild(B)}y.appendChild(w)}}}async exportPDF(){let t=this.plugin.settings;this.exportBtn.disabled=!0,this.exportBtn.textContent="\u2B07 Exporting\u2026";let e=()=>{this.exportBtn.disabled=!1,this.exportBtn.textContent="\u2B07 Export PDF"};if(!this.layoutCache){this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null);let g=++this.renderToken;this.showLoading();try{await this.doRender(g)}catch(b){let T=b instanceof Error?b.message:String(b);new s.Notice("Render error: "+T),this.hideLoading(),e();return}}let r=this.layoutCache;if(!r||r.layouts.length===0){new s.Notice("Nothing to export."),e();return}let{layouts:i,pw:l,ph:o,mTop:a,mLeft:d,footerH:c,headerH:p,contentW:f,docCSS:u,fontFamily:m,accentColor:v,pageBackground:E,isRTL:S}=r,x=i.map(g=>{let b=g.pageNodes.map(P=>{if(P.nodeName==="STYLE"||P.nodeName==="SCRIPT")return"";let w=P.cloneNode(!0);return w.querySelectorAll("style, script").forEach(C=>C.remove()),w.outerHTML}).join(`
`),T=t.showHeader&&(g.headerLeft||g.headerCenter||g.headerRight),F=g.headerCenter?`<span style="flex:1;text-align:center;">${$(g.headerCenter)}</span>`:`<span>${$(g.headerLeft)}</span><span style="margin-left:auto;">${$(g.headerRight)}</span>`,L=T?`<div style="position:absolute;top:${a*.4}px;left:${d}px;right:${d}px;display:flex;align-items:center;font-size:9px;color:#999;font-family:${m};white-space:nowrap;">${F}</div>`:"",y=g.footerCenter?`<span style="flex:1;text-align:center;">${$(g.footerCenter)}</span>`:`<span>${$(g.footerLeft)}</span><span style="margin-left:auto;">${$(g.footerRight)}</span>`,D=t.showFooter&&(g.footerLeft||g.footerRight||g.footerCenter),N=t.showFooterBorder?`border-top:0.5px solid ${v}33;`:"",M=D?`<div style="position:absolute;bottom:0;left:0;right:0;height:${c}px;display:flex;align-items:center;${N}padding:0 ${d}px;font-size:9px;color:#aaa;font-family:${m};">${y}</div>`:"",H=`<div class="mpdf-doc"${S?' dir="rtl"':""} style="position:absolute;top:${a+p}px;left:${d}px;width:${f}px;">${b}</div>`;return`<div class="mpdf-export-page">${L}${H}${M}</div>`}),k=`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      @page { size: ${l}px ${o}px; margin: 0; }
      html, body { margin: 0; padding: 0; background: ${E}; }
      .mpdf-export-page {
        position: relative;
        width: ${l}px; height: ${o}px;
        overflow: hidden;
        background: ${E};
        page-break-after: always; break-after: page;
      }
      .mpdf-export-page:last-child { page-break-after: avoid; break-after: avoid; }
      ${u}
    `,h=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${$(this.currentFile?.basename??"Export")}</title>
<style>${te(k)}</style>
</head>
<body>
${x.join(`
`)}
</body>
</html>`;try{let g=window,b=g.require("@electron/remote");if(!b?.dialog)throw new Error("no remote");let T=await b.dialog.showSaveDialog({title:"Save PDF",defaultPath:(this.currentFile?.basename??"export")+".pdf",filters:[{name:"PDF",extensions:["pdf"]}]});if(T.canceled||!T.filePath){e();return}new s.Notice("Generating PDF\u2026");let F=new Blob([h],{type:"text/html"}),L=URL.createObjectURL(F),y=new b.BrowserWindow({show:!1,webPreferences:{nodeIntegration:!1}});y.loadURL(L);let D=!1,N=()=>{URL.revokeObjectURL(L),y.close(),e()};y.webContents.once("did-fail-load",(M,H,P)=>{D||(D=!0,new s.Notice("PDF load error: "+P),N())}),y.webContents.once("did-finish-load",()=>{D||(D=!0,y.webContents.printToPDF({pageSize:t.pageSize,landscape:t.orientation==="landscape",printBackground:!0,margins:{marginType:"none"}}).then(M=>{g.require("fs").writeFile(T.filePath,M,H=>{H?new s.Notice("Error saving PDF: "+H.message):new s.Notice("\u2713 PDF saved: "+T.filePath),N()})}).catch(M=>{new s.Notice("PDF render error: "+M.message),N()}))})}catch{new s.Notice("Advanced PDF export requires the Obsidian desktop app."),e()}}},U=class extends s.PluginSettingTab{plugin;dirty=!1;constructor(t,e){super(t,e),this.plugin=e}display(){this.dirty=!1,this.buildSettings()}hide(){this.dirty&&(this.dirty=!1,this.plugin.activeModal?.render(!0))}async markDirty(){this.dirty=!0,await this.plugin.saveSettings()}buildSettings(){let{containerEl:t}=this;t.empty();let e=this.plugin.settings;new s.Setting(t).setName("Style Preset").setHeading(),new s.Setting(t).setName("Preset").setDesc("Pick a preset to configure the overall document style. Fine-tune any setting below.").addDropdown(o=>{Object.entries(q).forEach(([a,d])=>{o.addOption(a,d.name)}),o.setValue(e.preset).onChange(a=>{this.plugin.applyPreset(a),this.markDirty().then(()=>{this.buildSettings()})})}).addButton(o=>o.setButtonText("Reset Preset").setTooltip("Reset current preset to its default values").onClick(()=>{this.plugin.applyPreset(e.preset),this.markDirty().then(()=>{this.buildSettings()})})),new s.Setting(t).setName("Page").setHeading(),new s.Setting(t).setName("Page size").addDropdown(o=>{Object.keys(O).forEach(a=>{o.addOption(a,a)}),o.setValue(e.pageSize).onChange(a=>{e.pageSize=a,this.markDirty()})}),new s.Setting(t).setName("Orientation").addDropdown(o=>o.addOptions({portrait:"Portrait",landscape:"Landscape"}).setValue(e.orientation).onChange(a=>{e.orientation=a,this.markDirty()})),new s.Setting(t).setName("Margins (mm)").setHeading();let r=(o,a)=>new s.Setting(t).setName(o).addText(d=>d.setValue(String(e[a])).onChange(c=>{e[a]=parseInt(c)||0,this.markDirty()}));r("Top","marginTop"),r("Bottom","marginBottom"),r("Left","marginLeft"),r("Right","marginRight"),new s.Setting(t).setName("Typography").setHeading();let i;new s.Setting(t).setName("Font family").addDropdown(o=>o.addOptions({"Georgia, serif":"Georgia (Serif)","'Times New Roman', Times, serif":"Times New Roman","'Palatino Linotype', Palatino, serif":"Palatino","Arial, sans-serif":"Arial","'Helvetica Neue', Helvetica, sans-serif":"Helvetica","'Trebuchet MS', sans-serif":"Trebuchet","'Courier New', monospace":"Courier New",__custom__:"Custom\u2026"}).setValue(e.fontFamily).onChange(a=>{e.fontFamily=a,i.settingEl.toggleClass("is-hidden",a!=="__custom__"),this.markDirty()})),i=new s.Setting(t).setName("Custom font name").setDesc('CSS font-family value \u2014 e.g. "Inter, sans-serif". The font must be installed on your system.').addText(o=>o.setPlaceholder("e.g. Inter, sans-serif").setValue(e.customFontName).onChange(a=>{e.customFontName=a,this.markDirty()})),i.settingEl.toggleClass("is-hidden",e.fontFamily!=="__custom__"),new s.Setting(t).setName("Font size (px)").addDropdown(o=>{["10","11","12","13","14","15","16"].forEach(a=>{o.addOption(a,a+"px")}),o.setValue(String(e.fontSize)).onChange(a=>{e.fontSize=parseInt(a),this.markDirty()})}),new s.Setting(t).setName("Code font size").addDropdown(o=>o.addOptions({"0.75":"0.75em","0.80":"0.80em","0.82":"0.82em","0.85":"0.85em","0.88":"0.88em","0.90":"0.90em","1.0":"1.00em"}).setValue(String(e.codeFontSize)).onChange(a=>{e.codeFontSize=parseFloat(a),this.markDirty()})),new s.Setting(t).setName("Line height").addDropdown(o=>o.addOptions({"1.4":"Tight (1.4)","1.6":"Compact (1.6)","1.75":"Normal (1.75)","1.85":"Relaxed (1.85)","2.0":"Double (2.0)"}).setValue(String(e.lineHeight)).onChange(a=>{e.lineHeight=parseFloat(a),this.markDirty()})),new s.Setting(t).setName("Paragraph spacing").addDropdown(o=>o.addOptions({0:"None","0.3":"Tight (0.3em)","0.5":"Normal (0.5em)","0.65":"Relaxed (0.65em)","1.0":"Wide (1em)"}).setValue(String(e.paragraphSpacing)).onChange(a=>{e.paragraphSpacing=parseFloat(a),this.markDirty()})),new s.Setting(t).setName("Heading scale").setDesc("Multiplier applied to all heading sizes.").addDropdown(o=>o.addOptions({"0.8":"Small (0.8\xD7)","0.88":"0.88\xD7","0.9":"Compact (0.9\xD7)","0.95":"0.95\xD7","1.0":"Normal (1.0\xD7)","1.05":"1.05\xD7","1.1":"Large (1.1\xD7)","1.2":"XLarge (1.2\xD7)"}).setValue(String(e.headingScale)).onChange(a=>{e.headingScale=parseFloat(a),this.markDirty()})),new s.Setting(t).setName("Colors").setHeading();let l=(o,a)=>new s.Setting(t).setName(o).addColorPicker(d=>d.setValue(e[a]).onChange(c=>{e[a]=c,this.markDirty()}));l("Accent color","accentColor"),l("Body text color","bodyColor"),l("Heading color","headingColor"),l("Page background","pageBackground"),l("Blockquote background","blockquoteBg"),l("Blockquote border","blockquoteBorderColor"),l("Table header background","tableHeaderBg"),l("Code background","codeBackground"),new s.Setting(t).setName("Heading Style").setHeading(),new s.Setting(t).setName("H1 bottom border").addToggle(o=>o.setValue(e.h1BorderBottom).onChange(a=>{e.h1BorderBottom=a,this.markDirty()})),new s.Setting(t).setName("H2 bottom border").addToggle(o=>o.setValue(e.h2BorderBottom).onChange(a=>{e.h2BorderBottom=a,this.markDirty()})),new s.Setting(t).setName("Center H1").addToggle(o=>o.setValue(e.centerH1).onChange(a=>{e.centerH1=a,this.markDirty()})),new s.Setting(t).setName("Tables").setHeading(),new s.Setting(t).setName("Striped rows").addToggle(o=>o.setValue(e.tableStriped).onChange(a=>{e.tableStriped=a,this.markDirty()})),new s.Setting(t).setName("Header & Footer").setHeading(),new s.Setting(t).setName("Show header").addToggle(o=>o.setValue(e.showHeader).onChange(a=>{e.showHeader=a,this.markDirty()})),new s.Setting(t).setName("Header text").setDesc("Appears on every page according to the chosen alignment.").addText(o=>o.setValue(e.headerText).onChange(a=>{e.headerText=a,this.markDirty()})),new s.Setting(t).setName("Header alignment").addDropdown(o=>o.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.headerAlignment).onChange(a=>{e.headerAlignment=a,this.markDirty()})),new s.Setting(t).setName("Show footer").addToggle(o=>o.setValue(e.showFooter).onChange(a=>{e.showFooter=a,this.markDirty()})),new s.Setting(t).setName("Footer border").setDesc("Show the separator line above the footer.").addToggle(o=>o.setValue(e.showFooterBorder).onChange(a=>{e.showFooterBorder=a,this.markDirty()})),new s.Setting(t).setName("Footer text").addText(o=>o.setValue(e.footerText).onChange(a=>{e.footerText=a,this.markDirty()})),new s.Setting(t).setName("Show page numbers").addToggle(o=>o.setValue(e.showPageNumbers).onChange(a=>{e.showPageNumbers=a,this.markDirty()})),new s.Setting(t).setName("Page number position").addDropdown(o=>o.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.pageNumberPosition).onChange(a=>{e.pageNumberPosition=a,this.markDirty()})),new s.Setting(t).setName("Page number start").setDesc("Number assigned to the first visible page number. Accepts any integer.").addText(o=>o.setValue(String(e.pageNumberStart)).onChange(a=>{let d=parseInt(a,10);e.pageNumberStart=isNaN(d)?1:d,this.markDirty()})),new s.Setting(t).setName("Header/footer on first page").setDesc("When off, page 1 has no header, footer, or page number. Numbering begins on page 2 using the start value.").addToggle(o=>o.setValue(e.showHeaderFooterOnFirstPage).onChange(a=>{e.showHeaderFooterOnFirstPage=a,this.markDirty()})),new s.Setting(t).setName("Behaviour").setHeading(),new s.Setting(t).setName("Hide frontmatter").setDesc("Strip the YAML frontmatter block (--- \u2026 ---) from the preview and exported PDF.").addToggle(o=>o.setValue(e.hideFrontmatter).onChange(a=>{e.hideFrontmatter=a,this.markDirty()})),new s.Setting(t).setName("Include file name as title").setDesc("Prepend the note's file name as an H1 heading at the top of the PDF. Mirrors Obsidian's built-in 'Include file name as title' export option.").addToggle(o=>o.setValue(e.includeFilenameAsTitle).onChange(a=>{e.includeFilenameAsTitle=a,this.markDirty()})),new s.Setting(t).setName("Auto page break before H1").addToggle(o=>o.setValue(e.autoBreakH1).onChange(a=>{e.autoBreakH1=a,this.markDirty()})),new s.Setting(t).setName("Auto page break before H2").addToggle(o=>o.setValue(e.autoBreakH2).onChange(a=>{e.autoBreakH2=a,this.markDirty()}))}};
