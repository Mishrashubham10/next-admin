import { updateProduct } from '@/app/lib/actions';
import { fetchProduct } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

const SingleProduct = async ({params}) => {
  const {id} = params;
  const product = await fetchProduct(id)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={product.img || "/noproduct.jpg"} fill alt="" className={styles.image} />
        </div>
        {product.name}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}>
          <input type="text" name='id' value={product.id} />
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Title.." />
          <label htmlFor="price">Price</label>
          <input type="number" name="price" placeholder="$33.00" />
          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" placeholder='32' />
          <label htmlFor="color">Color</label>
          <input type="text" name="Color" placeholder="red" />
          <label htmlFor="size">Size</label>
          <textarea name="size" id="size"></textarea>
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" placeholder='Description'></textarea>
          <button className={styles.button} type='submit'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
