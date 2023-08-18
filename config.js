import { defaultTheme } from 'vuepress'

export default {
    title: 'Thoughts of Mark View',
    description: 'Hello World!',
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', href: '/images/logo_256*256.png' }]],
    repo: 'https://github.com/asir2004/asir2004.github.io',
    
    theme: defaultTheme({
        subSiderbar: 'auto',
        logo: '/images/logo.png',
        logoDark: '/images/logo_night.png',
        lastUpdated: 'Last Updated',
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
        sidebarDepth: 2,
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
            
            // Up Next
            {
                text: 'Up Next',
                link: '/up next/',
                collapsible: true,
                children: [
                    {
                        text: 'Spot-on Prediction for the iPhone 15 Series',
                        link: '/up next/Spot-on Prediction for the iPhone 15 Series.md',
                    },
                ],
            },
            
            // Thoughts
            {
                text: 'Thoughts',
                link: '/thoughts/',
                collapsible: true,
            },
            
            // Test
            {
                text: 'Test',
                link: '/test/',
                collapsible: true,
                children: [
                    {
                        text: 'Test Markdown File',
                        link: '/Test/test.md',
                        collapsible: true,
                    },
                ],
            },
        ],
    }),
}