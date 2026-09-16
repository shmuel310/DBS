# Discovery Bible Studies (DBS)

A responsive, multilingual web platform for **Discovery Bible Studies** (發現式查經 / 发现式查经 / ディスカバリー・バイブル・スタディ), designed for small groups, pairs, and one-on-one discipleship.

Originally based on [discoverybiblestudies.com](https://discoverybiblestudies.com/), this project provides an interactive, distraction-free Bible reading and discipleship experience across four languages:

- 🇬🇧 **English** (Root `/`)
- 🇭🇰 **繁體中文（香港）** (`/zh-hk/`)
- 🇨🇳 **简体中文** (`/zh-cn/`)
- 🇯🇵 **日本語** (`/ja/`)

---

## 📖 What is a Discovery Bible Study?

Discovery Bible Study (DBS) is a simple, reproducible method of reading Scripture with others based on three core movements:

1. **Look Back (回顧 / 回顾 / 振り返る)**: Reconnect, review the past week, share gratitude, check in on how previous commitments went, and pray for each other.
2. **Look Up (向上看 / 見上げる)**: Pray, read Scripture aloud together, retell the passage in your own words, and engage five core discovery questions:
   - What does this passage say?
   - What does it teach us about God?
   - What does it teach us about people?
   - What stands out or is challenging?
   - What is God saying to you personally?
3. **Look Forward (向前看 / 前を向く)**: Turn insights into real-life responses (an action, promise to claim, example to follow, or command to obey), decide whom to share the passage with this week, and close in prayer.

---

## 🌐 Supported Languages & Biblical Standards

| Language | Directory | Script / Locale | Bible Translation | Ecclesial Terminology |
| :--- | :--- | :--- | :--- | :--- |
| **English** | `/` | `en` | NIV | Standard DBS phrasing |
| **繁體中文（香港）** | `/zh-hk/` | `zh-HK` | 新標點和合本 (CUV) | 香港教會習慣用語（查經、門徒、向前展望、背誦金句、帶領者備忘） |
| **简体中文** | `/zh-cn/` | `zh-CN` | 和合本 (CUV) | 通用规范术语（发现式查经、回顾、向上看、向前看、背诵金句） |
| **日本語** | `/ja/` | `ja` | 新改訳 / 新共同訳 | 日本の標準的教会用語（振り返る、見上げる、前を向く、暗誦聖句、リーダーへのヒント） |

---

## 📚 Study Courses (15 Total)

All 15 study courses (148+ sessions total) are fully localized with interactive session guides, memory verses, leader notes, and personal action trackers:

| # | Study ID | English Title | 繁體中文（香港） | 简体中文 | 日本語 | Sessions |
| :-: | :--- | :--- | :--- | :--- | :--- | :-: |
| 1 | `who-is-this` | Who Is This? | 他是誰？（馬可福音） | 他是谁？（马可福音） | この方は誰なのか？（マルコ） | 10 weeks + 8 bonus |
| 2 | `the-basics` | The Basics | 基礎入門 | 基础入门 | キリスト者の基礎 | 10 sessions |
| 3 | `stories-of-hope` | 10 Stories of Hope | 10個盼望的故事 | 10个盼望的故事 | 10の希望の物語 | 10 sessions |
| 4 | `signs-of-john` | Signs of John | 約翰福音的神蹟 | 约翰福音的神迹 | ヨハネの福音書のしるし | 8 sessions |
| 5 | `overcoming-fear` | Overcoming Fear | 克服恐懼 | 克服恐惧 | 恐れを乗り越える | 12 sessions |
| 6 | `philippians` | New Life, Real Joy | 新生命與真喜樂（腓立比書） | 新生命与真喜乐（腓立比书） | 新しいいのち、本当の喜び | 6 weeks |
| 7 | `ruth` | Ruth | 路得記 | 路得记 | ルツ記 | 5 sessions |
| 8 | `learn-to-follow-jesus` | Learn to Follow Jesus | 學習跟隨耶穌 | 学习跟随耶稣 | イエスに従うことを学ぶ | 8 sessions |
| 9 | `commands-of-jesus` | The Commands of Jesus | 耶穌的吩咐 | 耶稣的吩咐 | イエスの命令 | 14 sessions |
| 10 | `multiplying-disciples` | Connect, Win, Build, Train, Send | 接觸、得著、建立、培訓、差遣 | 接触、得着、建立、培训、差遣 | つながり、勝ち取り、育て、整え、遣わす | 17 weeks + Timeline |
| 11 | `crossing-barriers` | Crossing Barriers | 跨越隔閡 | 跨越隔阂 | 壁を越えて | 10 sessions |
| 12 | `promises-of-comfort` | 10 Promises of Comfort | 10個安慰的應許 | 10个安慰的应许 | 10の慰めの約束 | 10 sessions |
| 13 | `prayer` | Teach Us to Pray | 教導我們禱告 | 教导我们祷告 | 私たちに祈りを教えてください | 10 sessions |
| 14 | `kingdom-of-god` | The Kingdom of God | 神的國度 | 神的国度 | 神の国 | 12 weeks |
| 15 | `sermon-on-the-mount` | The Sermon on the Mount | 登山寶訓 | 登山宝训 | 山上の垂訓 | 8 weeks |

> **Timeline Tool**: Course 10 (`multiplying-disciples`) includes an interactive historical timeline mapping out Jesus' 3.5-year ministry across all four languages at `studies/multiplying-disciples/timeline.html`.

---

## 🏗 Project Structure

```text
.
├── index.html                   # English Homepage
├── how-it-works.html            # How DBS Works
├── about.html                   # About DBS
├── studies.html                 # Complete Course Directory
├── _engine/                     # Core study engine
│   ├── engine.js                # Multilingual interactive engine
│   ├── styles.css               # Typography, CJK font-stacks & layout
│   ├── defaults.js              # Fallback default strings
│   └── assets/                  # Shared SVGs, icons, logos
├── studies/                     # 15 English study courses
│   └── {study-id}/
│       ├── index.html
│       └── data.js
├── zh-hk/                       # 繁體中文（香港）
│   ├── index.html, how-it-works.html, about.html, studies.html
│   ├── _engine/
│   └── studies/{study-id}/
├── zh-cn/                       # 简体中文
│   ├── index.html, how-it-works.html, about.html, studies.html
│   ├── _engine/
│   └── studies/{study-id}/
├── ja/                          # 日本語
│   ├── index.html, how-it-works.html, about.html, studies.html
│   ├── _engine/
│   └── studies/{study-id}/
└── orig/                        # Untouched backup of the original English source
```

---

## ⚡ Technical Features

- **Zero Build Dependencies**: Pure HTML5, CSS3, and modern vanilla JavaScript. No Node.js, Webpack, or framework runtime required to serve or deploy.
- **Dynamic Cross-Language Switching**: Universal language selector in the navbar and study engine headers (`🌐`). Switching languages automatically navigates to the equivalent study or marketing page in the target language.
- **Independent Progress Storage**: User progress (completed sessions, reflections, check-marks) is persisted via browser `localStorage` and namespaced per language (`dbs.${studyId}.${lang}.progress.v1`) to prevent data collisions.
- **Optimized CJK Typography**: Custom font stacks tailored for Hong Kong Traditional Chinese, Simplified Chinese, and Japanese, with appropriate text-transform handling (`text-transform: none` for CJK).
- **Offline & Mobile Friendly**: Clean responsive design optimized for mobile phones, tablets, and desktop displays.

---

## 🚀 Getting Started / Local Development

Since this is a static site, you can serve it with any local HTTP server:

### Python 3
```bash
# From the project root directory
python3 -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

### Node.js (`npx serve`)
```bash
npx serve .
```

### Deploying
The site is static and ready to be hosted immediately on:
- **GitHub Pages**
- **Cloudflare Pages**
- **Netlify / Vercel**
- **Amazon S3 / AWS CloudFront**
- **Nginx / Apache**

Simply point your web root to the repository root directory.

---

## 📄 License & Attribution

- Content adapted from [discoverybiblestudies.com](https://discoverybiblestudies.com/).
- Discipleship journey structure in Course 10 based on Dann Spader's *Like Jesus* discipleship principles.
- Scripture references follow standard public domain / fair-use citation formats for Bible study materials.
