interface ArticleResponse {
    id: string
    thumbnail_path: string | null
    title: string
    body: string
    good_count: number
    created_at: string
    modified_at: string
}

export default ArticleResponse
