module.exports = {
    base: '/docs/',
    title: '骰娘白鸮',
    description: '来一场刺激的跑团吧！',
    head: [
        ["script", {"src": "alive.js"}]
    ],
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '使用手册', link: '/guide'},
            {text: '疯狂症状', link: '/mad'},
            {text: '数据统计', link: '/stats'}
        ],
        repo: 'DiceWP/DiceWP-pages',
        repoLabel: 'Github',
        editLinks: true,
        editLinkText: '在GitHub上编辑此页',
        docsBranch: 'main',
        docsDir: 'docs'
    },
    plugins:
        [
            '@vuepress/back-to-top',
            [
                'vuepress-plugin-right-anchor',
                {
                    showDepth: 1,
                    expand: {
                        trigger: 'hover',
                        clickModeDefaultOpen: true,
                    },
                }
            ],
            [
                '@vuepress/pwa',
                {
                    serviceWorker: true,
                    updatePopup: {
                        '/': {
                            message: '发现新内容可用~',
                            buttonText: '刷新',
                        },
                    },
                }
            ]
        ],
    dest: 'docs',
    host: 'localhost',
    port: 8080
}