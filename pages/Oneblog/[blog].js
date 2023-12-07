import { useRouter } from 'next/router'
import React from 'react'
import s from '../../styles/slugs.module.css';
import Image from 'next/image';
const Oneblog = () => {
  const router = useRouter()
  const { blog } = router.query;
  return (
    <>
      <div className={s.ArticleContainer}>
        <div className={s.Items}>
          <div className={s.box1}>
            <h4>Best Deals</h4>
            <h1>Apple Watch Series 9</h1>
            <p>The Ultimate Fusion of Power, Innovation, and Sustainability</p>
          </div>

          <div className={s.box2}>
            <p>At the forefront of smartwatch innovation is the all-new Apple Watch Series 9, a powerhouse of advanced features that redefine the capabilities of wearable technology.</p>
            <div className={s.articleimg}>
              <Image id={s.articleimg} height={980} width={980} src='/applewatchseries9-article.jpg' alt='apple watch series 9' />
            </div>

            <p><strong>Health and Fitness Companion: Empowering Well-Being</strong> As a health and fitness companion, the Series 9 excels. ECG and blood oxygen monitoring, sleep tracking, and cycle insights empower users with comprehensive well-being data. Customizable workout views, Apple Fitness+, and safety features like Fall and Crash Detection make it the ultimate fitness companion.</p>

            <p><strong>S9 SiP: A Chip Like Never Before</strong> Powering this technological marvel is the S9 SiP, Apple's most advanced chip to date. With a dual-core CPU housing 5.6 billion transistors, the Series 9 chip boasts a 60% increase in capabilities compared to its predecessor, the S8 chip. The addition of a four-core Neural Engine processes machine learning tasks at double the speed, introducing a groundbreaking gesture – the double tap.</p>
            <p><strong>2x Brighter Always-On Retina Display</strong> The display takes a significant leap forward with the Series 9. The 2x brighter Always-On Retina display reaches a maximum brightness of 2000 nits, ensuring optimal visibility even in direct sunlight. In low-light situations, such as a movie theater, the display dims to just 1 nit for a comfortable viewing experience.</p>

            <p><strong>IOS 10 Redefined: Sustainability Meets Vision Health</strong> The watchOS 10 update brings a remarkable redesign to apps, offering more information at a glance. The Smart Stack, coupled with widgets, keeps users informed and connected. Apple takes a significant step towards sustainability with its first carbon-neutral product, the Series 9, providing insights into mental and vision health.</p>

            <p><strong>More Than a Watch: A Lifestyle Evolution</strong> With cutting-edge features, innovative design, and a dedication to user well-being, the Apple Watch Series 9 transcends being a mere watch – it's a lifestyle. Experience the evolution of smartwatches and embrace the future on your wrist.</p>

            <div className={s.aboutarticle}>
              <h3>Apple Watch Series 9/configuration</h3>
              <div>
                <table className={s.configtable}>
                  <tr>
                    <td className={s.hoverableCell}>Display</td>
                    <td className={s.hoverableCell}>2x Brighter, Up to 2000 nits</td>
                  </tr>
                  <tr>
                    <td className={s.hoverableCell}>Chip</td>
                    <td className={s.hoverableCell}>S9 SiP, Dual-core CPU, 5.6 billion transistors</td>
                  </tr>
                  <tr>
                    <td className={s.hoverableCell}>Body</td>
                    <td className={s.hoverableCell}>Carbon Neutral, Eco-friendly materials</td>
                  </tr>
                  <tr>
                    <td className={s.hoverableCell}>Battery Life</td>
                    <td className={s.hoverableCell}>Up to 18 hours, Fast Charging available</td>
                  </tr>
                  <tr>
                    <td className={s.hoverableCell}>Fitness & Health</td>
                    <td className={s.hoverableCell}>ECG, Blood Oxygen, Sleep, Cycle Tracking, Fitness+</td>
                  </tr>
                  <tr>
                    <td className={s.hoverableCell}>Network & Connectivity</td>
                    <td className={s.hoverableCell}>Cellular Connectivity, GPS, Wi-Fi, Ultra Wideband</td>
                  </tr>
                  <tr>
                    <td className={s.hoverableCell}>Water Resistant & Memory</td>
                    <td className={s.hoverableCell}>50 meters, Swimproof & Internal 64GB</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div className={s.box3}>
            <div className={s.reasontobuy}>
              <h2>Reason To Buy</h2>
              <p>Article Highlight</p>
              <p>best quality</p>
              <p>best quality</p>
              <p>best quality</p>
              <p>best quality</p>
              <p>best quality</p>
            </div>
            <div className={s.verdict}>
              <p>Our verdict</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Oneblog