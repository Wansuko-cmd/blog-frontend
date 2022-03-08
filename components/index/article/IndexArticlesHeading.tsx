interface IndexArticlesHeadingProps {
    text: string
}

const IndexArticlesHeading = (props: IndexArticlesHeadingProps) => {
    return (
        <>
            <div className='text-4xl'>
                {props.text}
            </div>
        </>
    )
}

export default IndexArticlesHeading
