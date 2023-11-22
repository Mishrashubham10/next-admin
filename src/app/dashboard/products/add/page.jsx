import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css';

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="title"
          name="title"
          className={styles.input}
          required
        />
        <select name="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="bike">Bike</option>
        </select>
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea name="desc" placeholder="Description" rows="16"></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
