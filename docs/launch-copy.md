# Launch Copy

Use these drafts after replacing the GitHub URL with the final public repository URL.

## Chinese Short Post

我开源了 Kanvis Cut。

它不是让数字人把文章念一遍，而是把长文重新导演成视频项目：

```text
原文保真
-> 口播改写
-> 语义分镜
-> 真人 / 无人出镜 / 数字人 / 信息图 / PIP
-> 字幕音频
-> 发布质检
```

最重要的差异是：数字人不是永远站在主画面里。当证据、流程、数字和对比更重要时，数字人应该退到角落，让画面承载信息。

仓库里有无隐私示例、配置前检、分镜校验、基础视频工作台、质量报告和 CI。

GitHub：https://github.com/Kanvis-chen/kanvis-cut

## English Short Post

I open-sourced Kanvis Cut.

It is an open-source Codex Skill and basic video workbench that turns long-form content into directed, release-gated video projects.

It does more than make a talking head read a script:

```text
source fidelity
-> spoken adaptation
-> semantic storyboard
-> human / faceless / avatar + information graphics + PIP
-> captions/audio
-> release QA
```

The avatar is not always the main screen. When evidence, processes, numbers, or comparisons matter more, the presenter moves aside and the canvas carries the idea.

MIT licensed. Privacy-safe example included.

https://github.com/Kanvis-chen/kanvis-cut

## Longer Chinese Post

我开源了 Kanvis Cut：一个 Codex Skill + 基础视频工作台。

它解决的不是“怎么生成一个数字人”，而是另一个更常见的问题：

> 一篇公众号文章、课程稿、知识库文档，为什么交给数字人朗读之后还是不好看？

因为文章不是视频脚本。

文章有段落、解释、引用、例子和推导。视频需要节奏、口播、画面重点、信息图、字幕、镜头切换和发布质检。

所以这个项目从长内容开始，而不是从脚本开始：

1. 保存原文，标记核心观点、事实和风险；
2. 把书面语改成口播，不静默编造数据；
3. 为每个语义片段选择画面角色：对比、流程、数字、证据、引语、图表、PIP；
4. 在付费生成前检查授权、成本和预览；
5. 渲染后用质量报告判断能不能发布。

它不是托管服务，不包含 HeyGen、MiniMax 或其他平台账号和额度。你需要自备供应商、素材授权和发布账号。

我开源的是流水线、契约、基础工作台、检查规则和可复现示例。

欢迎贡献：

- provider adapter；
- 中文发音词典；
- 视觉语法；
- 平台预设；
- 质量检查规则。

GitHub：https://github.com/Kanvis-chen/kanvis-cut

## Discussion Starter

Title:

```text
Show us one article you want to direct into video
```

Body:

```markdown
This project is article-native: the best examples start from real long-form content, not from finished talking-head scripts.

If you want to test the pipeline, share:

1. the type of article, without private content;
2. target platform and aspect ratio;
3. whether the avatar should be full-screen, PIP, or optional;
4. which scene types you expect: comparison, process, evidence, quote, number, diagram, checklist.

Do not post private client text, voice samples, portraits, signed URLs, or provider credentials.
```
