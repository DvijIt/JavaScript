export function bind(func, context) {
    let bindArgs = [].slice.call(args);
    return function() {
        let funcArgs = [].slice.call(args);
        return func.apply(context, bindArgs.concat(funcArgs));
    };
};