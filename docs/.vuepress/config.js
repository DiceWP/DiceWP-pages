module.exports = {
    base: '/docs/',
    title: '骰娘白鸮',
    description: '来一场刺激的跑团吧！',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '使用手册', link: '/guide'},
            {text: '疯狂症状', link: '/mad'},

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
                },
            ],
        ],
    dest: 'docs',
    host: 'localhost',
    port: 8080
}