"use server";
import { addUser } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css';

const AddUser = async () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          placeholder="username"
          name="username"
          className={styles.input}
          autoComplete='off'
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          autoComplete='off'
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          autoComplete='off'
          className={styles.input}
          required
        />
        <input
          type="number"
          placeholder="phone"
          name="phone"
          className={styles.input}
        />
        <select name="isAdmin" id='isAdmin'>
          <option value={false}>Is Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id='isActive'>
          <option value={true}>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea name="address" id='address' placeholder="Address" rows="16"></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
