export const getContactsItems = state => state.contacts.items;

export const getContactsFilter = state => state.contacts.filter;

export const getFiltredContacts = state => {
    const items = getContactsItems(state);
    const filter = getContactsFilter(state);
    if (items.length !== 0) {
            return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        }
}