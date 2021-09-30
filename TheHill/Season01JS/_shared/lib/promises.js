

((ns, utils) => {
    ns.wait = delay => new Promise(resolve => setTimeout(resolve, delay));

    ns.getPosts = () =>
        ns
            .wait(1000)
            .then(() =>
                Promise.resolve(
                    Array.from(new Array(utils.getRandomInt(5, 10)).keys()).map(
                        id => ({id, ...utils.generatePost()}),
                    ),
                ),
            );

    ns.getComments = () =>
        ns
            .wait(200)
            .then(() =>
                Promise.resolve(
                    Array.from(new Array(utils.getRandomInt(5, 10)).keys()).map(
                        id => ({id, ...utils.generateComment()}),
                    ),
                ),
            );

    ns.getPersons = () =>
        ns.wait(1000).then(
            () =>
                new Promise((resolve, reject) => {
                    if (Math.round(Math.random())) {
                        reject(new Error("Bad luck!"));
                        return;
                    }
                    resolve(
                        Array.from(
                            new Array(utils.getRandomInt(5, 15)).keys(),
                        ).map(id => ({id, name: utils.generateName()})),
                    );
                }),
        );
})((window.lib = {}), utils);
