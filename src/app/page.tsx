import Image from "next/image";
import styles from "./page.module.css";
import MultiSelect from "../../components/multi-select";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>multi select</h1>
        <br></br>
        <MultiSelect></MultiSelect>
        <h1>more content bullshit here</h1>
      </section>
    </main>
  );
}
