const getLodges = async () => {
    try {
        const response = await fetch('/logements.json');
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}

export {
    getLodges
}
