import { useEffect, useRef, useState } from "react";
import styles from "./form.module.css";

export default function Component({ setShowForm, contact }) {
  const [add, setAdd] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();

  useEffect(() => {
    if (contact.name) {
      fetch(`https://jsonplaceholder.typicode.com/users/${contact.id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: contact.id,
          name: nameRef.current.value,
          email: emailRef.current.value,
          address: {
            city: cityRef.current.value,
          },
          phone: phoneRef.current.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        });
    } else {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          city: cityRef.current.value,
          phone: phoneRef.current.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())

        .then((json) => {
          console.log(json);
        });
    }
  }, [add, contact.id, contact.name, setShowForm]);

  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <h1 className={styles.title}>Contact Information</h1>

        <div className={styles.field}>
          <label>Name: </label>
          <input
            classname={styles.input}
            type="text"
            ref={nameRef}
            placeholder={contact.name}
          />
        </div>

        <div className={styles.field}>
          <label>Email: </label>
          <input
            classname={styles.input}
            type="email"
            ref={emailRef}
            placeholder={contact.email}
          />
        </div>

        <div className={styles.field}>
          <label>Phone No:</label>
          <input
            classname={styles.input}
            type="text"
            ref={phoneRef}
            placeholder={contact.phone}
          />
        </div>

        <div className={styles.field}>
          <label>City: </label>
          <input
            classname={styles.input}
            type="text"
            ref={cityRef}
            placeholder={contact.address.city}
          />
        </div>

        <div className={styles.btn}>
          <button
            type="button"
            className={styles.update}
            onClick={() => setAdd(true)}
          >
            {contact.name ? "Update" : "Add"}
          </button>
          <button
            type="button"
            className={styles.close}
            onClick={() => setShowForm(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
