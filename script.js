const input = document.querySelector('#input')
const output = document.querySelector('#output')
const translate = document.querySelector('#english')
const morse = document.querySelector('#morse')



translate.onclick = () => {
    let inputValue = input.value.toLowerCase()

    // let newInputValue = inputValue.split("")
    // console.log(newInputValue)

    let newInputValue = inputValue.replaceAll('a', ' .-')
    newInputValue = newInputValue.replaceAll('b', ' -...')
    newInputValue = newInputValue.replaceAll('c', ' -.-.')
    newInputValue = newInputValue.replaceAll('d', ' -..')
    newInputValue = newInputValue.replaceAll('e', ' .')
    newInputValue = newInputValue.replaceAll('f', ' ..-.')
    newInputValue = newInputValue.replaceAll('g', ' --.')
    newInputValue = newInputValue.replaceAll('h', ' ....')
    newInputValue = newInputValue.replaceAll('i', ' ..')
    newInputValue = newInputValue.replaceAll('j', ' .---')
    newInputValue = newInputValue.replaceAll('k', ' -.-')
    newInputValue = newInputValue.replaceAll('l', ' .-..')
    newInputValue = newInputValue.replaceAll('m', ' --')
    newInputValue = newInputValue.replaceAll('n', ' -.')
    newInputValue = newInputValue.replaceAll('o', ' ---')
    newInputValue = newInputValue.replaceAll('p', ' .--.')
    newInputValue = newInputValue.replaceAll('q', ' --.-')
    newInputValue = newInputValue.replaceAll('r', ' .-.')
    newInputValue = newInputValue.replaceAll('s', ' ...')
    newInputValue = newInputValue.replaceAll('t', ' -')
    newInputValue = newInputValue.replaceAll('u', ' ..-')
    newInputValue = newInputValue.replaceAll('v', ' ...-')
    newInputValue = newInputValue.replaceAll('w', ' .--')
    newInputValue = newInputValue.replaceAll('x', ' -..-')
    newInputValue = newInputValue.replaceAll('y', ' -.--')
    newInputValue = newInputValue.replaceAll('z', ' --..')

    newInputValue = newInputValue.replaceAll('1', '.----')
    newInputValue = newInputValue.replaceAll('2', '..---')
    newInputValue = newInputValue.replaceAll('3', '...--')
    newInputValue = newInputValue.replaceAll('4', '....-')
    newInputValue = newInputValue.replaceAll('5', '.....')
    newInputValue = newInputValue.replaceAll('6', '-....')
    newInputValue = newInputValue.replaceAll('7', '--...')
    newInputValue = newInputValue.replaceAll('8', '---..')
    newInputValue = newInputValue.replaceAll('9', '----.')
    newInputValue = newInputValue.replaceAll('0', '-----')

    output.value = newInputValue
}

morse.onclick = () => {
    let inputValue = input.value


    let newInputValue = inputValue.replaceAll('.-', 'a')
    newInputValue = newInputValue.replaceAll('-...', 'b')
    newInputValue = newInputValue.replaceAll('-.-.', 'c')
    newInputValue = newInputValue.replaceAll('-..', 'd')
    newInputValue = newInputValue.replaceAll ('.', 'e')
    newInputValue = newInputValue.replaceAll('..-.', 'f')
    newInputValue = newInputValue.replaceAll ('--.', 'g')
    newInputValue = newInputValue.replaceAll('....', 'h')
    newInputValue = newInputValue.replaceAll('..', 'i')
    newInputValue = newInputValue.replaceAll('.---', 'j')
    newInputValue = newInputValue.replaceAll('-.-', 'k')
    newInputValue = newInputValue.replaceAll ('.-..', 'l')
    newInputValue = newInputValue.replaceAll('--', 'm')
    newInputValue = newInputValue.replaceAll('-.', 'n')
    newInputValue = newInputValue.replaceAll('---', 'o')
    newInputValue = newInputValue.replaceAll('.--.', 'p')
    newInputValue = newInputValue.replaceAll('--.-', 'q')
    newInputValue = newInputValue.replaceAll('.-.', 'r')
    newInputValue = newInputValue.replaceAll('...', 's')
    newInputValue = newInputValue.replaceAll('-', 't')
    newInputValue = newInputValue.replaceAll('..-', 'u')
    newInputValue = newInputValue.replaceAll('...-', 'v')
    newInputValue = newInputValue.replaceAll('.--', 'w')
    newInputValue = newInputValue.replaceAll('-..-', 'x')
    newInputValue = newInputValue.replaceAll('-.--', 'y')
    newInputValue = newInputValue.replaceAll('--..', 'z')

    output.value = newInputValue

}