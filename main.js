var V=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames;var Z=Object.prototype.hasOwnProperty;var J=(t,n)=>{for(var e in n)V(t,e,{get:n[e],enumerable:!0})},Q=(t,n,e,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of Y(n))!Z.call(t,i)&&i!==e&&V(t,i,{get:()=>n[i],enumerable:!(r=X(n,i))||r.enumerable});return t};var ee=t=>Q(V({},"__esModule",{value:!0}),t);var $e={};J($e,{default:()=>q});module.exports=ee($e);var l=require("obsidian"),O={A4:{w:794,h:1123},A3:{w:1123,h:1587},Letter:{w:816,h:1056},Legal:{w:816,h:1344},A5:{w:559,h:794}},I={default:{name:"Default",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#7c6af7",bodyColor:"#1a1a2e",headingColor:"#0d0d1a",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"transparent",blockquoteBorderColor:"#7c6af7",codeBackground:"#f0f0f8",codeFontSize:.85,tableHeaderBg:"#f0f0f8",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},minimal:{name:"Minimal",fontFamily:"'Helvetica Neue', Helvetica, sans-serif",fontSize:12,lineHeight:1.6,paragraphSpacing:.45,headingScale:.88,accentColor:"#333",bodyColor:"#222",headingColor:"#111",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f8f8f8",blockquoteBorderColor:"#ccc",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#efefef",tableStriped:!1,pageBackground:"#ffffff",marginTop:16,marginBottom:16,marginLeft:20,marginRight:20},academic:{name:"Academic",fontFamily:"'Times New Roman', Times, serif",fontSize:12,lineHeight:2,paragraphSpacing:0,headingScale:.95,accentColor:"#1a3a6b",bodyColor:"#000",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#999",codeBackground:"#f9f9f9",codeFontSize:.88,tableHeaderBg:"#e8e8e8",tableStriped:!1,pageBackground:"#ffffff",marginTop:25,marginBottom:25,marginLeft:30,marginRight:30},colorful:{name:"Colorful",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1.05,accentColor:"#e84393",bodyColor:"#1a1a2e",headingColor:"#2d0a4e",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#fdf0f8",blockquoteBorderColor:"#e84393",codeBackground:"#f0eaff",codeFontSize:.85,tableHeaderBg:"#2d0a4e",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},modern:{name:"Modern",fontFamily:"Arial, sans-serif",fontSize:13,lineHeight:1.75,paragraphSpacing:.6,headingScale:1,accentColor:"#0070f3",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f0f7ff",blockquoteBorderColor:"#0070f3",codeBackground:"#f1f5f9",codeFontSize:.85,tableHeaderBg:"#0070f3",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},newspaper:{name:"Newspaper",fontFamily:"Georgia, serif",fontSize:12,lineHeight:1.7,paragraphSpacing:.4,headingScale:1.1,accentColor:"#111",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#111",codeBackground:"#f4f4f4",codeFontSize:.82,tableHeaderBg:"#111",tableStriped:!1,pageBackground:"#ffffff",marginTop:18,marginBottom:18,marginLeft:20,marginRight:20},dark:{name:"Dark",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#818cf8",bodyColor:"#d1d5db",headingColor:"#f1f5f9",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"#1e293b",blockquoteBorderColor:"#818cf8",codeBackground:"#0f172a",codeFontSize:.85,tableHeaderBg:"#1e293b",tableStriped:!0,pageBackground:"#111827",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25}},te={pageSize:"A4",orientation:"portrait",preset:"default",...I.default,headerText:"",footerText:"",showHeader:!0,showFooter:!0,showFooterBorder:!1,showPageNumbers:!0,pageNumberPosition:"right",pageNumberStart:1,showHeaderFooterOnFirstPage:!0,headerAlignment:"right",hideFrontmatter:!1,customFontName:"",autoBreakH1:!1,autoBreakH2:!1,includeFilenameAsTitle:!1,previewScale:.9},R=t=>t/25.4*96;function P(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ne(t){return t.replace(/<\/style/gi,"<\\/style")}var oe=/[\u0590-\u08FF\uFB1D-\uFDFD\uFE70-\uFEFC]/g,re=/[A-Za-z\u0590-\u08FF\uFB1D-\uFDFD\uFE70-\uFEFC]/g;function ae(t){let n=(t.match(oe)??[]).length,e=(t.match(re)??[]).length;return e>0&&n/e>.1}function ie(t){return t.replace(/\r\n/g,`
`)}function se(t){return t.replace(/^---[ \t]*\r?\n[\s\S]*?\r?\n---[ \t]*(\r?\n|$)/,"")}function le(t){return t.split(/^\/\/\/\s*$/m).map(n=>n.trim()).filter(Boolean)}async function de(t,n,e,r){let i=activeDocument.createElement("div");i.setCssStyles({position:"fixed",top:"0",left:"-99999px",visibility:"hidden",pointerEvents:"none"}),activeDocument.body.appendChild(i);try{await l.MarkdownRenderer.render(t,n,i,e,r),await me(i)}finally{activeDocument.body.removeChild(i)}return pe(i),i}function ce(t){return t.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function pe(t){let n=new Map;t.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(e=>{let r=e.textContent||"",i=ce(r);if(!i)return;let s=n.get(i)??0;n.set(i,s+1),e.id=s===0?i:`${i}-${s}`}),t.querySelectorAll("a").forEach(e=>{e.classList.remove("external-link")}),t.querySelectorAll(".copy-code-button").forEach(e=>e.remove()),t.querySelectorAll(".callout").forEach(e=>{e.removeAttribute("data-callout-fold"),e.classList.remove("is-collapsed"),e.querySelectorAll(".callout-fold").forEach(r=>r.remove())}),t.querySelectorAll("style, script").forEach(e=>{e.closest("svg")||e.remove()})}async function me(t){let n=Array.from(t.querySelectorAll(".mermaid"));if(n.length===0)return;let e=5e3;await Promise.all(n.map(r=>new Promise(i=>{if(r.querySelector("svg")){i();return}let s=window.setTimeout(()=>{o.disconnect(),i()},e),o=new MutationObserver(()=>{r.querySelector("svg")&&(window.clearTimeout(s),o.disconnect(),i())});o.observe(r,{childList:!0,subtree:!0})})))}function ge(t){let n=t.replace(/^#([\da-f])([\da-f])([\da-f])$/i,(o,a,d,c)=>`#${a}${a}${d}${d}${c}${c}`);if(!/^#[\da-f]{6}$/i.test(n))return 1;let e=o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4,r=e(parseInt(n.slice(1,3),16)/255),i=e(parseInt(n.slice(3,5),16)/255),s=e(parseInt(n.slice(5,7),16)/255);return .2126*r+.7152*i+.0722*s}function he(t,n=!1){let e=t.headingScale,r=t.fontFamily==="__custom__"?t.customFontName.trim()||"inherit":t.fontFamily,i=ge(t.tableHeaderBg)<.35?"#fff":t.headingColor;return`
  .mpdf-doc {
    font-family: ${r};
    font-size: ${t.fontSize}px;
    line-height: ${t.lineHeight};
    color: ${t.bodyColor};
    box-sizing: border-box;
    ${n?"direction: rtl;":""}
  }
  .mpdf-doc *, .mpdf-doc *::before, .mpdf-doc *::after { box-sizing: border-box; }
  .mpdf-doc strong, .mpdf-doc b { font-weight: 700; font-style: normal; }
  .mpdf-doc em, .mpdf-doc i { font-style: italic; font-weight: inherit; }
  .mpdf-doc mark { background: #ffe066; color: inherit; padding: 0 2px; border-radius: 2px; }
  .mpdf-doc del, .mpdf-doc s { text-decoration: line-through; }
  .mpdf-doc h1 {
    font-size: ${Math.round(22*e)}px;
    font-weight: 700;
    color: ${t.headingColor};
    margin: 0 0 ${Math.round(12*e)}px;
    line-height: 1.2;
    ${t.h1BorderBottom?`border-bottom: 2px solid ${t.accentColor}; padding-bottom: 6px;`:""}
    ${t.centerH1?"text-align: center;":""}
  }
  .mpdf-doc h2 {
    font-size: ${Math.round(17*e)}px;
    font-weight: 600;
    color: ${t.headingColor};
    margin: ${Math.round(20*e)}px 0 ${Math.round(10*e)}px;
    ${t.h2BorderBottom?`border-bottom: 0.5px solid ${t.accentColor}55; padding-bottom: 5px;`:""}
  }
  .mpdf-doc h3 {
    font-size: ${Math.round(15*e)}px;
    font-weight: 700;
    color: ${t.headingColor};
    margin: ${Math.round(16*e)}px 0 ${Math.round(8*e)}px;
    letter-spacing: 0.01em;
  }
  .mpdf-doc h4 { font-size: ${Math.round(13*e)}px; font-weight: 700; color: ${t.headingColor}; margin: 12px 0 6px; text-transform: uppercase; letter-spacing: 0.04em; }
  .mpdf-doc h5 { font-size: ${Math.round(12*e)}px; font-weight: 600; color: ${t.headingColor}; margin: 10px 0 4px; font-style: italic; }
  .mpdf-doc h6 { font-size: ${Math.round(11*e)}px; font-weight: 600; color: ${t.bodyColor}; margin: 8px 0 4px; font-style: italic; opacity: 0.75; }
  .mpdf-doc p { margin: 0 0 ${t.paragraphSpacing}em; }
  .mpdf-doc ul, .mpdf-doc ol { padding-inline-start: 1.4em; margin: 0 0 ${t.paragraphSpacing}em; }
  .mpdf-doc li { margin-bottom: 0.2em; line-height: ${t.lineHeight}; }
  .mpdf-doc blockquote {
    border-inline-start: 3px solid ${t.blockquoteBorderColor};
    background: ${t.blockquoteBg};
    padding-block: 4px;
    padding-inline: 1em 0;
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
  /* Hide copy-code buttons that survive postProcessRenderedHTML (e.g. re-injected by themes). */
  .mpdf-doc .copy-code-button { display: none !important; }
  .mpdf-doc table { width: 100%; border-collapse: collapse; margin: 0 0 ${t.paragraphSpacing}em; font-size: 0.92em; }
  .mpdf-doc th {
    background: ${t.tableHeaderBg};
    color: ${i};
    padding: 6px 10px;
    text-align: start;
    font-weight: 600;
    border: 0.5px solid ${t.accentColor}33;
    font-size: 0.9em;
  }
  .mpdf-doc td { padding: 5px 10px; border: 0.5px solid ${t.bodyColor}22; vertical-align: top; }
  ${t.tableStriped?`.mpdf-doc tbody tr:nth-child(even) { background: ${t.tableHeaderBg}55; }`:""}

  /* Callouts \u2014 override theme styles with !important so preview and export are
   * identical regardless of the active Obsidian theme. */
  .mpdf-doc .callout {
    border-inline-start: 4px solid ${t.accentColor} !important;
    border-start-start-radius: 0 !important;
    border-start-end-radius: 5px !important;
    border-end-end-radius: 5px !important;
    border-end-start-radius: 0 !important;
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
    font-family: ${r} !important;
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
    border-inline-start-color: ${t.accentColor}66 !important;
    background: transparent !important;
  }

  /* Mermaid diagrams \u2014 centre the SVG and prevent it overflowing the content
   * column.  The <style> block inside the SVG is intentionally left untouched;
   * mermaid embeds its own theme CSS there. */
  .mpdf-doc .mermaid {
    display: flex;
    justify-content: center;
    margin: ${t.paragraphSpacing}em 0;
    overflow: hidden;
  }
  .mpdf-doc .mermaid svg {
    max-width: 100%;
    height: auto;
    display: block;
  }
  `.trim()}function ue(t){return{name:t.name,fontFamily:t.fontFamily,fontSize:t.fontSize,lineHeight:t.lineHeight,paragraphSpacing:t.paragraphSpacing,headingScale:t.headingScale,accentColor:t.accentColor,bodyColor:t.bodyColor,headingColor:t.headingColor,h1BorderBottom:t.h1BorderBottom,h2BorderBottom:t.h2BorderBottom,centerH1:t.centerH1,blockquoteBg:t.blockquoteBg,blockquoteBorderColor:t.blockquoteBorderColor,codeBackground:t.codeBackground,codeFontSize:t.codeFontSize,tableHeaderBg:t.tableHeaderBg,tableStriped:t.tableStriped,pageBackground:t.pageBackground,marginTop:t.marginTop,marginBottom:t.marginBottom,marginLeft:t.marginLeft,marginRight:t.marginRight}}function fe(){return Array.from(activeDocument.head.querySelectorAll("style[id^='MJX-']")).map(t=>t.textContent??"").join(`
`)}var be=new Set(["P","LI","BLOCKQUOTE","TD","TH"]),we=new Set(["P","DIV","SECTION","ARTICLE","ASIDE","NAV","HEADER","FOOTER","UL","OL","LI","TABLE","THEAD","TBODY","TFOOT","TR","TD","TH","PRE","BLOCKQUOTE","HR","IMG","H1","H2","H3","H4","H5","H6"]),Ce=new Set(["CODE","IMG","HR","H1","H2","H3","H4","H5","H6"]),ve=2;function Se(t,n){n.empty();for(let e of t)n.appendChild(e.cloneNode(!0));return n.getBoundingClientRect().height}function xe(t,n,e){return r=>Se([...t,r],n)<=e-ve}function Te(t){let n=activeDocument.createTreeWalker(t,NodeFilter.SHOW_TEXT);for(;n.nextNode();){let e=n.currentNode,r=(e.textContent??"").replace(/^\s+/,"");if(r!==e.textContent&&(e.textContent=r),r.length>0)break}}function z(t,n){let e=activeDocument.createTreeWalker(t,NodeFilter.SHOW_TEXT),r=0,i=null,s=0;for(;e.nextNode();){let p=e.currentNode,u=p.textContent?.length??0;if(r+u>=n){i=p,s=n-r;break}r+=u}if(!i)return null;let o=activeDocument.createRange();o.selectNodeContents(t),o.setEnd(i,s);let a=activeDocument.createRange();a.selectNodeContents(t),a.setStart(i,s);let d=t.cloneNode(!1);d.appendChild(o.cloneContents());let c=t.cloneNode(!1);return c.appendChild(a.cloneContents()),Te(c),[d,c]}function ye(t){let n=[],e=/\s+/g,r;for(;r=e.exec(t);)r.index>0&&r.index<t.length&&n.push(r.index);return n}function Ee(t,n,e){let r=t.textContent??"";if(r.length<2)return null;let i=ye(r);if(i.length>0){let d=0,c=i.length-1,p=-1;for(;d<=c;){let u=Math.floor((d+c)/2),f=z(t,i[u]);if(!f){c=u-1;continue}n(f[0])?(p=u,d=u+1):c=u-1}if(p>=0)return z(t,i[p]);if(!e)return null}let s=1,o=r.length-1,a=0;for(;s<=o;){let d=Math.floor((s+o)/2),c=z(t,d);if(!c){o=d-1;continue}n(c[0])?(a=d,s=d+1):o=d-1}return a>0?z(t,a):null}function _(t,n,e){let r=t.cloneNode(!1);t.tagName==="OL"&&e!==void 0&&e>1&&(r.start=e);for(let i of n)r.appendChild(i.cloneNode(!0));return r}function He(t,n,e){let r=Array.from(t.children).filter(o=>o.tagName==="LI");if(r.length===0)return null;let i=t.tagName==="OL"?t.start??1:1,s=0;for(let o=0;o<r.length&&n(_(t,r.slice(0,o+1),i));o++)s=o+1;if(s<=0){if(!e||r.length<2)return null;s=1}return s>=r.length?null:[_(t,r.slice(0,s),i),_(t,r.slice(s),i+s)]}function W(t,n){let e=t.cloneNode(!1),r=t.querySelector("caption");r&&e.appendChild(r.cloneNode(!0));let i=t.querySelector("colgroup");i&&e.appendChild(i.cloneNode(!0)),t.tHead&&e.appendChild(t.tHead.cloneNode(!0));let s=activeDocument.createElement("tbody");for(let o of n)s.appendChild(o.cloneNode(!0));return e.appendChild(s),e}function Be(t,n,e){let r=t.tBodies[0],i=r?Array.from(r.rows):Array.from(t.rows).filter(o=>o.parentElement?.tagName!=="THEAD");if(i.length===0)return null;let s=0;for(let o=0;o<i.length&&n(W(t,i.slice(0,o+1)));o++)s=o+1;if(s<=0){if(!e||i.length<2)return null;s=1}return s>=i.length?null:[W(t,i.slice(0,s)),W(t,i.slice(s))]}function U(t,n){let e=t.cloneNode(!1),r=t.querySelector("code");if(r){let i=r.cloneNode(!1);i.textContent=n.join(`
`),e.appendChild(i)}else e.textContent=n.join(`
`);return e}function Le(t,n,e){let r=(t.textContent??"").split(`
`);if(r.length>1&&r[r.length-1]===""&&r.pop(),r.length<2)return null;let i=0;for(let s=0;s<r.length&&n(U(t,r.slice(0,s+1)));s++)i=s+1;if(i<=0){if(!e||r.length<2)return null;i=1}return i>=r.length?null:[U(t,r.slice(0,i)),U(t,r.slice(i))]}function ke(t){if(!be.has(t.tagName))return!1;for(let n of Array.from(t.childNodes))if(n.nodeType===Node.ELEMENT_NODE&&we.has(n.tagName))return!1;return!0}function Fe(t,n,e){return Ce.has(t.tagName)?null:t.tagName==="PRE"?Le(t,n,e):t.tagName==="TABLE"?Be(t,n,e):t.tagName==="UL"||t.tagName==="OL"?He(t,n,e):ke(t)?Ee(t,n,e):null}function Me(t,n,e,r){let i=activeDocument.createElement("div");i.setCssStyles({position:"fixed",top:"0",left:"-99999px",width:`${n}px`,visibility:"hidden",pointerEvents:"none",zIndex:"-1"});let s=i.attachShadow({mode:"open"}),o=new CSSStyleSheet;o.replaceSync(r),s.adoptedStyleSheets=[o];let a=activeDocument.createElement("div");a.className="mpdf-doc";for(let p of Array.from(t.children))a.appendChild(p.cloneNode(!0));s.appendChild(a);let d=activeDocument.createElement("div");d.className="mpdf-doc",d.setCssStyles({position:"absolute",top:"0",left:"0",width:`${n}px`,visibility:"hidden"}),s.appendChild(d),activeDocument.body.appendChild(i);let c=[];try{let p=[],u=Array.from(a.children),f=0;for(;f<u.length;){let m=u[f],v=xe(p,d,e);if(v(m)){p.push(m.cloneNode(!0)),f++;continue}let T=p.length===0,y=Fe(m,v,T);if(y){p.push(y[0]),c.push(p),p=[];let x=y[1];x.textContent?.trim()||x.children.length>0?u[f]=x:f++;continue}if(p.length>0){c.push(p),p=[];continue}p.push(m.cloneNode(!0)),c.push(p),p=[],f++}p.length>0&&c.push(p)}finally{activeDocument.body.removeChild(i)}return c.length>0?c:[[]]}function De(t,n){let e=t.length;return t.map((r,i)=>{let s=i+1,o=n.showHeaderFooterOnFirstPage||i>0,a=n.showHeaderFooterOnFirstPage?n.pageNumberStart+i:n.pageNumberStart+(i-1),d=n.showHeaderFooterOnFirstPage?n.pageNumberStart+e-1:n.pageNumberStart+e-2,c=`${a} / ${d}`,p="",u="",f="",m="",v="",T="";return o&&(n.showPageNumbers?n.pageNumberPosition==="center"?f=(n.footerText?n.footerText+" \u2014 ":"")+c:n.pageNumberPosition==="left"?(p=c,u=n.footerText??""):(p=n.footerText??"",u=c):p=n.footerText??"",n.headerText&&(n.headerAlignment==="center"?v=n.headerText:n.headerAlignment==="left"?m=n.headerText:T=n.headerText)),{pageNodes:r,pageNum:s,totalPages:e,headerLeft:m,headerCenter:v,headerRight:T,footerLeft:p,footerRight:u,footerCenter:f}})}var q=class extends l.Plugin{activeModal=null;presetSnapshots={};async onload(){await this.loadSettings(),this.addCommand({id:"open-panel",name:"Open Panel",callback:()=>this.openModal()}),this.registerEvent(this.app.workspace.on("file-menu",(n,e)=>{!(e instanceof l.TFile)||e.extension!=="md"||n.addItem(r=>r.setTitle("Advanced PDF Export: Open Panel").setIcon("file-output").onClick(()=>this.openModal(e)))})),this.addSettingTab(new j(this.app,this))}onunload(){this.activeModal?.close()}openModal(n){this.activeModal&&this.activeModal.close(),new G(this.app,this,n).open()}async loadSettings(){let n=await this.loadData()??{};this.settings=Object.assign({},te,n),this.presetSnapshots=n.presetSnapshots??{}}async saveSettings(){await this.saveData({...this.settings,presetSnapshots:this.presetSnapshots})}async saveSettingsAndRender(){await this.saveSettings(),this.activeModal?.render()}applyPreset(n,e=!1){let r=I[n];r&&(e?delete this.presetSnapshots[n]:this.presetSnapshots[this.settings.preset]=ue(this.settings),this.settings.preset=n,Object.assign(this.settings,r,e?{}:this.presetSnapshots[n]??{}))}};function Ne(t,n){if(n)return n;let e=t.workspace.getActiveViewOfType(l.MarkdownView)?.file;if(e)return e;let r=t.workspace.getActiveFile();if(r?.extension==="md")return r;let i=t.workspace.getMostRecentLeaf();return i?.view instanceof l.MarkdownView?i.view.file??null:null}var G=class t extends l.Modal{plugin;editorEl;previewEl;pageCountEl;noteTitleEl;renderBtn;exportBtn;loadingOverlayEl;renderComponent=new l.Component;initialFile;currentFile=null;renderToken=0;layoutCache=null;renderDebounceTimer=null;constructor(n,e,r){super(n),this.plugin=e,this.initialFile=r??null}async onOpen(){this.plugin.activeModal=this,this.renderComponent.load(),this.modalEl.addClass("mpdf-modal"),this.buildUI(this.contentEl);let n=Ne(this.app,this.initialFile);if(n){this.currentFile=n;let e=await this.app.vault.read(n);this.editorEl.value=e,this.noteTitleEl.textContent=n.basename,this.noteTitleEl.title=n.path,this.showLoading(),await new Promise(r=>window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>r()))),this.render(!0)}}onClose(){this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.renderComponent.unload(),this.plugin.activeModal=null,this.currentFile=null,this.layoutCache=null}buildUI(n){let e=this.plugin.settings;this.buildTopbar(n.createEl("div",{cls:"mpdf-topbar"}),e);let r=n.createEl("div",{cls:"mpdf-main"}),i=r.createEl("div",{cls:"mpdf-editor-panel"});this.editorEl=i.createEl("textarea",{cls:"mpdf-editor"}),this.editorEl.placeholder=`Type or paste markdown here to preview and export as PDF.

Tip: open this panel from a note's right-click menu, command palette,
or keyboard shortcut to auto-load the active note.

Use /// on its own line for a manual page break.
Use --- for a horizontal rule.

Mermaid diagrams are supported:
\`\`\`mermaid
flowchart LR
  A --> B --> C
\`\`\`

Markdown tables:
| Col A | Col B |
|-------|-------|
| Cell  | Cell  |`;let s=r.createEl("div",{cls:"mpdf-preview-container"});this.previewEl=s.createEl("div",{cls:"mpdf-preview"}),this.loadingOverlayEl=s.createEl("div",{cls:"mpdf-loading-overlay"}),this.loadingOverlayEl.createEl("div",{cls:"mpdf-spinner"}),this.loadingOverlayEl.createEl("span",{cls:"mpdf-loading-text",text:"Rendering\u2026"}),this.editorEl.addEventListener("keydown",o=>{o.key==="Enter"&&(o.ctrlKey||o.metaKey)&&(o.preventDefault(),this.render(!0))})}buildTopbar(n,e){let r=n.createEl("div",{cls:"mpdf-topbar-left"});this.noteTitleEl=n.createEl("div",{cls:"mpdf-topbar-title",text:"\u2014"});let i=n.createEl("div",{cls:"mpdf-topbar-right"}),s=(m,v,T,y)=>{let x=r.createEl("div",{cls:"mpdf-ctrl"});x.createEl("span",{cls:"mpdf-ctrl-label",text:m});let E=x.createEl("select",{cls:"mpdf-select"});for(let[D,N]of Object.entries(v)){let h=E.createEl("option",{text:N,value:D});D===T&&(h.selected=!0)}E.addEventListener("change",()=>void y(E.value))},o={};Object.entries(I).forEach(([m,v])=>o[m]=v.name),s("Style",o,e.preset,async m=>{this.plugin.applyPreset(m),await this.plugin.saveSettingsAndRender()});let a={};Object.keys(O).forEach(m=>a[m]=m),s("Size",a,e.pageSize,async m=>{this.plugin.settings.pageSize=m,await this.plugin.saveSettingsAndRender()}),s("Orient",{portrait:"Portrait",landscape:"Landscape"},e.orientation,async m=>{this.plugin.settings.orientation=m,await this.plugin.saveSettingsAndRender()});let d=r.createEl("div",{cls:"mpdf-ctrl"});d.createEl("span",{cls:"mpdf-ctrl-label",text:"Zoom"});let c=d.createEl("span",{cls:"mpdf-ctrl-label",text:Math.round(e.previewScale*100)+"%"}),p=d.createEl("input");p.type="range",p.min="0.35",p.max="1.0",p.step="0.05",p.value=String(e.previewScale),p.addClass("mpdf-zoom-slider"),p.addEventListener("input",()=>{let m=parseFloat(p.value);this.plugin.settings.previewScale=m,c.textContent=Math.round(m*100)+"%",this.plugin.saveSettings().then(()=>{this.renderPreviewOnly()})});let u=r.createEl("button",{cls:"mpdf-btn",text:"Insert Page Break"});u.title="Insert page break (///)",u.addEventListener("click",()=>this.insertAtCursor(`
///
`)),this.pageCountEl=i.createEl("span",{cls:"mpdf-page-count",text:"\u2014 pages"});let f=i.createEl("button",{cls:"mpdf-btn mpdf-btn-icon"});f.setAttr("aria-label","Open Advanced PDF Export settings"),(0,l.setIcon)(f,"settings"),f.addEventListener("click",()=>{let m=this.app.setting;m?.open?.(),m?.openTabById?.("advanced-pdf-export")}),this.renderBtn=i.createEl("button",{cls:"mpdf-btn",text:"\u27F3 Render PDF"}),this.renderBtn.title="Render preview (Ctrl+Enter)",this.renderBtn.addEventListener("click",()=>this.render(!0)),this.exportBtn=i.createEl("button",{cls:"mpdf-btn mpdf-btn-primary",text:"\u2B07 Export PDF"}),this.exportBtn.addEventListener("click",()=>void this.exportPDF())}insertAtCursor(n){let e=this.editorEl,r=e.selectionStart,i=e.selectionEnd;e.value=e.value.slice(0,r)+n+e.value.slice(i),e.selectionStart=e.selectionEnd=r+n.length,e.focus()}render(n=!1){let e=++this.renderToken;this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.showLoading();let r=()=>this.doRender(e).catch(i=>{let s=i instanceof Error?i.message:String(i);console.error("[advanced-pdf-export] render error:",i),this.hideLoading(),new l.Notice("Render error: "+s)});n?window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>void r())):this.renderDebounceTimer=window.setTimeout(()=>{this.renderDebounceTimer=null,window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>void r()))},150)}static insertAutoBreaks(n,e,r){if(!e&&!r)return n;let i=n.split(`
`),s=[],o=!1,a="";for(let d of i){if(o){let c=d.match(/^(`{3,}|~{3,})\s*$/);c&&c[1][0]===a[0]&&c[1].length>=a.length&&(o=!1,a="")}else{let c=d.match(/^(`{3,}|~{3,})/);c?(o=!0,a=c[1]):s.length>0&&(e&&/^# /.test(d)||r&&/^## /.test(d))&&s.push("///")}s.push(d)}return s.join(`
`)}async doRender(n){let e=this.plugin.settings,r=ie(this.editorEl.value);e.hideFrontmatter&&(r=se(r)),e.includeFilenameAsTitle&&this.currentFile&&(r=`# ${this.currentFile.basename}

${r}`),r=t.insertAutoBreaks(r,e.autoBreakH1,e.autoBreakH2);let i=le(r),s=O[e.pageSize]??O.A4,o=e.orientation==="landscape"?s.h:s.w,a=e.orientation==="landscape"?s.w:s.h,d=R(e.marginTop),c=R(e.marginBottom),p=R(e.marginLeft),u=R(e.marginRight),f=e.showFooter?28:0,m=e.showHeader&&e.headerText?20:0,v=Math.max(1,o-p-u),T=Math.max(1,a-d-c-f-m),y=ae(this.editorEl.value),x=he(e,y),E=this.currentFile?.path??"pdf-export",D=await Promise.all(i.map(S=>de(this.app,S,E,this.renderComponent)));if(n!==this.renderToken)return;let N=fe(),h=N?`${N}
${x}`:x,g=[];for(let S of D)g.push(...Me(S,v,T,h));let w=De(g,e),H=e.fontFamily==="__custom__"?e.customFontName.trim()||"inherit":e.fontFamily;this.layoutCache={layouts:w,pw:o,ph:a,mTop:d,mLeft:p,mRight:u,footerH:f,headerH:m,contentW:v,contentH:T,docCSS:h,fontFamily:H,accentColor:e.accentColor,pageBackground:e.pageBackground,isRTL:y},this.drawPreview(this.layoutCache,e.previewScale),this.pageCountEl.textContent=`${w.length} page${w.length!==1?"s":""}`,this.hideLoading()}renderPreviewOnly(){this.layoutCache&&this.drawPreview(this.layoutCache,this.plugin.settings.previewScale)}showLoading(){this.loadingOverlayEl.addClass("is-active"),this.renderBtn.disabled=!0,this.renderBtn.textContent="Rendering\u2026"}hideLoading(){this.loadingOverlayEl.removeClass("is-active"),this.renderBtn.disabled=!1,this.renderBtn.textContent="\u27F3 Render PDF"}drawPreview(n,e){let{layouts:r,pw:i,ph:s,mTop:o,mLeft:a,mRight:d,footerH:c,headerH:p,contentW:u,docCSS:f,fontFamily:m,accentColor:v,pageBackground:T,isRTL:y}=n,x=this.plugin.settings;this.previewEl.empty();let E=new Map;r.forEach((g,w)=>{for(let H of g.pageNodes)H.querySelectorAll("[id]").forEach(S=>{E.has(S.id)||E.set(S.id,w)}),H.id&&!E.has(H.id)&&E.set(H.id,w)});let D=[],N=`
      :host {
        display: block;
        width: ${i}px;
        height: ${s}px;
        background: ${T};
        box-shadow: 0 2px 8px rgba(0,0,0,.30), 0 8px 32px rgba(0,0,0,.25);
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
      }
      *, *::before, *::after { box-sizing: border-box; }
      .mpdf-hf-center { flex: 1; text-align: center; }
      .mpdf-hf-right { margin-left: auto; }
      ${f}
    `,h=new CSSStyleSheet;h.replaceSync(N);for(let g of r){let w=Math.round(i*e),H=Math.round(s*e),S=this.previewEl.createEl("div",{cls:"mpdf-page-wrap"});S.setCssStyles({width:`${w}px`,height:`${H}px`}),S.createEl("div",{cls:"mpdf-page-label",text:`Page ${g.pageNum} of ${g.totalPages}`}),D.push(S);let F=S.createEl("div",{cls:"mpdf-page-scale"});F.setCssStyles({width:`${w}px`,height:`${H}px`});let L=activeDocument.createElement("div");L.addClass("mpdf-shadow-host"),L.setCssStyles({width:`${i}px`,height:`${s}px`,transform:`scale(${e})`}),F.appendChild(L);let M=L.attachShadow({mode:"open"});if(M.adoptedStyleSheets=[h],x.showHeader&&(g.headerLeft||g.headerCenter||g.headerRight)){let b=activeDocument.createElement("div");if(b.setCssStyles({position:"absolute",top:`${o*.4}px`,left:`${a}px`,right:`${d}px`,display:"flex",alignItems:"center",fontSize:"9px",color:"#999",fontFamily:m,whiteSpace:"nowrap"}),g.headerCenter){let C=activeDocument.createElement("span");C.className="mpdf-hf-center",C.textContent=g.headerCenter,b.appendChild(C)}else{let C=activeDocument.createElement("span");C.textContent=g.headerLeft,b.appendChild(C);let k=activeDocument.createElement("span");k.className="mpdf-hf-right",k.textContent=g.headerRight,b.appendChild(k)}M.appendChild(b)}let B=activeDocument.createElement("div");B.className="mpdf-doc",y&&B.setAttribute("dir","rtl"),B.setCssStyles({position:"absolute",top:`${o+p}px`,left:`${a}px`,width:`${u}px`});for(let b of g.pageNodes)B.appendChild(b.cloneNode(!0));if(M.appendChild(B),B.querySelectorAll("a[href^='#']").forEach(b=>{let C=decodeURIComponent(b.getAttribute("href").slice(1)),k=E.get(C);k!==void 0&&(b.title=`Go to page ${k+1}`,b.addEventListener("click",K=>{K.preventDefault(),D[k]?.scrollIntoView({behavior:"smooth",block:"start"})}))}),x.showFooter&&(g.footerLeft||g.footerRight||g.footerCenter)){let b=activeDocument.createElement("div");if(b.setCssStyles({position:"absolute",bottom:"0",left:"0",right:"0",height:`${c}px`,display:"flex",alignItems:"center",...x.showFooterBorder?{borderTop:`0.5px solid ${v}33`}:{},padding:`0 ${d}px 0 ${a}px`,fontSize:"9px",color:"#aaa",fontFamily:m}),g.footerCenter){let C=activeDocument.createElement("span");C.className="mpdf-hf-center",C.textContent=g.footerCenter,b.appendChild(C)}else{let C=activeDocument.createElement("span");C.textContent=g.footerLeft,b.appendChild(C);let k=activeDocument.createElement("span");k.className="mpdf-hf-right",k.textContent=g.footerRight,b.appendChild(k)}M.appendChild(b)}}}async exportPDF(){let n=this.plugin.settings;this.exportBtn.disabled=!0,this.exportBtn.textContent="\u2B07 Exporting\u2026";let e=()=>{this.exportBtn.disabled=!1,this.exportBtn.textContent="\u2B07 Export PDF"};if(!this.layoutCache){this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null);let h=++this.renderToken;this.showLoading();try{await this.doRender(h)}catch(g){let w=g instanceof Error?g.message:String(g);new l.Notice("Render error: "+w),this.hideLoading(),e();return}}let r=this.layoutCache;if(!r||r.layouts.length===0){new l.Notice("Nothing to export."),e();return}let{layouts:i,pw:s,ph:o,mTop:a,mLeft:d,mRight:c,footerH:p,headerH:u,contentW:f,docCSS:m,fontFamily:v,accentColor:T,pageBackground:y,isRTL:x}=r,E=i.map(h=>{let g=h.pageNodes.map(A=>{let b=A.cloneNode(!0);return b.querySelectorAll("style, script").forEach(C=>{C.closest("svg")||C.remove()}),b.outerHTML}).join(`
`),w=n.showHeader&&(h.headerLeft||h.headerCenter||h.headerRight),H=h.headerCenter?`<span style="flex:1;text-align:center;">${P(h.headerCenter)}</span>`:`<span>${P(h.headerLeft)}</span><span style="margin-left:auto;">${P(h.headerRight)}</span>`,S=w?`<div style="position:absolute;top:${a*.4}px;left:${d}px;right:${c}px;display:flex;align-items:center;font-size:9px;color:#999;font-family:${v};white-space:nowrap;">${H}</div>`:"",F=h.footerCenter?`<span style="flex:1;text-align:center;">${P(h.footerCenter)}</span>`:`<span>${P(h.footerLeft)}</span><span style="margin-left:auto;">${P(h.footerRight)}</span>`,L=n.showFooter&&(h.footerLeft||h.footerRight||h.footerCenter),M=n.showFooterBorder?`border-top:0.5px solid ${T}33;`:"",$=L?`<div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;display:flex;align-items:center;${M}padding:0 ${c}px 0 ${d}px;font-size:9px;color:#aaa;font-family:${v};">${F}</div>`:"",B=`<div class="mpdf-doc"${x?' dir="rtl"':""} style="position:absolute;top:${a+u}px;left:${d}px;width:${f}px;">${g}</div>`;return`<div class="mpdf-export-page">${S}${B}${$}</div>`}),D=`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      @page { size: ${s}px ${o}px; margin: 0; }
      html, body { margin: 0; padding: 0; background: ${y}; }
      .mpdf-export-page {
        position: relative;
        width: ${s}px; height: ${o}px;
        overflow: hidden;
        background: ${y};
        page-break-after: always; break-after: page;
      }
      .mpdf-export-page:last-child { page-break-after: avoid; break-after: avoid; }
      ${m}
    `,N=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${P(this.currentFile?.basename??"Export")}</title>
<style>${ne(D)}</style>
</head>
<body>
${E.join(`
`)}
</body>
</html>`;try{let h=window,g=h.require("@electron/remote");if(!g?.dialog)throw new Error("no remote");let w=await g.dialog.showSaveDialog({title:"Save PDF",defaultPath:(this.currentFile?.basename??"export")+".pdf",filters:[{name:"PDF",extensions:["pdf"]}]});if(w.canceled||!w.filePath){e();return}new l.Notice("Generating PDF\u2026");let H=new Blob([N],{type:"text/html"}),S=URL.createObjectURL(H),F=new g.BrowserWindow({show:!1,webPreferences:{nodeIntegration:!1}});F.loadURL(S);let L=!1,M=()=>{URL.revokeObjectURL(S),F.close(),e()};F.webContents.once("did-fail-load",($,B,A)=>{L||(L=!0,new l.Notice("PDF load error: "+A),M())}),F.webContents.once("did-finish-load",()=>{L||(L=!0,F.webContents.printToPDF({pageSize:n.pageSize,landscape:n.orientation==="landscape",printBackground:!0,margins:{marginType:"none"}}).then($=>{h.require("fs").writeFile(w.filePath,$,B=>{B?new l.Notice("Error saving PDF: "+B.message):new l.Notice("\u2713 PDF saved: "+w.filePath),M()})}).catch($=>{new l.Notice("PDF render error: "+$.message),M()}))})}catch{new l.Notice("Advanced PDF export requires the Obsidian desktop app."),e()}}},j=class extends l.PluginSettingTab{plugin;dirty=!1;constructor(n,e){super(n,e),this.plugin=e}display(){this.dirty=!1,this.buildSettings()}hide(){this.dirty&&(this.dirty=!1,this.plugin.activeModal?.render(!0))}async markDirty(){this.dirty=!0,await this.plugin.saveSettings()}buildSettings(){let{containerEl:n}=this;n.empty();let e=this.plugin.settings;new l.Setting(n).setName("Style Preset").setHeading(),new l.Setting(n).setName("Preset").setDesc("Pick a preset to configure the overall document style. Fine-tune any setting below.").addDropdown(o=>{Object.entries(I).forEach(([a,d])=>{o.addOption(a,d.name)}),o.setValue(e.preset).onChange(a=>{this.plugin.applyPreset(a),this.markDirty().then(()=>{this.buildSettings()})})}).addButton(o=>o.setButtonText("Reset Preset").setTooltip("Reset current preset to its default values").onClick(()=>{this.plugin.applyPreset(e.preset,!0),this.markDirty().then(()=>{this.buildSettings()})})),new l.Setting(n).setName("Page").setHeading(),new l.Setting(n).setName("Page size").addDropdown(o=>{Object.keys(O).forEach(a=>{o.addOption(a,a)}),o.setValue(e.pageSize).onChange(a=>{e.pageSize=a,this.markDirty()})}),new l.Setting(n).setName("Orientation").addDropdown(o=>o.addOptions({portrait:"Portrait",landscape:"Landscape"}).setValue(e.orientation).onChange(a=>{e.orientation=a,this.markDirty()})),new l.Setting(n).setName("Margins (mm)").setHeading();let r=(o,a)=>new l.Setting(n).setName(o).addText(d=>d.setValue(String(e[a])).onChange(c=>{e[a]=parseInt(c)||0,this.markDirty()}));r("Top","marginTop"),r("Bottom","marginBottom"),r("Left","marginLeft"),r("Right","marginRight"),new l.Setting(n).setName("Typography").setHeading();let i;new l.Setting(n).setName("Font family").addDropdown(o=>o.addOptions({"Georgia, serif":"Georgia (Serif)","'Times New Roman', Times, serif":"Times New Roman","'Palatino Linotype', Palatino, serif":"Palatino","Arial, sans-serif":"Arial","'Helvetica Neue', Helvetica, sans-serif":"Helvetica","'Trebuchet MS', sans-serif":"Trebuchet","'Courier New', monospace":"Courier New",__custom__:"Custom\u2026"}).setValue(e.fontFamily).onChange(a=>{e.fontFamily=a,i.settingEl.toggleClass("is-hidden",a!=="__custom__"),this.markDirty()})),i=new l.Setting(n).setName("Custom font name").setDesc('CSS font-family value \u2014 e.g. "Inter, sans-serif". The font must be installed on your system.').addText(o=>o.setPlaceholder("e.g. Inter, sans-serif").setValue(e.customFontName).onChange(a=>{e.customFontName=a,this.markDirty()})),i.settingEl.toggleClass("is-hidden",e.fontFamily!=="__custom__"),new l.Setting(n).setName("Font size (px)").addDropdown(o=>{["10","11","12","13","14","15","16"].forEach(a=>{o.addOption(a,a+"px")}),o.setValue(String(e.fontSize)).onChange(a=>{e.fontSize=parseInt(a),this.markDirty()})}),new l.Setting(n).setName("Code font size").addDropdown(o=>o.addOptions({"0.75":"0.75em","0.80":"0.80em","0.82":"0.82em","0.85":"0.85em","0.88":"0.88em","0.90":"0.90em","1.0":"1.00em"}).setValue(String(e.codeFontSize)).onChange(a=>{e.codeFontSize=parseFloat(a),this.markDirty()})),new l.Setting(n).setName("Line height").addDropdown(o=>o.addOptions({"1.4":"Tight (1.4)","1.6":"Compact (1.6)","1.75":"Normal (1.75)","1.85":"Relaxed (1.85)","2.0":"Double (2.0)"}).setValue(String(e.lineHeight)).onChange(a=>{e.lineHeight=parseFloat(a),this.markDirty()})),new l.Setting(n).setName("Paragraph spacing").addDropdown(o=>o.addOptions({0:"None","0.3":"Tight (0.3em)","0.5":"Normal (0.5em)","0.65":"Relaxed (0.65em)","1.0":"Wide (1em)"}).setValue(String(e.paragraphSpacing)).onChange(a=>{e.paragraphSpacing=parseFloat(a),this.markDirty()})),new l.Setting(n).setName("Heading scale").setDesc("Multiplier applied to all heading sizes.").addDropdown(o=>o.addOptions({"0.8":"Small (0.8\xD7)","0.88":"0.88\xD7","0.9":"Compact (0.9\xD7)","0.95":"0.95\xD7","1.0":"Normal (1.0\xD7)","1.05":"1.05\xD7","1.1":"Large (1.1\xD7)","1.2":"XLarge (1.2\xD7)"}).setValue(String(e.headingScale)).onChange(a=>{e.headingScale=parseFloat(a),this.markDirty()})),new l.Setting(n).setName("Colors").setHeading();let s=(o,a)=>new l.Setting(n).setName(o).addColorPicker(d=>d.setValue(e[a]).onChange(c=>{e[a]=c,this.markDirty()}));s("Accent color","accentColor"),s("Body text color","bodyColor"),s("Heading color","headingColor"),s("Page background","pageBackground"),s("Blockquote background","blockquoteBg"),s("Blockquote border","blockquoteBorderColor"),s("Table header background","tableHeaderBg"),s("Code background","codeBackground"),new l.Setting(n).setName("Heading Style").setHeading(),new l.Setting(n).setName("H1 bottom border").addToggle(o=>o.setValue(e.h1BorderBottom).onChange(a=>{e.h1BorderBottom=a,this.markDirty()})),new l.Setting(n).setName("H2 bottom border").addToggle(o=>o.setValue(e.h2BorderBottom).onChange(a=>{e.h2BorderBottom=a,this.markDirty()})),new l.Setting(n).setName("Center H1").addToggle(o=>o.setValue(e.centerH1).onChange(a=>{e.centerH1=a,this.markDirty()})),new l.Setting(n).setName("Tables").setHeading(),new l.Setting(n).setName("Striped rows").addToggle(o=>o.setValue(e.tableStriped).onChange(a=>{e.tableStriped=a,this.markDirty()})),new l.Setting(n).setName("Header & Footer").setHeading(),new l.Setting(n).setName("Show header").addToggle(o=>o.setValue(e.showHeader).onChange(a=>{e.showHeader=a,this.markDirty()})),new l.Setting(n).setName("Header text").setDesc("Appears on every page according to the chosen alignment.").addText(o=>o.setValue(e.headerText).onChange(a=>{e.headerText=a,this.markDirty()})),new l.Setting(n).setName("Header alignment").addDropdown(o=>o.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.headerAlignment).onChange(a=>{e.headerAlignment=a,this.markDirty()})),new l.Setting(n).setName("Show footer").addToggle(o=>o.setValue(e.showFooter).onChange(a=>{e.showFooter=a,this.markDirty()})),new l.Setting(n).setName("Footer border").setDesc("Show the separator line above the footer.").addToggle(o=>o.setValue(e.showFooterBorder).onChange(a=>{e.showFooterBorder=a,this.markDirty()})),new l.Setting(n).setName("Footer text").addText(o=>o.setValue(e.footerText).onChange(a=>{e.footerText=a,this.markDirty()})),new l.Setting(n).setName("Show page numbers").addToggle(o=>o.setValue(e.showPageNumbers).onChange(a=>{e.showPageNumbers=a,this.markDirty()})),new l.Setting(n).setName("Page number position").addDropdown(o=>o.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.pageNumberPosition).onChange(a=>{e.pageNumberPosition=a,this.markDirty()})),new l.Setting(n).setName("Page number start").setDesc("Number assigned to the first visible page number. Accepts any integer.").addText(o=>o.setValue(String(e.pageNumberStart)).onChange(a=>{let d=parseInt(a,10);e.pageNumberStart=isNaN(d)?1:d,this.markDirty()})),new l.Setting(n).setName("Header/footer on first page").setDesc("When off, page 1 has no header, footer, or page number. Numbering begins on page 2 using the start value.").addToggle(o=>o.setValue(e.showHeaderFooterOnFirstPage).onChange(a=>{e.showHeaderFooterOnFirstPage=a,this.markDirty()})),new l.Setting(n).setName("Behaviour").setHeading(),new l.Setting(n).setName("Hide frontmatter").setDesc("Strip the YAML frontmatter block (--- \u2026 ---) from the preview and exported PDF.").addToggle(o=>o.setValue(e.hideFrontmatter).onChange(a=>{e.hideFrontmatter=a,this.markDirty()})),new l.Setting(n).setName("Include file name as title").setDesc("Prepend the note's file name as an H1 heading at the top of the PDF. Mirrors Obsidian's built-in 'Include file name as title' export option.").addToggle(o=>o.setValue(e.includeFilenameAsTitle).onChange(a=>{e.includeFilenameAsTitle=a,this.markDirty()})),new l.Setting(n).setName("Auto page break before H1").addToggle(o=>o.setValue(e.autoBreakH1).onChange(a=>{e.autoBreakH1=a,this.markDirty()})),new l.Setting(n).setName("Auto page break before H2").addToggle(o=>o.setValue(e.autoBreakH2).onChange(a=>{e.autoBreakH2=a,this.markDirty()}))}};
