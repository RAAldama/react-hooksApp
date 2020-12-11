import React from 'react'

const Small = React.memo(({value}) => {
    console.log('me he vuelto a renderizar :,D')

    return (
        <small>
            {value}
        </small>
    )
})

export default Small
