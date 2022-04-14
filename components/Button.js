import clsx from 'clsx'
import styles from './Button.module.css'

function Button( { primary, danger, disabled, children } ) {

    console.log('primary: ', primary)
    const className = clsx('d-flex', {
        [styles.primary] : primary,         // neu primary = true thi co class .primary vi style.primary la dynamic nen phai bo trong []
        [styles.danger] : danger,
        [styles.disabled] : disabled,
        'btn': true                         // vi btn la static nen chi can bo vao ''
    })
    return (
        <button className={ className }> { children } </button>
    )
}

export default Button;