const e = React.createElement;

export function Main () {
    const [text, setText] = React.useState('');

    return e('div', {className: 'main'}, 
    
//MainGoogle
        e('img', 
            {
                src: 'images/google.png', 
                width: '300',
                alt: 'Google' 
            }, 
            null
        ),
        
//SearchInput
        e('input', 
            {
                value: text,
                onChange: (
                    (e) => {
                        setText( e.target.value.toLocaleUpperCase() )
                    }
                ),
                onKeyPress: (
                    (e) => {
                        setText( e.target.value.replace(/[^\w ]/g, '') ) //разрешено вводить только английские буквы, цифры и пробелы
                    }
                )
            },
            null
        ),

//Buttons
        e('div', {className: 'buttons'}, 
            e('button', null, 'Поиск в Google'),
            e('button', null, 'Мне повезёт!')
        )
    )
}