import { useState } from "react";
import type { FormEvent } from "react";

const articles = [
  {
    number: "01",
    category: "书与远方",
    title: "在历史的褶皱里，看见普通人的选择",
    excerpt:
      "读完《明朝那些事》，我记住的不只是皇帝和大臣的名字，更是一个个普通人在时代洪流里，如何守住自己的选择。",
    date: "2026.07.24",
    readTime: "7 分钟",
    featured: true,
    detail: true,
  },
  {
    number: "02",
    category: "产品随笔",
    title: "AI 产品的好体验，藏在这些小瞬间",
    excerpt:
      "真正让人信任的智能，不总在惊艳的演示里。它更像一句恰到好处的确认，或一次安静的退让。",
    date: "2026.06.26",
    readTime: "6 分钟",
  },
  {
    number: "03",
    category: "生活观察",
    title: "搬到海边之后，我重新理解了专注",
    excerpt:
      "潮汐把时间变得具体。工作不再是填满每个小时，而是分辨什么时候该向前，什么时候该停一停。",
    date: "2026.06.12",
    readTime: "5 分钟",
  },
  {
    number: "04",
    category: "设计笔记",
    title: "好界面不是少，而是刚刚好",
    excerpt:
      "克制不是把所有东西都藏起来，而是让每个元素都知道自己为什么在这里。",
    date: "2026.05.29",
    readTime: "7 分钟",
  },
  {
    number: "05",
    category: "书与远方",
    title: "五月读到的三句话",
    excerpt:
      "关于创造、耐心，以及怎样在一个飞快的世界里，继续做一件很慢的事。",
    date: "2026.05.18",
    readTime: "4 分钟",
  },
];

export default function Home() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <main>
      <header className="site-header" aria-label="主导航">
        <a className="brand" href="#top" aria-label="旭子的首页">
          <span className="brand-mark">旭</span>
          <span>
            旭子
            <small>XU ZI</small>
          </span>
        </a>
        <nav>
          <a href="#articles">文章</a>
          <a href="#about">关于</a>
          <a href="#now">此刻</a>
        </nav>
        <a className="nav-letter" href="#subscribe">
          订阅来信 <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-index" aria-hidden="true">
          <span>ISSUE</span>
          <strong>018</strong>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">开发工程师 / Developer</p>
          <h1>
            把复杂的事，
            <br />
            写得简单一点<span className="red-dot">。</span>
          </h1>
          <p className="hero-intro">
            关于产品、技术与生活的长期笔记。
            <br />
            写给那些仍然愿意认真观察，也愿意慢慢理解的人。
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#articles">
              读最新文章 <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#about">
              认识我
            </a>
          </div>
        </div>
        <aside className="hero-note" aria-label="本期注记">
          <span className="note-stamp">本期注记</span>
          <p>在喧闹里保存一点清醒，在速度里练习自己的节奏。</p>
          <div className="note-meta">
            <span>上海 / 中国</span>
            <span>25°C · 多云</span>
          </div>
        </aside>
      </section>

      <section className="article-section" id="articles">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected writing</p>
            <h2>精选文章</h2>
          </div>
          <p>从设计方法到生活细节，<br />记录那些值得再想一遍的事。</p>
        </div>

        <div className="article-grid">
          {articles.map((article) => (
            <article
              className={article.featured ? "article-card featured" : "article-card"}
              key={article.number}
            >
              <div className="article-top">
                <span className="article-number">{article.number}</span>
                <span className="article-category">{article.category}</span>
              </div>
              <div className="article-body">
                <h3>
                  {article.detail ? (
                    <a href="article/ming-dynasty">
                      {article.title}
                      <span className="sr-only">，阅读全文</span>
                    </a>
                  ) : (
                    <span>{article.title}</span>
                  )}
                </h3>
                <p>{article.excerpt}</p>
              </div>
              <div className="article-footer">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
                {article.detail && <span className="article-read-more">阅读全文</span>}
                <span className="article-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label">
          <p className="eyebrow">About me</p>
          <span className="portrait-monogram" aria-hidden="true">子</span>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            你好，我是旭子。一名喜欢把复杂问题拆开，再用代码重新拼好的开发工程师。
          </p>
          <div className="about-columns">
            <p>
              我关注后端工程、AI 应用与高质量软件的构建。工作之外，也会记录技术选择背后的思考，以及那些值得被反复推敲的实现细节。
            </p>
            <p>
              这个网站是我的数字花园。没有日更压力，也不追逐热点；只收集经过实践验证的方法、工程中的取舍，以及暂时还没有答案的问题。
            </p>
          </div>
          <a className="text-link about-link" href="mailto:hello@example.com">
            和我聊聊 <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="now-section" id="now">
        <div className="now-intro">
          <p className="eyebrow">Now / 2026.07</p>
          <h2>此刻，我在——</h2>
        </div>
        <ul className="now-list">
          <li><span>读</span>《工作的意义》与一些关于城市的旧杂志</li>
          <li><span>做</span>一个帮助开发者整理上下文的小工具</li>
          <li><span>学</span>让面包发酵，也让自己慢下来</li>
        </ul>
      </section>

      <section className="subscribe-section" id="subscribe">
        <div>
          <p className="eyebrow">A quiet letter</p>
          <h2>偶尔写信给你。</h2>
        </div>
        <div className="subscribe-copy">
          <p>
            每月一至两封，分享新文章、近期输入和还在生长的想法。
            <br />
            不制造焦虑，也不会塞满你的收件箱。
          </p>
          {subscribed ? (
            <p className="success-message" role="status">
              已经记下啦，下一封信见。<span aria-hidden="true">✦</span>
            </p>
          ) : (
            <form onSubmit={handleSubscribe}>
              <label className="sr-only" htmlFor="email">电子邮箱</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="你的邮箱地址"
                autoComplete="email"
                required
              />
              <button type="submit">
                订阅 <span aria-hidden="true">→</span>
              </button>
            </form>
          )}
          <small>点击订阅即表示你愿意收到旭子的来信，可随时退订。</small>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">旭</span>
          <span>旭子的长期笔记</span>
        </a>
        <p>© 2026 XU ZI. WRITTEN WITH CARE.</p>
        <div className="footer-links">
          <a href="mailto:hello@example.com">Email</a>
          <a href="#top">回到顶部 ↑</a>
        </div>
      </footer>
    </main>
  );
}
