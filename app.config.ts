import "./styles/style.css"

export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'T9',
      description: 'Central Hub of Materials',
    },
    theme: {
      customizable: true,
      color: 'blue',
      radius: 0.5,
    },
    header: {
      title: 'T9',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/devakapatel/t9',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
      collapseLevel: 1,
      folderStyle: 'default',
    },
    main: {
      breadCrumb: true,
      showTitle: false,
    },
    footer: {
      credits: `T9 © ${new Date().getFullYear()} - All rights reserved`,
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
    },
    search: {
      enable: true,
      inAside: false,
      placeholderDetailed: 'Search...',
    },
  }
});