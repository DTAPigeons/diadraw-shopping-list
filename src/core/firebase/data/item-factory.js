import { functions } from "firebase";

export function createShoppingListCollectionFromDatabaseEntries(entries) {
    const collection = [];
    Object.entries(entries).forEach(entry =>{
        collection.push(createShoppingListItemFromDatabaseEntry(entry))
    });
    return collection;
}

export function createShoppingListItemFromDatabaseEntry(entry){
    const catalogItem = createCatalogItemFromDatabaseEntry(entry);
    return {
        ...catalogItem,
        bought: entry[1].bought
    };
}

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

