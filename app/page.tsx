import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HELLO!</h1>
      <p>It's me Home page</p>
      <Link href="/about">About</Link><br />
      <Link href="/contactUs">Contact Us</Link><br />
      <Link href="/service">For Service</Link>
    </div>
  );
}
