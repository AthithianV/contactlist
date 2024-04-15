import { useEffect, useState } from "react";
import styles from "./table.module.css";

export default function Table({ setShowForm, setContact }) {
  const [contacts, setContacts] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((cont) => {
        setContacts(cont);
      });
  }, []);

  return (
    <div className={styles.main}>
      <h1 style={{ textAlign: "center" }}>Contacts</h1>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>City</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {contacts &&
            contacts.map((c, index) => (
              <tr key={index}>
                <td className={styles.serial}>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.address.city}</td>
                <td
                  className={styles.edit}
                  onClick={() => {
                    setContact(c);
                    setShowForm(true);
                  }}
                >
                  <img
                    className={styles.icon}
                    src="https://cdn-icons-png.flaticon.com/128/2355/2355330.png"
                    alt="Edit"
                  />
                  &nbsp;Edit
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className={styles.btnContainer}>
        <button
          className={styles.btn}
          onClick={() => {
            setContact({ address: {} });
            setShowForm(true);
          }}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
}
