import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.BCqbIoqo.js";const c=JSON.parse('{"title":"vuepress如何实现草稿功能","description":"","frontmatter":{"title":"vuepress如何实现草稿功能","date":"2023-12-12T10:55:47.000Z","tag":"VuePress"},"headers":[],"relativePath":"posts/2023/vuepress如何实现草稿功能.md","filePath":"posts/2023/vuepress如何实现草稿功能.md","lastUpdated":1744602214000}'),p={name:"posts/2023/vuepress如何实现草稿功能.md"},n=t(`<p>笔者最近在写一些文章，但是没有写完，还处于草稿状态，希望这些草稿不要被打包，不要被发布出去。</p><p>遗憾的是， vuewpress 默认会把 _post 目录下的文章都打包发布出去，笔者翻了翻 vuepress 的官方文档，没有找到和草稿有关的功能。</p><p>幸运地是，笔者在 vuewpress 配置中发现，可以修改 patterns 属性，非常简单地实现出一个草稿功能。</p><p>首先呢，先了解下<a href="https://vuepress.vuejs.org/zh/config/#patterns" target="_blank" rel="noreferrer">patterns</a> 属性是干什么用的，它决定哪些文件会被解析。</p><p>接着，打开(如果没有就新建一个) .vuepress/config.js 配置文件</p><p>最后，在config.js 文件中，加入如下代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> patterns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;**/*.md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;**/*.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;!**/_*.md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;production&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  patterns.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    patterns,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>上面的代码意思是，在开发环境，设置 patterns 为 [&quot;**/*.md&quot;, &quot;**/*.vue&quot;] ，表示 _posts 目录下的所有 .md 文件都会被解析，都会出现在本地开发模式打开的博客网站中。</p><p>在生产环境，设置 patterns 为 [&quot;**/*.md&quot;, &quot;**/*.vue&quot;, &quot;!**/_*.md&quot;]，表示以下划线_开头的.md文件，不会被解析，也就不会出现在线上正式的博客中。</p><p>通过这样设置，以下划线_开头的 .md 文件，就可以当做草稿了。</p>`,10),e=[n];function h(l,k,r,o,d,E){return a(),i("div",null,e)}const g=s(p,[["render",h]]);export{c as __pageData,g as default};
