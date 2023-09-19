---
title: 阅读文献、添加笔记
icon: note
date: 2023-06-28 21:16:16
updated: 2023-07-21 19:17:58
---

# 阅读文献、添加笔记

Zotero 支持直接打开并批注 PDF，与内部的笔记、同步等功能深度集成。建议使用 Zotero 阅读器以获得最佳体验。

:::warning

内部阅读器所做的高亮、批注等**不在原始 PDF 上**，因此与第三方 PDF 阅读器的批注无法互通，也不支持非 Zotero 或非 webdav 的同步方式（关于同步，请见后续章节）。

如果你并没有特别依赖第三方 PDF 阅读器的某些特殊功能，建议使用 Zotero 阅读器。

:::

## 打开文献 PDF

在主界面中选中文献，双击或回车即可打开文献 PDF。默认以新标签页打开。

> 💡要以单独窗口打开文献，请在打开文献时按住 shift，或在标签页的标题上右键=>移动标签=>移动到新窗口。
> ![image.png](../../assets/image-reader-移动选项卡.png)

Zotero 会自动记忆打开的文献与当前阅读位置。在下一次打开 Zotero 或在其他设备上打开同一个文献时，将会保持当前阅读位置。

## 阅读器功能介绍

### 界面区域

- 左侧是预览栏，可预览缩略图/注释/目录；
- 右侧是信息/笔记栏，可查看当前文献信息![image.png](../../assets/icon-文献信息窗格.png)或编辑笔记![image.png](../../assets/icon-笔记.png)；
- 上方横条是工具栏，可在此缩放、移动页面，或使用高亮注释（alt+1）![image.png](../../assets/icon-reader-高亮注释.png)，文字注释（alt+2）![image.png](../../assets/icon-reader-文字注释.png)，框选注释（alt+3）![image.png](../../assets/icon-reader-选框注释.png)，设置注释颜色（alt+4 切换）![image.png](../../assets/image-reader-设置注释颜色.png)；
- 中央是阅读区域。

![image.png](../../assets/image-reader-注释.png)

### 选中弹窗

在阅读区域选中文本后，也可以通过弹窗来快速高亮内容（翻译按钮由 PDF Translate 插件提供，详见后续章节）：

![image.png](../../assets/image-reader-划选.png)

如果此时右侧打开了笔记，则还可以将选中内容一键添加到笔记：

![image.png](../../assets/image-添加笔记.png)

### 在阅读器中创建笔记

右侧笔记栏中，点击 + 按钮即可创建笔记。条目笔记即属于当前文献条目的笔记；通过注释添加笔记即将文献中的所有注释（高亮等）添加到一个新的笔记。

![image](../../assets/image-添加笔记3.png)

### 管理注释

左侧预览栏中，可预览注释内容。每个注释分为三部分：内容，评论与标签。

![image.png](../../assets/image-reader-注释详情.png)

内容即注释本身，例如高亮文本、框选的图片等。评论区在内容区下方，可以写文字。标签区在最下方，可以为注释添加标签。

:::warning

目前，注释的标签不支持搜索，也不支持从主界面的标签管理器中筛选。

:::

注释支持拖放，可以复制或拖到笔记或外部软件。

在不同的设备上，只要正确设置了同步，注释内容也将一并同步过去。

## 笔记功能介绍

关于笔记的创建及相关功能，详见 [https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/palqgb](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/palqgb)（由 Better Notes 插件提供的文档）。

此处仅作简单介绍。

> 可了解 [Better Notes 插件](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/biigg4)，更方便地在 Zotero 中做笔记，支持双链、支持模板、支持多种导出方式。

笔记分为两种：

- 独立笔记。没有父条目，在主界面库视图中，不需要展开即可看到。
- 条目笔记。具有父条目，一般在某条文献下，展开可看到。

### 创建笔记

创建笔记有多种方式：

1. 在 Zotero 主界面，中央上方工具栏选择新建笔记=>新建独立笔记/添加子笔记；

    ![image](../../assets/image-新建笔记.png)

2. 在主界面，选中条目，从右键菜单创建条目子笔记；

    ![image](../../assets/image-添加笔记菜单.png)

3. 在 PDF 阅读器中，右侧笔记栏右上角的 '+' 按钮可创建条目子笔记；

    ![image](../../assets/image-添加笔记3.png)

4. （需要 Better Notes 插件）在 PDF 阅读器中，左侧注释栏的每一个注释右上角的黄色花形按钮，参见 [4.3 从注释创建快速笔记/Quick Note from Annotation](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/pavzsz)

    ![image](../../assets/image-betternotes-添加到主笔记.png)

### 导出笔记

Zotero 提供了一项笔记导出为 markdown 的功能，但图片及许多格式不会被处理。

建议使用 Better Notes 提供的导出功能，可导出单条或多条笔记为 markdown 文件，或通过剪贴板复制到富文本编辑器（如 OneNote，Word），或导出为 PDF，并且支持自动同步更改（Zotero=>外部导出目录）。关于导出，详见 [4.8 笔记导出/Export](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/nxlngg)；关于同步，详见 [4.9 笔记同步/Sycn](https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/aid2c3)。

![image](../../assets/image-betternotes-导出笔记对话框.png)

可通过以下三种方式导出笔记：

1. 在主界面，选中一个或多个笔记条目，在右键菜单中通过 " 导出笔记及条目子笔记 " 或 " 导出多个笔记 "；

    ![image](../../assets/image-betternotes-导出笔记.png)

2. 在笔记编辑器中，右上角工具栏导出按钮；

    ![image](../../assets/image-导出笔记.png)

3. （不推荐）在主界面中，通过右键菜单使用 Zotero 自带的笔记导出功能。
