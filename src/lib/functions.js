const getLodges = async () => {
    try {
        const response = await fetch('/logements.json');
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}

const setPageTitle = (value) => {
    document.title = `Kasa - ${value}`
}

export {
    getLodges,
    setPageTitle
}
