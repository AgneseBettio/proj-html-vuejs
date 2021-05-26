new Vue({
    el: '#root',

    data: {
        companyData : [
            {
                show_header: true,
                id: 'phone',
                text:'+1(30512)34-5678',
                icon:'fa-phone',

            },
            {   
                show_header: true,
                id: 'address',
                text:'Main Avenue 187',
                icon:'',

            },
            // {
            //     id: 'open_hours',
            //     text:'Mon - Sat 9:00 - 18:00',
            //     icon:'fa-clock-o',

            // },
            {
                show_header: false,
                id: 'business_overview',
                text:'A Functional HTML Template for corporate and Business',
                icon:'',

            },
            {
                show_header: false,
                id: 'email',
                text:'hello@example.com',
                icon:'fa-envelope',

            },
            {
                show_header: true,
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
                link: '#',
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
    },
})
