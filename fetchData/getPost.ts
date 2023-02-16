import data from '../data.json'

export async function getPost() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return data.posts
}
