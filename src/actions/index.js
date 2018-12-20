import {db} from '../config';

// Name of the collection
const collection = 'todos';

// Get Todo Doc Data
const getDoc = (id) => {
    db.collection(collection).doc(id).get()
        .then(doc => {
            if(doc.exitst){
                return console.log(`%c Todo with ID ${id} found`, 'color: green')
                || doc.data()
            }else{console.log(`%c Todo with ID ${id} not found`, 'color: red')};
        }).catch(err => console.error(`Error getting the todo: ${err}`))
};

// Add Todo in DB
const addTodo = (todo) => {
    db.collection(collection).add(todo)
    .then((docRef) => console.log(`%c Document with ID ${docRef.id} added`, 'color: green;'))
    .catch(err => console.error(`Error adding Todo: ${err}`));
};

// Get all todos
const getAll = async () => {
    let snapshot = await db.collection(collection).get()
    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
};

// Edit todo
const editTodo = (newDoc, callback) => {
    let id = newDoc.id;
    db.collection(collection).doc(id).set(newDoc)
    .then(() => {
        callback();
        console.log(`%c Document with ID ${id} added`, 'color: orange;');
    }).catch(err => console.error(`Something went wrong: ${err}`))
};

// Remove document
const removeTodo = (id, callback) => {
    db.collection(collection).doc(id).delete()
        .then(() => {
            callback();
            console.log(`%c Document with ID ${id} removed`, 'color: red;');
        }).catch(err => console.error(`Something went wrong: ${err}`))
};

const stopListeningDB = () => {
    db.collection(collection).onSnapshot(() => console.log('%c No long listening Firestore DB', 'color: red'));
};

const listenDB = (callback) => {
    db.collection(collection).onSnapshot(snapshot => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log(`%c New ToDo added: ${change.doc.id}`, 'background: green; color: white');
            }
            if (change.type === "modified") {
                console.log(`%c ToDo ${change.doc.id} modified`, 'background: orange; color: white');
            }
            if (change.type === "removed") {
                console.log(`%c ToDo deleted: ${change.doc.id}`, 'background: red; color: white');
            }
        });
        callback();
    })
};

//Delete all collection
const deleteAll = (todos) => {
    todos.map(todo => db.collection(collection).doc(todo.id).delete());
};

export const dbActions = {
    getDoc,
    addTodo,
    editTodo,
    removeTodo,
    getAll,
    stopListeningDB,
    listenDB,
    deleteAll,
};