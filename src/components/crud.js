import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

function FirebaseFirestore() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [id, setId] = useState('');
  const [show, setShow] = useState(false);
  const [val, setVal] = useState([]);
  const value = collection(database, 'demo');

  const getData = async () => {
    const dbVal = await getDocs(value);
    setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getData();
  }, [value]); 

  const handleCreate = async () => {
    await addDoc(value, { name1: fname, name2: lname });
    setFname('');
    setLname('');
    getData();
  };

  const handleDelete = async (id) => {
    const deleteVal = doc(database, 'demo', id);
    await deleteDoc(deleteVal);
    getData();
  };

  const handleEdit = async (id, name1, name2) => {
    setFname(name1);
    setLname(name2);
    setId(id);
    setShow(true);
  };

  const handleUpdate = async () => {
    const updateData = doc(database, 'demo', id);
    await updateDoc(updateData, { name1: fname, name2: lname });
    setShow(false);
    setFname('');
    setLname('');
    getData();
  };

  return (
    <div className='container mt-4'>
      <div className='mb-5'>
        <input
          className='form-control mb-2'
          placeholder='First Name'
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          className='form-control mb-2'
          placeholder='Last Name'
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        {!show ? (
          <button className='btn btn-primary' onClick={handleCreate}>
            Create
          </button>
        ) : (
          <button className='btn btn-success' onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>

      <div className='mb-5'>
        <h2>Data List</h2>
        {val.map((values) => (
          <div className='mb-4' key={values.id}>
            <div>
              <h5>{values.name1} {values.name2}</h5>
            </div>
            <div>
              <button className='btn btn-danger me-2' onClick={() => handleDelete(values.id)}>
                Delete
              </button>
              <button className='btn btn-warning' onClick={() => handleEdit(values.id, values.name1, values.name2)}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirebaseFirestore;
