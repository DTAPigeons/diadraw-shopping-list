export function createCatalogItemCollectionFromDatabaseEntries(entries){
    const collection = [];
    Object.entries(entries).forEach(entry => {
        collection.push(createCatalogItemFromDatabaseEntry(entry));
    });
    return collection;
}

export function createCatalogItemFromDatabaseEntry(entry){
    return {
        name: entry[1].name,
        id: entry[0]
    }
}