export function findItemById(items, id) {
    // ilk olarak ana dizindeki ogeleri kontrol et
    let foundItem = items.find((item) => item.id === id);

    // eger ana dizinde bulunmazsa alt ogeleri kontrol et
    if(!foundItem) {
        items.some((item) => {
            if(item.subitems && item.subitems.length > 0) {
                foundItem = findItemById(item.subitems, id);
                return foundItem != null;
            }
            return false;
        });
    }
    return foundItem;
}