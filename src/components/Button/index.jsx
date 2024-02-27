function Button(props) {

    const { title } = props
    return(
        <button className="mx-10 bg-gray-500 rounded-lg text-xxl text-white px-4 py-2 shadow-md">
            {title}
        </button>
    )
}

export default Button