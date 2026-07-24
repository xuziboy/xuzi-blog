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
                  <a href={"#article-" + article.number}>
                    {article.title}
                    <span className="sr-only">，阅读摘要</span>
                  </a>
                </h3>
                <p>{article.excerpt}</p>
              </div>
              <div className="article-footer">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
                <span className="article-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>

        <article className="reading-section" id="article-01">
          <div className="reading-heading">
            <p className="eyebrow">Reading note / 01</p>
            <p className="reading-meta">《明朝那些事》 · 读后感 · 约 800 字</p>
          </div>
          <div className="reading-content">
            <h3>在历史的褶皱里，看见普通人的选择</h3>
            <p>
              最近读完《明朝那些事》，合上书的时候，我没有立刻去回忆那些复杂的年号，也没有急着给某位皇帝或大臣下一个结论。脑子里反复出现的，反而是一个很朴素的问题：如果我身处那样的时代，会怎样做？
            </p>
            <p>
              这套书最吸引我的地方，是它没有把历史写成一条只有胜利者才能站上去的长廊。朱元璋的强硬、朱棣的野心、张居正的改革、海瑞的耿直、戚继光的坚持，甚至那些最后被时代淹没的人，都带着具体的脾气和局限。他们不是课本上光洁的名字，而是会犹豫、会犯错、会害怕，也会在关键时刻做出选择的人。历史因此不再遥远，像一面有裂纹的镜子，照见了我们自己。
            </p>
            <p>
              我尤其佩服张居正。他知道制度积弊已深，也知道改革一定会触碰既得利益，却还是选择把事情往前推。他的手段并不总是温和，结局也称不上圆满，但他用十年时间证明，一个人可以在并不理想的环境里，尽力把职责做到最好。这种“明知困难，仍然认真”的态度，和写代码时面对遗留系统很像：你不能期待所有条件都准备好，很多时候只能先理解问题，再一点点修正，给后来的人留下更好的基础。
            </p>
            <p>
              书里还有许多让我动容的失败。有人才华横溢，却输给了性格；有人一生谨慎，最后仍没能躲开命运；有人短暂地站在高处，转身便被新的潮水推走。这些故事让我意识到，评价一个人不能只看最后的输赢。真正重要的，或许是他在当时是否诚实地面对了自己的处境，是否为相信的事情付出过行动。结果属于历史，选择才属于自己。
            </p>
            <p>
              当然，《明朝那些事》并不是一部替我们还原全部真相的学术史书。它有鲜明的叙述风格，也带着作者的判断和幽默。但正因为它先让人产生兴趣，再把人带回史料与现实，我才开始愿意继续追问：为什么一个制度会走到尽头？为什么好心会办成坏事？为什么聪明人也会困在自己的时代里？阅读的意义，也许就在这些没有标准答案的追问中。
            </p>
            <p>
              读完明朝，我对“成败”这两个字多了一点克制。时代很大，个人很小，但小并不意味着无关紧要。我们每天写下的代码、做出的决定、对同事和家人的一次耐心回应，都是在自己的位置上参与历史。未必会留下名字，却会改变身边的一小段现实。愿我以后面对复杂的事情时，少一点急于证明，多一点耐心把事情做好；在属于自己的那一页里，尽量写得诚恳、清醒，也不辜负当下。
            </p>
          </div>
        </article>
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
