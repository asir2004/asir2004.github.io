<template><div><h1 id="用-vuepress-和-github-pages-搭建个人博客实录" tabindex="-1"><a class="header-anchor" href="#用-vuepress-和-github-pages-搭建个人博客实录" aria-hidden="true">#</a> 用 VuePress 和 GitHub Pages 搭建个人博客实录</h1>
<p><em>Author: Asir Bygud</em></p>
<p><em>Date: 2023-08-15 Tue</em></p>
<hr>
<h2 id="step-0" tabindex="-1"><a class="header-anchor" href="#step-0" aria-hidden="true">#</a> Step 0:</h2>
<p>直接跟着 <a href="http://vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">VuePress<ExternalLinkIcon/></a> 走基本不会碰到问题，不过我偏偏是遇到了问题，不过我现在^2023-08-18^还真忘了遇到了什么问题，之后可以补充一下哈哈哈。</p>
<h2 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> Step 1:</h2>
<p>我第一次尝试时用了 VuePress v1.X 版本，失败后尝试了 <a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener noreferrer">VuePress v2.X Beta<ExternalLinkIcon/></a>，结果成功在本地构建了。</p>
<h2 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> Step 2:</h2>
<p>在本地构建完（<em>能进去就好</em>）后就可以开始配置主题了，SideBar、NavBar、Head Image、NavBar Logo、Links 等等…</p>
<p><strong>注意：</strong></p>
<h2 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> Step 3:</h2>
<p>确保电脑上已经配置好了 <code v-pre>git</code>，各种密钥之类的也没问题。</p>
<h2 id="step-4" tabindex="-1"><a class="header-anchor" href="#step-4" aria-hidden="true">#</a> Step 4:</h2>
<p>然后就可以发布到 GitHub Pages 了。由于我还很菜，还没搞懂个人域名，就直接用了 <code v-pre>&lt;USERNAME&gt;.github.io</code> 这个方案。新建一个 <code v-pre>&lt;USERNAME&gt;.github.io</code>，然后在 <code v-pre>vuepress-starter</code> 文件夹的任意一个位置创建一个 <code v-pre>.sh</code> 文件，把<a href="https://v1.vuepress.vuejs.org/guide/deploy.html#github-pages" target="_blank" rel="noopener noreferrer">这个<ExternalLinkIcon/></a>拷贝进去。</p>
<p>我个人修改了这一行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> docs/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>到</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> docs/.vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样的话每次在 <code v-pre>vuepress build docs</code> 时不会把待会儿要创建的 GitHub Actions 覆盖掉。</p>
<h2 id="step-5" tabindex="-1"><a class="header-anchor" href="#step-5" aria-hidden="true">#</a> Step 5:</h2>
<p>在 Terminal 中运行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sh</span> <span class="token operator">&lt;</span>刚才创建的 .sh 文件<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以发布到这个仓库了。</p>
<h2 id="step-6" tabindex="-1"><a class="header-anchor" href="#step-6" aria-hidden="true">#</a> Step 6:</h2>
<p>在 repo 的 Settings 页面找到 Pages，把 Build and deployment 的 Source 改成 GitHub Actions。我用了 GitHub 用来示例的 <code v-pre>jekyll-gh-pages.yml</code>，把 #36 行附近的 <code v-pre>with: source: ./</code> 改成了 <code v-pre>with: source: ./dist/</code>。把这个文件放到 repo 的根目录下 <code v-pre>.github/workflows/</code> 文件夹里，然后 GitHub 就可以每次发布后自动部署了。</p>
<p>也不知道为什么，VuePress 上提供的 <code v-pre>deploy.yml</code> 会出错…</p>
<h2 id="the-end" tabindex="-1"><a class="header-anchor" href="#the-end" aria-hidden="true">#</a> The End!</h2>
<p>我要接着折腾主题和插件了。</p>
</div></template>


