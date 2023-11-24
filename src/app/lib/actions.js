'use server';

import { revalidatePath } from 'next/cache';
import { connectToDB } from './utils';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { Product, User } from './model';
import { signIn } from '../auth';

// CREATING USER
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    // Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create user!');
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};

// CREATING PRODUCT
export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create Product!');
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

// DELETE PRODUCT
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete Product!');
  }

  revalidatePath('/dashboard/products');
};

// DELETE USER
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete User!');
  }

  revalidatePath('/dashboard/users');
};

// UPDATE USER
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) => updateFields[key] === '' || undefined
    ) && delete updateFields[key];

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to update user!');
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};

// UPDATE PRODUCT
export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) => updateFields[key] === '' || undefined
    ) && delete updateFields[key];

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to update product!');
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

// LOGIN
export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return "Wrong Credentials!";
  }
};