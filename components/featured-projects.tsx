"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Quote } from "lucide-react";
import { useCopy } from "@/components/locale-provider";
import { asset, findProject } from "@/lib/site-config";

const projects = [
  {
    name: "NEXUS4Material",
    logo: "nexus4material_logo",
    category: "AI for Science",
    year: "2026",
    summary: "",
    zh: "",
  },
  {
    name: "MERCY",
    logo: "MERCY_logo",
    category: "Research in progress",
    year: "2026",
    summary: "",
    zh: "",
  },
  {
    name: "NEXUS",
    slug: "nexus",
    logo: "nexus_logo",
    category: "Agent Systems",
    year: "2026",
    summary:
      "Graph-augmented multi-agent intelligence for evidence-driven research, simulation and emergent social dynamics.",
    zh: "融合图增强推理与多智能体协作，探索证据驱动的研究、仿真与群体涌现。",
  },
  {
    name: "PEANUT",
    logo: "PEANUT",
    slug: "peanut-video-restoration",
    category: "Computer Vision",
    year: "2025",
    summary:
      "Prompt-guided masking, optical-flow video inpainting and super-resolution in a coordinated restoration pipeline.",
    zh: "将提示引导掩膜、光流视频修复与超分辨率组合为协同的视频恢复流程。",
  },
  {
    name: "OMNI",
    slug: "omni-rec",
    logo: "OMNI_logo",
    category: "Recommendation",
    year: "2025",
    summary:
      "Semantic item representations and generative recommendation, connecting multimodal signals with policy optimization.",
    zh: "以语义物品表示与生成式推荐连接多模态信号和策略优化。",
  },
  {
    name: "P-ADONIS",
    slug: "p-adonis-ocr",
    logo: "P_ADON_logo",
    category: "Computer Vision",
    year: "2025",
    summary:
      "Text-image enhancement and OCR evaluation: testing how restoration affects downstream recognition.",
    zh: "结合文字图像增强与 OCR 评测，研究图像恢复对下游识别的影响。",
  },
  {
    name: "ScratchOML-NIDS",
    slug: "scratchoml-nids",
    logo: "scratchoml_logo",
    category: "Machine Learning",
    year: "2025",
    summary:
      "From-scratch optimization and hierarchical intrusion detection, with calibrated attack probabilities and error analysis.",
    zh: "从零实现优化算法与分层入侵检测，结合攻击概率融合与误差分析。",
  },
  {
    name: "Hateful Detect",
    slug: "hateful-memes-detection",
    logo: "hateful_detect_logo",
    category: "Multimodal AI",
    year: "2025",
    summary:
      "CLIP-based hateful meme detection, comparing image, text and caption strategies through controlled ablations.",
    zh: "基于 CLIP 的仇恨模因检测，通过消融实验比较图像、文本与描述信息策略。",
  },
  {
    name: "Clinical Diagnosis",
    slug: "clinical-brain-tumor-detection",
    logo: "clinic_logo",
    category: "Medical Imaging",
    year: "2025",
    summary:
      "A research pipeline for brain MRI classification, comparing preprocessing, image features and classical ML models.",
    zh: "面向脑部 MRI 分类的研究流程，比较预处理、图像特征与经典机器学习模型。",
  },
  {
    name: "VeFloodBN",
    slug: "vefloodbn",
    logo: "Bayesian Flood Risk Networks and Maps",
    category: "Probabilistic AI",
    year: "2025",
    summary:
      "Bayesian flood-risk inference and geospatial maps, connecting environmental evidence with uncertainty-aware decisions.",
    zh: "结合贝叶斯洪水风险推断与地理空间地图，以环境证据支持不确定性感知的决策。",
  },
];

export function FeaturedProjects() {
  const { t, href } = useCopy();
  return (
    <div id="notes" className="shell selected-content">
      <header className="selected-intro">
        <div className="selected-title">
          <p className="eyebrow">
            {t("A SIMPLE RESEARCH PRINCIPLE", "一个朴素的研究原则")}
          </p>
          <h2>
            {t("Think in systems.", "系统性思考。")}
            <br />
            <span>{t("Build with evidence.", "用证据构建。")}</span>
          </h2>
        </div>
        <blockquote className="selected-quote paper-card">
          <Quote size={30} aria-hidden="true" />
          <p>
            Beyond patterns and predictions, toward <em>mechanistic</em>{" "}
            understanding and <strong>real-world</strong> intelligence.
          </p>
          <cite>—— Suleynan Aiur</cite>
        </blockquote>
      </header>
      <div className="selected-label">
        <h3>{t("SELECTED PROJECTS", "推荐项目")}</h3>
        <span>01 — 10</span>
      </div>
      <div className="selected-grid">
        {projects.map((item) => {
          const project = item.slug ? findProject(item.slug) : undefined;
          const url = item.slug ? href(`/projects/${item.slug}/`) : undefined;
          const title =
            item.name === "ScratchOML-NIDS" ? (
              <>
                ScratchOML-
                <br />
                NIDS
              </>
            ) : (
              item.name
            );
          return (
            <article className="paper-card selected-card" key={item.name}>
              <div className="selected-card-heading">
                <div>
                  <h3>{url ? <Link href={url}>{title}</Link> : title}</h3>
                </div>
                <a
                  className="selected-image-link"
                  href={asset(`/assets/proj_logo/${item.logo}.webp`)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t(
                    `View ${item.name} image at full size`,
                    `查看 ${item.name} 高清大图`,
                  )}
                >
                  <img
                    src={asset(`/assets/proj_logo/${item.logo}.webp`)}
                    width="1200"
                    height="800"
                    alt={`${item.name} project illustration`}
                  />
                </a>
              </div>
              <div className="selected-card-actions">
                {url ? (
                  <Link className="text-link" href={url}>
                    {t("Read Project Notes", "阅读项目详情")}
                    <ArrowUpRight size={17} />
                  </Link>
                ) : (
                  <span className="coming-soon">
                    {t("Patent pending · Coming soon", "专利申请中 · 敬请期待")}
                  </span>
                )}
                {project && (
                  <a
                    className="selected-github"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.name} on GitHub`}
                  >
                    <Github size={21} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
