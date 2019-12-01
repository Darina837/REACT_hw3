const e = React.createElement;

const ico = 'images/ico/1.png';

export function Header () {
    let [isBlock, setBlock] = React.useState(false);
    const onClickHandler = e => {
        setBlock( !isBlock )
    }

    return e('div', {className: 'header'}, 

//HeaderPoshta
        e('a', 
            {
                href: '#################################', 
                className: 'HeaderItem'
            }, 
            'Почта'
        ),

//HeaderImages
        e('a', 
            {
                href: '#####################################################', 
                className: 'HeaderItem' 
            }, 
            'Картинки'
        ),

//HeaderDots        
        e('a', 
            { 
                className: 'HeaderItem',
                href: '#############################################################################',
                title: 'Click me!',
                onClick: onClickHandler
            }, 
                e('img', 
                    {
                        src: 'images/dots.png',
                        alt: 'Dots',
                        height: '25'
                    }, 
                    null
                )
        ),

//HeaderNotification
        e('a', 
            {
                href: '##########', 
                className: 'HeaderItem'
            }, 
                e('img', 
                    {
                        src: 'images/notification.png',
                        alt: 'Notification',
                        height: '25'
                    }, 
                    null
                )
        ),

//HeaderIco
        e('a', 
            {
                href: '###########', 
                className: 'HeaderItem'
            }, 
                e('img', 
                    {
                        src: ico,
                        alt: 'Ico',
                        height: '50'
                    }, 
                    null
                )
        ),

//Block        
        e('div', isBlock ? {className: 'block'} : {className: 'noneBlock'}, 
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: ico}, null)
            ),
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: 'images/ico/2.png'}, null)
            ),
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: 'images/ico/3.png'}, null)
            ),
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: 'images/ico/4.png'}, null)
            ),
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: 'images/ico/5.png'}, null)
            ),
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: 'images/ico/6.png'}, null)
            ),
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: 'images/ico/7.png'}, null)
            ),
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: 'images/ico/8.png'}, null)
            ),
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: 'images/ico/9.png'}, null)
            ),
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: 'images/ico/10.png'}, null)
            ),
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: 'images/ico/11.png'}, null)
            ),
            e('a', {href: '##################################'}, 
                e('img', {className: 'logo', src: 'images/ico/12.png'}, null)
            )
        )


    )
}