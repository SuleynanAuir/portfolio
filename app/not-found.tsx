import Link from "next/link";
export default function NotFound() {
  return (
    <main className="shell empty-state">
      <p className="eyebrow">404 · AI RESEARCH LAB</p>
      <h1>This page is still unexplored.</h1>
      <p>这个页面不存在，返回首页继续探索研究项目。</p>
      <Link className="paper-button" href="/">
        Back to the lab · 返回首页
      </Link>
    </main>
  );
}
