import { createTracker } from '@lunariajs/core';

const tracker = await createTracker({
	repository: 'https://github.com/Yan-Thomas/lunaria',
	rootDir: './examples/vitepress',
	dashboard: {
		//title: "Estado da Tradução",
		url: 'https://localhost:3000/',
		/* 		ui: {
			lang: 'pt-BR',
			"heading.progressByLanguage": "Progresso da tradução por língua",
			"heading.statusByContent": "Estado da tradução por conteúdo",
			"status.done": "completo",
			"status.missing": "faltando",
			"status.outdated": "desatualizado",
			"status.emojiDone": "⭕",
			"statusByContent.tableRowPage": "Página",
			"statusByLanguage.outdatedTranslationLink": "tradução desatualizada",
			"statusByLanguage.sourceChangeHistoryLink": "histórico de mudanças do original"

		}, */
	},
	defaultLocale: {
		label: 'English',
		lang: 'en',
		content: {
			location: '**/*.md',
			ignore: ['pt/*.md', 'es/*.md'],
		},
		dictionaries: {
			location: 'ui/en/*.{js,cjs,mjs,ts,yml}',
		},
	},
	locales: [
		{
			label: 'Português',
			lang: 'pt',
			content: {
				location: 'pt/**/*.md',
			},
			dictionaries: {
				location: 'ui/pt/*.{js,cjs,mjs,ts,yml}',
			},
		},
		{
			label: 'Spanish',
			lang: 'es',
			content: {
				location: 'es/**/*.md',
			},
			dictionaries: {
				location: 'ui/es/*.{js,cjs,mjs,ts,yml}',
			},
		},
	],
	translatableProperty: 'i18nReady',
});

tracker.run();
