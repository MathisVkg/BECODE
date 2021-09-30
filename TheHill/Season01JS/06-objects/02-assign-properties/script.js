//06-objects/02-assign-properties/script.js - 6.2: assign properties


(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var a = 0;
        while (a < computers.length) {
            if (computers[a].available == undefined) {
                computers[a].available = defaultProps.available;
            }
            if (computers[a].os == undefined) {
                computers[a].os = defaultProps.os;
            }
            if (computers[a].users == undefined) {
                computers[a].users = defaultProps.users;
            }
            a++;
        }
        console.log(computers);
    });
})();
