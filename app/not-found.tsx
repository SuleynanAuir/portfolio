import Link from "next/link";
export default function NotFound() {
  return (
    <main className="shell empty-state">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>This page is still unexplored.</h1>
      <p>This page does not exist. Return home to explore the research projects.</p>
      <Link className="paper-button" href="/">
        Back to home
      </Link>
    </main>
  );
}
