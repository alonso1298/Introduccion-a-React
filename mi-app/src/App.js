import Button from "./Button";

const arr = [
    'Gtito feliz',
    'Gatito Triste',
    'Gatito normal'
]
const App = () => {
    const miVariable = false;

    if (miVariable) {
        return <p>Mi variable dio True</p>
    }
    return(
        <div>
            <h1 onClick={(e) => console.log('Click', e)}>Hola mundo</h1>
            {arr.map(gatos => <p key={gatos}>{gatos}</p>)}
            <Button onClick={() => console.log('Clickeado')}>
                Enviar
            </Button>
        </div>
    )
}

export default App