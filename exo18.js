function waitDeuxSecondes() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("La promesse a été résolue après 2 secondes.");
        }, 2000);
    });
}


async function waitForPromise() {
    
    const result = await waitDeuxSecondes();

    
    console.log(result);
}


waitForPromise();
