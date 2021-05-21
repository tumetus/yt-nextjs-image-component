import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import OwnImage from '../components/Image/Image';

export default function Home() {
  return (
    <div>
      <OwnImage src="/vercel.svg" alt="Vercel logo" layout="fill" maxWidth="500px" />
    </div>
  )
}
