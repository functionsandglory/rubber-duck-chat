const delay = (delay: number):Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};

export default delay;