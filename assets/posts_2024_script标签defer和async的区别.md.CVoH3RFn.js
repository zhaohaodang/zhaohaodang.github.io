import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.BCqbIoqo.js";const p="/assets/01.BpUD9lo6.png",e="/assets/02.KbwP_sfP.png",_=JSON.parse('{"title":"script标签defer和async的区别","description":"","frontmatter":{"title":"script标签defer和async的区别","date":"2024-11-27T11:11:02.000Z","tag":"javascript"},"headers":[],"relativePath":"posts/2024/script标签defer和async的区别.md","filePath":"posts/2024/script标签defer和async的区别.md","lastUpdated":1744602214000}'),n={name:"posts/2024/script标签defer和async的区别.md"},h=t('<p><code>defer</code> 和 <code>async</code> 是 HTML <code>&lt;script&gt;</code> 标签的两个属性，用于避免阻塞 HTML 的解析，主要区别是脚本执行的时机不一样。</p><hr><p><code>defer</code>属性的脚本，会和 HTML 并行加载，但是会等 HTML 解析完成后，才会执行。</p><p><img src="'+p+`" alt="概念图"></p><p>多个<code>defer</code>属性的脚本，会按顺序执行。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// script1.js 会在 script2.js 之前执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script1.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script2.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><code>async</code>属性的脚本就比较“随性了”，它也会和 HTML 并行加载，但是脚本加载完就会立即执行。</p><p><img src="`+e+`" alt="概念图"></p><p>多个<code>async</code>属性的脚本，不会按顺序执行，谁先加载完，谁先执行。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//  script1.js 和 script2.js 的执行顺序取决于谁先加载完</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script1.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script2.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><code>defer</code>：适用于需要依赖 DOM 的脚本。</p><p><code>async</code>：适合不依赖其他脚本，也不依赖 DOM 的独立逻辑，例如第三方工具或分析代码。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>async</code>和<code>defer</code>属性都仅适用于外部脚本，如果 script 标签没有 src 属性，会忽略 async、defer 属性。</p></div>`,13),l=[h];function k(c,r,d,o,g,E){return a(),i("div",null,l)}const F=s(n,[["render",k]]);export{_ as __pageData,F as default};
