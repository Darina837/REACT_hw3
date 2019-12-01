const e = React.createElement;

export function Footer () {

    return e('div', {className: 'footer'},

//FooterItem1
        e('div', null, 
            e('a', {href: '#'}, 'Реклама'),
            e('a', {href: '##'}, 'Для бизнеса'),
            e('a', {href: '###'}, 'Всё о Google')
        ),

//FooterItem2        
        e('div', null, 
            e('a', {href: '####'}, 'Конфиденциальность'),
            e('a', {href: '#####'}, 'Условия'),
            e('a', {href: '######'}, 'Настройки')
        )
    )
}