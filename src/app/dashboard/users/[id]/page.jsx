import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';

const SingleUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" fill alt="" className={styles.image} />
        </div>
        Shubham Mishra
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Shubham Mishra" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="shubham@gmail.com" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <label htmlFor="phone">Phone</label>
          <input type="number" name="Phone" placeholder="+1234567" />
          <label htmlFor="address">Address</label>
          <textarea name="address" id="address" placeholder="Mumbai"></textarea>
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className={styles.button} type='submit'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
