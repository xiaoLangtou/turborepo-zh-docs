---
seo:
  title: Turborepo 中文文档
  description: 高性能的 JavaScript 和 TypeScript 项目构建系统，专为 monorepo 设计。
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
高性能的 [Monorepo]{.text-primary} 构建系统

#description
Turborepo 是一个高性能的构建系统，专为 JavaScript 和 TypeScript 代码库设计。通过智能缓存、并行执行和增量构建，让你的 monorepo 构建速度提升 85%。

#links
  :::u-button
  ---
  to: /introduction
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  开始使用
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/vercel/turbo
  target: _blank
  ---
  GitHub
  :::

#default
  :::prose-pre
  ---
  code: |
    {
      "$schema": "https://turbo.build/schema.json",
      "tasks": {
        "build": {
          "dependsOn": ["^build"],
          "outputs": ["dist/**"]
        },
        "test": {
          "dependsOn": ["build"]
        },
        "dev": {
          "cache": false,
          "persistent": true
        }
      }
    }
  filename: turbo.json
  ---

  ```json [turbo.json]
  {
    "$schema": "https://turbo.build/schema.json",
    "tasks": {
      "build": {
        "dependsOn": ["^build"],
        "outputs": ["dist/**"]
      },
      "test": {
        "dependsOn": ["build"]
      },
      "dev": {
        "cache": false,
        "persistent": true
      }
    }
  }
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
为什么选择 Turborepo

#links
  :::u-button
  ---
  color: neutral
  size: lg
  target: _blank
  to: /getting-started/installation
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  立即开始
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-zap
  ---
  #title
  极速构建

  #description
  通过智能缓存和并行执行，Turborepo 可以将构建时间减少高达 85%，让你的开发流程更加高效。
  :::

  :::u-page-feature
  ---
  icon: i-lucide-git-branch
  ---
  #title
  增量构建

  #description
  只构建发生变化的包和依赖它们的包，避免不必要的重复工作，节省宝贵的开发时间。
  :::

  :::u-page-feature
  ---
  icon: i-lucide-layers
  ---
  #title
  任务编排

  #description
  智能的任务依赖管理，确保任务按正确的顺序执行，同时最大化并行处理能力。
  :::

  :::u-page-feature
  ---
  icon: i-lucide-cloud
  ---
  #title
  远程缓存

  #description
  与团队共享构建缓存，新成员克隆代码后无需重新构建，立即获得最新的构建结果。
  :::

  :::u-page-feature
  ---
  icon: i-lucide-activity
  ---
  #title
  性能监控

  #description
  内置的性能分析工具，帮助你识别构建瓶颈，优化 monorepo 的整体性能。
  :::

  :::u-page-feature
  ---
  icon: i-lucide-settings
  ---
  #title
  零配置启动

  #description
  开箱即用的智能默认配置，同时提供灵活的自定义选项，适应各种项目需求。
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
强大的 Monorepo 工具链

#links
  :::u-button
  ---
  color: neutral
  size: lg
  target: _blank
  to: /core-concepts/remote-caching
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  了解核心概念
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-package
  ---
  #title
  包管理器集成

  #description
  无缝支持 npm、yarn、pnpm 等主流包管理器，自动检测工作区配置，无需额外设置。
  :::

  :::u-page-feature
  ---
  icon: i-lucide-workflow
  ---
  #title
  CI/CD 优化

  #description
  专为持续集成设计，通过缓存和并行执行大幅减少 CI 构建时间，提升开发团队效率。
  :::

  :::u-page-feature
  ---
  icon: i-lucide-code
  ---
  #title
  代码生成器

  #description
  内置强大的代码生成工具，快速创建新包、组件和配置文件，保持项目结构一致性。
  :::

  :::u-page-feature
  ---
  icon: i-lucide-filter
  ---
  #title
  智能过滤

  #description
  基于文件变更智能选择需要运行的任务，支持复杂的过滤条件，精确控制构建范围。
  :::

  :::u-page-feature
  ---
  icon: i-lucide-terminal
  ---
  #title
  丰富的 CLI

  #description
  功能完整的命令行工具，提供直观的输出和详细的日志，让构建过程清晰可见。
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield
  ---
  #title
  类型安全

  #description
  完整的 TypeScript 支持，配置文件类型检查，确保构建配置的正确性和可维护性。
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: 开始使用 Turborepo
      to: '/introduction'
      trailingIcon: i-lucide-arrow-right
    - label: 查看 GitHub
      to: 'https://github.com/vercel/turbo'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: 准备好加速你的 Monorepo 了吗？
  description: 加入数千名开发者的行列，使用 Turborepo 构建高性能的 JavaScript 和 TypeScript 项目。立即开始，体验极速构建的魅力。
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
