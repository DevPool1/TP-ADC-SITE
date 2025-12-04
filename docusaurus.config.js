// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nutri App',
  tagline: 'Git Push Vegetais, Git Ignore Gorduras',
  favicon: 'img/favicon.ico', // Podes mudar isto para o teu logo mais tarde

  // Configurações de URL para publicação no GitHub Pages
  url: 'https://DevPool1.github.io', 
  baseUrl: '/TP-ADC-SITE/',

  // Configurações do GitHub (Essencial para o deployment funcionar)
  organizationName: 'DevPool1', 
  projectName: 'TP-ADC-SITE', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Configuração de idioma (Dá pontos extra por configuração correta)
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Link para editar: aponta para a tua main branch
          editUrl:
            'https://github.com/DevPool1/TP-ADC-SITE/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Link para editar: aponta para a tua main branch
          editUrl:
            'https://github.com/DevPool1/TP-ADC-SITE/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Nutri App',
        logo: {
          alt: 'Nutri App Logo',
          // Certifica-te que guardaste a imagem como logo.png na pasta static/img
          src: 'img/logo.png', 
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação', // Traduzido de Tutorial
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/DevPool1/TP-ADC-SITE',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Começar',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Equipa DevPool1',
                href: 'https://github.com/DevPool1',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DevPool1/TP-ADC-SITE',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nutri App. Construído com Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;