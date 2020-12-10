import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// build custom side bar
export default function sidebar() {
  return S.list()
    .title(`kevs clothing`)
    .items([
      // create new sub item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>⚙</strong>)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // make a new document ID, sobwe dont hv a random string of numbers
            .documentId('downtown')
        ),
      // add rest of upor original document items
      ...S.documentTypeListItems() /* .filter(
        (item) => item.getId() !== 'storeSettings'
      ), */,
    ]);
}
