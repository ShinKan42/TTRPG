import { defineMermaidConfig } from '@vuepress/plugin-markdown-chart/client';

import { defineClientConfig } from 'vuepress/client';

// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'

// import './theme/styles/custom.css'
// import './custom.css'

import './custom.css';

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
