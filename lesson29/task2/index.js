const favorit = ['id-6', 'id-17'];

const tree = {
    id: 'id-1',
    name: 'Product',
    nodes: [{
            id: 'id-2',
            name: 'Food',
            nodes: [{
                id: 'id-6',
                name: 'Drink',
                nodes: []
            }]
        },
        {
            id: 'id-17',
            name: 'Venicle',
            nodes: []
        }
    ]
}

export const markFavorites = (tree, favorit) => {
    const isFavorite = favorit.includes(tree.id);

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorit))
    }
};
