const {
    description
} = require('../package')

module.exports = {
    title: 'Poradnik Instalacji OpenCore',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/OpenCore-Install-Guide/',

    watch: {
        $page(newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                    if (this.$route.hash) {
                        const element = document.getElementById(this.$route.hash.slice(1));

                        if (element && element.scrollIntoView) {
                            element.scrollIntoView();
                        }
                    }
                });
            }
        }
    },

    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
            });
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/meayua/OpenCore-Install-Guide',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        logo: '/homepage.png',
        nav: [{
            text: 'Poradniki Dortanii',
            items: [{
                text: 'Strona Głowna',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'Zaczynanie z ACPI',
                link: 'https://dortania.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'OpenCore Post-Install',
                link: 'https://dortania.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'OpenCore Multiboot',
                link: 'https://dortania.github.io/OpenCore-Multiboot/'
            },
            {
                text: 'Poradnik zakupu GPU',
                link: 'https://dortania.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Poradnik zakupu kart bezprzewodowych',
                link: 'https://dortania.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'Poradnik czego omijać',
                link: 'https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: 'Wprowadzenie',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                'prerequisites',
                'macos-limits',
                'find-hardware',
                'terminology',
                'why-oc',
            ]
        },
        {
            title: 'Tworzenie USB',
            collapsable: false,
            sidebarDepth: 2,
            children: [{
                title: 'Tworzenie USB',
                collapsable: true,
                path: '/installer-guide/',
                sidebarDepth: 1,
                children: [
                    '/installer-guide/mac-install',
                    '/installer-guide/windows-install',
                    '/installer-guide/linux-install',
                ],
            },
                '/installer-guide/opencore-efi',
                'ktext',
            ['https://dortania.github.io/Getting-Started-With-ACPI/', 'Zaczynanie z ACPI'],
                '/config.plist/',
            ]
        },
        {
            title: 'Konfiguracja',
            collapsable: false,
            children: [{
                title: 'config.plist dla Stacjonarnych Procesorów Intel',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/config.plist/penryn', 'Penryn'],
                    ['/config.plist/clarkdale', 'Clarkdale'],
                    ['/config.plist/sandy-bridge', 'Sandy Bridge'],
                    ['/config.plist/ivy-bridge', 'Ivy Bridge'],
                    ['/config.plist/haswell', 'Haswell'],
                    ['/config.plist/skylake', 'Skylake'],
                    ['/config.plist/kaby-lake', 'Kaby Lake'],
                    ['/config.plist/coffee-lake', 'Coffee Lake'],
                    ['/config.plist/comet-lake', 'Comet Lake'],
                ]
            },
            {
                title: 'config.plist dla Mobilnych Procesorów Intel',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/config-laptop.plist/arrandale', 'Arrandale'],
                    ['/config-laptop.plist/sandy-bridge', 'Sandy Bridge'],
                    ['/config-laptop.plist/ivy-bridge', 'Ivy Bridge'],
                    ['/config-laptop.plist/haswell', 'Haswell'],
                    ['/config-laptop.plist/broadwell', 'Broadwell'],
                    ['/config-laptop.plist/skylake', 'Skylake'],
                    ['/config-laptop.plist/kaby-lake', 'Kaby Lake'],
                    ['/config-laptop.plist/coffee-lake', 'Coffee Lake and Whiskey Lake'],
                    ['/config-laptop.plist/coffee-lake-plus', 'Coffee Lake Plus i Comet Lake'],
                    ['/config-laptop.plist/icelake', 'Ice Lake'],
                ]
            },
            {
                title: 'config.plist dla Procesorów Intel HEDT',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/config-HEDT/nehalem',
                    '/config-HEDT/ivy-bridge-e',
                    '/config-HEDT/haswell-e',
                    '/config-HEDT/broadwell-e',
                    '/config-HEDT/skylake-x',
                ]
            },
            {
                title: 'config.plist dla Stacjonarnych Procesorów AMD',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/AMD/fx',
                    '/AMD/zen',
                ]
            },
            ['/config.plist/security', 'Apple Secure Boot']
            ]
        },
        {
            title: 'Instalacja',
            collapsable: false,
            children: [
                '/installation/installation-process',

            ]
        },
        {
            title: 'Rozwiązywanie problemów',
            collapsable: false,
            children: [
                '/troubleshooting/troubleshooting',
                {
                    title: '',
                    collapsable: false,
                    children: [
                        '/troubleshooting/extended/opencore-issues',
                        '/troubleshooting/extended/kernel-issues',
                        '/troubleshooting/extended/userspace-issues',
                        '/troubleshooting/extended/post-issues',
                        '/troubleshooting/extended/misc-issues',

                    ]
                },
                '/troubleshooting/debug',
                '/troubleshooting/boot',
                '/troubleshooting/kernel-debugging',
            ]
        },
        {
            title: 'Po Instalacji',
            collapsable: false,
            children: [
                ['https://dortania.github.io/OpenCore-Post-Install/', 'Po Instalacji'],
                {
                    title: 'Universal',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/security', 'Security and FileVault'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/audio', 'Fixing Audio'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/oc2hdd', 'Booting without USB'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/update', 'Updating OpenCore, kexts and macOS'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/drm', 'Fixing DRM'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/iservices', 'Fixing iServices'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/pm', 'Fixing Power Management'],
                        ['https://dortania.github.io/OpenCore-Post-Install/universal/sleep', 'Fixing Sleep'],
                        ['https://dortania.github.io/OpenCore-Post-Install/usb/', 'Fixing USB'],
                    ]
                },
                {
                    title: 'Specyficzne dla laptopów',
                    collapsable: true,
                    children: [
                        ['https://dortania.github.io/OpenCore-Post-Install/laptop-specific/battery', 'Fixing Battery Read-outs'],

                    ]
                },
                {
                    title: 'Kosmetyczne',
                    collapsable: true,
                    children: [
                        ['https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose', 'Fixing Resolution and Verbose'],
                        ['https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui', 'Add GUI and Boot-chime'],
                    ]
                },
                {
                    title: 'Multiboot',
                    collapsable: true,
                    children: [
                        ['https://dortania.github.io/OpenCore-Multiboot/', 'OpenCore Multiboot'],
                        ['https://dortania.github.io/OpenCore-Post-Install/multiboot/bootstrap', 'Setting up LauncherOption'],
                        ['https://dortania.github.io/OpenCore-Post-Install/multiboot/bootcamp', 'Installing BootCamp'],
                    ]
                },
                {
                    title: 'Różnorodne',
                    collapsable: true,
                    children: [
                        ['https://dortania.github.io/OpenCore-Post-Install/misc/rtc', 'Fixing RTC'],
                        ['https://dortania.github.io/OpenCore-Post-Install/misc/msr-lock', 'Fixing CFG Lock'],
                        ['https://dortania.github.io/OpenCore-Post-Install/misc/nvram', 'Emulated NVRAM'],
                    ]
                },
            ]
        },
        {
            title: 'Dodatki',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/extras/kaslr-fix',
                '/extras/spoof',
                ['https://github.com/dortania/OpenCore-Install-Guide/tree/master/clover-conversion', 'Konwersja z Clover'],
                '/extras/smbios-support.md',
                
            ]
        },
        {
            title: 'Specyficzne dla systemu',
            collapsable: false,
            children: [
                '/extras/tahoe',
            ]
        },
        {
            title: 'Róznorodne',
            collapsable: false,
            children: [
                'CONTRIBUTING',
                '/misc/credit',
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/back-to-top',
        'vuepress-plugin-smooth-scroll',
        'vuepress-plugin-fulltext-search',
        ['@vuepress/medium-zoom',
            {
                selector: ".theme-succinct-content :not(a) > img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}