
const commit = (userId, repoId) => {
    return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(response => response.json())
}


export function getMostActiveDevs({ days, userId, repoId }) {
    return commit(userId, repoId)
        .then(commitData => {

            const commitCount = countCommit(commitData, days)
                .sort((a, b) => b.count - a.count)

            return commitCount
                .filter(({ count }) => count === commitCount[0].count)
        })
}


const countCommit = (data, daysPast) => {
    const start = new Date().setDate(new Date().getDate() - daysPast)
    const startToEnd = data
        .map(({ commit: { author } }) => author)
        .filter(({ date }) => new Date(date).getTime() >= start)

    const uniq = new Set(startToEnd.map(({ email }) => email))
    return [...uniq]
        .map(commitEmail => {
            const comment = startToEnd
                .filter(({ email }) => email === commitEmail)
            return {
                count: comment.length,
                name: comment[0].name,
                email: commitEmail,
            }
        })
}

getMostActiveDevs({ days: 16, userId: 'facebook', repoId: 'react' }).then(data => console.log(data))
