new Vue({
    el: '#root',

    data: {
        companyData : [
            {
                show_header: false,
                show_footer: true,
                id: 'business_overview',
                text:'A Functional HTML Template for corporate and Business',
                icon:'',

            },
            {
                show_header: true,
                show_footer: true,
                id: 'phone',
                text:'+1(30512)34-5678',
                icon:'fa-phone',

            },
            {   
                show_header: false,
                show_footer: true,
                id: 'address',
                text:'Main Avenue 187',
                icon:'fa-map-marker',

            },
            {
                show_header: true,
                show_footer: true,
                id: 'email',
                text:'hello@example.com',
                icon:'fa-envelope',

            },
            {
                show_header: true,
                show_footer: false,
                id:"social",
                social_link : [
                    {
                        platform: 'facebook',
                        link: '#',
                        icon: 'fa-facebook',
                    },
                    {
                        platform: 'linkedin',
                        link: '#',
                        icon: 'fa-linkedin',
                    },
                    {
                        platform: 'twitter',
                        link: '#',
                        icon: 'fa-twitter',
                    }
                ]
            }            
        ],

        navBarLinks : [
            {
                text: 'home',
                link: '#',
            },
            {
                text: 'about',
                link: '#',
            },
            {
                text: 'services',
                link: '#services',
            },
            {
                text: 'team',
                link: '#',
            },
            {
                text: 'blog',
                link: '#'
            },
            {   
                link: '#',
                icon: 'fa-user',
            }
        ],

        footerLinks : [
            {
                title: 'About',
                title_list : [
                    {
                        icon: 'fa-angle-right',
                        text: 'The company',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Istituttional',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Social Events',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Innovation',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Enviroment',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Technology',
                        
                    },

                ],
            },
            {
                title: 'Services',
                title_list : [
                    {
                        icon: 'fa-angle-right',
                        text: 'The company',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Istituttional',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Social Events',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Innovation',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Enviroment',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Technology',
                        
                    },

                ],
            },
            {
                title: 'Support',
                title_list : [
                    {
                        icon: 'fa-angle-right',
                        text: 'The company',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Istituttional',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Social Events',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Innovation',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Enviroment',
                        
                    },
                    {
                        icon: 'fa-angle-right',
                        text: 'Technology',
                        
                    },

                ],
            },                
            // {
            //     title: 'Services',
            //     list : [
            //         'The company',
            //         'Istituttional',
            //         'Social Events',
            //         'Innovation',
            //         'Enviroment',
            //         'Technology'
            //     ]
            // },
            // {
            //     title: 'Support',
            //     list : [
            //         'The company',
            //         'Istituttional',
            //         'Social Events',
            //         'Innovation',
            //         'Enviroment',
            //         'Technology'
            //     ]
            // },
        ]
    },
})
