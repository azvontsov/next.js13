import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let&apos;s keep in touch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <button url="#" text="send" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
