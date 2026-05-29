var V=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var Y=Object.prototype.hasOwnProperty;var J=(n,i)=>{for(var t in i)V(n,t,{get:i[t],enumerable:!0})},K=(n,i,t,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of G(i))!Y.call(n,r)&&r!==t&&V(n,r,{get:()=>i[r],enumerable:!(e=_(i,r))||e.enumerable});return n};var X=n=>K(V({},"__esModule",{value:!0}),n);var xe={};J(xe,{default:()=>A});module.exports=X(xe);var d=require("obsidian"),k="advanced-pdf-export",F={A4:{w:794,h:1123},A3:{w:1123,h:1587},Letter:{w:816,h:1056},Legal:{w:816,h:1344},A5:{w:559,h:794}},O={default:{name:"Default",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#7c6af7",bodyColor:"#1a1a2e",headingColor:"#0d0d1a",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"transparent",blockquoteBorderColor:"#7c6af7",codeBackground:"#f0f0f8",codeFontSize:.85,tableHeaderBg:"#f0f0f8",tableStriped:!0,marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},minimal:{name:"Minimal",fontFamily:"'Helvetica Neue', Arial, sans-serif",fontSize:12,lineHeight:1.6,paragraphSpacing:.45,headingScale:.88,accentColor:"#333",bodyColor:"#222",headingColor:"#111",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f8f8f8",blockquoteBorderColor:"#ccc",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#efefef",tableStriped:!1,marginTop:16,marginBottom:16,marginLeft:20,marginRight:20},academic:{name:"Academic",fontFamily:"'Times New Roman', Times, serif",fontSize:12,lineHeight:2,paragraphSpacing:0,headingScale:.95,accentColor:"#1a3a6b",bodyColor:"#000",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#999",codeBackground:"#f9f9f9",codeFontSize:.88,tableHeaderBg:"#e8e8e8",tableStriped:!1,marginTop:25,marginBottom:25,marginLeft:30,marginRight:30},colorful:{name:"Colorful",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1.05,accentColor:"#e84393",bodyColor:"#1a1a2e",headingColor:"#2d0a4e",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#fdf0f8",blockquoteBorderColor:"#e84393",codeBackground:"#f0eaff",codeFontSize:.85,tableHeaderBg:"#2d0a4e",tableStriped:!0,marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},modern:{name:"Modern",fontFamily:"Arial, 'Helvetica Neue', sans-serif",fontSize:13,lineHeight:1.75,paragraphSpacing:.6,headingScale:1,accentColor:"#0070f3",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f0f7ff",blockquoteBorderColor:"#0070f3",codeBackground:"#f1f5f9",codeFontSize:.85,tableHeaderBg:"#0070f3",tableStriped:!0,marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},newspaper:{name:"Newspaper",fontFamily:"Georgia, serif",fontSize:12,lineHeight:1.7,paragraphSpacing:.4,headingScale:1.1,accentColor:"#111",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#111",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#111",tableStriped:!1,marginTop:18,marginBottom:18,marginLeft:20,marginRight:20}},Q={pageSize:"A4",orientation:"portrait",preset:"default",...O.default,headerText:"",footerText:"",showHeader:!0,showFooter:!0,showPageNumbers:!0,pageNumberPosition:"right",autoBreakH1:!1,autoBreakH2:!1,previewScale:.62};function Z(n){return n.replace(/\r\n/g,`
`).replace(/^>\s*\[\![^\]]+\].*(?:\n|$)/gmi,"")}function ee(n){return n.split(/^\/\/\/\s*$/m).map(i=>i.trim()).filter(Boolean)}async function te(n,i,t,e){let r=document.createElement("div");return await d.MarkdownRenderer.render(n,i,r,t,e),r.innerHTML}function ne(n){let i=n.headingScale,t=n.preset==="modern"||n.preset==="newspaper"||n.preset==="colorful"?"#fff":n.headingColor;return`
  .mpdf-doc {
    font-family: ${n.fontFamily};
    font-size: ${n.fontSize}px;
    line-height: ${n.lineHeight};
    color: ${n.bodyColor};
    box-sizing: border-box;
  }
  .mpdf-doc *, .mpdf-doc *::before, .mpdf-doc *::after { box-sizing: border-box; }
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
    font-size: ${Math.round(14*i)}px;
    font-weight: 600;
    color: ${n.headingColor};
    margin: ${Math.round(16*i)}px 0 ${Math.round(8*i)}px;
  }
  .mpdf-doc h4 { font-size: ${Math.round(13*i)}px; font-weight: 600; color: ${n.headingColor}; margin: 12px 0 6px; }
  .mpdf-doc h5, .mpdf-doc h6 { font-size: ${Math.round(12*i)}px; font-weight: 600; color: ${n.headingColor}; margin: 10px 0 5px; }
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
  .mpdf-doc table { width: 100%; border-collapse: collapse; margin: 0 0 ${n.paragraphSpacing}em; font-size: 0.92em; }
  .mpdf-doc th {
    background: ${n.tableHeaderBg};
    color: ${t};
    padding: 6px 10px;
    text-align: left;
    font-weight: 600;
    border: 0.5px solid ${n.accentColor}33;
    font-size: 0.9em;
  }
  .mpdf-doc td { padding: 5px 10px; border: 0.5px solid ${n.bodyColor}22; vertical-align: top; }
  ${n.tableStriped?`.mpdf-doc tbody tr:nth-child(even) { background: ${n.tableHeaderBg}55; }`:""}
  `.trim()}var P=n=>n/25.4*96,oe=new Set(["P","LI","BLOCKQUOTE","TD","TH"]),ae=new Set(["P","DIV","SECTION","ARTICLE","ASIDE","NAV","HEADER","FOOTER","UL","OL","LI","TABLE","THEAD","TBODY","TFOOT","TR","TD","TH","PRE","BLOCKQUOTE","HR","IMG","H1","H2","H3","H4","H5","H6"]),re=new Set(["PRE","CODE","IMG","HR","H1","H2","H3","H4","H5","H6"]),ie=.5;function se(n){return ae.has(n)}function le(n){if(!oe.has(n.tagName))return!1;for(let i of Array.from(n.childNodes))if(i.nodeType===Node.ELEMENT_NODE){let t=i.tagName;if(se(t))return!1}return!0}function de(n,i){i.innerHTML="";for(let t of n)i.appendChild(t.cloneNode(!0));return i.getBoundingClientRect().height}function ce(n,i,t){return e=>de([...n,e],i)<=t-ie}function pe(n){var t;let i=document.createTreeWalker(n,NodeFilter.SHOW_TEXT);for(;i.nextNode();){let e=i.currentNode,r=(t=e.textContent)!=null?t:"",s=r.replace(/^\s+/,"");if(s!==r&&(e.textContent=s),s.length>0)break}}function R(n,i){var u,b;let t=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),e=0,r=null,s=0;for(;t.nextNode();){let c=t.currentNode,f=(b=(u=c.textContent)==null?void 0:u.length)!=null?b:0;if(e+f>=i){r=c,s=i-e;break}e+=f}if(!r)return null;let a=document.createRange();a.selectNodeContents(n),a.setEnd(r,s);let o=a.cloneContents(),p=document.createRange();p.selectNodeContents(n),p.setStart(r,s);let l=p.cloneContents(),h=n.cloneNode(!1),g=n.cloneNode(!1);return h.appendChild(o),g.appendChild(l),pe(g),[h,g]}function ge(n){let i=[],t=/\s+/g,e;for(;e=t.exec(n);){let r=e.index;r>0&&r<n.length&&i.push(r)}return i}function he(n,i,t){var l;let e=(l=n.textContent)!=null?l:"",r=e.length;if(r<2)return null;let s=ge(e);if(s.length>0){let h=0,g=s.length-1,u=-1;for(;h<=g;){let b=Math.floor((h+g)/2),c=R(n,s[b]);if(!c){g=b-1;continue}i(c[0])?(u=b,h=b+1):g=b-1}if(u>=0)return R(n,s[u]);if(!t)return null}let a=1,o=r-1,p=0;for(;a<=o;){let h=Math.floor((a+o)/2),g=R(n,h);if(!g){o=h-1;continue}i(g[0])?(p=h,a=h+1):o=h-1}return p===0?null:R(n,p)}function q(n,i){let t=n.cloneNode(!1);for(let e of i)t.appendChild(e.cloneNode(!0));return t}function me(n,i){let t=Array.from(n.children).filter(a=>a.tagName==="LI");if(t.length===0)return null;let e=0;for(let a=0;a<t.length;a++){let o=q(n,t.slice(0,a+1));if(i(o))e=a+1;else break}if(e<=0||e>=t.length)return null;let r=q(n,t.slice(0,e)),s=q(n,t.slice(e));return[r,s]}function W(n,i){let t=n.cloneNode(!1),e=n.querySelector("caption");e&&t.appendChild(e.cloneNode(!0));let r=n.querySelector("colgroup");r&&t.appendChild(r.cloneNode(!0));let s=n.tHead;s&&t.appendChild(s.cloneNode(!0));let a=document.createElement("tbody");for(let o of i)a.appendChild(o.cloneNode(!0));return t.appendChild(a),t}function ue(n,i){let t=n.tBodies[0],e=t?Array.from(t.rows):Array.from(n.rows).filter(o=>{var p;return((p=o.parentElement)==null?void 0:p.tagName)!=="THEAD"});if(e.length===0)return null;let r=0;for(let o=0;o<e.length;o++){let p=W(n,e.slice(0,o+1));if(i(p))r=o+1;else break}if(r<=0||r>=e.length)return null;let s=W(n,e.slice(0,r)),a=W(n,e.slice(r));return[s,a]}function fe(n,i,t){return re.has(n.tagName)?null:n.tagName==="TABLE"?ue(n,i):n.tagName==="UL"||n.tagName==="OL"?me(n,i):le(n)?he(n,i,t):null}function be(n,i,t,e){var u;let r=document.createElement("div");r.style.cssText=["position:fixed","top:0","left:-99999px",`width:${i}px`,"visibility:hidden","pointer-events:none","z-index:-1"].join(";");let s=document.createElement("style");s.textContent=e,r.appendChild(s);let a=document.createElement("div");a.className="mpdf-doc",a.innerHTML=n,r.appendChild(a);let o=document.createElement("div");o.className="mpdf-doc",o.style.cssText=["position:absolute","top:0","left:0",`width:${i}px`,"visibility:hidden"].join(";"),r.appendChild(o),document.body.appendChild(r);let p=[],l=[],h=Array.from(a.children),g=0;for(;g<h.length;){let b=h[g],c=b.cloneNode(!0),f=ce(l,o,t);if(f(c)){l.push(c),g+=1;continue}let T=l.length===0,w=fe(b,f,T);if(w){l.push(w[0]),p.push(l),l=[];let E=w[1];(u=E.textContent)!=null&&u.trim()||E.children.length>0?h[g]=E:g+=1;continue}if(l.length>0){p.push(l),l=[];continue}l.push(c),p.push(l),l=[],g+=1}return l.length>0&&p.push(l),document.body.removeChild(r),p.length>0?p:[[]]}function we(n,i){let t=n.length;return n.map((e,r)=>{var h,g,u;let s=r+1,a=`${s} / ${t}`,o="",p="",l="";return i.showPageNumbers?i.pageNumberPosition==="center"?l=(i.footerText?i.footerText+" \u2014 ":"")+a:i.pageNumberPosition==="left"?(o=a,p=(h=i.footerText)!=null?h:""):(o=(g=i.footerText)!=null?g:"",p=a):o=(u=i.footerText)!=null?u:"",{pageNodes:e,pageNum:s,totalPages:t,headerText:i.headerText,footerLeft:o,footerRight:p,footerCenter:l}})}var A=class extends d.Plugin{async onload(){await this.loadSettings(),this.registerView(k,t=>new D(t,this)),this.addRibbonIcon("file-output","Advanced PDF Export",()=>this.activateView()),this.addCommand({id:"open-advanced-pdf-export",name:"Open Advanced PDF Export panel",callback:()=>this.activateView()}),this.addSettingTab(new j(this.app,this))}onunload(){this.app.workspace.detachLeavesOfType(k)}async activateView(){let{workspace:t}=this.app,e=t.getLeavesOfType(k)[0];if(!e){let r=t.getRightLeaf(!1);r&&(await r.setViewState({type:k,active:!0}),e=r)}e&&t.revealLeaf(e)}async loadSettings(){this.settings=Object.assign({},Q,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async saveSettingsAndRender(){await this.saveSettings(),this.app.workspace.getLeavesOfType(k).forEach(t=>{t.view instanceof D&&t.view.render()})}applyPreset(t){let e=O[t];e&&(this.settings.preset=t,Object.assign(this.settings,e))}},D=class extends d.ItemView{constructor(t,e){super(t);this.debounceTimer=0;this.currentFile=null;this.renderToken=0;this.lastLayouts=null;this.lastLayoutSettings="";this.plugin=e}getViewType(){return k}getDisplayText(){return"Advanced PDF Export"}getIcon(){return"file-output"}async onOpen(){let t=this.containerEl.children[1];t.empty(),t.style.cssText="display:flex;flex-direction:column;height:100%;padding:0;overflow:hidden;",this.buildUI(t),this.loadCurrentNote(),this.registerEvent(this.app.workspace.on("active-leaf-change",()=>this.loadCurrentNote())),this.registerEvent(this.app.vault.on("modify",e=>{e===this.currentFile&&this.loadCurrentNote()}))}buildUI(t){let e=this.plugin.settings,r=t.createEl("div",{cls:"mpdf-topbar"});this.buildTopbar(r,e);let s=t.createEl("div",{cls:"mpdf-main"}),a=s.createEl("div",{cls:"mpdf-editor-panel"});this.editorEl=a.createEl("textarea",{cls:"mpdf-editor"}),this.editorEl.placeholder=`Open any note \u2014 it loads automatically.

Use /// on its own line for a page break.
Use --- for a horizontal rule.

Markdown tables:
| Col A | Col B |
|-------|-------|
| Cell  | Cell  |`;let o=a.createEl("div",{cls:"mpdf-editor-footer"});this.wordCountEl=o.createEl("span",{text:"0 words"}),o.createEl("span",{text:"/// = page break \xB7 --- = rule"}),this.previewEl=s.createEl("div",{cls:"mpdf-preview"}),this.editorEl.addEventListener("input",()=>{clearTimeout(this.debounceTimer),this.debounceTimer=window.setTimeout(()=>this.render(),350)})}buildTopbar(t,e){let r=(c,f,T,w)=>{let E=t.createEl("div",{cls:"mpdf-ctrl"});E.createEl("span",{cls:"mpdf-ctrl-label",text:c});let C=E.createEl("select",{cls:"mpdf-select"});for(let[y,H]of Object.entries(f)){let v=C.createEl("option",{text:H,value:y});y===T&&(v.selected=!0)}return C.addEventListener("change",()=>w(C.value)),C},s={};Object.entries(O).forEach(([c,f])=>s[c]=f.name),r("Style",s,e.preset,async c=>{this.plugin.applyPreset(c),await this.plugin.saveSettingsAndRender(),this.render()});let a={};Object.keys(F).forEach(c=>a[c]=c),r("Size",a,e.pageSize,async c=>{this.plugin.settings.pageSize=c,await this.plugin.saveSettingsAndRender(),this.render()}),r("Orient",{portrait:"Portrait",landscape:"Landscape"},e.orientation,async c=>{this.plugin.settings.orientation=c,await this.plugin.saveSettingsAndRender(),this.render()});let o=t.createEl("div",{cls:"mpdf-ctrl"});o.createEl("span",{cls:"mpdf-ctrl-label",text:"Zoom"});let p=o.createEl("span",{cls:"mpdf-ctrl-label",text:Math.round(e.previewScale*100)+"%"}),l=o.createEl("input");l.type="range",l.min="0.35",l.max="1.0",l.step="0.05",l.value=String(e.previewScale),l.style.cssText="width:64px;accent-color:var(--interactive-accent);",l.addEventListener("input",async()=>{this.plugin.settings.previewScale=parseFloat(l.value),p.textContent=Math.round(parseFloat(l.value)*100)+"%",await this.plugin.saveSettings(),this.renderPreviewOnly()});let h=t.createEl("button",{cls:"mpdf-btn",text:"Break"});h.title="Insert page break (///)",h.addEventListener("click",()=>this.insertAtCursor(`
///
`));let g=t.createEl("div");g.style.flex="1",this.pageCountEl=t.createEl("span",{cls:"mpdf-page-count",text:"\u2014 pages"});let u=t.createEl("button",{cls:"mpdf-btn mpdf-btn-icon"});u.setAttr("aria-label","Open Advanced PDF Export settings"),(0,d.setIcon)(u,"settings"),u.addEventListener("click",()=>{var f,T;let c=this.app.setting;(f=c==null?void 0:c.open)==null||f.call(c),(T=c==null?void 0:c.openTabById)==null||T.call(c,"advanced-pdf-export")}),t.createEl("button",{cls:"mpdf-btn mpdf-btn-primary",text:"\u2B07 Export PDF"}).addEventListener("click",()=>void this.exportPDF())}async loadCurrentNote(){let t=this.app.workspace.getActiveViewOfType(d.MarkdownView);t!=null&&t.file&&(this.currentFile=t.file,this.editorEl.value=await this.app.vault.read(t.file),this.render())}insertAtCursor(t){let e=this.editorEl,r=e.selectionStart;e.value=e.value.slice(0,r)+t+e.value.slice(r),e.selectionStart=e.selectionEnd=r+t.length,e.focus(),this.render()}render(){let t=++this.renderToken;requestAnimationFrame(()=>void this.doRender(t))}async doRender(t){var L,m,x;let e=this.plugin.settings,r=Z(this.editorEl.value);e.autoBreakH1&&(r=r.replace(/\n(# )/g,`
///
$1`)),e.autoBreakH2&&(r=r.replace(/\n(## )/g,`
///
$1`));let s=ee(r),a=(L=F[e.pageSize])!=null?L:F.A4,o=e.orientation==="landscape"?a.h:a.w,p=e.orientation==="landscape"?a.w:a.h,l=P(e.marginTop),h=P(e.marginBottom),g=P(e.marginLeft),u=P(e.marginRight),b=e.showFooter?28:0,c=e.showHeader&&e.headerText?20:0,f=o-g-u,T=p-l-h-b-c,w=ne(e),E=(x=(m=this.currentFile)==null?void 0:m.path)!=null?x:"pdf-export",C=await Promise.all(s.map(S=>te(this.app,S.trim(),E,this)));if(t!==this.renderToken)return;let y=[];for(let S of C){let B=be(S,f,T,w);y.push(...B)}let H=we(y,e);this.lastLayouts=H,this.lastLayoutSettings=JSON.stringify({pw:o,ph:p,mTop:l,mBottom:h,mLeft:g,mRight:u,FOOTER_H:b,HEADER_H:c,contentW:f,contentH:T,docCSS:w,fontFamily:e.fontFamily,accentColor:e.accentColor}),this.drawPreview(H,o,p,l,h,g,u,b,c,f,T,e.previewScale,w,e),this.pageCountEl.textContent=`${H.length} page${H.length!==1?"s":""}`;let v=this.editorEl.value.trim().split(/\s+/).filter(Boolean).length;this.wordCountEl.textContent=`${v} words`}renderPreviewOnly(){if(!this.lastLayouts)return;let t=this.plugin.settings,e=JSON.parse(this.lastLayoutSettings);this.drawPreview(this.lastLayouts,e.pw,e.ph,e.mTop,e.mBottom,e.mLeft,e.mRight,e.FOOTER_H,e.HEADER_H,e.contentW,e.contentH,t.previewScale,e.docCSS,t)}drawPreview(t,e,r,s,a,o,p,l,h,g,u,b,c,f){this.previewEl.empty();let T=this.previewEl.createEl("style");T.textContent=c;for(let w of t){let E=Math.round(e*b),C=Math.round(r*b),y=this.previewEl.createEl("div",{cls:"mpdf-page-wrap"});y.style.cssText=`width:${E}px;height:${C}px;position:relative;flex-shrink:0;`,y.createEl("div",{cls:"mpdf-page-label",text:`Page ${w.pageNum} of ${w.totalPages}`});let H=y.createEl("div",{cls:"mpdf-page-scale"});H.style.cssText=`width:${E}px;height:${C}px;overflow:hidden;position:relative;`;let v=H.createEl("div",{cls:"mpdf-page"});if(v.style.cssText=[`width:${e}px`,`height:${r}px`,`transform:scale(${b})`,"transform-origin:top left","position:absolute","top:0","left:0","background:#fff"].join(";"),f.showHeader&&w.headerText){let m=v.createEl("div");m.textContent=w.headerText,m.style.cssText=["position:absolute",`top:${s*.4}px`,`right:${p}px`,"font-size:9px","color:#999",`font-family:${f.fontFamily}`,"white-space:nowrap"].join(";")}let L=v.createEl("div",{cls:"mpdf-doc"});L.style.cssText=["position:absolute",`top:${s+h}px`,`left:${o}px`,`width:${g}px`,`height:${u}px`,"overflow:hidden"].join(";");for(let m of w.pageNodes)L.appendChild(m.cloneNode(!0));if(f.showFooter){let m=v.createEl("div");if(m.style.cssText=["position:absolute","bottom:0","left:0","right:0",`height:${l}px`,"display:flex","align-items:center",`border-top:0.5px solid ${f.accentColor}33`,`padding:0 ${o}px`,"font-size:9px","color:#aaa",`font-family:${f.fontFamily}`].join(";"),w.footerCenter){let x=m.createEl("span");x.style.cssText="flex:1;text-align:center;",x.textContent=w.footerCenter}else{let x=m.createEl("span");x.textContent=w.footerLeft;let S=m.createEl("span");S.style.marginLeft="auto",S.textContent=w.footerRight}}}}async exportPDF(){var y,H,v,L;let t=this.plugin.settings;this.lastLayouts||await new Promise(m=>{let x=++this.renderToken;requestAnimationFrame(()=>void this.doRender(x).then(m))});let e=this.lastLayouts;if(!e||e.length===0){new d.Notice("Nothing to export.");return}let r=JSON.parse(this.lastLayoutSettings),{pw:s,ph:a,mTop:o,mBottom:p,mLeft:l,mRight:h,FOOTER_H:g,HEADER_H:u,contentW:b,contentH:c,docCSS:f}=r,T=m=>`${m}mm`,w=e.map(m=>{let x=m.pageNodes.map($=>$.outerHTML).join(`
`),S=t.showHeader&&m.headerText?`<div style="position:absolute;top:${o*.4}px;right:${h}px;font-size:9px;color:#999;font-family:${t.fontFamily};white-space:nowrap;">${M(m.headerText)}</div>`:"",B="";m.footerCenter?B=`<span style="flex:1;text-align:center;">${M(m.footerCenter)}</span>`:B=`<span>${M(m.footerLeft)}</span><span style="margin-left:auto;">${M(m.footerRight)}</span>`;let N=t.showFooter?`<div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;display:flex;align-items:center;border-top:0.5px solid ${t.accentColor}33;padding:0 ${l}px;font-size:9px;color:#aaa;font-family:${t.fontFamily};">${B}</div>`:"",z=`<div class="mpdf-doc" style="position:absolute;top:${o+u}px;left:${l}px;width:${b}px;">${x}</div>`;return`<div class="mpdf-export-page">${S}${z}${N}</div>`}),E=`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* One printed page = one @page. We control all layout ourselves. */
    @page {
      size: ${t.pageSize} ${t.orientation};
      margin: 0;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
    }

    /* Each .mpdf-export-page maps to exactly one printed page */
    .mpdf-export-page {
      position: relative;
      width: ${s}px;
      height: ${a}px;
      overflow: hidden;
      page-break-after: always;
      break-after: page;
    }
    .mpdf-export-page:last-child {
      page-break-after: avoid;
      break-after: avoid;
    }

    ${f}
    `,C=`<!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>${M((H=(y=this.currentFile)==null?void 0:y.basename)!=null?H:"Export")}</title>
    <style>${E}</style>
    </head>
    <body>
    ${w.join(`
`)}
    </body>
    </html>`;try{let m=window.require("electron"),x=m.remote||m;if(!(x!=null&&x.dialog))throw new Error("no remote");let S=await x.dialog.showSaveDialog({title:"Save PDF",defaultPath:((L=(v=this.currentFile)==null?void 0:v.basename)!=null?L:"export")+".pdf",filters:[{name:"PDF",extensions:["pdf"]}]});if(S.canceled||!S.filePath)return;let B=new Blob([C],{type:"text/html"}),N=URL.createObjectURL(B),z=x.BrowserWindow,$=new z({show:!1,webPreferences:{nodeIntegration:!1}});$.loadURL(N),$.webContents.once("did-finish-load",()=>{$.webContents.printToPDF({pageSize:t.pageSize,landscape:t.orientation==="landscape",printBackground:!0,margins:{marginType:"none"}}).then(I=>{require("fs").writeFile(S.filePath,I,U=>{U?new d.Notice("Error saving PDF: "+U.message):new d.Notice("\u2713 PDF saved: "+S.filePath),$.close(),URL.revokeObjectURL(N)})}).catch(I=>{new d.Notice("PDF render error: "+I.message),$.close(),URL.revokeObjectURL(N)})})}catch(m){new d.Notice("Advanced PDF export requires the Obsidian desktop app.")}}async onClose(){}};function M(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var j=class extends d.PluginSettingTab{constructor(t,e){super(t,e);this.plugin=e}display(){let{containerEl:t}=this;t.empty();let e=this.plugin.settings;t.createEl("h2",{text:"Advanced PDF Export"}),t.createEl("h3",{text:"Style Preset"}),new d.Setting(t).setName("Preset").setDesc("Pick a preset to configure the overall document style. You can fine-tune any setting below.").addDropdown(a=>{Object.entries(O).forEach(([o,p])=>a.addOption(o,p.name)),a.setValue(e.preset).onChange(async o=>{this.plugin.applyPreset(o),await this.plugin.saveSettingsAndRender(),this.display()})}).addButton(a=>{a.setButtonText("Reset Preset").setTooltip("Reset current preset to its default values").onClick(async()=>{this.plugin.applyPreset(e.preset),await this.plugin.saveSettingsAndRender(),this.display()})}),t.createEl("h3",{text:"Page"}),new d.Setting(t).setName("Page size").addDropdown(a=>{Object.keys(F).forEach(o=>a.addOption(o,o)),a.setValue(e.pageSize).onChange(async o=>{e.pageSize=o,await this.plugin.saveSettingsAndRender()})}),new d.Setting(t).setName("Orientation").addDropdown(a=>a.addOptions({portrait:"Portrait",landscape:"Landscape"}).setValue(e.orientation).onChange(async o=>{e.orientation=o,await this.plugin.saveSettingsAndRender()})),t.createEl("h3",{text:"Margins (mm)"});let r=(a,o)=>new d.Setting(t).setName(a).addText(p=>p.setValue(String(e[o])).onChange(async l=>{e[o]=parseInt(l)||0,await this.plugin.saveSettingsAndRender()}));r("Top","marginTop"),r("Bottom","marginBottom"),r("Left","marginLeft"),r("Right","marginRight"),t.createEl("h3",{text:"Typography"}),new d.Setting(t).setName("Font family").addDropdown(a=>a.addOptions({"Georgia, serif":"Georgia (Serif)","'Times New Roman', Times, serif":"Times New Roman","'Palatino Linotype', Palatino, serif":"Palatino","Arial, sans-serif":"Arial","'Helvetica Neue', Helvetica, sans-serif":"Helvetica","'Trebuchet MS', sans-serif":"Trebuchet","'Courier New', monospace":"Courier New"}).setValue(e.fontFamily).onChange(async o=>{e.fontFamily=o,await this.plugin.saveSettingsAndRender()})),new d.Setting(t).setName("Font size (px)").addDropdown(a=>{["10","11","12","13","14","15","16"].forEach(o=>a.addOption(o,o+"px")),a.setValue(String(e.fontSize)).onChange(async o=>{e.fontSize=parseInt(o),await this.plugin.saveSettingsAndRender()})}),new d.Setting(t).setName("Line height").addDropdown(a=>a.addOptions({"1.4":"Tight (1.4)","1.6":"Compact (1.6)","1.75":"Normal (1.75)","1.85":"Relaxed (1.85)","2.0":"Double (2.0)"}).setValue(String(e.lineHeight)).onChange(async o=>{e.lineHeight=parseFloat(o),await this.plugin.saveSettingsAndRender()})),new d.Setting(t).setName("Paragraph spacing").addDropdown(a=>a.addOptions({0:"None","0.3":"Tight (0.3em)","0.5":"Normal (0.5em)","0.65":"Relaxed (0.65em)","1.0":"Wide (1em)"}).setValue(String(e.paragraphSpacing)).onChange(async o=>{e.paragraphSpacing=parseFloat(o),await this.plugin.saveSettingsAndRender()})),new d.Setting(t).setName("Heading scale").setDesc("Multiplier applied to all heading sizes.").addDropdown(a=>a.addOptions({"0.8":"Small (0.8\xD7)","0.9":"Compact (0.9\xD7)","1.0":"Normal (1.0\xD7)","1.1":"Large (1.1\xD7)","1.2":"XLarge (1.2\xD7)"}).setValue(String(e.headingScale)).onChange(async o=>{e.headingScale=parseFloat(o),await this.plugin.saveSettingsAndRender()})),t.createEl("h3",{text:"Colors"});let s=(a,o)=>new d.Setting(t).setName(a).addColorPicker(p=>p.setValue(String(e[o])).onChange(async l=>{e[o]=l,await this.plugin.saveSettingsAndRender()}));s("Accent color","accentColor"),s("Body text color","bodyColor"),s("Heading color","headingColor"),s("Blockquote border","blockquoteBorderColor"),s("Table header background","tableHeaderBg"),s("Code background","codeBackground"),t.createEl("h3",{text:"Heading Style"}),new d.Setting(t).setName("H1 bottom border").addToggle(a=>a.setValue(e.h1BorderBottom).onChange(async o=>{e.h1BorderBottom=o,await this.plugin.saveSettingsAndRender()})),new d.Setting(t).setName("H2 bottom border").addToggle(a=>a.setValue(e.h2BorderBottom).onChange(async o=>{e.h2BorderBottom=o,await this.plugin.saveSettingsAndRender()})),new d.Setting(t).setName("Center H1").addToggle(a=>a.setValue(e.centerH1).onChange(async o=>{e.centerH1=o,await this.plugin.saveSettingsAndRender()})),t.createEl("h3",{text:"Tables"}),new d.Setting(t).setName("Striped rows").addToggle(a=>a.setValue(e.tableStriped).onChange(async o=>{e.tableStriped=o,await this.plugin.saveSettingsAndRender()})),t.createEl("h3",{text:"Header & Footer"}),new d.Setting(t).setName("Show header").addToggle(a=>a.setValue(e.showHeader).onChange(async o=>{e.showHeader=o,await this.plugin.saveSettingsAndRender()})),new d.Setting(t).setName("Header text").setDesc("Appears top-right on every page.").addText(a=>a.setValue(e.headerText).onChange(async o=>{e.headerText=o,await this.plugin.saveSettingsAndRender()})),new d.Setting(t).setName("Show footer").addToggle(a=>a.setValue(e.showFooter).onChange(async o=>{e.showFooter=o,await this.plugin.saveSettingsAndRender()})),new d.Setting(t).setName("Footer text").addText(a=>a.setValue(e.footerText).onChange(async o=>{e.footerText=o,await this.plugin.saveSettingsAndRender()})),new d.Setting(t).setName("Show page numbers").addToggle(a=>a.setValue(e.showPageNumbers).onChange(async o=>{e.showPageNumbers=o,await this.plugin.saveSettingsAndRender()})),new d.Setting(t).setName("Page number position").addDropdown(a=>a.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.pageNumberPosition).onChange(async o=>{e.pageNumberPosition=o,await this.plugin.saveSettingsAndRender()})),t.createEl("h3",{text:"Behaviour"}),new d.Setting(t).setName("Auto page break before H1").addToggle(a=>a.setValue(e.autoBreakH1).onChange(async o=>{e.autoBreakH1=o,await this.plugin.saveSettingsAndRender()})),new d.Setting(t).setName("Auto page break before H2").addToggle(a=>a.setValue(e.autoBreakH2).onChange(async o=>{e.autoBreakH2=o,await this.plugin.saveSettingsAndRender()}))}};
