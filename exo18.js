function waitDeuxSecondes() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("La promesse a été résolue après 3 secondes.");
        }, 3000);
    });
}


async function waitForPromise() {
    
    const result = await waitDeuxSecondes();

    
    console.log(result);
}


waitForPromise();
