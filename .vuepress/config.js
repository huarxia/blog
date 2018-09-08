module.exports = {
        title: '等下!我去给你端个菜',
        description: '花夏的博客',
        head: [
            ['link', {
                rel: 'icon',
                href: '/img/favicon.ico'
            }]
        ],
        themeConfig: {
            nav: [{
                    text: '主页',
                    link: '/'
                },
                {
                    text: '2018',
                    link: '/'
                },
                {
                    text: '2017',
                    link: '/'
                },
                {
                    text: '2016',
                    link: '/'
                },
                {
                    text: '2015',
                    link: '/'
                },
                {
                    text: 'Github',
                    link: 'https://www.github.com/huarxia'
                },
            ],
            sidebar: {
                '/android/': [
                    "android1"
                ],
                "/ios/": [
                    "ios1"
                ],
                "/web/": [
                    "web1"
                ],
            },
            sidebarDepth: 2,
            lastUpdated: 'Last Updated',
            serviceWorker: true
        }
};
