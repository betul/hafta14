import useVericek from "./hooks/useVericek"

function Kisi() {
    const [veri] = useVericek("https://jsonplaceholder.typicode.com/users/1")

    return (
        <>
        {veri && <p>Ad Soyad: {veri.name} Şehir: {veri.address.city}</p>}
        </>
    )
}

export default Kisi