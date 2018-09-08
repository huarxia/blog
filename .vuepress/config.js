module.exports = {
    title: '前面端个菜',
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
                text: '某年',
                items: [{
                        text: '2018',
                        link: '/2018'
                    },
                    {
                        text: '2017',
                        link: '/2017'
                    },
                    {
                        text: '2016',
                        link: '/2016'
                    },
                    {
                        text: '2015',
                        link: '/2015'
                    }
                ]
            },
            {
                text: 'Github',
                link: 'https://www.github.com/huarxia'
            }
        ],
        sidebar: [],
        sidebarDepth: 2,
        lastUpdated: '上次更新时间',
        serviceWorker: true
    }
};
