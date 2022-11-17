export function Eventos() {
    
    function pegaInput(){
        console.log(event.target.value)
    }

    return (
        <form>
            <input placeholder="Input do EVENTOS: " onChange={pegaInput} />
        </form>
    )
}