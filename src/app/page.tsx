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
        <br/><br/>
        <p>
          The most fundamental unit of data on the internet is the bit, which is
          a binary digit that can take on one of two states, usually represented
          as 0 and 1. These bits are encoded into electrical or optical signals
          that can be transmitted over various mediums. <br />
          <br />
          Let's start with how the Internet uses electricity. In the case of
          wired connections such as Ethernet cables, data is transmitted as
          electrical signals. These signals are modulated to represent the
          binary data. For example, a high voltage might represent a '1', and a
          low voltage might represent a '0'. The receiving device then decodes
          these signals back into digital data. <br />
          <br />
          However, electrical signals are prone to degradation over long
          distances, especially in copper-based transmission mediums like
          traditional Ethernet cables. That's where light comes in.
          <br />
          <br /> Fiber optic cables, which are a common medium for high-speed
          Internet connections, use light to transmit data. Inside each fiber
          optic cable are many strands of glass or plastic, each thinner than a
          human hair. These strands act as waveguides for light signals. Here's
          how it works: a device called a transmitter converts electrical
          signals (the bits of data) into pulses of light. These light pulses
          are then sent down the fiber optic cable. The inside of the fiber is
          designed to keep the light trapped, allowing it to travel long
          distances with very little loss. This is achieved by a process called
          total internal reflection. The light bounces off the walls of the
          fiber, continuing on its path without escaping. At the receiving end,
          another device called a receiver converts these light pulses back into
          electrical signals, which are then interpreted as data. The advantage
          of using light over electricity is that it can carry more information
          and over much longer distances without significant loss or
          degradation. <br />
          <br />
          In wireless connections, such as Wi-Fi or cellular networks, data is
          usually transmitted via radio waves, which are a form of
          electromagnetic radiation, just like light. These waves are created by
          oscillating electric and magnetic fields, so electricity is still
          involved in their generation. In summary, the Internet utilizes a
          combination of electricity and light to transmit data across vast
          networks. Electrical signals are used in wired connections and in the
          generation of radio waves for wireless connections, while light
          signals transmitted through fiber-optic cables allow for high-speed,
          long-distance data transmission.
        </p>
      </section>
    </main>
  );
}
