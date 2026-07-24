export default function ArticlePage() {
  return (
    <main className="article-page">
      <header className="article-header">
        <a className="article-back" href="../../">
          <span aria-hidden="true">←</span> 返回旭子的首页
        </a>
        <a className="article-brand" href="../../" aria-label="旭子的首页">
          <span className="brand-mark">旭</span>
          <span>旭子<small>XU ZI</small></span>
        </a>
        <span className="article-issue">NO. 018</span>
      </header>

      <div className="article-layout">
        <aside className="article-aside" aria-label="文章信息">
          <span className="article-aside-label">READING NOTE</span>
          <span className="article-aside-line" />
          <span>2026<br />07.24</span>
        </aside>

        <article className="article-detail">
          <header className="article-detail-heading">
            <p className="eyebrow">书与远方 · Reading note</p>
            <h1>在历史的褶皱里，<br />看见普通人的选择<span className="red-dot">。</span></h1>
            <p className="article-dek">
              读完《明朝那些事》，我记住的不只是皇帝和大臣的名字，更是一个个普通人在时代洪流里，如何守住自己的选择。
            </p>
            <div className="article-detail-meta">
              <span>旭子</span>
              <span>2026.07.24</span>
              <span>约 7 分钟阅读</span>
            </div>
          </header>

          <div className="article-detail-body">
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

          <footer className="article-detail-footer">
            <span>END OF NOTE</span>
            <a href="../../#articles">继续阅读其他文章 <span aria-hidden="true">→</span></a>
          </footer>
        </article>
      </div>
    </main>
  );
}
