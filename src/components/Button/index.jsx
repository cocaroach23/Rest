function Button(props) {

    const { title, onClick } = props
    return(
        <button onClick={onClick} className="mx-10 bg-yellow-700 rounded-lg text-xxl text-white px-4 py-2 shadow-md">
            {title}
        </button>
    )
}

export default Button