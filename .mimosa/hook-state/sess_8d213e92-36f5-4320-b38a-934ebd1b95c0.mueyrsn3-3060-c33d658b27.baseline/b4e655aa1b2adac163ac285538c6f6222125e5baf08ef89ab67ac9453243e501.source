import { defineMermaidConfig } from '@vuepress/plugin-markdown-chart/client';

import { defineClientConfig } from 'vuepress/client';

// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'

// import './theme/styles/custom.css'
// import './custom.css'

import './custom.css';

// ── Chunk 加载失败自愈 ──────────────────────────────
// 部署切换后，浏览器缓存的旧 HTML 会引用已被新部署清掉的旧 chunk（404），
// 表现为整页白屏且普通刷新不恢复。此处拦截两类信号，带 10s 防循环锁自动整页刷新一次：
// ① script/link 资源加载错误（捕获阶段监听）② 动态 import 失败（unhandledrejection）
const CHUNK_RELOAD_LOCK = 'vp-chunk-reloaded-at';
function chunkFailReload(tag: string) {
	try {
		const now = Date.now();
		const last = Number(sessionStorage.getItem(CHUNK_RELOAD_LOCK) || 0);
		// 三连退避：0s / 15s / 45s 各允许一次重载——穿部署切换期与负缓存窗口；
		// 第三次仍失败则静默（新部署自身异常，不无限循环）
		if (now - last < 10_000) return;
		const count = Number(sessionStorage.getItem(CHUNK_RELOAD_LOCK + '-n') || 0);
		if (count >= 3) return;
		sessionStorage.setItem(CHUNK_RELOAD_LOCK, String(now));
		sessionStorage.setItem(CHUNK_RELOAD_LOCK + '-n', String(count + 1));
		console.warn(`[chunk-recovery] ${tag} failed, reload #${count + 1}…`);
		if (count === 0) {
			window.location.reload();
		} else {
			const u = new URL(window.location.href);
			u.searchParams.set('v', String(now));
			window.location.href = u.toString();
		}
	} catch {
		/* sessionStorage 不可用（隐私模式等）时静默放弃 */
	}
}
// 仅浏览器环境执行（SSR 渲染阶段 Node 无 window，裸调用会炸构建）
if (typeof window !== 'undefined') {
	window.addEventListener(
		'error',
		(ev) => {
			const t = ev.target as HTMLElement | null;
			if (!t) return;
			const tag = t.tagName;
			if (tag === 'SCRIPT' || tag === 'LINK') {
				const url = (t as HTMLScriptElement).src || (t as HTMLLinkElement).href || '';
				// 生产：/assets/ 哈希 chunk（部署切换后旧 chunk 404）
				// dev：/.vuepress/.cache/deps/（看护重启清缓存后旧 hash 依赖 504 Outdated Optimize Dep）
				if (url.includes('/assets/') || url.includes('/.vuepress/.cache/deps/')) {
					chunkFailReload(tag.toLowerCase());
				}
			}
		},
		true,
	);
	window.addEventListener('unhandledrejection', (ev) => {
		const msg = String((ev.reason as Error)?.message ?? ev.reason ?? '');
		if (
			msg.includes('Failed to fetch dynamically imported module') ||
			msg.includes('Importing a module script failed') ||
			msg.includes('error loading dynamically imported module')
		) {
			chunkFailReload('dynamic-import');
		}
	});
}

defineMermaidConfig({
	// 在此设置 mermaid 选项
	theme: 'base',
	themeVariables: {
		fontFamily: 'verdana',
		mainBkg: 'rgba(255, 230, 240, 0.2)',
		textColor: 'rgba(255, 230, 240, 1)',
		primaryColor: 'rgba(160, 128, 200, 1)',
		primaryTextColor: 'rgba(160, 128, 200, 1)',
		primaryBorderColor: 'rgba(132, 76, 138, 1)',
		lineColor: 'rgba(255, 0, 0, 1)',
		secondaryColor: 'rgba(160, 160, 160, 0)',
		secondaryBorderColor: 'rgba(240, 40, 60, 1)',
		secondaryTextColor: 'rgba(240, 40, 60, 1)',
		tertiaryColor: 'rgba(20, 14, 26, 1)',
		tertiaryBorderColor: 'rgba(132, 76, 138, 1)',
		noteBkgColor: 'rgba(255, 230, 240, 0.2)',
		noteTextColor: 'rgba(160, 128, 200, 1)',
		noteBorderColor: 'rgba(255, 77, 109, 1)',
	},
});

export default defineClientConfig({
	enhance({ app }) {
		// app.component('RepoCard', RepoCard)
		// app.component('CustomComponent', CustomComponent)
	},
});
