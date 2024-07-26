import { useState } from 'react'
import Masonry from 'react-masonry-css';
import './MasonryGrid.css'

export default function Photography() {

  const [enlarged, setEnlarged] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const imgArr = [
    {
      id: 1,
      content: 'https://uce8a9fbf607d9f906ad2536871c.previews.dropboxusercontent.com/p/thumb/ACWX9DZWOP_LtADHExDix5tqoshzmZRcyEHKTqZsUJOyvkSkQjeCX0MMLePqnah3DZkctSC6xxzjUTG7GCAi3DfcWBO4nexn58FSLgKHmllhbcfX1ZD_7D6O5JW5aPCpnNGcGwXL_KXS4SdAwNGSoFmBagmN2YZuFAvf9JZlBDsUZ0EIaFUoNaxVr-Gb_n_pBDwMYBc20VJMBNW-mk3OItkJ_TeD9B4DAV5AyeXhlPcYDv21RFoU1ojwyWeC3FdmD2wc73rxybyySnzht-w-WBp8_LV03x-lobP7viufXrd_x2FXs2DFJAWhjd-2j8fFy8vAIbBfu3IRFsC1V0Axo_OcRgchAlbK4aY4GbEN4aby2LJ5xhVAIZMbu_caESNS3zfx6-sQHpgws-9_KItSTzSHICFsauNeP9EyQ3paOkyWXbZaXEc5rsl5t2EJqWIPZcnOL4H0mjKmxGcdr-inzlqcnRTc50nedhiTrzbSpU0iboqivKp2Rf2-PkCq5lN_mFQ/p.jpeg?is_prewarmed=true'
    },
    {
      id: 2,
      content: 'https://ucbaf9e18212b23f7b45fcf14519.previews.dropboxusercontent.com/p/thumb/ACW1bOd3qvRk39PhlJqBp5qWACGJAp2aoEARsEFpMJ6BZOSNZTb7B7n7mdeCjs-HRk8E6CN7FdL4kAQnnbprPAt45gXDqeV71LocMGye-opBiWO1jbAxO2xWPq9KXQ9UMTapeN6UDUPXltl_35Pwtpd8fwHVrGbb4DFcjTZCsVN3FBexECJGiGn9IJcLGG6b5xGAxOaw9wFCzV7umGq7_mUp2kB_eSBUJki0X_QEYngVchLcZsfw8yUKBgW1nj85xh4xpWFbdN-eL0POa3vBRrlD-L2iaDftD2zxhD1gwSzrjTSVmGHo436h4GFWrgdo1oPy1zpVoByAX_OEQqqe9fXcSGDEfYXqnAZEgyXH-OzrgJs_RH8pR-L-zaiGPKrReRNDbspd6IS_Deu8l0Q7MVnRrKwThn-Q_Sb6CU1eRFDYGo-MfC0bJ_UsF039cEOs_qIbSkRHQ6iW9inguXBp_dqknbA0RcaI3OX-EtPX-SGmJtZCddwfGaFqvVFqNNM2_rQ/p.jpeg?is_prewarmed=true'
    },
    {
      id: 3,
      content: 'https://uc80424f8d3b9abd78002a453219.previews.dropboxusercontent.com/p/thumb/ACXfSfUWpDay8BVX2ZLLUDbwvssjQHOsA7hVQju3En-3iV_hy07N3eWEirC_ZmKITaF4IgtUcj5p9sDEv1Tb_yDvgb_mOtYv2htyF-sZoGwu95eSL7ywwJCM-9iQNnb7t4N_sDNYplHa7blVga6REgAgxihTTuRO9YsFKtmNYUI6FwVuvDL_7gHm9mSjoLX2Oa_hewzxZ7iXa9Km-FdUyTJAkpwF9OtFs3vuEUMEdulovzazKrQ9VGTC9bH8ydTUBZOhfMogIpwRQdTiDcI0vOEKvXAir13oUzGyFt9YH5NYgyvBibnhFUm0oc9mi4M4naYVGaJBUsKHp1lY8qnxY6vCyju18BxrM9C2iMNWwB6U_LKxwyHRPsU1OoLDjdmPrZfbjykdr4SkBokETbsx3lWMJEpQhhHKfHWp3PHO0WCSQe9gKj9ky7UkwLCfCccB3Eh0OiNvgCUebZA8QYrzQyaWhdeClX__Xp_4UnJcoDEh5weXbFnwqbl8vDI9nLJU0nHu_H7SsWF9FRFMrxo5Pc_scq1mTltCObjKnGVbNGBj3PeObOCLnTxlhPyDm4q9Zps/p.jpeg?is_prewarmed=true'
    },
    {
      id: 4,
      content: 'https://uc1e1a5ddec9c5cab65daf153238.previews.dropboxusercontent.com/p/thumb/ACXCad3-2BNJCZ6q3PtUjJKo6OZ9eAnPPWviChjbt-Y0dafmd67ATl3Ni4Xq7ak-Li314rLdB_XW3xYt2nntqcvRJfl3YqXatVAV2h0UC1kWktLbw8Di--oIVRxbKbGDTVit0UXCyisCg2HHEU-LHLIAEsL08hO6YaRcx2YSiPJy3ZXTmxVjqaxin5c75oAP6nOnmE6CnsdWHkkS3M0kdlzuNfbxaj_H7zFNCXBlseALgpf17fPr-blZFAigmAxL628HmjZWGM0L-Hp2az8ShxxXc_kZYX5qTthaj_m6YL_Oz-lt_X9yk1m-ssdFfovqMUbF02T5apt0zfy_1Dv-PlPuBlGD84JP065cuSQfPR1BoU6Wf6zz__WrzWCkGTlbK1kbHBQ-FrKu6p4_JicWsSIlq4nir8iBXPwvieftW3cAscDp0SOlZdqdWnZMS-YcFzs/p.jpeg?is_prewarmed=true'
    },
    {
      id: 5,
      content: 'https://uc9e158e1f1a72b0d40649f54598.previews.dropboxusercontent.com/p/thumb/ACWqwdHrddeHn6HCW5HbMrEti_AdqkKOrjaW_tT8nH1OqoWpNH-rcb7WXm7LY4s4z_zSOisNM57Kb-JaTt_ZB46wjj8Ow3WchFYlG8MhbLInpJn8O0WpBQfG6OW0UhpCsO5Vr-UrBjP2ZWPtlH8XwnbBzHkE9h_Hts0vGAnHi2_v6m-PCm5FuMP3br-E33MM6Fbi_BjInWT656G9q70i74nBEbJF-lPkAbtrPf8RnBd-MIwVvoPQRj0bsFq8CAr_EM3Vfvx1AM1AJyDVJVB7g6icQ71G-OD29vn8PZNGlEunQF9tF0pD-XwK2mrQSR3aqBogfwtSz3j7vXSsxp-KHA8v8AVqUUHwTyOC_BL7KsQhyHNihZvng5DcUksY5TStQKqpo1Bvdh8sjy8U4u8W2r2z/p.jpeg?is_prewarmed=true'
    },
    {
      id: 6,
      content: 'https://uc402d5b05029010ec6dff2e2c90.previews.dropboxusercontent.com/p/thumb/ACXlfRpbAwFju4tAxl7otda6mG_F8LivdHK2r1mAZDhbtMPckiujfnaDu_C8cOg_UArJqX-fdPobVofarK72C5bcV3POsHxmvbVbMCSVySd050uGgo_3XDdCaMe_g05J9Xu93B9L5ZnrVDUvFyx5iXMzrxvA8gANzzjsVFsPGuy67QhFUnTsmodAoj-DmjLnDdaL7TpQ4_xXoWBcHEbX5eGaJyMFbiVsjTLsRRwKdNjUDCVlPm0OC00w6SXeCYddN3XncBnVJRhvzjqcZlkhJl-SwTQzPD2jJoebwhDnr4bmAR1XfAEi6C-3r8D2RVpPOra-egJ-nie6DpPHDNNj4nat7kE795zhZkn9pMo3RQcx-RZmbpOhFWPccIy2Ej0NSl6tr8nSatyyD0nzeon5MxYw/p.jpeg?is_prewarmed=true'
    },
    {
      id: 7,
      content: 'https://uca6aa2db670409019dbb91e2464.previews.dropboxusercontent.com/p/thumb/ACXtShk_nO4dN3sR2VPEzi3XgSCuZp4ahXTsbfzIHRMqr_0Tclh3is46Htb0NrZJ3WTJYFCneVWKd9uOBGyYslIIcJZy1F17D48VF8dRvuO8Hk099KkfkRK0pIB_SKckqpv6YeK4nNrUHto4pXRakAJVsSZsSD1AuuRzxSikjelowEggiwQmKupyoErOL8GLL94ZpRq_vPEJXWudp7zlGU2mNbuqZPKmMLrfdmlrOvTPW6lsPO-1rVEutR5pYTczxn0NbteayNXNzGn9YqK3co6olxrYuyKXb8BOoJazzy7OiZt8hkXDgv-qiUQuw1k7xnklXEpwJBmL4HlUD1YBu-2rLT7xe1wrSr1o8-5kCbXz9X-cBts1rrZAgJm14R1mZ2RleyzSRTOv28__nSHQoHlGDnOa1cMMG2hK909TxwH___9gwbpjdY-MgobPaPmeNOTkZVfX3gRYS3E1d6F1bbNr/p.jpeg?is_prewarmed=true'
    },
    {
      id: 8,
      content: 'https://uc1bfe78c4cd72a56a97c94ad8e7.previews.dropboxusercontent.com/p/thumb/ACXSMib-E3hXKDkcf_HQ1f3sbOVd3yPPgaN3XVciTpcouSo1qWa3G7gQUrOEELPMBIIU8bBDsilbT6CCpIC3CqAgNk2Hog897ZnqVAuFTZ5U3pGkFDJLeExpWWyB-_G75FfDw8_gPL7LwZtRIau8aIeJA2mQcuhzyuj9BenKJ-bXUELRDkf_JzPKSoXvwdqMX_DGi2sFFQI1oKx3Ce6bPc7tNDnJ03tuOP5JjyixUkvUhqh4N4OgJJ414lyLixmemnBYGPSURRtTUXHlRGLW3xB4UDU4Oj9Ly8O0ahazEX2eU_ajXaApsUP-k0Oi79D-Re2fMQo3qDm1CL3Iwg7XF8-8RomcPmNtnJshnqcvauGUgOPc49opL6e_PDH8tjqNsGpbSPKemiWfYM2TKoLrA5nE/p.jpeg?is_prewarmed=true'
    },
    {
      id: 9,
      content: 'https://uc036fd3866cb204402896a6d372.previews.dropboxusercontent.com/p/thumb/ACX7J9HkZzveAW1LpHggVSokJaE6-HoX4L1ktmtq1zXoE41eocTC4dOs1uLZM3aQVE25VOJ2YKZvRWEThmTiuCFxedC7KUS98EfKE2Uw_1tJoEU0QQsy-9KOIimJyKdlY5j__kOohlbAqPZkzBnalz1UMoiGfSwWw3hIbSBcf7eYZ0y2he8SvlzlfvxsjRGPQGN_HO4OM1TqnO4gUJCqAT2eLyQngSvN_QDjRYR2QG42aCheQAzQwbHs-llFinBYMAIf3atzQng8D5qujrOJXsBihRtewTbiEnaAgJwwxPF9g6GCh-pEg9iDoQktw01IFAovYBiyXq5OTGmPF4wGZsJQl8G5VwWXSqh5Ygxr75I-6eKI_FC4mGi6YDCyYoWz_PSCTICmv3iR_C2cpQyTnJXK/p.jpeg?is_prewarmed=true'
    },
    {
      id: 10,
      content: 'https://uc02dfd264c3f467f67782fa242d.previews.dropboxusercontent.com/p/thumb/ACWga_X4EprQnson3H80ZvYyhNXBLjlI2JwP3ldfe_jEpsrnfdhchqscdELT0rlQhg70Ygu4UoghB3u2Yukj2yO_TPxIeK1kjxvQy4zTmQu-8pOXaCUvd4JbtLy9jO1zLiEt0Q_jvFWdkArvWDXxYhH-AWzzQc_b98ilU4a9679-YAT-ElTebEjDOiA9N9AUP0gD27S96fxByQkQ6q_iXZmYU0yVb0C_mJ3UrUbR9y6OpPz_tX3LSIByqnJcxoWmct4NTlxjcpE806FbE9q49aiPykdxiE5JWXVAJc2lR4Raz1b7nYvGHUVd4p0G8WqE6h5aTxDG5z1sQvXkCVATR2euW-XFeYQ0jcMTpILWIsj6gNqkn6wwEx3mUZJ2RZ2KKLx9m_WuJMAkmqeO1lf2qIIC/p.jpeg?is_prewarmed=true'
    },
    {
      id: 11,
      content: 'https://consequence.net/wp-content/uploads/2017/03/radiohead-cat-miller-69-of-146.png'
    },
    {
      id: 12,
      content: 'https://consequence.net/wp-content/uploads/2017/05/kendrick-lamar-by-catlin-miller4.jpg'
    }

  ]


  const handleClick = (id) => {
    if (id === enlarged) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
        setEnlarged(null)
      }, 500)
    } else {
      setEnlarged(id === enlarged ? null : id)
    }
    
  }

  const breakPoint = {
    default:3,
    1100: 2,
    700: 1
  }

  const items = imgArr.map((img) => (

    <img
      key={img.id}
      src={img.content}
      onClick={() => handleClick(img.id)}
      className={`masonry-item`}
      width='50%'
    />

  ));



  return (
    <div className="App">
      <Masonry
        breakpointCols={breakPoint}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {items}
      </Masonry>
      {enlarged && (
        <div className={`overlay ${enlarged ? 'show' : ''}`} onClick={() => handleClick(null)}>
          <img height={'35%'} src={imgArr.find(img => img.id === enlarged).content} alt="enlarged" className={`overlay-content ${isAnimating ? 'hide': 'show'}`} />
        </div>

      )}



    </div>
  )
}
