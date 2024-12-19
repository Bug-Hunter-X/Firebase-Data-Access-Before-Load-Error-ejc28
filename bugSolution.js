To fix this issue, always handle the promise returned by the `get()` method using `.then()`. This ensures that the data is fully loaded before you attempt to access any of its properties.

```javascript
db.collection('myCollection').doc('myDoc').get().then(doc => {
  if (doc.exists) {
    const data = doc.data();
    console.log(data.myField); // Access properties safely here
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```