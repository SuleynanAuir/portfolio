import type { ResearchProject } from "@/data/portfolio";

export type Locale = "en" | "zh";

export const defaultLocale: Locale = "en";

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith("/zh") ? "zh" : "en";
}

export function getLanguageHref(pathname: string) {
  return getLocaleFromPathname(pathname) === "zh"
    ? "/asrl_agent_ml_dl_cv_nlp"
    : "/zh/asrl_agent_ml_dl_cv_nlp";
}

export const headerCopy = {
  en: {
    brandTitle: "Research Portfolio",
    brandSubtitle: "Agents, Knowledge, AI for Science",
    nav: [
      { label: "Home", href: "/asrl_agent_ml_dl_cv_nlp" },
      { label: "Contact", href: "/asrl_agent_ml_dl_cv_nlp#contact" },
    ],
    agent: "Research Agent",
    switchLabel: "中文",
  },
  zh: {
    brandTitle: "AI 研究实验室",
    brandSubtitle: "智能体、知识系统、AI for Science",
    nav: [
      { label: "首页", href: "/zh/asrl_agent_ml_dl_cv_nlp" },
      { label: "联系", href: "/zh/asrl_agent_ml_dl_cv_nlp#contact" },
    ],
    agent: "研究智能体",
    switchLabel: "EN",
  },
} as const;

export const homeCopy = {
  en: {
    portfolioEyebrow: "Research Portfolio",
    portfolioTitle: "Project Content ✍️",
    portfolioDescription: "Project: summary, tech-stack, links, knowledge",
    visionEyebrow: "Research Vision",
    visionTitle: "From algorithms to intelligent systems.",
    visionDescription:
      "My research direction is to build AI systems that understand context, reason over evidence, act through tools, maintain memory, and continuously improve.",
    contactEyebrow: "Contact",
    contactTitle: "Research projects, publications, and collaboration notes.",
    contactDescription:
      "The portfolio is organized around open research systems. GitHub is the primary place to inspect repositories, project evolution, and implementation artifacts.",
    publications: "Publications",
    visionCards: [
      {
        title: "What I build",
        body: "Autonomous AI systems that connect foundation model adaptation, agent planning, retrieval, graph memory, evaluation, and scientific evidence synthesis.",
      },
      {
        title: "Research trajectory",
        body: "The work follows a progression from learning algorithms to LLM agents, multi-agent collaboration, knowledge intelligence, and AI systems for scientific discovery.",
      },
      {
        title: "System principle",
        body: "Models are treated as reasoning components inside larger research workflows that can search, verify, remember, act, and improve from feedback.",
      },
    ],
  },
  zh: {
    portfolioEyebrow: "研究项目集",
    portfolioTitle: "项目内容 ✍️",
    portfolioDescription: "项目摘要、技术栈、仓库链接、知识点与学习路径",
    visionEyebrow: "研究愿景",
    visionTitle: "从算法到智能系统。",
    visionDescription:
      "实验室方向是构建能够理解上下文、基于证据推理、调用工具、维护记忆并持续改进的 AI 系统。",
    contactEyebrow: "联系",
    contactTitle: "研究项目、技术笔记与协作入口。",
    contactDescription:
      "该作品集围绕开放研究系统组织。GitHub 是查看仓库、项目演化和实现资料的主要入口。",
    publications: "技术笔记",
    visionCards: [
      {
        title: "我构建什么",
        body: "连接基础模型适配、智能体规划、检索、图记忆、评估与科学证据综合的自主 AI 系统。",
      },
      {
        title: "研究轨迹",
        body: "整体路径从学习算法出发，逐步走向 LLM 智能体、多智能体协作、知识智能以及科学发现系统。",
      },
      {
        title: "系统原则",
        body: "模型不是孤立的聊天组件，而是更大研究工作流中的推理单元，需要能够搜索、验证、记忆、行动并从反馈中改进。",
      },
    ],
  },
} as const;

export const heroCopy = {
  en: {
    labName: "Research Portfolio",
    h1Line1Prefix: "From",
    h1Line1Highlight: "Foundation Models",
    h1Line2Prefix: "to",
    h1Line2Highlight: "Agentic AI Systems",
    description:
      "Exploring evolution of AI from learning algorithms to autonomous reasoning systems.",
    tags: ["LLM Agents 🤖", "GraphRAG 🧩", "AI for Science 🧑‍🔬"],
    author: "Author",
    profileStats: ["Repositories", "Stars", "Followers"],
    explore: "Explore Research",
    indexEyebrow: "Research Index",
    ecosystemTitle: "Research ecosystem",
    ecosystemDescription: "Projects, agents, knowledge systems.",
    core: "Core",
    coreTitle: "Research Portfolio",
    coreDescription: "Research Converge here",
    currentFocus: "Current focus: AI Agents + Scientific AI",
    navItems: {
      research: { title: "Research", body: "Explore research directions" },
      projects: { title: "Projects", body: "Open-source AI systems" },
      agents: { title: "Agents", body: "LLM agents and autonomous systems" },
      knowledge: { title: "Knowledge", body: "RAG and graph intelligence" },
      science: { title: "Science", body: "AI for scientific discovery" },
      publications: {
        title: "Publications",
        body: "Research notes and technical explorations",
      },
    },
    stages: [
      {
        title: "Machine Learning",
        description: "Statistical learning from data",
        keywords: ["Optimization", "Generalization"],
      },
      {
        title: "Deep Learning",
        description: "Neural represent learning",
        keywords: ["Architectures", "Perception"],
      },
      {
        title: "Foundation Models",
        description: "Pretrained models transfer",
        keywords: ["Pretraining", "Alignment"],
      },
      {
        title: "AI Agents",
        description: "Reasoning by tool、memory",
        keywords: ["Planning", "Tool use"],
      },
      {
        title: "Multi-Agent Systems",
        description: "Collaborative autonomous",
        keywords: ["Coordination", "Reflection"],
      },
      {
        title: "Scientific AI",
        description: "Evidence-driven discovery",
        keywords: ["Hypothesis", "Discovery"],
      },
    ],
  },
  zh: {
    labName: "AI 系统研究实验室",
    h1Line1Prefix: "从",
    h1Line1Highlight: "基础模型",
    h1Line2Prefix: "走向",
    h1Line2Highlight: "智能体 AI 实验室 🧑‍🍳",
    description: "探索人工智能从学习算法到自主推理系统的演化路径。",
    tags: ["LLM 智能体 🤖", "GraphRAG 🧩", "AI for Science 🧑‍🔬"],
    author: "作者",
    profileStats: ["仓库", "Stars", "关注者"],
    explore: "查看研究项目",
    indexEyebrow: "研究实验室索引",
    ecosystemTitle: "研究生态系统",
    ecosystemDescription: "项目、智能体与知识系统。",
    core: "核心",
    coreTitle: "AI 实验室",
    coreDescription: "研究方向在此汇聚",
    currentFocus: "当前重点：AI Agents + Scientific AI",
    navItems: {
      research: { title: "研究", body: "探索研究方向" },
      projects: { title: "项目", body: "开源 AI 系统" },
      agents: { title: "智能体", body: "LLM 智能体与自主系统" },
      knowledge: { title: "知识", body: "RAG 与图智能" },
      science: { title: "科学 AI", body: "面向科学发现的 AI" },
      publications: { title: "笔记", body: "研究笔记与技术探索" },
    },
    stages: [
      {
        title: "机器学习",
        description: "从数据中进行统计学习",
        keywords: ["优化", "泛化"],
      },
      {
        title: "深度学习",
        description: "大规模神经表示学习",
        keywords: ["架构", "感知"],
      },
      {
        title: "基础模型",
        description: "预训练模型与迁移能力",
        keywords: ["预训练", "对齐"],
      },
      {
        title: "AI 智能体",
        description: "结合工具与记忆进行推理",
        keywords: ["规划", "工具使用"],
      },
      {
        title: "多智能体系统",
        description: "自主系统之间的协作",
        keywords: ["协同", "反思"],
      },
      {
        title: "科学 AI",
        description: "证据驱动的科学发现",
        keywords: ["假设", "发现"],
      },
    ],
  },
} as const;

export const projectModuleCopy = {
  en: {
    projects: "projects",
    collapse: "Collapse module",
    expand: "Expand module",
    openEvidence: "Open research evidence",
    contribution: "Research contribution",
    readmeNotes: "README Notes",
    logicChain: "Logic chain",
    researchQuestion: "Research question",
    technicalApproach: "Technical approach",
    keyContribution: "Key contribution",
    professionalKnowledge: "Professional knowledge",
    learningPath: "Official learning path",
    directory: "Projects",
  },
  zh: {
    projects: "个项目",
    collapse: "收起模块",
    expand: "展开模块",
    openEvidence: "打开研究证据",
    contribution: "研究贡献",
    readmeNotes: "README 要点",
    logicChain: "逻辑链路",
    researchQuestion: "研究问题",
    technicalApproach: "技术路线",
    keyContribution: "关键贡献",
    professionalKnowledge: "专业知识点",
    learningPath: "官方学习路径",
    directory: "项目目录",
  },
} as const;

export const categoryZhCopy: Record<
  string,
  { title: string; description: string; signal: string }
> = {
  "Autonomous Intelligence": {
    title: "自主智能",
    description:
      "围绕规划、工具调用、记忆、深度搜索、不确定性反思和多智能体协作构建智能体系统。该方向关注如何把 LLM 从被动文本生成器转化为能够分解任务、收集证据、跨来源推理、调整搜索深度并在信息环境中协同工作的研究型智能体。",
    signal: "智能体, 深度搜索, 仿真, 反思",
  },
  "Foundation Models & Alignment": {
    title: "基础模型与对齐",
    description:
      "覆盖数据增强、数据工程、云端训练、SFT、LoRA、QLoRA、DPO、评估与本地部署的端到端基础模型适配流程。重点是让领域助手在偏好数据、算力约束和下游智能体任务之间保持可复现、可部署、可评估。",
    signal: "SFT, LoRA, QLoRA, DPO, 部署",
  },
  "AI for Science & Probabilistic Reasoning": {
    title: "科学 AI 与概率推理",
    description:
      "面向时间序列预测、贝叶斯因果推断、地理空间风险建模和医疗机器学习的科学智能模块。项目强调不确定性、因果结构、精确/近似推理、空间可视化与证据支撑的决策分析。",
    signal: "预测, DAG, MCMC, 医疗机器学习",
  },
  "Machine Learning Foundations & Analytics": {
    title: "机器学习基础与分析",
    description:
      "从优化原语、概率融合、结构化特征工程和可解释分析出发构建经典机器学习系统，为现代 AI 系统提供算法基础和可靠的结构化数据分析能力。",
    signal: "优化, 贝叶斯融合, 分群",
  },
  "Reinforcement Learning & Recommendation": {
    title: "强化学习与推荐",
    description:
      "研究奖励驱动的智能体和推荐系统，覆盖 DQN、PPO、Actor-Critic、生成式推荐、Semantic ID 表示与偏好对齐，连接序列决策、用户行为建模和反馈优化。",
    signal: "DQN, PPO, A2C, OneRec, 奖励",
  },
  "Multimodal Intelligence": {
    title: "多模态智能",
    description:
      "面向视频修复、文档 OCR、图文语义对齐、多模态安全和视觉语言理解的跨模态推理系统，关注如何把噪声视觉证据转化为结构化信号并支持稳健推理。",
    signal: "OCR, 光流, CLIP, VLM",
  },
};

type ProjectCopy = Partial<
  Pick<
    ResearchProject,
    | "description"
    | "impact"
    | "platformRole"
    | "knowledgeIntro"
    | "readmeHighlights"
    | "logicChain"
  >
>;

export const projectZhCopy: Record<string, ProjectCopy> = {
  "Agent-You-MustKnows": {
    description:
      "系统化的 AI Agent 研究知识库，整理论文、技术报告、经典方法和前沿方向，覆盖智能体理论、推理规划、工具使用、记忆、多智能体协作、RAG + Agent 和架构设计。",
    platformRole:
      "作为整个作品集的智能体知识底座，连接概念、论文、框架、工程模式和系统实践。",
    impact:
      "把分散的智能体资料整理成可复用的研究地图，便于理解理论、架构模式和实现路线。",
    knowledgeIntro:
      "专业重点：智能体系统通常由规划、记忆、检索、工具调用、反思和评估组成，本项目适合作为进入 Agent 领域的知识地图。",
    readmeHighlights: [
      "不是简单链接集合，而是系统化的 Agent 学习与研究知识库。",
      "覆盖理论、规划、工具调用、记忆、RAG + Agent、多智能体协作和 Agentic AI 趋势。",
      "把概念理解、技术演化和实践路线组织到一个可导航结构中。",
    ],
    logicChain: [
      {
        label: "知识范围",
        value:
          "从 LLM Agent、RAG + Agent、工具使用、记忆、规划、反思和多智能体协作建立知识框架。",
      },
      {
        label: "组织方式",
        value: "把论文、报告和工程笔记转化为结构化研究地图。",
      },
      {
        label: "组合价值",
        value: "为 NEXUS、UPARIS-DS、CognitiveTemp 等后续项目提供概念底座。",
      },
    ],
  },
  NEXUS: {
    description:
      "面向复杂动态信息环境的多智能体 AI 框架，结合领域适配模型、深度搜索智能体、用户注意力智能体和 Canyon 数字孪生环境，用于组织、仿真和推理实体、关系、事件与叙事变化。",
    platformRole:
      "作为检索、智能体协作、仿真、用户注意力和深度洞察生成的编排层。",
    impact:
      "把自主智能体、知识先验、注意力锚点和数字孪生结合起来，在控制 token 成本的同时提升分析深度。",
    knowledgeIntro:
      "专业重点：多智能体系统需要角色分工、共享状态、检索上下文、事件建模和成本控制。NEXUS 强调智能体在仿真信息环境中的协作推理。",
    readmeHighlights: [
      "定义了一个用于复杂信息环境理解与仿真的多智能体框架。",
      "结合领域模型、深度搜索智能体、注意力智能体和数字孪生环境。",
      "围绕事件、舆情和叙事动态进行多视角推理。",
    ],
    logicChain: [
      {
        label: "信息输入",
        value: "从多源动态信息流中抽取实体、关系、事件和用户关注信号。",
      },
      {
        label: "智能体架构",
        value: "通过深度搜索、注意力锚点和数字孪生组织可分析状态。",
      },
      {
        label: "系统产出",
        value: "在保证推理深度的同时减少不必要的 token 消耗。",
      },
    ],
  },
  "UPARIS-DS Agents": {
    description:
      "面向深度搜索智能体的可靠性层，通过段落级不确定性估计、自适应反思和迭代检索，把原始搜索结果转化为更可信的证据综合。",
    platformRole: "作为研究智能体和 GraphRAG 证据流中的验证与精炼模块。",
    impact:
      "通过不确定性驱动的反思搜索，提升深度搜索答案的可验证性和抗幻觉能力。",
    knowledgeIntro:
      "专业重点：深度搜索智能体需要证据评分、不确定性处理、检索修正和引用式综合。UPARIS-DS 关注段落级可靠性。",
    readmeHighlights: [
      "提出段落级不确定性感知的迭代反思搜索框架。",
      "不是固定深度检索，而是根据证据质量自适应精炼。",
      "目标是提升 GraphRAG 与研究智能体的证据 grounding。",
    ],
    logicChain: [
      { label: "问题", value: "深度搜索常混合高低质量证据，并隐藏不确定性。" },
      {
        label: "信号",
        value: "对段落进行不确定性检查，定位需要重搜或修正的部分。",
      },
      {
        label: "价值",
        value: "把原始检索片段转化为结构化、可追踪的证据对象。",
      },
    ],
  },
  "CognitiveTemp DeepSearch Agents": {
    description:
      "带有温度驱动认知风格的多智能体深度研究系统，可在严谨学术分析、均衡证据搜索和创造性探索之间切换搜索行为。",
    platformRole:
      "为智能体提供行为控制逻辑，使其能够在保守证据核查和开放探索之间切换。",
    impact:
      "把推理风格、搜索深度和探索程度变成可调参数，增强研究工作流的可控性。",
    knowledgeIntro:
      "专业重点：可控智能体需要管理采样温度、搜索广度、证据严格性和反馈评估。本项目把认知风格视为系统参数。",
  },
  "LLaMA Factory Fine-tuning": {
    description:
      "围绕 LLaMA Factory 构建的端到端 LLM 微调与部署流程，连接数据增强、数据工程、云端训练、云端数据管理、一键微调和本地部署。",
    platformRole:
      "提供模型适配层，为下游智能体、QA 和知识平台准备可部署的领域助手。",
    impact: "把分散的微调命令整理为可复现的模型工程工作流。",
    knowledgeIntro:
      "专业重点：基础模型适配需要连接数据准备、SFT、PEFT/LoRA、评估、部署和实验管理，而不只是单次训练命令。",
  },
  "Qwen HotelService Master": {
    description:
      "基于 Qwen2.5-7B-Instruct 的酒店领域对话助手，比较 SFT + LoRA、SFT + QLoRA 和 DPO 在有限 GPU 资源下的领域适配效果。",
    platformRole: "代表可嵌入服务智能体和领域 QA 系统的任务型基础模型。",
    impact:
      "展示如何在真实算力约束下进行领域模型训练，并通过偏好优化提升服务回答质量。",
    knowledgeIntro:
      "专业重点：服务领域助手需要指令数据、参数高效微调、量化训练和偏好对齐。",
  },
  "Weibo SentimentBot QA-Bot": {
    description:
      "基于 Qwen3.5-0.6B 的微博舆情和情感助手，通过 AutoDL 训练流程完成 SFT、LoRA 和 DPO 偏好优化。",
    platformRole:
      "作为小模型对齐案例，服务于情感分析、舆情 QA 和回答行为优化。",
    impact: "证明小模型也可以通过清晰任务、数据和训练阶段成为有效的垂直助手。",
    knowledgeIntro:
      "专业重点：紧凑型领域 LLM 依赖明确任务边界、情感评估指标和偏好数据。",
  },
  "Chronos-2 Time-Series Foundation Model": {
    description:
      "基于 Chronos 和 Chronos-Bolt 的时间序列基础模型研究，覆盖单变量预测、跨序列学习、多变量目标预测和协变量感知预测。",
    platformRole: "为科学监测、市场预测和运营规划提供时间智能模块。",
    impact:
      "把基础模型思想扩展到需要未来状态估计和已知未来协变量的时间预测任务。",
    knowledgeIntro:
      "专业重点：时间序列基础模型需要处理上下文窗口、协变量、概率预测、跨序列迁移和预测评估。",
  },
  VeFloodBN: {
    description:
      "面向意大利 Veneto 地区市政级洪水风险建模的离散贝叶斯网络，结合 12 节点因果 DAG、CPT 学习、精确/近似推理和 GeoPandas 空间热力图。",
    platformRole: "作为科学风险分析和证据支撑决策的概率推理模块。",
    impact:
      "结合因果结构、不确定性推理、马尔可夫毯分析、空间可视化和 Top-N 风险排序鲁棒性检查。",
    knowledgeIntro:
      "专业重点：贝叶斯网络用 DAG 和条件概率表表达不确定因果依赖，再通过空间图层转化为风险决策地图。",
  },
  "Clinical Brain Tumor Detection": {
    description:
      "使用 NumPy、Pandas、Matplotlib 等基础库构建 MRI 脑肿瘤检测框架，比较 SVM、MLP、XGBoost、KNN 和逻辑回归等方法。",
    platformRole:
      "作为轻量级医疗 AI 案例，强调预处理严谨性、特征工程和模型比较。",
    impact:
      "展示在不依赖重型深度学习库的情况下，经典模型和图像预处理也能形成透明的医学影像基线。",
    knowledgeIntro:
      "专业重点：医学影像基线需要稳定预处理、HOG 特征、小样本验证、分类器比较和临床误差分析。",
  },
  "ScratchOML-NIDS": {
    description:
      "在 UNSW-NB15 上从零实现的两阶段贝叶斯融合入侵检测系统，手写 GD、SGD、Adam、逻辑回归、朴素贝叶斯、决策树和 MLP。",
    platformRole:
      "作为现代 LLM、智能体和科学 AI 工作流之下的经典机器学习基础。",
    impact:
      "把从零优化、类别不平衡处理、交互特征、后验融合和 ROC/PR 评估串成完整系统。",
    knowledgeIntro:
      "专业重点：从零机器学习能帮助理解优化、梯度、后验概率、模型偏差、校准和评估指标。",
  },
  "Customer Analytics Platform": {
    description:
      "基于电商 Customer Personality Analysis 数据集的客户分析平台，结合 EDA、监督学习、无监督分群和营销响应分析。",
    platformRole: "代表结构化数据智能和商业分析在 AI 系统作品集中的应用层。",
    impact: "把客户数据转化为行为分群、营销响应信号、价值指标和决策支持洞察。",
    knowledgeIntro:
      "专业重点：客户分析需要数据清洗、用户分群、监督预测、无监督聚类、特征解释和业务指标设计。",
  },
  "DRL Basis Projects": {
    description:
      "紧凑模块化的深度强化学习基础实现，覆盖 DQN/DDQN、经验回放、目标网络、PPO、GAE、策略梯度和 Actor-Critic。",
    platformRole: "为需要从反馈中适应行为的自主系统提供策略学习概念基础。",
    impact: "建立从监督预测走向环境交互、价值估计和策略优化的决策学习基础。",
    knowledgeIntro:
      "专业重点：强化学习需要理解 MDP、环境交互、奖励设计、探索、经验回放、价值学习和策略优化。",
  },
  "OMNI-Rec": {
    description:
      "受 OneRec 启发的生成式推荐项目，面向短视频平台推荐范式，探索序列生成、偏好对齐、Semantic ID 与奖励优化。",
    platformRole:
      "连接强化学习、多模态表示和用户偏好建模，用于交互式 AI 系统。",
    impact: "把推荐从判别式排序扩展为生成式、上下文感知和偏好对齐的智能系统。",
    knowledgeIntro:
      "专业重点：推荐系统需要候选召回、排序、序列建模、多模态物品表示、反馈闭环和奖励优化。",
  },
  "PEANUT Video Restoration": {
    description:
      "Prompt-Enhanced Ablation with Optical Flow-Based Neural Unit，结合空间一致性、时间一致性和清晰度优化的视频修复项目。",
    platformRole: "为作品集的多模态智能层加入时间视觉感知和视频修复能力。",
    impact:
      "把语言提示、分割掩码、运动线索、时间一致性和修复目标连接到一个高保真视频管线。",
    knowledgeIntro:
      "专业重点：视频修复依赖运动估计、光流、时间一致性、分割提示和感知质量控制。",
  },
  "P-ADONIS OCR": {
    description:
      "Prior-enhanced Attention Document OCR Network for Image-to-Structure，把先验增强注意力文本图像超分模型与 OCR 管线结合。",
    platformRole:
      "作为文档摄取模块，把论文、PDF 和扫描资料转化为可检索、可抽取的结构化证据。",
    impact:
      "把退化视觉文档转化为更可靠的结构化文本，支持后续搜索、检索和知识抽取。",
    knowledgeIntro:
      "专业重点：OCR 系统需要图像恢复、文本区域增强、版面理解、识别置信度和结构化文本抽取。",
  },
  "Hateful Memes Detection": {
    description:
      "面向社交媒体的多模态仇恨内容检测项目，处理图文语义不一致、隐含指代、讽刺和反讽等复杂信号。",
    platformRole:
      "为 AI 研究作品集加入多模态安全、语义对齐和稳健图文理解案例。",
    impact: "在含糊、隐式、讽刺且社会敏感的图文证据下测试多模态推理能力。",
    knowledgeIntro:
      "专业重点：多模态安全需要图文表示学习、语义对齐、上下文推理、提示式检查和敏感内容处理。",
  },
};

export function getCategoryDisplay(
  category: { title: string; description: string; signal: string },
  locale: Locale,
) {
  if (locale === "en") {
    return category;
  }

  return categoryZhCopy[category.title] ?? category;
}

export function getProjectDisplay(
  project: ResearchProject,
  locale: Locale,
): ResearchProject {
  if (locale === "en") {
    return project;
  }

  return {
    ...project,
    ...projectZhCopy[project.name],
  };
}
