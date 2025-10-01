# CLAUDE.md

这个文件为 Claude Code (claude.ai/code) 提供代码协作指导。

## 项目背景

这是一个 **React 学习项目**，目标是模仿复原苹果官网的界面和交互效果。
- 开发者：React 初学者
- 开发工具：WebStorm
- 主要目的：通过实战学习 React、Next.js 和现代前端开发

## 开发命令

- `npm run dev` - 启动开发服务器 (运行在 http://localhost:3000)
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行代码检查

## 项目架构

这是一个使用 **Next.js 15.3.3** 的现代 React 应用，采用 App Router 架构。

### 目录结构

```
src/app/
├── layout.tsx                 # 应用根布局
├── page.tsx                   # 首页
├── globals.sass               # 全局样式
├── components/
│   ├── ui/                    # UI 组件（如 header）
│   │   └── header/
│   │       ├── index.tsx
│   │       └── header.module.sass
│   └── sections/              # 页面区块组件
│       ├── wrapper/           # 内容包装器
│       └── video-wrapper/     # 视频包装器
└── test/, test2/, test3/      # 测试页面
```

### 技术栈

- **React 19** - UI 框架
- **Next.js 15.3.3** - React 框架（使用 App Router）
- **TypeScript** - 类型安全
- **Sass** - 样式预处理器（使用缩进语法，非 SCSS）
- **Turbopack** - 快速的开发构建工具

### 样式规范

- **全局样式**：`src/app/globals.sass`
- **组件样式**：使用 CSS Modules（`.module.sass` 后缀）
- **语法**：Sass 缩进语法（无分号、无花括号）
- **命名**：遵循 BEM 或语义化命名

### TypeScript 配置

- 启用严格模式
- 路径别名：`@/*` 映射到 `./src/*`
- 示例：`import Header from '@/app/components/ui/header'`

## 代码规范

### React 组件

1. **函数组件**：使用 `export default function ComponentName()` 格式
2. **类型定义**：为 props 定义 TypeScript 接口
3. **文件命名**：组件文件使用 `index.tsx`，样式文件使用 `组件名.module.sass`

示例：
```typescript
// components/ui/header/index.tsx
import styles from './header.module.sass'

export default function Header() {
  return <header className={styles.header}>...</header>
}
```

### 样式编写

使用 Sass 缩进语法（不是 SCSS）：

```sass
// 正确 ✓
.header
  background: white
  padding: 1rem

  &__logo
    width: 100px

// 错误 ✗ (不要使用分号和花括号)
.header {
  background: white;
}
```

## 学习要点

作为 React 初学者项目，以下是重点学习方向：

1. **React 基础**
   - 组件化思维
   - Props 和 State 管理
   - 事件处理
   - 条件渲染和列表渲染

2. **Next.js 特性**
   - App Router 路由系统
   - 布局（Layouts）和嵌套路由
   - 服务端组件 vs 客户端组件
   - 图片和字体优化

3. **样式实践**
   - CSS Modules 隔离样式
   - Sass 变量和嵌套
   - 响应式设计
   - 苹果官网风格的动画效果

4. **TypeScript**
   - 基础类型定义
   - 接口（Interface）
   - 组件 Props 类型

## 工作流程

1. 在 WebStorm 中打开项目
2. 运行 `npm run dev` 启动开发服务器
3. 访问 http://localhost:3000 查看效果
4. 修改代码后会自动热更新
5. 使用浏览器开发工具调试

## 协助规则

当使用 Claude Code 协助开发时：

- **解释清楚**：因为是学习项目，请提供代码解释和最佳实践
- **循序渐进**：优先使用简单、易理解的实现方式
- **注重规范**：遵循 React 和 Next.js 最佳实践
- **中文注释**：代码中添加中文注释帮助理解
- **避免过度工程**：保持代码简洁，适合初学者学习
- **参考苹果官网**：在设计和交互上参考苹果官网的现代化风格

## 常见任务

- 创建新组件：在 `components/ui/` 或 `components/sections/` 下创建
- 添加新页面：在 `src/app/` 下创建新文件夹和 `page.tsx`
- 修改样式：编辑对应的 `.module.sass` 文件
- 调试：使用浏览器开发工具和 `console.log()`