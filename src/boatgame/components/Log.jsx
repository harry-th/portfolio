const Log = ({ messages }) => {
    return (
        <div>
            {messages.map((item) => {
                return <p key={item}>{item}</p>
            })}
        </div>
    )
}
export default Log