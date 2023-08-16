import { defaultTheme } from 'vuepress'

export default {
    title: 'Thoughts of Mark View',
    description: 'Hello World!',
    lang: 'zh-CN',
    base: '/',
    head: [['link', { rel: 'icon', href: '/images/logo_256*256.png' }]],
    theme: defaultTheme({
        subSiderbar: 'auto',
        logo: '/images/logo.png',
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Links',
                children: [
                    { text: 'GitHub', link: 'https://github.com/asir2004', },
                    { text: 'YouTube', link: 'https://youtube.com/@MarkView64', },
                ],
            },
        ],
        sidebar: [
            // Home
            {
                text: 'Home',
                link: '/',
                collapsible: true,
            },
            
            // Review
            {
                text: 'Review',
                link: '/review/',
                children: [
                    {
                        text: 'Meizu 20 Review',
                        link: '/review/Meizu 20 Review.md',
                    },
                    {
                        text: 'iOS 17 & SF Symbols 5 Review',
                        link: '/review/iOS 17 & SF Symbols 5 Review.md',
                    }
                ],
            },
            
            // Thoughts
            {
                text: 'Thoughts',
                link: '/thoughts/',
            },
            
            // Test
            {
                text: 'Test',
                link: '/test/',
                children: [
                    {
                        text: 'Test Markdown File',
                        link: '/Test/test.md',
                    },
                ],
            },
        ],
    }),
}