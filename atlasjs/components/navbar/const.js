export const Items = [
    {
        id: 1,
        name: "contact",
        perName: 'تماس با ما',


    },
    { id: 2, name: "products", perName: 'محصولات' },
    {
        id: 3, name: "about", perName: 'درباره ما',
        childs: [
            { id: 1, name: 'company', text: 'کارخانه و لوکیشن' },
            { id: 2, name: 'activities', text: 'فعالیت های ما' }
        ]
    },
]