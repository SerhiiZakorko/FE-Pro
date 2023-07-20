let content = [
    ['PRODUCTS', [
        'Heroku Platform',
        'Heroku Data Services',
        'Heroku Postgres',
        'Heroku Data for Redis',
        'Apache Kafka on Heroku',
        'Heroku Enterprise',
        'Heroku Private Spaces',
        'Heroku Connect',
        'Heroku Shield',
        'Heroku Teams',
        'Elements Marketplace',
        'Pricing']
    ],
    ['RESOURCES', [
        'Documentation',
        'Compliance Center',
        'Training & Education',
        'Blog',
        'Podcasts',
        'Get Started']
    ],
    ['ABOUT', [
        'About Us',
        'What is Heroku',
        'Heroku & Salesforce',
        'Our Customers',
        'Careers',
        'Partners',
        'Elements Marketplace']
    ],
    ['SUPPORT', [
        'Help Center',
        'Status',
        'Premium Support',
        'Contact Us']
    ]
]

const div_root = document.querySelector('#root')

renderFooter(content)

function renderFooter(array){
    const footer = document.createElement('footer')
    const div_footer = document.createElement('div')
    div_footer.className = 'footer_wrapper'

    for (let i = 0; i < array.length; i++){
        let title = array[i][0]
        let text_array = array[i][1]

        const div_title_block = document.createElement('div')
        div_title_block.className = 'title_wrapper'

        const title_block = document.createElement('h4')
        title_block.innerText = title

        const ul_block = document.createElement('ul')

        for (let j = 0; j < text_array.length; j++){
            const li_elem = document.createElement('li')
            li_elem.innerText = text_array[j]
            ul_block.append(li_elem)
        }

        div_title_block.append(title_block, ul_block)
        div_footer.append(div_title_block)
    }

    footer.append(div_footer)
    div_root.append(footer)
}

const icons = [
    './media/8.png',
    './media/1.png',
    './media/2.png',
    './media/3.png',
    './media/4.png',
    './media/5.png',
    './media/6.png',
    './media/7.png'
]

const div_images = document.createElement('div')
div_images.className = 'icons_wrapper'

for (let i = 0; i < icons.length; i++){
    const icon = document.createElement('img')
    icon.src = icons[i]
    div_images.append(icon)
}

div_root.append(div_images)