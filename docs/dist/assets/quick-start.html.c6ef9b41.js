import{_ as t,k as e,b as p,c as l,e as a,q as c,F as o,j as n,x as i}from"./app.52adecd0.js";const r={},u=n('<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h1><img src="https://img.shields.io/github/license/yue1123/img-previewer?style=flat-square" alt="GitHub license"><img src="https://img.shields.io/github/package-json/v/yue1123/vue3-baidu-map-gl?color=f90&amp;style=flat-square" alt="" style="margin-left:10px;"><p>\u57FA\u4E8E\u767E\u5EA6\u5730\u56FEJavaScript GL\u7248API\u5C01\u88C5\u7684Vue3\u7EC4\u4EF6\u5E93\u3002\u63D0\u4F9B\u4E86\u5927\u90E8\u5206\u5E38\u7528\u7684\u7EC4\u4EF6,\u5982\u679C\u8FD9\u4E9B\u7EC4\u4EF6\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42,\u4F60\u4E5F\u53EF\u4EE5\u6839\u636Ehooks\u63D0\u4F9B\u7684\u63A5\u53E3\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002</p><h2 id="\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a> \u2728 \u7279\u6027</h2><ul><li>\u81EA\u52A8\u52A0\u8F7D\u767E\u5EA6\u5730\u56FE SDK,\u4F60\u9700\u5173\u6CE8\u7EC4\u4EF6\u4F7F\u7528\u3002</li><li>\u4F7F\u7528 Typescript \u7F16\u5199\uFF0C\u5B8C\u5584\u5EA6\u7EC4\u4EF6\u4EE3\u7801\u63D0\u793A\u3002</li><li>\u4E0D\u4F9D\u8D56\u4EFB\u4F55\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u3002</li><li>\u7EC4\u4EF6\u540C\u65F6\u517C\u5BB9\u5927\u9A7C\u5CF0\u547D\u540D(CamelCase)\u548C\u77ED\u6A2A\u7EBF\u547D\u540D(kebab-case)</li></ul><h2 id="\u7533\u8BF7ak" tabindex="-1"><a class="header-anchor" href="#\u7533\u8BF7ak" aria-hidden="true">#</a> \u7533\u8BF7ak</h2><p>\u4F7F\u7528\u767E\u5EA6\u5730\u56FE\u524D,\u9700\u8981\u5148\u5728\u5F00\u53D1\u8005\u540E\u53F0\u7533\u8BF7ak,\u7136\u540E\u5728\u9879\u76EE\u4E2D\u914D\u7F6Eak</p>',8),k=a("p",null,"\u7533\u8BF7\u5F00\u53D1\u8005ak:",-1),d={href:"https://lbsyun.baidu.com/apiconsole/key?application=key",target:"_blank",rel:"noopener noreferrer"},b=i("https://lbsyun.baidu.com/apiconsole/key?application=key"),m=n(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u63A8\u8350 pnpm \u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i vue3-baidu-map-gl
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> vue3-baidu-map-gl
<span class="token comment"># or</span>
<span class="token function">pnpm</span> <span class="token function">add</span> vue3-baidu-map-gl
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5F15\u5165\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a> \u5F15\u5165\u7EC4\u4EF6</h2><p>\u4F60\u53EF\u4EE5\u5F15\u5165\u6574\u4E2AvueBaiduMap\u7EC4\u4EF6\u5E93,\u6216\u8005\u6839\u636E\u9700\u8981\u5F15\u5165\u90E8\u5206\u7EC4\u4EF6.\u6211\u4EEC\u5148\u4ECB\u7ECD\u5982\u4F55\u5F15\u5165\u6574\u4E2A\u7EC4\u4EF6\u5E93</p><h3 id="\u5B8C\u6574\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u5F15\u5165" aria-hidden="true">#</a> \u5B8C\u6574\u5F15\u5165</h3><p>\u5728main.ts(\u6216\u662Fmain.js)\u4E2D\u5F15\u5165</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> baiduMapInit <span class="token keyword">from</span> <span class="token string">&#39;vue3-baidu-map-gl&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>baiduMapInit<span class="token punctuation">,</span> <span class="token punctuation">{</span> ak<span class="token operator">:</span> <span class="token string">&#39;\u767E\u5EA6\u5730\u56FEak&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u6309\u9700\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a> \u6309\u9700\u5F15\u5165</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span>
		<span class="token attr-name">ak</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u767E\u5EA6\u5730\u56FEak<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">mapType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BMAP_NORMAL_MAP<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">:enable-keyboard</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
		<span class="token attr-name">enableDragging</span>
		<span class="token attr-name">:minZoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>
	<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Map<span class="token punctuation">,</span> Control<span class="token punctuation">,</span> Scale<span class="token punctuation">,</span> Zoom<span class="token punctuation">,</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-baidu-map-gl&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,10);function h(g,v){const s=e("ExternalLinkIcon");return p(),l(o,null,[u,a("blockquote",null,[k,a("p",null,[a("a",d,[b,c(s)])])]),m],64)}var _=t(r,[["render",h],["__file","quick-start.html.vue"]]);export{_ as default};