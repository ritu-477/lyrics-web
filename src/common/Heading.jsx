const Heading = ({ classStyle, text}) => {
    return (
        <h2 className={`${classStyle} leading-custom-3xl text-5xl font-semibold max-lg:text-4xl max-lg:text-center max-sm:text-3xl max-lg:mx-auto`}>{text}</h2>
    )
}

export default Heading