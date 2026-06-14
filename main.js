var I=Object.defineProperty;var ee=Object.getOwnPropertyDescriptor;var te=Object.getOwnPropertyNames;var oe=Object.prototype.hasOwnProperty;var ne=(t,o)=>{for(var e in o)I(t,e,{get:o[e],enumerable:!0})},re=(t,o,e,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of te(o))!oe.call(t,i)&&i!==e&&I(t,i,{get:()=>o[i],enumerable:!(r=ee(o,i))||r.enumerable});return t};var ae=t=>re(I({},"__esModule",{value:!0}),t);var Ie={};ne(Ie,{default:()=>O});module.exports=ae(Ie);var d=require("obsidian"),z={A4:{w:794,h:1123},A3:{w:1123,h:1587},Letter:{w:816,h:1056},Legal:{w:816,h:1344},A5:{w:559,h:794}},A={default:{name:"Default",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#7c6af7",bodyColor:"#1a1a2e",headingColor:"#0d0d1a",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"transparent",blockquoteBorderColor:"#7c6af7",codeBackground:"#f0f0f8",codeFontSize:.85,codeTheme:"github-light",tableHeaderBg:"#f0f0f8",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},minimal:{name:"Minimal",fontFamily:"'Helvetica Neue', Helvetica, sans-serif",fontSize:12,lineHeight:1.6,paragraphSpacing:.45,headingScale:.88,accentColor:"#333",bodyColor:"#222",headingColor:"#111",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f8f8f8",blockquoteBorderColor:"#ccc",codeBackground:"#f4f4f4",codeFontSize:.82,codeTheme:"none",tableHeaderBg:"#efefef",tableStriped:!1,pageBackground:"#ffffff",marginTop:16,marginBottom:16,marginLeft:20,marginRight:20},academic:{name:"Academic",fontFamily:"'Times New Roman', Times, serif",fontSize:12,lineHeight:2,paragraphSpacing:0,headingScale:.95,accentColor:"#1a3a6b",bodyColor:"#000",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#999",codeBackground:"#f9f9f9",codeFontSize:.88,codeTheme:"solarized-light",tableHeaderBg:"#e8e8e8",tableStriped:!1,pageBackground:"#ffffff",marginTop:25,marginBottom:25,marginLeft:30,marginRight:30},colorful:{name:"Colorful",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1.05,accentColor:"#e84393",bodyColor:"#1a1a2e",headingColor:"#2d0a4e",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#fdf0f8",blockquoteBorderColor:"#e84393",codeBackground:"#f0eaff",codeFontSize:.85,codeTheme:"dracula",tableHeaderBg:"#2d0a4e",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},modern:{name:"Modern",fontFamily:"Arial, sans-serif",fontSize:13,lineHeight:1.75,paragraphSpacing:.6,headingScale:1,accentColor:"#0070f3",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!1,h2BorderBottom:!1,centerH1:!1,blockquoteBg:"#f0f7ff",blockquoteBorderColor:"#0070f3",codeBackground:"#f1f5f9",codeFontSize:.85,codeTheme:"github-dark",tableHeaderBg:"#0070f3",tableStriped:!0,pageBackground:"#ffffff",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25},newspaper:{name:"Newspaper",fontFamily:"Georgia, serif",fontSize:12,lineHeight:1.7,paragraphSpacing:.4,headingScale:1.1,accentColor:"#111",bodyColor:"#111",headingColor:"#000",h1BorderBottom:!0,h2BorderBottom:!0,centerH1:!0,blockquoteBg:"transparent",blockquoteBorderColor:"#111",codeBackground:"#f4f4f4",codeFontSize:.82,codeTheme:"none",tableHeaderBg:"#111",tableStriped:!1,pageBackground:"#ffffff",marginTop:18,marginBottom:18,marginLeft:20,marginRight:20},dark:{name:"Dark",fontFamily:"Georgia, serif",fontSize:13,lineHeight:1.85,paragraphSpacing:.65,headingScale:1,accentColor:"#818cf8",bodyColor:"#d1d5db",headingColor:"#f1f5f9",h1BorderBottom:!1,h2BorderBottom:!0,centerH1:!1,blockquoteBg:"#1e293b",blockquoteBorderColor:"#818cf8",codeBackground:"#0f172a",codeFontSize:.85,codeTheme:"tokyo-night",tableHeaderBg:"#1e293b",tableStriped:!0,pageBackground:"#111827",marginTop:20,marginBottom:20,marginLeft:25,marginRight:25}},U={pageSize:"A4",orientation:"portrait",preset:"default",...A.default,headerText:"",footerText:"",showHeader:!0,showFooter:!0,showHeaderBorder:!1,showFooterBorder:!1,showPageNumbers:!0,pageNumberPosition:"right",pageNumberStart:1,showHeaderFooterOnFirstPage:!0,headerAlignment:"right",hideFrontmatter:!1,customFontName:"",autoBreakH1:!1,autoBreakH2:!1,includeFilenameAsTitle:!1,previewScale:.9,customPageWidth:210,customPageHeight:297},P=t=>t/25.4*96;function ie(t){return t.pageSize==="Custom"?{w:Math.max(1,Math.round(P(t.customPageWidth))),h:Math.max(1,Math.round(P(t.customPageHeight)))}:z[t.pageSize]??z.A4}function R(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function se(t){return t.replace(/<\/style/gi,"<\\/style")}var le=/[\u0590-\u08FF\uFB1D-\uFDFD\uFE70-\uFEFC]/g,de=/[A-Za-z\u0590-\u08FF\uFB1D-\uFDFD\uFE70-\uFEFC]/g;function ce(t){let o=(t.match(le)??[]).length,e=(t.match(de)??[]).length;return e>0&&o/e>.1}function pe(t){return t.replace(/\r\n/g,`
`)}function me(t){return t.replace(/^---[ \t]*\n[\s\S]*?\n---[ \t]*(\n|$)/,"")}function ge(t){return t.split(/^\/\/\/\s*$/m).map(o=>o.trim()).filter(Boolean)}async function he(t,o,e,r){let i=activeDocument.createElement("div");i.setCssStyles({position:"fixed",top:"0",left:"-99999px",visibility:"hidden",pointerEvents:"none"}),activeDocument.body.appendChild(i);try{await d.MarkdownRenderer.render(t,o,i,e,r),await fe(i)}finally{activeDocument.body.removeChild(i)}return ue(i),i}function K(t){return t.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-")}function ue(t){let o=new Map;t.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(e=>{let r=e.textContent||"",i=K(r);if(!i)return;let s=o.get(i)??0;o.set(i,s+1),e.id=s===0?i:`${i}-${s}`}),t.querySelectorAll("a").forEach(e=>{e.classList.remove("external-link");let r=e.getAttribute("data-href")??e.getAttribute("href");r?.startsWith("#")&&e.setAttribute("href","#"+K(r.slice(1)))}),t.querySelectorAll(".copy-code-button").forEach(e=>e.remove()),t.querySelectorAll(".callout").forEach(e=>{e.removeAttribute("data-callout-fold"),e.classList.remove("is-collapsed"),e.querySelectorAll(".callout-fold").forEach(r=>r.remove())}),t.querySelectorAll("style, script").forEach(e=>{e.closest("svg")||e.remove()})}async function fe(t){let o=Array.from(t.querySelectorAll(".mermaid"));if(o.length===0)return;let e=5e3;await Promise.all(o.map(r=>new Promise(i=>{if(r.querySelector("svg")){i();return}let s=window.setTimeout(()=>{l.disconnect(),i()},e),l=new MutationObserver(()=>{r.querySelector("svg")&&(window.clearTimeout(s),l.disconnect(),i())});l.observe(r,{childList:!0,subtree:!0})})))}var be={comment:["comment","prolog","doctype","cdata"],punctuation:["punctuation"],property:["property","tag","boolean","number","constant","symbol","deleted","attr-name"],selector:["selector","string","char","builtin","inserted","attr-value"],operator:["operator","entity","url"],keyword:["atrule","keyword","important"],function:["function","class-name"],regex:["regex","variable"]},_={none:{name:"None (plain)"},"github-light":{name:"GitHub Light",background:"#f6f8fa",text:"#24292e",tokens:{comment:"#6a737d",punctuation:"#24292e",property:"#005cc5",selector:"#032f62",operator:"#d73a49",keyword:"#d73a49",function:"#6f42c1",regex:"#032f62"}},"github-dark":{name:"GitHub Dark",background:"#0d1117",text:"#c9d1d9",tokens:{comment:"#8b949e",punctuation:"#c9d1d9",property:"#79c0ff",selector:"#a5d6ff",operator:"#ff7b72",keyword:"#ff7b72",function:"#d2a8ff",regex:"#a5d6ff"}},"atom-one-light":{name:"Atom One Light",background:"#fafafa",text:"#383a42",tokens:{comment:"#a0a1a7",punctuation:"#383a42",property:"#986801",selector:"#50a14f",operator:"#0184bc",keyword:"#a626a4",function:"#4078f2",regex:"#50a14f"}},"atom-one-dark":{name:"Atom One Dark",background:"#282c34",text:"#abb2bf",tokens:{comment:"#5c6370",punctuation:"#abb2bf",property:"#d19a66",selector:"#98c379",operator:"#56b6c2",keyword:"#c678dd",function:"#61afef",regex:"#98c379"}},monokai:{name:"Monokai",background:"#272822",text:"#f8f8f2",tokens:{comment:"#75715e",punctuation:"#f8f8f2",property:"#ae81ff",selector:"#e6db74",operator:"#f92672",keyword:"#f92672",function:"#a6e22e",regex:"#e6db74"}},dracula:{name:"Dracula",background:"#282a36",text:"#f8f8f2",tokens:{comment:"#6272a4",punctuation:"#f8f8f2",property:"#bd93f9",selector:"#f1fa8c",operator:"#ff79c6",keyword:"#ff79c6",function:"#50fa7b",regex:"#ff79c6"}},"tokyo-night":{name:"Tokyo Night",background:"#1a1b26",text:"#a9b1d6",tokens:{comment:"#565f89",punctuation:"#89ddff",property:"#ff9e64",selector:"#9ece6a",operator:"#89ddff",keyword:"#bb9af7",function:"#7aa2f7",regex:"#b4f9f8"}},"solarized-light":{name:"Solarized Light",background:"#fdf6e3",text:"#586e75",tokens:{comment:"#93a1a1",punctuation:"#586e75",property:"#cb4b16",selector:"#2aa198",operator:"#859900",keyword:"#859900",function:"#268bd2",regex:"#2aa198"}},"catppuccin-macchiato":{name:"Catppuccin Macchiato",background:"#24273a",text:"#cad3f5",tokens:{comment:"#939ab7",punctuation:"#b8c0e0",property:"#f5a97f",selector:"#a6da95",operator:"#91d7e3",keyword:"#c6a0f6",function:"#8aadf4",regex:"#f5bde6"}},"catppuccin-mocha":{name:"Catppuccin Mocha",background:"#1e1e2e",text:"#cdd6f4",tokens:{comment:"#9399b2",punctuation:"#bac2de",property:"#fab387",selector:"#a6e3a1",operator:"#89dceb",keyword:"#cba6f7",function:"#89b4fa",regex:"#f5c2e7"}}};function we(t){let o=_[t.codeTheme]??_.none,e=o.background??t.codeBackground,r=o.text??t.bodyColor,i=Object.entries(o.tokens??{}).map(([s,l])=>`${be[s].map(c=>`.mpdf-doc pre code .token.${c}`).join(", ")} { color: ${l};${s==="comment"?" font-style: italic;":""} }`).join(`
  `);return`
  .mpdf-doc pre {
    background: ${e};
    border-radius: 4px;
    padding: 10px 12px;
    margin: 0 0 ${t.paragraphSpacing}em;
    overflow: hidden;
  }
  .mpdf-doc pre code {
    font-family: 'Courier New', monospace;
    font-size: ${t.codeFontSize}em;
    color: ${r};
    white-space: pre-wrap;
    overflow-wrap: break-word;
    background: none;
    padding: 0;
  }
  ${i}`}function xe(t){let o=t.replace(/^#([\da-f])([\da-f])([\da-f])$/i,(l,a,n,c)=>`#${a}${a}${n}${n}${c}${c}`);if(!/^#[\da-f]{6}$/i.test(o))return 1;let e=l=>l<=.04045?l/12.92:((l+.055)/1.055)**2.4,r=e(parseInt(o.slice(1,3),16)/255),i=e(parseInt(o.slice(3,5),16)/255),s=e(parseInt(o.slice(5,7),16)/255);return .2126*r+.7152*i+.0722*s}function Z(t){return t.fontFamily==="__custom__"?t.customFontName.trim()||"inherit":t.fontFamily}function ye(t,o=!1){let e=t.headingScale,r=Z(t),i=xe(t.tableHeaderBg)<.35?"#fff":t.headingColor;return`
  .mpdf-doc {
    font-family: ${r};
    font-size: ${t.fontSize}px;
    line-height: ${t.lineHeight};
    color: ${t.bodyColor};
    box-sizing: border-box;
    ${o?"direction: rtl;":""}
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
  ${we(t)}
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
  `.trim()}function Ce(t){return{name:t.name,fontFamily:t.fontFamily,fontSize:t.fontSize,lineHeight:t.lineHeight,paragraphSpacing:t.paragraphSpacing,headingScale:t.headingScale,accentColor:t.accentColor,bodyColor:t.bodyColor,headingColor:t.headingColor,h1BorderBottom:t.h1BorderBottom,h2BorderBottom:t.h2BorderBottom,centerH1:t.centerH1,blockquoteBg:t.blockquoteBg,blockquoteBorderColor:t.blockquoteBorderColor,codeBackground:t.codeBackground,codeFontSize:t.codeFontSize,codeTheme:t.codeTheme,tableHeaderBg:t.tableHeaderBg,tableStriped:t.tableStriped,pageBackground:t.pageBackground,marginTop:t.marginTop,marginBottom:t.marginBottom,marginLeft:t.marginLeft,marginRight:t.marginRight}}function Te(){return Array.from(activeDocument.head.querySelectorAll("style[id^='MJX-']")).map(t=>t.textContent??"").join(`
`)}var Se=new Set(["P","LI","BLOCKQUOTE","TD","TH"]),ve=new Set(["P","DIV","SECTION","ARTICLE","ASIDE","NAV","HEADER","FOOTER","UL","OL","LI","TABLE","THEAD","TBODY","TFOOT","TR","TD","TH","PRE","BLOCKQUOTE","HR","IMG","H1","H2","H3","H4","H5","H6"]),Ee=new Set(["CODE","IMG","HR","H1","H2","H3","H4","H5","H6"]),ke=2;function He(t,o){o.empty();for(let e of t)o.appendChild(e.cloneNode(!0));return o.getBoundingClientRect().height}function Be(t,o,e){return r=>He([...t,r],o)<=e-ke}function Le(t){let o=activeDocument.createTreeWalker(t,NodeFilter.SHOW_TEXT);for(;o.nextNode();){let e=o.currentNode,r=(e.textContent??"").replace(/^\s+/,"");if(r!==e.textContent&&(e.textContent=r),r.length>0)break}}function $(t,o,e=!0){let r=activeDocument.createTreeWalker(t,NodeFilter.SHOW_TEXT),i=0,s=null,l=0;for(;r.nextNode();){let h=r.currentNode,u=h.textContent?.length??0;if(i+u>=o){s=h,l=o-i;break}i+=u}if(!s)return null;let a=activeDocument.createRange();a.selectNodeContents(t),a.setEnd(s,l);let n=activeDocument.createRange();n.selectNodeContents(t),n.setStart(s,l);let c=t.cloneNode(!1);c.appendChild(a.cloneContents());let p=t.cloneNode(!1);return p.appendChild(n.cloneContents()),e&&Le(p),[c,p]}function Fe(t){let o=[],e=/\s+/g,r;for(;r=e.exec(t);)r.index>0&&r.index<t.length&&o.push(r.index);return o}function Me(t,o,e){let r=t.textContent??"";if(r.length<2)return null;let i=Fe(r);if(i.length>0){let n=0,c=i.length-1,p=-1;for(;n<=c;){let h=Math.floor((n+c)/2),u=$(t,i[h]);if(!u){c=h-1;continue}o(u[0])?(p=h,n=h+1):c=h-1}if(p>=0)return $(t,i[p]);if(!e)return null}let s=1,l=r.length-1,a=0;for(;s<=l;){let n=Math.floor((s+l)/2),c=$(t,n);if(!c){l=n-1;continue}o(c[0])?(a=n,s=n+1):l=n-1}return a>0?$(t,a):null}function V(t,o,e){let r=t.cloneNode(!1);t.tagName==="OL"&&e!==void 0&&e>1&&(r.start=e);for(let i of o)r.appendChild(i.cloneNode(!0));return r}function De(t,o,e){let r=Array.from(t.children).filter(l=>l.tagName==="LI");if(r.length===0)return null;let i=t.tagName==="OL"?t.start??1:1,s=0;for(let l=0;l<r.length&&o(V(t,r.slice(0,l+1),i));l++)s=l+1;if(s<=0){if(!e||r.length<2)return null;s=1}return s>=r.length?null:[V(t,r.slice(0,s),i),V(t,r.slice(s),i+s)]}function W(t,o){let e=t.cloneNode(!1),r=t.querySelector("caption");r&&e.appendChild(r.cloneNode(!0));let i=t.querySelector("colgroup");i&&e.appendChild(i.cloneNode(!0)),t.tHead&&e.appendChild(t.tHead.cloneNode(!0));let s=activeDocument.createElement("tbody");for(let l of o)s.appendChild(l.cloneNode(!0));return e.appendChild(s),e}function Ne(t,o,e){let r=t.tBodies[0],i=r?Array.from(r.rows):Array.from(t.rows).filter(l=>l.parentElement?.tagName!=="THEAD");if(i.length===0)return null;let s=0;for(let l=0;l<i.length&&o(W(t,i.slice(0,l+1)));l++)s=l+1;if(s<=0){if(!e||i.length<2)return null;s=1}return s>=i.length?null:[W(t,i.slice(0,s)),W(t,i.slice(s))]}function Pe(t){let o=[],e=0;for(let r of t)e+=r.length+1,o.push(e);return o}function $e(t,o,e){let r=t.querySelector("code"),i=(r??t).textContent?.split(`
`)??[];if(i.length>1&&i[i.length-1]===""&&i.pop(),i.length<2)return null;let s=Pe(i),l=c=>{if(!r){let w=y=>{let C=t.cloneNode(!1);return C.textContent=y,C};return[w(i.slice(0,c).join(`
`)),w(i.slice(c).join(`
`))]}let p=$(r,s[c-1],!1);if(!p)return null;let h=t.cloneNode(!1);h.appendChild(p[0]);let u=t.cloneNode(!1);return u.appendChild(p[1]),[h,u]},a=null,n=0;for(let c=1;c<=i.length;c++){let p=l(c);if(!p||!o(p[0]))break;a=p,n=c}if(n<=0){if(!e)return null;a=l(1),n=1}return n>=i.length||!a?null:a}function Ae(t){if(!Se.has(t.tagName))return!1;for(let o of Array.from(t.childNodes))if(o.nodeType===Node.ELEMENT_NODE&&ve.has(o.tagName))return!1;return!0}function Re(t,o,e){return Ee.has(t.tagName)?null:t.tagName==="PRE"?$e(t,o,e):t.tagName==="TABLE"?Ne(t,o,e):t.tagName==="UL"||t.tagName==="OL"?De(t,o,e):Ae(t)?Me(t,o,e):null}function ze(t,o,e,r){let i=activeDocument.createElement("div");i.setCssStyles({position:"fixed",top:"0",left:"-99999px",width:`${o}px`,visibility:"hidden",pointerEvents:"none",zIndex:"-1"});let s=i.attachShadow({mode:"open"}),l=new CSSStyleSheet;l.replaceSync(r),s.adoptedStyleSheets=[l];let a=activeDocument.createElement("div");a.className="mpdf-doc";for(let p of Array.from(t.children))a.appendChild(p.cloneNode(!0));s.appendChild(a);let n=activeDocument.createElement("div");n.className="mpdf-doc",n.setCssStyles({position:"absolute",top:"0",left:"0",width:`${o}px`,visibility:"hidden"}),s.appendChild(n),activeDocument.body.appendChild(i);let c=[];try{let p=[],h=Array.from(a.children),u=0;for(;u<h.length;){let w=h[u],y=Be(p,n,e);if(y(w)){p.push(w.cloneNode(!0)),u++;continue}let C=p.length===0,E=Re(w,y,C);if(E){p.push(E[0]),c.push(p),p=[];let b=E[1];b.textContent?.trim()||b.children.length>0?h[u]=b:u++;continue}if(p.length>0){c.push(p),p=[];continue}p.push(w.cloneNode(!0)),c.push(p),p=[],u++}p.length>0&&c.push(p)}finally{activeDocument.body.removeChild(i)}return c.length>0?c:[[]]}function Oe(t,o){let e=t.length;return t.map((r,i)=>{let s=i+1,l=o.showHeaderFooterOnFirstPage||i>0,a=o.showHeaderFooterOnFirstPage?o.pageNumberStart+i:o.pageNumberStart+(i-1),n=o.showHeaderFooterOnFirstPage?o.pageNumberStart+e-1:o.pageNumberStart+e-2,c=`${a} / ${n}`,p="",h="",u="",w="",y="",C="";return l&&(o.showPageNumbers?o.pageNumberPosition==="center"?u=(o.footerText?o.footerText+" \u2014 ":"")+c:o.pageNumberPosition==="left"?(p=c,h=o.footerText??""):(p=o.footerText??"",h=c):p=o.footerText??"",o.headerText&&(o.headerAlignment==="center"?y=o.headerText:o.headerAlignment==="left"?w=o.headerText:C=o.headerText)),{pageNodes:r,pageNum:s,totalPages:e,headerLeft:w,headerCenter:y,headerRight:C,footerLeft:p,footerRight:h,footerCenter:u}})}function X(t,o,e,r){if(o){let i=activeDocument.createElement("span");i.className="mpdf-hf-center",i.textContent=o,t.appendChild(i)}else{let i=activeDocument.createElement("span");i.textContent=e,t.appendChild(i);let s=activeDocument.createElement("span");s.className="mpdf-hf-right",s.textContent=r,t.appendChild(s)}}function Y(t,o,e){return t?`<span style="flex:1;text-align:center;">${R(t)}</span>`:`<span>${R(o)}</span><span style="margin-left:auto;">${R(e)}</span>`}var O=class extends d.Plugin{activeModal=null;presetSnapshots={};async onload(){await this.loadSettings(),this.addCommand({id:"open-panel",name:"Open Panel",callback:()=>this.openModal()}),this.registerEvent(this.app.workspace.on("file-menu",(o,e)=>{!(e instanceof d.TFile)||e.extension!=="md"||o.addItem(r=>r.setTitle("Advanced PDF Export: Open Panel").setIcon("file-output").onClick(()=>this.openModal(e)))})),this.addSettingTab(new j(this.app,this))}onunload(){this.activeModal?.close()}openModal(o){this.activeModal&&this.activeModal.close(),new G(this.app,this,o).open()}async loadSettings(){let o=await this.loadData()??{};this.settings=Object.assign({},U,o),o.codeTheme===void 0&&(this.settings.codeTheme=A[this.settings.preset]?.codeTheme??U.codeTheme),this.presetSnapshots=o.presetSnapshots??{}}async saveSettings(){await this.saveData({...this.settings,presetSnapshots:this.presetSnapshots})}async saveSettingsAndRender(){await this.saveSettings(),this.activeModal?.render()}applyPreset(o,e=!1){let r=A[o];r&&(e?delete this.presetSnapshots[o]:this.presetSnapshots[this.settings.preset]=Ce(this.settings),this.settings.preset=o,Object.assign(this.settings,r,e?{}:this.presetSnapshots[o]??{}))}};function qe(t,o){if(o)return o;let e=t.workspace.getActiveViewOfType(d.MarkdownView)?.file;if(e)return e;let r=t.workspace.getActiveFile();if(r?.extension==="md")return r;let i=t.workspace.getMostRecentLeaf();return i?.view instanceof d.MarkdownView?i.view.file??null:null}var G=class t extends d.Modal{plugin;editorEl;previewEl;pageCountEl;noteTitleEl;renderBtn;exportBtn;loadingOverlayEl;renderComponent=new d.Component;initialFile;currentFile=null;renderToken=0;layoutCache=null;renderDebounceTimer=null;constructor(o,e,r){super(o),this.plugin=e,this.initialFile=r??null}async onOpen(){this.plugin.activeModal=this,this.renderComponent.load(),this.modalEl.addClass("mpdf-modal"),this.buildUI(this.contentEl);let o=qe(this.app,this.initialFile);if(o){this.currentFile=o;let e=await this.app.vault.read(o);this.editorEl.value=e,this.noteTitleEl.textContent=o.basename,this.noteTitleEl.title=o.path,this.render(!0)}}onClose(){this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.renderComponent.unload(),this.plugin.activeModal=null,this.currentFile=null,this.layoutCache=null}buildUI(o){let e=this.plugin.settings;this.buildTopbar(o.createEl("div",{cls:"mpdf-topbar"}),e);let r=o.createEl("div",{cls:"mpdf-main"}),i=r.createEl("div",{cls:"mpdf-editor-panel"});this.editorEl=i.createEl("textarea",{cls:"mpdf-editor"}),this.editorEl.placeholder=`Type or paste markdown here to preview and export as PDF.

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
| Cell  | Cell  |`;let s=r.createEl("div",{cls:"mpdf-preview-container"});this.previewEl=s.createEl("div",{cls:"mpdf-preview"}),this.loadingOverlayEl=s.createEl("div",{cls:"mpdf-loading-overlay"}),this.loadingOverlayEl.createEl("div",{cls:"mpdf-spinner"}),this.loadingOverlayEl.createEl("span",{cls:"mpdf-loading-text",text:"Rendering\u2026"}),this.editorEl.addEventListener("keydown",l=>{l.key==="Enter"&&(l.ctrlKey||l.metaKey)&&(l.preventDefault(),this.render(!0))})}buildTopbar(o,e){let r=o.createEl("div",{cls:"mpdf-topbar-left"});this.noteTitleEl=o.createEl("div",{cls:"mpdf-topbar-title",text:"\u2014"});let i=o.createEl("div",{cls:"mpdf-topbar-right"}),s=(f,g,m,x)=>{let T=r.createEl("div",{cls:"mpdf-ctrl"});T.createEl("span",{cls:"mpdf-ctrl-label",text:f});let S=T.createEl("select",{cls:"mpdf-select"});for(let[k,H]of Object.entries(g)){let F=S.createEl("option",{text:H,value:k});k===m&&(F.selected=!0)}S.addEventListener("change",()=>void x(S.value))},l={};Object.entries(A).forEach(([f,g])=>l[f]=g.name),s("Style",l,e.preset,async f=>{this.plugin.applyPreset(f),await this.plugin.saveSettingsAndRender()});let a={};Object.keys(z).forEach(f=>a[f]=f),a.Custom="Custom";let n=r.createEl("div",{cls:"mpdf-ctrl"});n.createEl("span",{cls:"mpdf-ctrl-label",text:"Size"});let c=n.createEl("select",{cls:"mpdf-select"});for(let[f,g]of Object.entries(a)){let m=c.createEl("option",{text:g,value:f});f===e.pageSize&&(m.selected=!0)}let p=r.createEl("div",{cls:"mpdf-ctrl"});p.toggleClass("mpdf-is-hidden",e.pageSize!=="Custom");let h=(f,g)=>{p.createEl("span",{cls:"mpdf-ctrl-label",text:f});let m=p.createEl("input",{cls:"mpdf-custom-size-input"});return m.type="number",m.min="10",m.step="1",m.value=String(g),m},u=h("W",e.customPageWidth),w=h("H",e.customPageHeight);p.createEl("span",{cls:"mpdf-ctrl-label",text:"mm"}),c.addEventListener("change",async()=>{this.plugin.settings.pageSize=c.value,p.toggleClass("mpdf-is-hidden",c.value!=="Custom"),await this.plugin.saveSettingsAndRender()});let y=async()=>{this.plugin.settings.customPageWidth=Math.max(10,parseFloat(u.value)||210),this.plugin.settings.customPageHeight=Math.max(10,parseFloat(w.value)||297),await this.plugin.saveSettingsAndRender()};u.addEventListener("change",()=>void y()),w.addEventListener("change",()=>void y()),s("Orient",{portrait:"Portrait",landscape:"Landscape"},e.orientation,async f=>{this.plugin.settings.orientation=f,await this.plugin.saveSettingsAndRender()});let C=r.createEl("div",{cls:"mpdf-ctrl"});C.createEl("span",{cls:"mpdf-ctrl-label",text:"Zoom"});let E=C.createEl("span",{cls:"mpdf-ctrl-label",text:Math.round(e.previewScale*100)+"%"}),b=C.createEl("input");b.type="range",b.min="0.35",b.max="1.0",b.step="0.05",b.value=String(e.previewScale),b.addClass("mpdf-zoom-slider"),b.addEventListener("input",()=>{let f=parseFloat(b.value);this.plugin.settings.previewScale=f,E.textContent=Math.round(f*100)+"%",this.plugin.saveSettings().then(()=>{this.renderPreviewOnly()})});let L=r.createEl("button",{cls:"mpdf-btn",text:"Insert Page Break"});L.title="Insert page break (///)",L.addEventListener("click",()=>this.insertAtCursor(`
///
`)),this.pageCountEl=i.createEl("span",{cls:"mpdf-page-count",text:"\u2014 pages"});let M=i.createEl("button",{cls:"mpdf-btn mpdf-btn-icon"});M.setAttr("aria-label","Open Advanced PDF Export settings"),(0,d.setIcon)(M,"settings"),M.addEventListener("click",()=>{let f=this.app.setting;f?.open?.(),f?.openTabById?.("advanced-pdf-export")}),this.renderBtn=i.createEl("button",{cls:"mpdf-btn",text:"\u27F3 Render PDF"}),this.renderBtn.title="Render preview (Ctrl+Enter)",this.renderBtn.addEventListener("click",()=>this.render(!0)),this.exportBtn=i.createEl("button",{cls:"mpdf-btn mpdf-btn-primary",text:"\u2B07 Export PDF"}),this.exportBtn.addEventListener("click",()=>void this.exportPDF())}insertAtCursor(o){let e=this.editorEl,r=e.selectionStart,i=e.selectionEnd;e.value=e.value.slice(0,r)+o+e.value.slice(i),e.selectionStart=e.selectionEnd=r+o.length,e.focus()}render(o=!1){let e=++this.renderToken;this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null),this.showLoading();let r=()=>this.doRender(e).catch(i=>{let s=i instanceof Error?i.message:String(i);console.error("[advanced-pdf-export] render error:",i),this.hideLoading(),new d.Notice("Render error: "+s)});o?window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>void r())):this.renderDebounceTimer=window.setTimeout(()=>{this.renderDebounceTimer=null,window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>void r()))},150)}static insertAutoBreaks(o,e,r){if(!e&&!r)return o;let i=o.split(`
`),s=[],l=!1,a="";for(let n of i){if(l){let c=n.match(/^(`{3,}|~{3,})\s*$/);c&&c[1][0]===a[0]&&c[1].length>=a.length&&(l=!1,a="")}else{let c=n.match(/^(`{3,}|~{3,})/);c?(l=!0,a=c[1]):s.length>0&&(e&&/^# /.test(n)||r&&/^## /.test(n))&&s.push("///")}s.push(n)}return s.join(`
`)}async doRender(o){let e=this.plugin.settings,r=pe(this.editorEl.value);e.hideFrontmatter&&(r=me(r)),e.includeFilenameAsTitle&&this.currentFile&&(r=`# ${this.currentFile.basename}

${r}`),r=t.insertAutoBreaks(r,e.autoBreakH1,e.autoBreakH2);let i=ge(r),s=ie(e),l=e.orientation==="landscape"?s.h:s.w,a=e.orientation==="landscape"?s.w:s.h,n=P(e.marginTop),c=P(e.marginBottom),p=P(e.marginLeft),h=P(e.marginRight),u=e.showFooter&&(e.showPageNumbers||e.footerText)?28:0,w=e.showHeader&&e.headerText?20:0,y=Math.max(1,l-p-h),C=Math.max(1,a-n-c-u-w),E=ce(this.editorEl.value),b=ye(e,E),L=this.currentFile?.path??"pdf-export",M=await Promise.all(i.map(T=>he(this.app,T,L,this.renderComponent)));if(o!==this.renderToken)return;let f=Te(),g=f?`${f}
${b}`:b,m=[];for(let T of M)m.push(...ze(T,y,C,g));let x=Oe(m,e);this.layoutCache={layouts:x,pw:l,ph:a,mTop:n,mLeft:p,mRight:h,footerH:u,headerH:w,contentW:y,contentH:C,docCSS:g,fontFamily:Z(e),accentColor:e.accentColor,pageBackground:e.pageBackground,isRTL:E},this.drawPreview(this.layoutCache,e.previewScale),this.pageCountEl.textContent=`${x.length} page${x.length!==1?"s":""}`,this.hideLoading()}renderPreviewOnly(){this.layoutCache&&this.drawPreview(this.layoutCache,this.plugin.settings.previewScale)}showLoading(){this.loadingOverlayEl.addClass("mpdf-is-active"),this.renderBtn.disabled=!0,this.renderBtn.textContent="Rendering\u2026"}hideLoading(){this.loadingOverlayEl.removeClass("mpdf-is-active"),this.renderBtn.disabled=!1,this.renderBtn.textContent="\u27F3 Render PDF"}drawPreview(o,e){let{layouts:r,pw:i,ph:s,mTop:l,mLeft:a,mRight:n,footerH:c,headerH:p,contentW:h,docCSS:u,fontFamily:w,accentColor:y,pageBackground:C,isRTL:E}=o,b=this.plugin.settings;this.previewEl.empty();let L=new Map;r.forEach((m,x)=>{for(let T of m.pageNodes)T.querySelectorAll("[id]").forEach(S=>{L.has(S.id)||L.set(S.id,x)}),T.id&&!L.has(T.id)&&L.set(T.id,x)});let M=[],f=`
      :host {
        display: block;
        width: ${i}px;
        height: ${s}px;
        background: ${C};
        box-shadow: 0 2px 8px rgba(0,0,0,.30), 0 8px 32px rgba(0,0,0,.25);
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
      }
      *, *::before, *::after { box-sizing: border-box; }
      .mpdf-hf-center { flex: 1; text-align: center; }
      .mpdf-hf-right { margin-left: auto; }
      ${u}
    `,g=new CSSStyleSheet;g.replaceSync(f);for(let m of r){let x=Math.round(i*e),T=Math.round(s*e),S=this.previewEl.createEl("div",{cls:"mpdf-page-wrap"});S.setCssStyles({width:`${x}px`,height:`${T}px`}),S.createEl("div",{cls:"mpdf-page-label",text:`Page ${m.pageNum} of ${m.totalPages}`}),M.push(S);let k=S.createEl("div",{cls:"mpdf-page-scale"});k.setCssStyles({width:`${x}px`,height:`${T}px`});let H=activeDocument.createElement("div");H.addClass("mpdf-shadow-host"),H.setCssStyles({width:`${i}px`,height:`${s}px`,transform:`scale(${e})`}),k.appendChild(H);let F=H.attachShadow({mode:"open"});if(F.adoptedStyleSheets=[g],b.showHeader&&(m.headerLeft||m.headerCenter||m.headerRight)){let v=activeDocument.createElement("div");v.setCssStyles({position:"absolute",top:`${l*.4}px`,left:`${a}px`,right:`${n}px`,display:"flex",alignItems:"center",fontSize:"9px",color:"#999",fontFamily:w,whiteSpace:"nowrap",...b.showHeaderBorder?{borderBottom:`0.5px solid ${y}33`}:{}}),X(v,m.headerCenter,m.headerLeft,m.headerRight),F.appendChild(v)}let B=activeDocument.createElement("div");B.className="mpdf-doc",E&&B.setAttribute("dir","rtl"),B.setCssStyles({position:"absolute",top:`${l+p}px`,left:`${a}px`,width:`${h}px`});for(let v of m.pageNodes)B.appendChild(v.cloneNode(!0));if(F.appendChild(B),B.querySelectorAll("a[href^='#']").forEach(v=>{let J=decodeURIComponent(v.getAttribute("href").slice(1)),q=L.get(J);q!==void 0&&(v.title=`Go to page ${q+1}`,v.addEventListener("click",Q=>{Q.preventDefault(),M[q]?.scrollIntoView({behavior:"smooth",block:"start"})}))}),b.showFooter&&(m.footerLeft||m.footerRight||m.footerCenter)){let v=activeDocument.createElement("div");v.setCssStyles({position:"absolute",bottom:"0",left:"0",right:"0",height:`${c}px`,display:"flex",alignItems:"center",...b.showFooterBorder?{borderTop:`0.5px solid ${y}33`}:{},padding:`0 ${n}px 0 ${a}px`,fontSize:"9px",color:"#aaa",fontFamily:w}),X(v,m.footerCenter,m.footerLeft,m.footerRight),F.appendChild(v)}}}async exportPDF(){let o=this.plugin.settings;this.exportBtn.disabled=!0,this.exportBtn.textContent="\u2B07 Exporting\u2026";let e=()=>{this.exportBtn.disabled=!1,this.exportBtn.textContent="\u2B07 Export PDF"};if(!this.layoutCache){this.renderDebounceTimer!==null&&(window.clearTimeout(this.renderDebounceTimer),this.renderDebounceTimer=null);let g=++this.renderToken;this.showLoading();try{await this.doRender(g)}catch(m){let x=m instanceof Error?m.message:String(m);new d.Notice("Render error: "+x),this.hideLoading(),e();return}}let r=this.layoutCache;if(!r||r.layouts.length===0){new d.Notice("Nothing to export."),e();return}let{layouts:i,pw:s,ph:l,mTop:a,mLeft:n,mRight:c,footerH:p,headerH:h,contentW:u,docCSS:w,fontFamily:y,accentColor:C,pageBackground:E,isRTL:b}=r,L=i.map(g=>{let m=g.pageNodes.map(B=>{let D=B.cloneNode(!0);return D.querySelectorAll("style, script").forEach(v=>{v.closest("svg")||v.remove()}),D.outerHTML}).join(`
`),x=o.showHeader&&(g.headerLeft||g.headerCenter||g.headerRight),T=o.showHeaderBorder?`border-bottom:0.5px solid ${C}33;`:"",S=x?`<div style="position:absolute;top:${a*.4}px;left:${n}px;right:${c}px;display:flex;align-items:center;font-size:9px;color:#999;font-family:${y};white-space:nowrap;${T}">${Y(g.headerCenter,g.headerLeft,g.headerRight)}</div>`:"",k=o.showFooter&&(g.footerLeft||g.footerRight||g.footerCenter),H=o.showFooterBorder?`border-top:0.5px solid ${C}33;`:"",F=k?`<div style="position:absolute;bottom:0;left:0;right:0;height:${p}px;display:flex;align-items:center;${H}padding:0 ${c}px 0 ${n}px;font-size:9px;color:#aaa;font-family:${y};">${Y(g.footerCenter,g.footerLeft,g.footerRight)}</div>`:"",N=`<div class="mpdf-doc"${b?' dir="rtl"':""} style="position:absolute;top:${a+h}px;left:${n}px;width:${u}px;">${m}</div>`;return`<div class="mpdf-export-page">${S}${N}${F}</div>`}),M=`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      @page { size: ${s}px ${l}px; margin: 0; }
      html, body { margin: 0; padding: 0; background: ${E}; }
      .mpdf-export-page {
        position: relative;
        width: ${s}px; height: ${l}px;
        overflow: hidden;
        background: ${E};
        page-break-after: always; break-after: page;
      }
      .mpdf-export-page:last-child { page-break-after: avoid; break-after: avoid; }
      ${w}
    `,f=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${R(this.currentFile?.basename??"Export")}</title>
<style>${se(M)}</style>
</head>
<body>
${L.join(`
`)}
</body>
</html>`;try{let g=window,m=g.require("@electron/remote");if(!m?.dialog)throw new Error("no remote");let x=await m.dialog.showSaveDialog({title:"Save PDF",defaultPath:(this.currentFile?.basename??"export")+".pdf",filters:[{name:"PDF",extensions:["pdf"]}]});if(x.canceled||!x.filePath){e();return}new d.Notice("Generating PDF\u2026");let T=new Blob([f],{type:"text/html"}),S=URL.createObjectURL(T),k=new m.BrowserWindow({show:!1,webPreferences:{nodeIntegration:!1}});k.loadURL(S);let H=!1,F=()=>{URL.revokeObjectURL(S),k.close(),e()};k.webContents.once("did-fail-load",(N,B,D)=>{H||(H=!0,new d.Notice("PDF load error: "+D),F())}),k.webContents.once("did-finish-load",()=>{if(H)return;H=!0;let N=o.pageSize==="Custom";k.webContents.printToPDF({pageSize:N?"A4":o.pageSize,landscape:!N&&o.orientation==="landscape",preferCSSPageSize:N,printBackground:!0,margins:{marginType:"none"}}).then(B=>{g.require("fs").writeFile(x.filePath,B,D=>{D?new d.Notice("Error saving PDF: "+D.message):new d.Notice("\u2713 PDF saved: "+x.filePath),F()})}).catch(B=>{new d.Notice("PDF render error: "+B.message),F()})})}catch{new d.Notice("Advanced PDF export requires the Obsidian desktop app."),e()}}},j=class extends d.PluginSettingTab{plugin;dirty=!1;constructor(o,e){super(o,e),this.plugin=e}display(){this.dirty=!1,this.buildSettings()}hide(){this.dirty&&(this.dirty=!1,this.plugin.activeModal?.render(!0))}async markDirty(){this.dirty=!0,await this.plugin.saveSettings()}buildSettings(){let{containerEl:o}=this;o.empty();let e=this.plugin.settings;new d.Setting(o).setName("Style Preset").setHeading(),new d.Setting(o).setName("Preset").setDesc("Pick a preset to configure the overall document style. Fine-tune any setting below.").addDropdown(a=>{Object.entries(A).forEach(([n,c])=>{a.addOption(n,c.name)}),a.setValue(e.preset).onChange(n=>{this.plugin.applyPreset(n),this.markDirty().then(()=>{this.buildSettings()})})}).addButton(a=>a.setButtonText("Reset Preset").setTooltip("Reset current preset to its default values").onClick(()=>{this.plugin.applyPreset(e.preset,!0),this.markDirty().then(()=>{this.buildSettings()})})),new d.Setting(o).setName("Page").setHeading();let r;new d.Setting(o).setName("Page size").addDropdown(a=>{Object.keys(z).forEach(n=>{a.addOption(n,n)}),a.addOption("Custom","Custom\u2026"),a.setValue(e.pageSize).onChange(n=>{e.pageSize=n,r.settingEl.toggleClass("mpdf-is-hidden",n!=="Custom"),this.markDirty()})}),r=new d.Setting(o).setName("Custom page size (mm)").setDesc("Width \xD7 Height in millimetres.").addText(a=>a.setPlaceholder("Width").setValue(String(e.customPageWidth)).onChange(n=>{e.customPageWidth=Math.max(1,parseFloat(n)||210),this.markDirty()})).addText(a=>a.setPlaceholder("Height").setValue(String(e.customPageHeight)).onChange(n=>{e.customPageHeight=Math.max(1,parseFloat(n)||297),this.markDirty()})),r.settingEl.toggleClass("mpdf-is-hidden",e.pageSize!=="Custom"),new d.Setting(o).setName("Orientation").addDropdown(a=>a.addOptions({portrait:"Portrait",landscape:"Landscape"}).setValue(e.orientation).onChange(n=>{e.orientation=n,this.markDirty()})),new d.Setting(o).setName("Margins (mm)").setHeading();let i=(a,n)=>new d.Setting(o).setName(a).addText(c=>c.setValue(String(e[n])).onChange(p=>{e[n]=parseInt(p)||0,this.markDirty()}));i("Top","marginTop"),i("Bottom","marginBottom"),i("Left","marginLeft"),i("Right","marginRight"),new d.Setting(o).setName("Typography").setHeading();let s;new d.Setting(o).setName("Font family").addDropdown(a=>a.addOptions({"Georgia, serif":"Georgia (Serif)","'Times New Roman', Times, serif":"Times New Roman","'Palatino Linotype', Palatino, serif":"Palatino","Arial, sans-serif":"Arial","'Helvetica Neue', Helvetica, sans-serif":"Helvetica","'Trebuchet MS', sans-serif":"Trebuchet","'Courier New', monospace":"Courier New",__custom__:"Custom\u2026"}).setValue(e.fontFamily).onChange(n=>{e.fontFamily=n,s.settingEl.toggleClass("mpdf-is-hidden",n!=="__custom__"),this.markDirty()})),s=new d.Setting(o).setName("Custom font name").setDesc('CSS font-family value \u2014 e.g. "Inter, sans-serif". The font must be installed on your system.').addText(a=>a.setPlaceholder("e.g. Inter, sans-serif").setValue(e.customFontName).onChange(n=>{e.customFontName=n,this.markDirty()})),s.settingEl.toggleClass("mpdf-is-hidden",e.fontFamily!=="__custom__"),new d.Setting(o).setName("Font size (px)").addDropdown(a=>{["10","11","12","13","14","15","16"].forEach(n=>{a.addOption(n,n+"px")}),a.setValue(String(e.fontSize)).onChange(n=>{e.fontSize=parseInt(n),this.markDirty()})}),new d.Setting(o).setName("Code font size").addDropdown(a=>a.addOptions({"0.75":"0.75em","0.80":"0.80em","0.82":"0.82em","0.85":"0.85em","0.88":"0.88em","0.90":"0.90em","1.0":"1.00em"}).setValue(String(e.codeFontSize)).onChange(n=>{e.codeFontSize=parseFloat(n),this.markDirty()})),new d.Setting(o).setName("Line height").addDropdown(a=>a.addOptions({"1.4":"Tight (1.4)","1.6":"Compact (1.6)","1.75":"Normal (1.75)","1.85":"Relaxed (1.85)","2.0":"Double (2.0)"}).setValue(String(e.lineHeight)).onChange(n=>{e.lineHeight=parseFloat(n),this.markDirty()})),new d.Setting(o).setName("Paragraph spacing").addDropdown(a=>a.addOptions({0:"None","0.3":"Tight (0.3em)","0.5":"Normal (0.5em)","0.65":"Relaxed (0.65em)","1.0":"Wide (1em)"}).setValue(String(e.paragraphSpacing)).onChange(n=>{e.paragraphSpacing=parseFloat(n),this.markDirty()})),new d.Setting(o).setName("Heading scale").setDesc("Multiplier applied to all heading sizes.").addDropdown(a=>a.addOptions({"0.8":"Small (0.8\xD7)","0.88":"0.88\xD7","0.9":"Compact (0.9\xD7)","0.95":"0.95\xD7","1.0":"Normal (1.0\xD7)","1.05":"1.05\xD7","1.1":"Large (1.1\xD7)","1.2":"XLarge (1.2\xD7)"}).setValue(String(e.headingScale)).onChange(n=>{e.headingScale=parseFloat(n),this.markDirty()})),new d.Setting(o).setName("Colors").setHeading();let l=(a,n)=>new d.Setting(o).setName(a).addColorPicker(c=>c.setValue(e[n]).onChange(p=>{e[n]=p,this.markDirty()}));l("Accent color","accentColor"),l("Body text color","bodyColor"),l("Heading color","headingColor"),l("Page background","pageBackground"),l("Blockquote background","blockquoteBg"),l("Blockquote border","blockquoteBorderColor"),l("Table header background","tableHeaderBg"),l("Code background","codeBackground"),new d.Setting(o).setName("Code syntax theme").setDesc('Independent of your Obsidian theme. "None" uses the body text color and code background above with no highlighting.').addDropdown(a=>{let n={};for(let[c,p]of Object.entries(_))n[c]=p.name;a.addOptions(n).setValue(e.codeTheme).onChange(c=>{e.codeTheme=c,this.markDirty()})}),new d.Setting(o).setName("Heading Style").setHeading(),new d.Setting(o).setName("H1 bottom border").addToggle(a=>a.setValue(e.h1BorderBottom).onChange(n=>{e.h1BorderBottom=n,this.markDirty()})),new d.Setting(o).setName("H2 bottom border").addToggle(a=>a.setValue(e.h2BorderBottom).onChange(n=>{e.h2BorderBottom=n,this.markDirty()})),new d.Setting(o).setName("Center H1").addToggle(a=>a.setValue(e.centerH1).onChange(n=>{e.centerH1=n,this.markDirty()})),new d.Setting(o).setName("Tables").setHeading(),new d.Setting(o).setName("Striped rows").addToggle(a=>a.setValue(e.tableStriped).onChange(n=>{e.tableStriped=n,this.markDirty()})),new d.Setting(o).setName("Header & Footer").setHeading(),new d.Setting(o).setName("Show header").addToggle(a=>a.setValue(e.showHeader).onChange(n=>{e.showHeader=n,this.markDirty()})),new d.Setting(o).setName("Header text").setDesc("Appears on every page according to the chosen alignment.").addText(a=>a.setValue(e.headerText).onChange(n=>{e.headerText=n,this.markDirty()})),new d.Setting(o).setName("Header alignment").addDropdown(a=>a.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.headerAlignment).onChange(n=>{e.headerAlignment=n,this.markDirty()})),new d.Setting(o).setName("Header border").setDesc("Show the separator line below the header.").addToggle(a=>a.setValue(e.showHeaderBorder).onChange(n=>{e.showHeaderBorder=n,this.markDirty()})),new d.Setting(o).setName("Show footer").addToggle(a=>a.setValue(e.showFooter).onChange(n=>{e.showFooter=n,this.markDirty()})),new d.Setting(o).setName("Footer border").setDesc("Show the separator line above the footer.").addToggle(a=>a.setValue(e.showFooterBorder).onChange(n=>{e.showFooterBorder=n,this.markDirty()})),new d.Setting(o).setName("Footer text").addText(a=>a.setValue(e.footerText).onChange(n=>{e.footerText=n,this.markDirty()})),new d.Setting(o).setName("Show page numbers").addToggle(a=>a.setValue(e.showPageNumbers).onChange(n=>{e.showPageNumbers=n,this.markDirty()})),new d.Setting(o).setName("Page number position").addDropdown(a=>a.addOptions({left:"Left",center:"Center",right:"Right"}).setValue(e.pageNumberPosition).onChange(n=>{e.pageNumberPosition=n,this.markDirty()})),new d.Setting(o).setName("Page number start").setDesc("Number assigned to the first visible page number. Accepts any integer.").addText(a=>a.setValue(String(e.pageNumberStart)).onChange(n=>{let c=parseInt(n,10);e.pageNumberStart=isNaN(c)?1:c,this.markDirty()})),new d.Setting(o).setName("Header/footer on first page").setDesc("When off, page 1 has no header, footer, or page number. Numbering begins on page 2 using the start value.").addToggle(a=>a.setValue(e.showHeaderFooterOnFirstPage).onChange(n=>{e.showHeaderFooterOnFirstPage=n,this.markDirty()})),new d.Setting(o).setName("Behaviour").setHeading(),new d.Setting(o).setName("Hide frontmatter").setDesc("Strip the YAML frontmatter block (--- \u2026 ---) from the preview and exported PDF.").addToggle(a=>a.setValue(e.hideFrontmatter).onChange(n=>{e.hideFrontmatter=n,this.markDirty()})),new d.Setting(o).setName("Include file name as title").setDesc("Prepend the note's file name as an H1 heading at the top of the PDF.").addToggle(a=>a.setValue(e.includeFilenameAsTitle).onChange(n=>{e.includeFilenameAsTitle=n,this.markDirty()})),new d.Setting(o).setName("Auto page break before H1").addToggle(a=>a.setValue(e.autoBreakH1).onChange(n=>{e.autoBreakH1=n,this.markDirty()})),new d.Setting(o).setName("Auto page break before H2").addToggle(a=>a.setValue(e.autoBreakH2).onChange(n=>{e.autoBreakH2=n,this.markDirty()}))}};
