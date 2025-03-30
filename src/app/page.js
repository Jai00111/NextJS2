import Link from "next/link"

export default function Home() {
  return (
    <>
        <h1>This is the Main Page</h1>
        <Link href={"/productlist"} style={{color:"blue"}}> Go to Product list</Link>
    </>
  );
}
