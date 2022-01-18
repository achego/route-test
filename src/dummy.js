let posts = [
    {
        id: 1,
        title: 'dummyTitle 1',
        author: 'Belema',
        description: 'ete matemz bla mesimedense saedaj dshhs akdhheu matatematema panakana for this plac, we go show them wose boss for this arena, oya na make we show them the way the truthand the light ok',

    },
    {
        id: 2,
        title: 'dummyTitle 2',
        author: 'Joshua',
        description: ' ipsom metete matemz bla mesimedense saedaj dshhs akdhheu matatematema patriki ow them the way the truthand the light ok',
    },
    {
        id: 3,
        title: 'dummyTitle 3',
        author: 'Stanley',
        description: 'lorem ipsom metete matemz bla mesimedense saedaj dshhs akdhheu matatematema patriki llnakana for this plac, we go show them wose boss for this arena, oya na make we show them the way the truthand the light ok',
    },
    {
        id: 4,
        title: 'This is just a dummy title anything really, ',
        author: 'Ifeoma',
        description: 'a patriki llnakana for this plac, we go show them wose boss for this arena, oya na make we show them the way the truthand the light ok',
    },
]

export default posts;

export function findPost(postId) {
    return posts.find(
        post => post.id === parseInt(postId, 10)
    );
}